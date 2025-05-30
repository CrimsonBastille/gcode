'use strict';

import Command from '../command';

class Comment extends Command {
    private newline: boolean = false;

    constructor(content: any, newline = true) {
        super('[');
        this.newline = newline;
        this.args.push(content.toString());
    }

    toString() {
        return (this.newline ? '\n' : '') + this.code + ' ' +
      this.args.join(' ') + ' ]';
    }

}

export default Comment;
