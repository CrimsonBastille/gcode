'use strict';

import Command from '../command';

class AbsoluteMode extends Command {
    constructor() {
        super('G', 90);
    }
}

export default AbsoluteMode;
