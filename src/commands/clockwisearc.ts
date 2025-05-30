'use strict';

import Command from '../command';
import Argument from '../argument';

class ClockwiseArc extends Command {
    constructor(x: number | null = null, y: number | null = null, r: number | null = null) {
        super('G', 2);
        if (x !== null) {
            this.args.push(new Argument('X', x));
        }
        if (y !== null) {
            this.args.push(new Argument('Y', y));
        }
        if (r !== null) {
            this.args.push(new Argument('R', r));
        }
    }
}

export default ClockwiseArc;
