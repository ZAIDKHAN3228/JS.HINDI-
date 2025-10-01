// forof loop mostly used with arrays

// for of 

// ["", "", ""]
// [{}, {}, {}]



const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    // console.log(num);
    
}

const greetings = "hello zaid"
for (const greet of greetings) {
    // console.log(`each char is ${greet}`);
    
}

// map 

const map = new Map()
map.set("IN", "india")
map.set("USA", "united states of america")
map.set("Fr", "france")


// console.log(map);

for (const [key, value] of map) {
     console.log(key, ':-', value);
     
}

const myOject ={
    'game1': 'cricet',
    'game2': 'football'
}

for (const [key, value] of object) {
    console.log(key, ':-', value);
    
}