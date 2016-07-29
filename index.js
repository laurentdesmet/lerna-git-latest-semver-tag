'use strict';
var gitSemverTags = require('lerna-git-semver-tags');

module.exports = function(packageName, cb) {
  gitSemverTags(packageName, function(err, tags) {
    if (err) {
      cb(err);
      return;
    }
    cb(null, tags[0] || '');
  });
};
