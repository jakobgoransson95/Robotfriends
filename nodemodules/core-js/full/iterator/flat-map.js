require('../../modules/es.object.to-string');
require('../../modules/esnext.iterator.constructor');
require('../../modules/esnext.iterator.flat-map');

var entryUnbind = require('../../internals/entry-unbind');

module.exports = entryUnbind('Iterator', 'flatMap');
