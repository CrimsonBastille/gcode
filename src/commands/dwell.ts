'use strict';

import Command from '../command';

class Dwell extends Command {
    constructor(time = 3) {
        super('G4X', time);
    }
}

export default Dwell;
