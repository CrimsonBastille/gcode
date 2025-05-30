'use strict';

import Command from '../command';

class MacroCall extends Command {
    constructor(number = 0) {
        super('M', number);
    }
}

export default MacroCall;
