'use strict';

import Comment from './commands/comment';

class CmdGroup extends Array {

    private mName: string;

    get name() {
        return this.mName;
    }

    set name(name) {
        this.mName = name;
    }

    constructor(name: string, ...args: any[]) {
        super(...args);
        this.mName = name;
        this.push(new Comment(name));
    }
}

export default CmdGroup;
