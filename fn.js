/**
 * Created by ASUS on 2017/4/16.
 */

function splitString(String) {
    let i;
    var wordsString = new Array();
    wordsString = String.split(/\s+/);
    return wordsString;
}
module.exports = splitString;
