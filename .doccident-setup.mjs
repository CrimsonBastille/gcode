import { transform } from '@babel/core';
// eslint-disable-next-line import/extensions
import * as gcode from './dist/index.js'; // Adjusted path

const mockProcess = {
    argv: ['node', 'test'], // Default argv
    stdout: {
        write: () => { }, // Mock stdout.write
    },
    stderr: {
        write: () => { }, // Mock stderr.write
    },
    exit: () => { },    // Mock process.exit
};

export default {
    "globals": {
        'process': mockProcess
    },
    "require": {
        '@nebulaglitch/gcode': gcode, // Adjusted key and value
    },
    transformCode: (code) => {
        const getBlocks = (originalCode) => {
            const lines = originalCode.split('\n');
            let importLines = [];
            let mainLines = [];
            let inImportSection = true;

            for (const line of lines) {
                const trimmedLine = line.trim();
                if (inImportSection) {
                    // Keep import, export, comments, and empty lines in the import block
                    if (trimmedLine.startsWith('import ') ||
                        trimmedLine.startsWith('export ') ||
                        trimmedLine.startsWith('//') ||
                        trimmedLine === '') {
                        importLines.push(line);
                    } else {
                        inImportSection = false;
                        mainLines.push(line);
                    }
                } else {
                    mainLines.push(line);
                }
            }
            return {
                importBlock: importLines.join('\n'),
                mainCodeBlock: mainLines.join('\n')
            };
        };

        const { importBlock, mainCodeBlock } = getBlocks(code);
        let codeForBabel = code; // Default to original code

        const trimmedMainCode = mainCodeBlock.trim();
        // Only wrap if 'await' is present in the executable part of the main code block.
        if (mainCodeBlock.includes('await') && trimmedMainCode !== '' && !trimmedMainCode.startsWith('//')) {
            let wrappedMainCode = trimmedMainCode;
            // Avoid double-wrapping an already existing async IIFE
            if (!(trimmedMainCode.startsWith('(async () => {') && trimmedMainCode.endsWith('})();'))) {
                wrappedMainCode = `(async () => {\n${trimmedMainCode}\n})();`;
            }

            // Reconstruct the code
            if (importBlock.trim() === '') {
                // No substantial import block, so the code is just the wrapped main part.
                codeForBabel = wrappedMainCode;
            } else {
                // We have a non-empty import block.
                // Ensure it ends with one newline, then append the wrapped main code.
                codeForBabel = importBlock.trimEnd() + '\n' + wrappedMainCode;
            }
        }
        // If no wrapping occurred, codeForBabel remains the original 'code'.

        const babelOptions = {
            filename: 'test.ts', // Provide a filename for Babel
            presets: ['@babel/preset-typescript'], // Handles TypeScript syntax
            plugins: [
                // Transforms ES module syntax (import/export) to CommonJS.
                '@babel/plugin-transform-modules-commonjs',
            ],
            sourceType: 'module', // Parse input as an ES module
            comments: true, // Preserve comments
        };

        try {
            const transformed = transform(codeForBabel, babelOptions);
            // Fallback to codeForBabel if transformation somehow fails or returns nothing
            return transformed?.code || codeForBabel;
        } catch (error) {
            // eslint-disable-next-line no-console
            console.error("Babel transformation error in markdown-doctest-setup:", error); // Keep commented
            // In case of error, return the processed (possibly wrapped) code to help debug
            return codeForBabel;
        }
    }
} 