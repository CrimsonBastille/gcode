'use strict';

import Command from '../command';
import Argument from '../argument';

class RapidMove extends Command {
    constructor(x: number | null = null, y: number | null = null, z: number | null = null, w: number | null = null) {
        super('G', 0);
        if (x !== null) {
            this.args.push(new Argument('X', x));
        }
        if (y !== null) {
            this.args.push(new Argument('Y', y));
        }
        if (z !== null) {
            this.args.push(new Argument('Z', z));
        }
        if (w !== null) {
            this.args.push(new Argument('W', w));
        }
    }
}

export default RapidMove;
