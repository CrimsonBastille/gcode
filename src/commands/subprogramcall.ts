'use strict';

import Command from '../command';
import Argument from '../argument';

class SubprogramCall extends Command {
    constructor(filename: string | null = null) {
        super('M', 98);
        if (filename !== null) {
            this.args.push(new Argument('', filename));
        }
    }
}

export default SubprogramCall;
