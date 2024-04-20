const MepostClientIns = require('./MepostClient');

/**
 * @typedef {Object} Mepost
 * @property {(apiKey: string) => MepostClient} auth
 */

/** @type {Mepost} */
const mepost = {
    auth: (apiKey: string) => new MepostClientIns(apiKey)
};

module.exports = mepost;
module.exports.default = mepost;
