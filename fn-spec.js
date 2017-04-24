
var splitString = require('./fn.js')
describe('split String to words', function(){
        var a = ['it','will'];
        it('return null given null', function(){
                expect(splitString('')).toEqual('');
            }
        );
        it('return one word given one word ', function(){
                expect(splitString('it')).toEqual(['it']);
            }
        );
        it('return two word given two word', function(){
                expect(splitString('it will')).toEqual(['it','will']);
            }
        );
        it('return three word given three word ', function(){
                expect(splitString('it will get')).toEqual(['it', 'will', 'get']);
            }
        );
    it('return two word given two word with some blanks', function(){
            expect(splitString('   it  will  ')).toEqual(['it','will']);
        }
    );
    }
);

