'use strict';

import Command from '../command';

class FeedVelocity extends Command {
    constructor(velocity = 100) {
        super('F', velocity);
    }
}

export default FeedVelocity;
