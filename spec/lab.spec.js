'use strict';

var paragraph =
  'When in the Course of human events, it becomes necessary for one ' +
  'people to dissolve the political bands which have connected them ' +
  'with another, and to assume among the powers of the earth, the ' +
  'separate and equal station to which the Laws of Nature and of ' +
  'Nature\'s God entitle them, a decent respect to the opinions of ' +
  'mankind requires that they should declare the causes which impel ' +
  'them to the separation.';

var collFuncs = require('../lib/lab.js');

describe('collections lab', function() {

  describe('normalized words', function() {

    var normalizedWords = [
      'we', 'the', 'people', 'of', 'the', 'united', 'states', 'in',
      'order', 'to', 'form', 'a', 'more', 'perfect', 'union',
      'establish', 'justice', 'insure', 'domestic', 'tranquility',
      'provide', 'for', 'the', 'common', 'defence', 'promote', 'the',
      'general', 'welfare', 'and', 'secure', 'the', 'blessings', 'of',
      'liberty', 'to', 'ourselves', 'and', 'our', 'posterity', 'do',
      'ordain', 'and', 'establish', 'this', 'constitution', 'for',
      'the', 'united', 'states', 'of', 'america'
    ];

    it('has the correct length', function() {
      expect(collFuncs.getNormalizedWords(paragraph).length).toBe(52);
    });

    it('matches expected array', function() {
      expect(collFuncs.getNormalizedWords().sort())
        .toEqual(normalizedWords.sort());
    });

  });

  describe('unique words', function() {

    var sortedUniqueWords = [
      'a', 'america', 'and', 'blessings', 'common', 'constitution',
      'defence', 'do', 'domestic', 'establish', 'for', 'form',
      'general', 'in', 'insure', 'justice', 'liberty', 'more', 'of',
      'ordain', 'order', 'our', 'ourselves', 'people', 'perfect',
      'posterity', 'promote', 'provide', 'secure', 'states', 'the',
      'this', 'to', 'tranquility', 'union', 'united', 'we', 'welfare'
    ];

    it('has the correct length', function() {
      expect(collFuncs.getUniqueWords().length).toBe(38);
    });

    it('matches expected array', function() {
      expect(collFuncs.getUniqueWords().sort())
        .toEqual(sortedUniqueWords);
    });

  });

  describe('word count', function() {

    it('has the correct word count', function() {
      expect(collFuncs.wordCount(paragraph).length).toBe(10);
    });

    it('has the correct unique word count', function() {
      expect(collFuncs.wordCount(paragraph, true).length).toBe(10);
    });

  });

});
