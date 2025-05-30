'use strict';

import Command from '../command';
import Argument from '../argument';

class Question extends Command {
    constructor(text: string | null = null) {
        super('G', 5);
        this.args.push(new Argument('T', 0));
        if (text !== null) {
            this.args.push(new Argument('m', ' "' + text + '"'));
        }
    }
}

export default Question;
