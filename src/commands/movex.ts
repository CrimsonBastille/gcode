'use strict';

import FeedMove from './feedmove';

class MoveX extends FeedMove {
    constructor(x: number | null = null) {
        super(x, null, null, null);
    }
}

export default MoveX;
