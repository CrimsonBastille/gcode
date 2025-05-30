'use strict';

import FeedMove from './feedmove';

class MoveY extends FeedMove {
    constructor(y: number | null = null) {
        super(null, y, null, null);
    }
}

export default MoveY;
