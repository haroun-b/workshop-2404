const helloWorld = "Hello, World!";

// Anything you pass to the inspect function will be shown in the Inspector Window
inspect(helloWorld);

// START HERE ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓
// TODO1: The secretToLife is constant, and it's 42
// I could've sworn I had a constant named secretToLife here...
const secretToLife = 42;

// TODO2: The keyToHappiness is ever-changing and different for everyone, but it's always a string. My keyToHappiness is "Family". What's yours?
// I could've sworn I had a variable named keyToHappiness here...
let keyToHappiness = "Family";

// TODO3: My credentials where art thou?
// The hacker removed your credentials. You need to create a new object called credentials with a username "glorious-bob" and a password of your choosing.
const credentials = {
  username: "glorious-bob",
  password: "password123"
};

// TODO4: A calculation without elaboration 😏
// The hacker didn't actually change anything here, this is just a task you were supposed to do a while ago but didn't.
const num1 = 3;
const num2 = 7;

// TODO4_a: Add num1 and num2 and store the result in a variable named sum
const sum = num1 + num2;
// TODO4_b: Subtract num1 from num2 and store the result in a variable named diff
const diff = num2 - num1;
// TODO4_c: Multiply num1 and num2 and store the result in a variable named product
const product = num1 * num2;
// TODO4_d: Divide num2 by num1 and store the result in a variable named div
const div = num2 / num1;
// TODO4_e: Calculate the remainder when num2 is divided by num1 and store the result in a variable named mod
const mod = num2 % num1;
// TODO4_f: Raise num1 to the power of num2 and store the result in a variable named pow
const pow = num1 ** num2;
// TODO4_g: Calculate the percentage of num1 out of num2 and store the result in a variable named percent
const percent = (num1 / num2) * 100;
// TODO4_h: Calculate the average of num1 and num2 and store the result in a variable named avg
const avg = (num1 + num2) / 2;
// TODO4_i: Create a new variable num3, assign it any number you like, and then using parentheses, add num1 and num2, then multiply the result by num3. Store the result in a variable named parenOp
const num3 = 5;
const parenOp = (num1 + num2) * num3;

// TODO5: Eeny, Meeny, Miny, Moe, Woop Woop!
// "Eeny, Meeny, Miny, Moe, Woop Woop!" was once a single phrase. The hacker broke it and my heart broke with it. Can you fix it?
// Store the phrase in a constant named eenyMeeny
const eeny = "Eeny,";
const meeny = "Meeny,";
const miny = "Miny,";
const moe = "Moe,";
const woopWoop = "Woop Woop!";

const eenyMeeny = `${eeny} ${meeny} ${miny} ${moe} ${woopWoop}`;

// TODO6: I don't even know what I like anymore!?!
// I had a list of things I liked stored in an array. The hacker must've deleted it. Let's replace it with a new array of things you like.
// Create a new array called thingsILike and store at least 4 things you like in it. Make sure they're all strings.
const thingsILike = ["cinema", "boxing", "swimming", "chaos"];

// TODO7: Who dares wormify my swamp?!
// It seems someone added literal bugs to this string. They must all be removed. And don't do it by hand, because, eww.
// Store the cleaned up string in a variable named dewormed
const wormy = "Who🐛 d🐛are🐛s🐛 e🐛n🐛t🐛er🐛 m🐛y swa🐛m🐛p?!";
let dewormed = "";

for (let char of wormy) {
  if (char !== "🐛") {
    dewormed += char;
  }
}

// TODO8: Fire! Fire! Fire! Put it out! Put it out!
// Same deal as before, but this time the string is on fire. 🔥🔥🔥
// Store the cleaned up string in a variable named extinguished
const burning =
  "It🔥 was a🔥l🔥wa🔥y🔥s bu🔥rnin🔥g s🔥inc🔥e 🔥t🔥he🔥 w🔥o🔥r🔥ld'🔥s🔥 🔥b🔥e🔥en turning🔥.🔥";
let extinguished = "";

for (let char of burning) {
  if (char !== "🔥") {
    extinguished += char;
  }
}

// TODO9: 😨 wormFirenado3000! help!
// Store the cleaned up string in a variable named noWormNoFireNoCry
const wormFirenado3000 =
  "I'd 🔥li🔥ke🐛 to sh🐛a🔥r🐛e🐛 🐛a reve🔥lation 🔥th🔥at I've🔥 had🔥 during🔥 m🐛y ti🔥me here🔥. It 🔥c🐛ame🔥 to me🔥 when 🔥I tried🔥 to cla🔥s🔥sify🐛 y🐛our sp🐛e🔥cie🐛s 🔥an🐛d I reali🐛z🐛e🔥d t🐛h🐛at🐛 🐛y🔥ou're🐛 n🔥ot actu🐛ally mammals. E🔥ve🔥ry 🔥mamm🔥a🐛l 🐛on this p🐛lan🐛et in🔥stinc🐛tive🔥ly de🔥v🐛elops🐛 a na🐛t🔥ural🐛 e🔥quili🔥brium with the 🔥surrounding🔥 environment but you🐛 humans 🐛d🐛o not🔥. You m🔥o🐛ve 🔥to🔥 an are🔥a and🐛 🐛you 🐛mult🔥i🔥p🐛ly🔥 and 🐛m🐛ulti🔥ply🔥 🐛u🐛n🐛t🐛i🔥l every na🔥t🔥ur🔥al r🔥es🔥ource 🐛is c🐛onsumed 🔥an🐛d 🔥t🔥h🐛e only wa🔥y🔥 you ca🐛n surv🐛ive🔥 is🔥 t🐛o spread🐛 🐛to an🐛other area🐛. 🔥T🐛here 🐛is anothe🔥r🔥 organism o🔥n 🔥th🐛is 🐛plane🐛t 🔥that follows th🐛e🐛 sam🔥e p🔥a🐛tte🐛rn🔥.🔥 D🔥o you kn🔥o🐛w🐛 what it🔥 is? 🐛A 🔥virus.🐛 Hu🐛m🐛an bei🔥ngs are a disea🔥s🐛e, a cancer of this pl🔥a🔥net🐛. Y🔥o🐛u'🔥re 🔥a 🔥p🐛l🐛agu🐛e🔥 a🐛n🐛d🔥 we are🐛 the 🐛cure.";
