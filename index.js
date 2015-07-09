var jade = require('jade');
var transform = require('./transform');

var template = jade.compileFile(__dirname + '/survey.jade', {pretty: true});

function render(options) {
  return template(transform(options))
}

module.exports = render;
