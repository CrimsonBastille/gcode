'use strict';

import Command from '../command';

class SpindleSpeed extends Command {
    constructor(speed = 100) {
        super('S', speed);
    }
}

export default SpindleSpeed;
