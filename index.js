/*jshint globalstrict:true*/
'use strict';

var yql = require('yql');

// TODO: accept different sources of Word of the Day
module.exports = function Wotd(callback) {
  var query = 'select * from rss where ' +
              'url=\'http://www.merriam-webster.com/word/index.xml\' limit 1',
      // TODO: fix lousy regex pattern
      pattern = /\w+ \d{1,2}, \d{4} is: (\w+) (\\[^\\]+\\) (\w+)\s+(.+)\s+Examples:\s+(?:(?!Did you know\?)(.+)\s+)(?:(?!Did you know\?)(.+)\s+)?Did.+\s+(.*)/; //jshint ignore:line

  if (!(this instanceof Wotd)) {
    return new Wotd(callback);
  }

  yql.exec(query, function(response) {
    var item = response.query &&
                response.query.results &&
                  response.query.results.item,
        matches = pattern.exec(item.summary),
        descriptions;

    if (response.error) return callback(new Error(response.error.description));

    descriptions = matches[4].trim();
    descriptions = descriptions.replace(/ (\d (?: \w)?)/g, '\n$1');
    descriptions = descriptions.replace(/(\D) (\w) :/g, '$1\n  $2 :');

    callback(null, {
      word: item.title,
      pronunciation: matches[2],
      type: matches[3],
      descriptions: descriptions,
      example1: matches[5].trim(),
      example2: matches[6].replace(/"\W+From/, '" - From').trim(),
      trivia: matches[7],
    });
  });

};
