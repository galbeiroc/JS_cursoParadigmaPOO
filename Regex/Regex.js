//Using the test method
let myString = "Hello, World!"
let myRegex = /Hello/
let myResult = myRegex.test(myString)
console.log('5: ',myResult)

//Match literal String
let acgIsHiding = "Somewhere Acg is hiding in this text"
let waldoRegex = /Acg/
let result = waldoRegex.test(acgIsHiding)
console.log('11: ',result)

//Match a literal String with different Possibilities
let acgPet = "Albeiro has a pet Fish"
let petRegex = /Dog|Cat|Bird|Fish/
let resultPet = petRegex.test(acgPet)
console.log('17: ',resultPet)

//Ignore case while matching
let fccString = "freeCodeCamp"
let fccRegex = /freecodecamp/i //ignore Uppercase
let resultfcc = fccRegex.test(fccString)
console.log('23: ',resultfcc)

//Extract Matches
let extractStr = "Extract the word 'coding' from the string"
let codingRegex = /from/
let resultExtract = extractStr.match(codingRegex)
console.log('29: ',resultExtract)

//Find more than the firts match
let testStr = "Repeat, Repeat, Repeat"
let ourRegex = /Repeat/g
testStr.match('34: ',ourRegex)

let twinkleStar = "Twinkle, twinkle, little star"
let starRegex = /Twinkle/ig
let resultStar = twinkleStar.match(starRegex)
console.log('39: ',resultStar)

//Match anything with wilcard period
let humStr = "I'll hum a song"
let hugStr = "Bear hug"
let huRegex = /hu./
console.log('45: ',humStr.match(huRegex))
console.log('46: ',hugStr.match(huRegex))

let exampleStr = "Let's have fun with regular expressions"
let unRegex = /.un/
let unResult = unRegex.test(exampleStr)
console.log('51: ',unResult)

//Match Single character with multiple possibilities
let quoteSample = "Beware of bug in the above code"
let vowelRegex = /[aeiou]/ig
let resultVowel = quoteSample.match(vowelRegex)
console.log('57: ',resultVowel)

//Match letters of the Alphabet
let quoteSamples = "The quick brown fox jumps over the lazy dog"
let alphabetRegex = /[a-z]/ig
let alphabetResult = quoteSamples.match(alphabetRegex)
console.log('63: ',alphabetResult)

//Match numbers and letters of the alphabet
let testSample = "Blueberry 3.144192534s are deliciuos"
let myTestRegex = /[2-6h-s]/ig
console.log('68: ',testSample.match(myTestRegex))

//Match single characters not specified
let specifiedStr = "3 Blind mice."
let specifiedRegex = /[^0-9aeiou]/ig
console.log('73: ',specifiedStr.match(specifiedRegex))

//Match Characters that occur one or more times
let diffucultSpelling = "Mississippis"
let spellingRegex = /s+/g //"ss" "ss" "s"
console.log('78: ',diffucultSpelling.match(spellingRegex))

//Match Characters that occur zero or more times
let soccerWord = "gooooooooal"
let gPharse = "gut feeling"
let oPharse = "over the moon"
let goRegex = /go*/
console.log('85: ',soccerWord.match(goRegex)) //Returns ["goooooooo"]
console.log('86: ',gPharse.match(goRegex))  //Returns ["g"]
console.log('87: ',oPharse.match(goRegex))  //Returns null

let chewieQuote = "Aaaaaaaaaaaaaarrgh"
let chewieRegex = /Aa*/ //Aaaaaaaaaaaaaa
console.log('91: ',chewieQuote.match(chewieRegex))

//Find Characters with lazy matching
let stringStr = "titanic"
let strRegex = /t[a-z]*?i/ //ti
console.log('96: ',stringStr.match(strRegex))

let textStr = "<h1>Winter is Coming</h1>"
let textRegex = /<.*>/ //"<h1>Winter is Coming</h1>"
let lazyRegex = /<.*?>/ //<h1>
console.log('101: ',textStr.match(textRegex))
console.log('102: ',textStr.match(lazyRegex))

//Find one o more Criminals in a hunt
let criminal = "P1P2P3P4CCCP5P6"
let criminalRegex = /C+/  //CCC
console.log('107: ',criminal.match(criminalRegex))

//Match beginning string patterns
let calandRicky = "Cal and Ricky both like racing."
let calRegex = /^Cal/ //Cal or "and Ricky Cal" -> null
console.log('112: ',calandRicky.match(calRegex))

