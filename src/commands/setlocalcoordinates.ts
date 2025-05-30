'use strict';

import Command from '../command';
import Argument from '../argument';

class SetLocalCoordinates extends Command {
    constructor(x: number | null = null, y: number | null = null, z: number | string | null = null) {
        super('G', 92);
        if (x !== null) {
            this.args.push(new Argument('X', x));
        }
        if (y !== null) {
            this.args.push(new Argument('Y', y));
        }
        if (z !== null) {
            this.args.push(new Argument('Z', z));
        }
    }
}

export default SetLocalCoordinates;
