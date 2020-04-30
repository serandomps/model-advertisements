var dust = require('dust')();
var serand = require('serand');
var utils = require('utils');

dust.loadSource(dust.compile(require('./template.html'), 'model-advertisements-findone'));

module.exports = function (ctx, container, options, done) {
    var sandbox = container.sandbox;
    dust.render('model-advertisements-findone', serand.pack(options, container), function (err, out) {
        if (err) {
            return done(err);
        }
        sandbox.append(out);
        done(null, function () {
            $('.model-advertisements-findone', sandbox).remove();
        });
    });
};
