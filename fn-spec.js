
var frequencyNumber = require('./fn.js')
describe('split String to words', function(){

        it('return null given null', function(){
            expect(frequencyNumber.splitString('')).toEqual('');
        });

        it('return one word given one word ', function(){
            expect(frequencyNumber.splitString('it')).toEqual(['it']);
        });

        it('return two word given two word', function(){
            expect(frequencyNumber.splitString('it will')).toEqual(['it','will']);
        });

        it('return three word given three word ', function(){
            expect(frequencyNumber.splitString('it will get')).toEqual(['it', 'will', 'get']);
        });

        it('return two word given two word with some blanks', function(){
            expect(frequencyNumber.splitString('   it  will  ')).toEqual(['it','will']);
        });
    }
);

describe('count the Frequency of words',function () {

    it ('return one word and its frequency given one word', function () {
        expect(frequencyNumber.countFreqy(['it'])).toEqual("it 1");
    });

  /*  it ('return two word and their own frequency given two different word', function () {
        expect(frequencyNumber.countFreqy(['it','is'])).toEqual("it 1\r\nis 1");
    });*/

    it ('return one word and their own frequency given two same word', function () {
        expect(frequencyNumber.countFreqy(['it','it'])).toEqual("it 2");
    });

});

