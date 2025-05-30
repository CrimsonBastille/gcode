'use strict';

import FeedMove from './feedmove';

class MoveZ extends FeedMove {
    constructor(z: number | null = null) {
        super(null, null, z, null);
    }
}

export default MoveZ;