//Match Ending String Patterns
let caboose = "Yestesday, i was in the racing caboose"
let cabooseRegex = /caboose$/ //true
console.log('117: ',cabooseRegex.test(caboose))

//Match all letters and numbers
let letters = "The five boxing wizards jump quickly"
let lettersRegex = /\w/g //31
console.log('122: ',letters.match(lettersRegex).length)

//Match Everything but letters and numbers
let lettersNum = "The five boxing wizards jump quickly."
let lettersNumRegex = /\W/g //6 Characters
console.log('127: ',lettersNum.match(lettersNumRegex).length)

//Match all numbers
let numString = "Your sandwich will be $5.00"
let numStringRegex = /\d/g //3 numbers
console.log('132: ',numString.match(numStringRegex).length)

//Match all Non-numbers
let numStr = "Your sandwich will be $5.00"
let numStrRegex = /\D/g //24
console.log('137: ',numStr.match(numStrRegex).length)

//Restrict Possible Username
/** If there numbers, they must be at the end
 * Letters can be lowercase and uppercase
 * at least two character long. Two-letters names can't have numbers
 */
let username = "JackOfAllTrades"
let userRegex = /^[A-Za-z]{2,}\d*$/  //True
console.log('146: ',userRegex.test(username))

//Match Whitespaces
let whiteSpaces = "Whitespaces is important in separating words"
let countWhitespaces = /\s/g
console.log('151: ',whiteSpaces.match(countWhitespaces))

//Match Non-Whitespaces Characters
let whitesSpaces = "Whitespaces is important in separating words"
let countsWhitespaces = /\S/g
console.log('156: ',whitesSpaces.match(countsWhitespaces))

//Specify Upper and Lower Number of Match
let ohStr = "Ohhh no"
let ohRegex = /Oh{3,6} no/   //Ohhh no
console.log('161: ',ohStr.match(ohRegex))

//Specify only the lower Number of Matches
let haStr = "Hazzzzzah" //Hazzzzzah
let haRegex = /z{4,}/
console.log('166: ',haStr.match(haRegex))

//Specify Exact Number of Matches
let timStr = "Timmmmmber"
let timRegex = /Tim{5}ber/ //Timmmmmber
console.log('171: ',timStr.match(timRegex))

//Check for all or none
let favWord = "favorite"
let favRegex = /favou?rite/   //true
console.log('176: ',favRegex.test(favWord))

//Positive and Negative lookahead
let quit = "qu"
let noquit = "qt"
let quRegex = /q(?=u)/
let qRegex = /q(?!u)/
console.log('183: ',quit.match(quRegex))  //q
console.log('184: ',noquit.match(qRegex)) //q

let sampleWord = "astronaut"
let pwRegex = /(?=\w{5})(?=\D*\d{2})/  //null
console.log('188: ',sampleWord.match(pwRegex))

//Reuse Patterns Using Capture Groups
let repeatStr = "regex regex"
let repeatRegex = /(\w+)\s\1/ 
console.log('193: ',repeatRegex.test(repeatStr)) //true
console.log('194: ',repeatStr.match(repeatRegex)) //[ "regex regex", "regex" ]

let repeatNum = "42 42 42"
let reRegex = /^(\d+)\s\1\s\1$/
console.log('198: ',reRegex.test(repeatNum)) //true
console.log('199: ',repeatNum.match(reRegex))  //"42 42 42", "42"

//Use Capture Groups to Search and Replace
let wrongText = "The sky is silver"
let silverRegex = /silver/
console.log('204: ',wrongText.replace(silverRegex, "blue")) //"The sky is blue"

console.log("Code Camp".replace(/(\w+)\s(\w+)/, '$2 $1')) //Camp Code

let huhText = "This sandwich is good"
let fixRegex = /good/
let replaceText = "okey-dpkey"
console.log('211: ',huhText.replace(fixRegex, replaceText))  //This sandwich is okey-dpkey

//Remove whitespaces from start and end
let hello = "     Hello, World!     "
let wsRegex = /^\s+|\s+$/g
console.log('216: ',hello.replace(wsRegex, '')) //"Hello, World!"


var myStrings = 'You can also add\n\r new line character Thirdline';
console.log('220: ',myStrings)

var ourName = "FreeCodeCamp"
var ourNameLength = ourName.length;
console.log('224: ',ourNameLength)