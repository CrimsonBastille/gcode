'use strict';

import Command from '../command';

class Literal extends Command {

    constructor(content: string) {
        super('');
        this.args.push(content);
    }

    toString() {
        return this.args.join(' ');
    }

}

export default Literal;
