'use strict';

import Command from '../command';

class ToolSelect extends Command {
    constructor(tool: string | number = 2) {
        super('T', tool);
    }
}

export default ToolSelect;
