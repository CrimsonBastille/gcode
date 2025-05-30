'use strict';

import numeral from 'numeral'

class Argument {

    private label: string;
    private value: string | number;

    constructor(label: string, value: string | number) {
        this.label = label;
        this.value = value;
    }

    processValue() {
        let result: string | number = this.value;

        if (typeof this.value === 'number') {
            if (Number.isInteger(this.value)) {
                result = this.value;
            } else if (isNaN(this.value)) {
                result = '';
            } else if (!isFinite(this.value)) {
                result = '';
            } else {
                result = numeral(this.value).format('0.0000');
            }
        }

        return result;
    }

    toString() {
        const output: string = this.label + this.processValue();
        return output;
    }

}

export default Argument;
