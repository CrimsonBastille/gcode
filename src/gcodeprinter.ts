'use strict';

import Command from './command';

class GcodePrinter {

    public static print(arr: Command[], sb: string = '') {
        arr.forEach((current: Command | Array<Command>) => {
            if (current instanceof Command) {
                sb += current.toString();
            } else if (current instanceof Array) {
                sb += '\n';
                sb = GcodePrinter.print(current, sb);
            }
            sb += '\n';
        });
        return sb;
    }
}

export default GcodePrinter;
