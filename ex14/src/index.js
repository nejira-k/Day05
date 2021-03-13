function main() {

    var myNoun = "dog";
    var myVerb = "ran";
    var myAdjective = "big";
    var myAdverb = "quickly";

    var wordBlanks = "My" + " " + myNoun + " " + myAdjective + " " +  myVerb + " " + myAdverb + " " + "back home" + ".";

    return wordBlanks;
}
console.log(main());
module.exports = main;