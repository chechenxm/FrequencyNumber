/**
 * Created by ASUS on 2017/4/16.
 */

function splitString(String) {
    if(String === '')
        return '';
    let i;
    String = String.replace(/(^\s*)|(\s*$)/g,'');
    var wordsString = new Array();
    wordsString = String.split(/\s+/);
    return wordsString;
}
module.exports = splitString;


