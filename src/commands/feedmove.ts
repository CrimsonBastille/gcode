 
'use strict';

import Command from '../command';
import Argument from '../argument';

class FeedMove extends Command {
    constructor(
        x: number | null = null,
        y: number | null = null,
        z: number | null = null,
        w: number | null = null,
        f: number | null = null
    ) {
        super('G', 1);
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
        if (f !== null) {
            this.args.push(new Argument('F', f));
        }
    }
}

export default FeedMove;
