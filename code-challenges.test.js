// ASSESSMENT 3: Coding Practical Questions with Jest


// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest



// --------------------1) Create a function that takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.

// a) Create a test with expect statements for each of the variables provided.

const fibLength1 = 6
// Expected output: [1, 1, 2, 3, 5, 8]

const fibLength2 = 10
// Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

   describe("fibonacciNyc", () => {

    it(" Create a function name fibonacciNyc, fibonacciNyc will return array length of the numbers from the Fibonacci sequence, fibLength2 are the array length being passed through fibonacciNyc", () => {

        expect(fibonacciNyc()).toEqual("[1, 1, 2, 3, 5, 8, 13, 21, 34, 55]")

    })
})


// b) Create the function that makes the test pass.

//---- I created a function name fibonacciNyc
//---- fibonacciNyc will returned any arrays length of the numbers from the Fibonacci sequence 
//---- When fibLength1 and fibLength2 are passed thru fibonacciNyc... I created if statements to create a looping 
//---- process of the current sum being adding to the previous sum ang returned as an array

const fibonacciNyc = () => {

    nyc = [1, 1]

    if (fibLength2 <= 1)
    if (fibLength2 == 2){console.log(...nyc)}
    if (fibLength2 > 2) {

        for (let i = 1; i <= (fibLength2-2); i++) {
            nyc.push(nyc[nyc.length-1] + nyc[nyc.length-2])
        }
        console.log(...nyc)
    }
}
console.log(fibonacciNyc()) 

//---- fibLength1 console.logged: [1, 1, 2, 3, 5, 8]
//---- fibLength2 console.logged: [1 1 2 3 5 8 13 21 34 55]




// --------------------2) Create a function that takes in an array and returns a new array of only odd numbers sorted from least to greatest.

// a) Create a test with expect statements for each of the variables provided.

const fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]
// Expected output: [-9, 7, 9, 199]

const fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"]
// Expected output: [-823, 7, 23]

describe("oddElevation", () => {

    it(" oddElevation will take arrays fullArr2, oddElevation will return a new array containing only odd numbers sorted least to greatest", () => {

        expect(oddElevation()).toEqual([-9, 7, 9, 199])

    })
})


// b) Create the function that makes the test pass.

//---- I created a function called oddElevation 
//---- oddElevation will take arrays fullArr1 and fullArr2...
//---- I created a function jusNumberz to sort numbers from least to greatest
//---- I created jusOddNumberz to .filter and return only odd numbers
//---- I created jusOddNumbersSorted to sort least to greatest
//---- oddElevation will return a new array containing only odd numbers sorted least to greatest

 const oddElevation = () => {

     function jusNumberz(fullArr2) {
         return fullArr2.filter((element) => typeof element === "number")
     }
     let jusOddNumberz = jusNumberz(fullArr2).filter(value => value % 2 || -2 === 1)
     let jusOddNumberzSorted = jusOddNumberz.sort((a, b) => a - b)

     return jusOddNumberzSorted
 }   
 console.log(oddElevation())
 
 //---- fullArr1 console.logged: [-9, 7, 9, 199]
 //---- fullArr2 console.logged: [ -823, 7, 23 ]



// --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

// a) Create a test with expect statements for each of the variables provided.

const numbersToAdd1 = [2, 4, 45, 9]
// Excpected output: [2, 6, 51, 60]

const numbersToAdd2 = [0, 7, -8, 12]
// Expected output: [0, 7, -1, 11]

const numbersToAdd3 = []
// Expected output: []

describe("addItUp", () => {

    it("take numbersToAdd1 and pass the values and return array of the accumulating sum", () => {

        expect(addItUp()).toEqual([2, 4, 45, 9])

    })
})


// b) Create the function that makes the test pass.

//---- I created a function called addItUp
//---- I created numbersToAddSort function to sort than add the sum to the current indx value 

const addItUp = () => { 

const numbersToAddSort = numbersToAdd1.sort((a, b) => a + b)
 
const rackItUp = numbersToAddSort.map((sum => value => sum += value)(0))
      
      return rackItUp
}
console.log(addItUp())

//---- numbersToAdd1 console.logged: [ 2, 6, 51, 60 ]
//---- numbersToAdd2 console.logged: [ -8, -8, -1, 11 ]
//---- numbersToAdd3 console.logged: []
