/* eslint-disable @typescript-eslint/no-unused-vars */
 
'use strict';

import Command from '../command';
import Argument from '../argument';

class CutGCircle extends Command {

    constructor(
        d: number | null = null,
        x: number | null = null,
        y: number | null = null,
        unknown1: any = null,
        unknown2: any = null,
        unknown3: any = null,
        direction: number | null = null,
        i: number | null = null,
        j: number | null = null
    ) {
        super('G', direction == 1 ? 2 : 3);

        if (x !== null) {
            this.args.push(new Argument('X', x));
        }
        if (y !== null) {
            this.args.push(new Argument('Y', y));
        }
        if (d !== null) {
            this.args.push(new Argument('R', d / 2));
        }
        if (i !== null) {
            this.args.push(new Argument('I', i));
        }
        if (j !== null) {
            this.args.push(new Argument('J', j));
        }

    }
}

export default CutGCircle;
