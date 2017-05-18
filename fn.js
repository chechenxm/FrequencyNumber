

function splitString(String) {
    if(String === '')
        return '';
    let i;
    String = String.replace(/(^\s*)|(\s*$)/g,'');
    let wordsString = new Array();
    wordsString = String.split(/\s+/);
    return wordsString;
}

function countFreqy(wordsString){
    var count = new Array;
    var words = new Array;
    var wordsFrequency = new Array;
    var cou;
    var wor = {};
    var index;
    for(var i = 0, len = wordsString.length; i < len; i ++ ){
       /* if( (index = words.indexOf(wordsString[i])) == -1){
            words.push(wordsString[i]);
            wordsFrequency.push({word: wordsString[i],count:1});
        }else{
            wordsFrequency[index].count ++;
        }*/

        if(wor[wordsString[i]] == undefined ){
            wordsFrequency.push({word: wordsString[i],count:1});
            wor[wordsString[i]] = wordsFrequency.length - 1;

        }else {

            wordsFrequency[wor[wordsString[i]]].count ++;
        }
    }

    return format(wordsFrequency);
}

function sort(){

}

function  format( wordsFrequency) {
    var result = ''
    for(var i = 0,len =  wordsFrequency.length; i < len; i ++){
        if(i > 0){
            result += '\r\n';
        }
        result = result +  wordsFrequency[i].word + ' ' +  wordsFrequency[i].count;
    }
    return result;
}



module.exports = {
    splitString : splitString,
    countFreqy : countFreqy,
    t1 : t1
}

