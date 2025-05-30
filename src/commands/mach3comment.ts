'use strict';

import Command from '../command';
import Literal from './literal';

class Mach3Comment extends Command {
    private newline: boolean;

    constructor(content: string | Literal, newline = true) {
        super('(');
        this.newline = newline;
        this.args.push(content.toString());
    }

    toString() {
        return (this.newline ? '\n' : '') + this.code + ' ' +
      this.args.join(' ') + ')';
    }

}

export default Mach3Comment;
