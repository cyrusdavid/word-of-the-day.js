#!/usr/bin/env node

var wotd = require('..'),
    chalk = require('chalk');

// wotd(function(err, today) {
//   if (err) return console.log(chalk.red(err));

//   console.log(today);
// });

var res = {
      word: 'artless',
      pronunciation: '\\AHRT-lus\\',
      type: 'adjective',
      descriptions: '1 : lacking art, knowledge, or skill : uncultured\n2 a : made without skill : crude\n  b : free from artificiality : natural\n3 : free from guile or craft : sincerely simple',
      example1: 'The senator\'s folksy demeanor and seemingly artless candor belie the man\'s shrewd and calculating political sensibilities.',
      example2: '"\'Pat and Dick\' is in many ways a rather artless book, and its prose offers precious few pleasures, but it does open a crack wider the window into a marriage that has interested and puzzled this country for a long time and doubtless will continue to do so far longer." - From a review by Jonathan Yardley in The Washington Post, January 26, 2014',
      trivia: '"Artless," "ingenuous," and "naive" all refer to freedom from pretension or calculation, but there are subtle differences in their uses. "Ingenuous" implies an inability to disguise or conceal one\'s feelings, while "naive" suggests a credulous lack of worldly wisdom. "Artless" generally indicates an appearance of utter naturalness, one in which a person is (or seems to be) innocent of the effect of his or her speech or behavior on others.'
    };

console.log('  ' + chalk.green(res.word), res.pronunciation, chalk.gray('(' + chalk.italic(res.type) + ')'));
console.log('\n  ' + res.descriptions.split('\n').join('\n  '));
console.log('\n  ' + chalk.cyan(res.example1.replace(res.word, chalk.green(res.word) + chalk.styles.cyan.open)));
console.log('\n  ' + chalk.cyan(res.example2.replace('"', '').replace(/( - From.*)/, chalk.gray('$1')).replace(res.word, chalk.green(res.word) + chalk.styles.cyan.open)));
