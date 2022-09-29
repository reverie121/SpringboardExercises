// Quick Question #1
// What does the following code return?
new Set([1, 1, 2, 2, 3, 4])
    // It returns a set with the elements 1,2,3,4


// Quick Question #2
// What does the following code return?
[...new Set("referee")].join("")
    // It makes a set of the string 'referee' and spreads that set into an array before using join to return the original string without duplicates ('ref')



// Quick Questions #3
// What does the Map m look like after running the following code?
let m = new Map();
m.set([1, 2, 3], true);
m.set([1, 2, 3], false);
// Because arrays are reference type the two arrays input as keys are different from each other so the map will have two key/value pairs with different [1,2,3] arrays as the keys and true and false respectively as the values.



// hasDuplicate
// Write a function called hasDuplicate which accepts an array and returns true or false if that array contains a duplicate
const hasDuplicate = (arr) => (new Set([...arr]).size < arr.length) ? true : false;
// Provided solution was a little cleaner and simpler:
const hasDuplicateProvided = arr => new Set(arr).size !== arr.length;

hasDuplicate([1, 3, 2, 1]) // true
hasDuplicate([1, 5, -1, 4]) // false



// vowelCount
// Write a function called vowelCount which accepts a string and returns a map where the keys are numbers and the values are the count of the vowels in the string.
const vowelCount = (str) => {
        let vowelMap = new Map();
        const strL = str.toLowerCase();
        const vowels = 'aeiou';
        [...vowels].forEach((vowel) => {
            if (strL.includes(vowel)) {
                let qty = [...strL].filter((letter) => letter == vowel).length;
                vowelMap.set(vowel, qty);
            }
        });
        return vowelMap;
    }
    // The provided solution seems rather more complicated as a means of using more map methods.
    // Also it iterates through the string rather than the list of vowels so the returning map will be in order of appearance rather than alphabetic.
    // My approach can also be written to return values in this order, though alphabetic order was a design choice. Alt version:
const vowelCountV2 = (str) => {
    let vowelMap = new Map();
    const strL = str.toLowerCase();
    const vowels = 'aeiou';
    [...strL].forEach((letter) => {
        if (vowels.includes(letter)) {
            let qty = [...strL].filter((char) => char == letter).length;
            vowelMap.set(letter, qty);
        }
    });
    return vowelMap;
}

vowelCount('awesome') // Map { 'a' => 1, 'e' => 2, 'o' => 1 }
vowelCount('Colt') // Map { 'o' => 1 }