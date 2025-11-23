// first exercise
const num = [1, 2, 3, 4];
let sum = 0;

for (let n of num) {
    sum += n; 
}

console.log(sum); 

// second exercise
const names = ["ali", "sara", "omer", "lina", "mohammed","radwan"];

function longNames(names) {

    let result = [];

    for (let name of names) {
        if (name.length > 4) {
            result.push(name);
        }
    }

    return result;
}

// second Method 
function longNames2(names) {
    return names.filter(name => name.length > 4);
}
console.log(longNames(names)); 
console.log(`second method output: ${longNames2(names)}`);

// third exercise
function countWords(str) {
    const words = str.trim().split(" ").filter(word => word.length > 0);

    return words.reduce((acc, word) => {
        acc[word] = (acc[word] || 0) + 1;
        return acc;
    }, {});
}
console.log(countWords("hello world hello"));
