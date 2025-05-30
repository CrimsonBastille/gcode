'use strict';

import Command from '../command';

class GMacroCall extends Command {
    constructor(number = 0) {
        super('G', number);
    }
}

export default GMacroCall;
