'use strict';

import RapidMove from './rapidmove';

class JogZ extends RapidMove {
    constructor(z: number | null = null) {
        super(null, null, z, null);
    }
}

export default JogZ;