let noWormNoFireNoCry = "";

for (let char of wormFirenado3000) {
  if (char !== "🔥" && char !== "🐛") {
    noWormNoFireNoCry += char;
  }
}

// TODO10: .esimorp I ,dnuora denrut siht yllausu ton m'I 😅
// Reverse the string back and store it in a variable named rightSideUp
const reversed =
  ".gnihton od ot esucxe na ton s'tI .dlrow eht fo scinahcem eht ni etaf fo noisserpxe na si hcihW .deneppah ,deneppah s'tahW";

let rightSideUp = "";

for (let i = reversed.length - 1; i >= 0; i--) {
  rightSideUp += reversed[i];
}

// TODO11: No bones in my quotes, please. 💀
// Debone the quotes array and store the result in a new array named debonedQuotes.
// And whatever you do, do not touch the bones with your hands, for they are cursed.
const quotes = [
  "I'm going to make him an offer he can't refuse",
  "💀",
  "May the Force be with you",
  "💀",
  "You talking to me?",
  "There's no place like home",
  "You can't handle the truth!",
  "💀",
  "I'll be back",
  "I see dead people",
  "💀",
  "Here's Johnny!",
  "💀",
  "Houston, we have a problem",
  "To infinity and beyond!"
];

const debonedQuotes = [];

for (let quote of quotes) {
  if (quote !== "💀") {
    debonedQuotes.push(quote);
  }
}

// TODO12: Printer, why have you forsaken me?
// I had a list of steps to reset my printer, but it seems the hacker has reversed the order. And now you can't even print memes. 😢
// store the corrected array in a constant named printerRepair101
const howToResetPrinter = [
  "Throw the printer out the window",
  "Print a test page",
  "Replace the paper",
  "Print a test page",
  "Replace the ink cartridged",
  "Print a test page",
  "Turn the printer on",
  "Wait 10 seconds",
  "Turn the printer off"
];

const printerRepair101 = [];

for (let i = howToResetPrinter.length - 1; i >= 0; i--) {
  printerRepair101.push(howToResetPrinter[i]);
}

// TODO13: Odd ones out 📤
// It seems we have ourselves a few imposters in the evens array.
// Clean the evens array of all odd numbers and store the result in a new array named evenSteven
const evens = [
  0, 2, 3, 4, 5, 6, 7, 8, 10, 11, 12, 13, 14, 15, 16, 18, 20, 22, 24, 26, 28,
  30, 32, 33, 34, 35, 36, 38, 40, 41, 42, 44, 45, 46, 47, 48, 49, 50, 52, 54,
  56, 57, 58, 60, 61, 62, 63, 64, 65, 66, 68, 69, 70, 72, 73, 74, 76, 78, 79,
  80, 81, 82, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 98, 99
];

const evenSteven = [];

for (let num of evens) {
  if (num % 2 === 0) {
    evenSteven.push(num);
  }
}

// TODO14: Once upon a SHAKASHOKABOOMCOW 💥
// I once had an array here. My array was full of number, shakas, shokas, booms, and cows. I miss my array. 😢
// Create a new array called shakaShokaBoomCow and fill it with the following:
// - The numbers from 1 to 1200
// - The word "SHAKA" for every number divisible by 3
// - The word "SHOKA" for every number divisible by 5
// - The word "BOOM" for every number divisible by 7
// - The word "COW" for every number divisible by 11
// - The word "SHAKASHOKA" for every number divisible by 3 and 5
// - The word "SHAKABOOM" for every number divisible by 3 and 7
// - ...and so on such as for a number divisible by 3, 5, 7, and 11, it should be "SHAKASHOKABOOMCOW"
// - Example of the first 15 elements: [1, 2, 'SHAKA', 4, 'SHOKA', 'SHAKA', 'BOOM', 8, 'SHAKA', 'SHOKA', 'COW', 'SHAKA', 13, 'BOOM', 'SHAKASHOKA']

const shakaShokaBoomCow = [];

for (let i = 1; i <= 1200; i++) {
  let word = "";

  if (i % 3 === 0) {
    word += "SHAKA";
  }

  if (i % 5 === 0) {
    word += "SHOKA";
  }

  if (i % 7 === 0) {
    word += "BOOM";
  }

  if (i % 11 === 0) {
    word += "COW";
  }

  if (word.length > 0) {
    shakaShokaBoomCow.push(word);
  } else {
    shakaShokaBoomCow.push(i);
  }
}

// TODO15: Who's laughing now? 😆
// Now just for the giggles, Let's transform the string in amIlaughing so that every other letter is uppercase. Such as the result is: "YoU ShOuLdN'T Be lAuGhInG At tHiS, iT'S A SeRiOuS MaTtEr."
// Store the result in a variable named areYouLaughing
const amIlaughing = "you shouldn't be laughing at this, it's a serious matter.";

let areYouLaughing = "";

for (let i = 0; i < amIlaughing.length; i++) {
  if (i % 2 === 0) {
    areYouLaughing += amIlaughing[i].toUpperCase();
  } else {
    areYouLaughing += amIlaughing[i];
  }
}
