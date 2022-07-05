// console.log("lets start the Javascrip from begining To mystry");

// area Of Cricle ************************************************************

// let arr = [1, 2, 4, 5, 6, 7];
// const areaCircle = (radius) => {
//   let newArr = [];
//   radius.map((i) => {
//     newArr.push(Math.PI * i ** 2);
//   });
//   return newArr;
// };

// console.log(areaCircle(arr));

//************* Higher Order Function ******************************************* 

// Area and Circumfrence of a circle with a single function

// let arr = [1, 2, 4, 5, 6, 7];

// const circfCircle = (radius) => {
//   return Number((Math.PI * radius * radius).toFixed(2));
// };

// const areaCircle = (radius) => {
//   return Number((2 * Math.PI * radius).toFixed(2));
// };

// const cal = (radiusArr, callBack) => {
//   let resultArr = [];
//   for (let r = 0; r < radiusArr.length; r++) {
//     resultArr.push(callBack(radiusArr[r]));
//   }
//   return resultArr;
// };

// console.log(cal(arr, circfCircle));

// ********************Hoisting  (It depends only on global execution context  or simply execution context)
        /*  simply two phases have been created when we write code un javasript 
             > In First phase memory component is created known as memory enveronment where globally memory is allocated to the variables and 
                    for whole functions : But the values for varibled ar in this phase are undefined 
              
              >In Second phase code execution component simply code is executed and the memory whiich was allocated before is now filled with the 
                  exact vlued after code is run   
            
               NOTE : THIS IS ALL DONE WITH THE CALL STACK (or simply known as call stack ) : 
                there is only one global execution context which lies at the bottom of the call stack which contains the final result (values) and it is poped out
                  once the whole program is executed 
                > for each function thers created there own execution context after the global execution context   
        */



// *****************cohersion (Conversion of dataTypes )************************

// 1. EQuality 
  // (==) => It converts into similar data type 
  
  
  // console.log(32 == "32");  // true

  // funsctions of Arrays********************************

  // To find the length of the string using FOr in Loop


  // const  calLetters =(name) => {
  //   let length = 0
  //   for( letter in name ) {
  //     // console.log(Number(letter)+1)
  //     length = Number(letter)+1
  //   }
  //   return {length}
  // }

  // let string = prompt("write something");
  // console.log(calLetters(string))

  // console.log(string.length);  //replace above by this

  // **********sum Of Array ***********
// let arr = [1, 2, 3, 4, 5, 6, 7];

// const SumArr = (array) => {
//   let sum =0
//   for (let i = 0; i < array.length; i++) {
//     sum += arr[i]
//   }
//   return sum;
// };


// console.log(SumArr(arr))

// let arr = [1, 2, 3, 4, 5, 6, 7];

// const SumArr = (array) => {
//   let sum = 0;
//   for (letter of array) {
//     sum += letter
//   }
//   return sum;
// };

// console.log(SumArr(arr), "arrrr");

// ==================================== semiColon seperated js statments even in one line 

// a = 5; b = 6; c = a + b; console.log(c)

// how call stack works 
var x = 10

a()
b()
console.log(x)

function a () {
  var x = 11
  console.log(x)
}

function b() {
  var x = 11;
  console.log(x);
}

