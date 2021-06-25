var testArr = [6, 3, 5, 1, 2, 4]
console.log(testArr) // Print testArr as it is now 
var sum= null // Print sum as it is now
console.log(sum)
for (i = 0; i < testArr.length; i++) { // go through the array starting at index 0 got through to the last index and increase index position each loop through
    sum+=testArr[i] // take current value of sum and add current value of the index'd number
    console.log("current value: ", testArr[i], "current sum:", sum)
}

// 1st pass i = 6 sum = 0 @line 4 sum + i now sum = 6
// 2nd pass i = 3 sum = 6 @line 4 sum + i now sum = 9

for (i = 0; i < testArr.length; i++) { // go through the array starting at index 0 got through to the last index and increase index position each loop through
    testArr[i] = i * testArr[i] // taking current value of the current index setting it equal to the index # * the current value
}
console.log(testArr) //Print testArr as it is after for loop


// 5**. 
function a(b){ // declaring a function calling it a and it requires a parameter b to be passed in
    console.log(b); // print to console the value of b
    return b*4; // return var b * 4 (this is to the webpage)  return also means I am done please stop doing anything else that might be written after me
    console.log(b); // print to console the value of b
 }
 console.log(a(10)); // invoking the function a by asking it to print to the console while passing in a parameter of 10

