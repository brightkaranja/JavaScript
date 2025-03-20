const string ="extravaganza";
const lastFour = string.slice(-4,);
console.log(lastFour);



const food = "The quick fox jumped over the lazy dog";
const insertString = "eat";
const insertedFood = food.slice(0,4) + insertString + food.slice(4);
console.log(insertedFood);



const story = "The quick brown fox jumps over the lazy dog";
const countThe = (story.match(/the/gi)||[]).length;
const countBrown = (story.match(/brown/gi)||[]).length;

console.log('"the" appears ${countThe} times');
console.log('"brown" appears ${countBrown}times');


const string1 = "The pupils are reading in the library";
const string2 = "The child was sittinh on the table before it fell";

const containsAre = string1.includes("are");
const containsSitting = string2.includes("sitting");

console.log('"are" found in string1:${containsAre}');
console.log('"sitting" found in string2:${containsSitting}');


const upperCaseSrting = "wonderful".toUpperCase();
console.log(upperCaseSrting);



const lowerCaseString1 = "amazing".toLowerCase();
const lowerCaseString2 = "UndERneath".toLowerCase();

console.log(lowerCaseString1);
console.log(lowerCaseString2);

function toTitleCase(String){
    return string.split('').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join('');
}
const titleCaseString = toTitleCase("A wonderful world");
console.log(titleCaseString);
