/*jshint globalstrict:true,unused:false,maxlen:999*/
'use strict';

var should = require('should'),
    sinon = require('sinon'),
    fs = require('fs'),
    wotd = require('..'),
    dummySummary = fs.readFileSync(__dirname + '/fixtures/wotd.summary').toString();

function getDummy() {
  return {
    error: null,
    query: {
      results: {
        item: {
          title: 'artless',
          summary: dummySummary
        }
      }
    }
  };
}

describe('world op da day', function() {
  it('works', function(done) {
    var yql = require('yql'),
        stub = sinon.stub(yql, 'exec'),
        res;

    res = {
      word: 'artless',
      pronunciation: '\\AHRT-lus\\',
      type: 'adjective',
      descriptions: '1 : lacking art, knowledge, or skill : uncultured\n2 a : made without skill : crude\n  b : free from artificiality : natural\n3 : free from guile or craft : sincerely simple',
      example1: 'The senator\'s folksy demeanor and seemingly artless candor belie the man\'s shrewd and calculating political sensibilities.',
      example2: '"\'Pat and Dick\' is in many ways a rather artless book, and its prose offers precious few pleasures, but it does open a crack wider the window into a marriage that has interested and puzzled this country for a long time and doubtless will continue to do so far longer." - From a review by Jonathan Yardley in The Washington Post, January 26, 2014',
      trivia: '"Artless," "ingenuous," and "naive" all refer to freedom from pretension or calculation, but there are subtle differences in their uses. "Ingenuous" implies an inability to disguise or conceal one\'s feelings, while "naive" suggests a credulous lack of worldly wisdom. "Artless" generally indicates an appearance of utter naturalness, one in which a person is (or seems to be) innocent of the effect of his or her speech or behavior on others.'
    };

    stub.callsArgWith(1, getDummy());

    wotd(function(err, response) {
      if (err) return done(err);

      response.should.eql(res);
      done();
    });
  });
});
