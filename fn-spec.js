
var splitString = require('./fn.js')
describe('split String to words', function(){
        var a =['it','will'];
        it('test1', function(){
                expect(splitString('')).toEqual(null);
            }
        );
        it('test1', function(){
                expect(splitString('it   ')).toEqual(['it']);
            }
        );
        it('test1', function(){
                expect(splitString('it    will')).toEqual(a);
            }
        );
        it('test1', function(){
                expect(splitString('   it    will')).toEqual(a);
            }
        );
    it('test1', function(){
            expect(splitString('   it    will   ')).toEqual(a);
        }
    );
    }
);