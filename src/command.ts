'use strict';

import numeral from 'numeral';
import Argument from './argument';

class Command {

    protected code: string;
    private codeNumber: number | string | undefined;
    protected args: any[];

    constructor(code: string, codeNumber: number | string = '') {
        this.code = code;
        this.codeNumber = codeNumber
        this.args = [];
    }

    processArgs() {
        const processedArgs = this.args.map((current) => {

            let result: string | number | Argument = current;

            if (typeof current === 'number') {
                if (Number.isInteger(current)) {
                    result = current;
                } else if (isNaN(current)) {
                    result = '';
                } else if (!isFinite(current)) {
                    result = '';
                } else {
                    result = numeral(current).format('0.0000');
                }
            } else if (current instanceof Argument) {
                result = current.toString();
            }

            return result;
        });
        return processedArgs;
    }

    toString() {
        let output = `${this.code}${this.codeNumber}`;
        if (this.args.length > 0) {
            output += ' ' +
        this.processArgs().join(' ');
        };
        return output;
    }

}

export default Command;
