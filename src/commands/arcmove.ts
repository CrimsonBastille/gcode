 
'use strict';

import Command from '../command';
import Argument from '../argument';

class ArcMove extends Command {
    constructor(
        clockwise: boolean = true,
        x: number | null = null,
        y: number | null = null,
        i: number | null = null,
        j: number | null = null
    ) {
        super('G', clockwise ? 2 : 3);
        if (x !== null) {
            this.args.push(new Argument('X', x));
        }
        if (y !== null) {
            this.args.push(new Argument('Y', y));
        }
        if (i !== null) {
            this.args.push(new Argument('I', i));
        }
        if (j !== null) {
            this.args.push(new Argument('J', j));
        }
    }
}

export default ArcMove;
