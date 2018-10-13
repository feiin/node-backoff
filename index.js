
/**
 * backoff implementation
 */
class Backoff {
    /**
     * 
     * @param {Object} opts 
     * @param {Number} [opts.min=100] minimum timeout 
     * @param {Number} [opts.max=100] maximum timeout 
     * @param {Number} [opts.factor] factor for each increment step 
     * @param {Number} [opts.factor] jitter eases contention by randomizing backoff steps step 
     */
    constructor(opts) {
        this.opts = opts || {};
        this.min = this.opts.min || 100;
        this.max = this.opts.max || 10000;
        this.attempts = 0;
        this.factor = this.opts.factor || 2;
        this.jitter = this.opts.jitter || false;
    }

    /**
     * returns the duration for attempt
     */
    duration() {
        return this.forAttempt(this.attempts++);
    }

    /**
     * returns the duration for a specific attempt
     * @param {Number} attempts 
     */
    forAttempt(attempts) {

        let ms = this.min * Math.pow(this.factor, attempts);
        if (this.jitter) {
            var rand = Math.random();
            ms = Math.floor(rand * (ms - this.min) + ms);
        }
        return Math.min(ms, this.max) | 0;
    }

    /**
     * rest the attempts counter to 0
     */
    reset() {
        this.attempts = 0;
    }
}


module.exports = Backoff;