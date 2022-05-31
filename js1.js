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

// Higher Order Function ******************************************* Area and Circumfrence of a circle with a single function

let arr = [1, 2, 4, 5, 6, 7];

const circfCircle = (radius) => {
  return Number((Math.PI * radius * radius).toFixed(2));
};

const areaCircle = (radius) => {
  return Number((2 * Math.PI * radius).toFixed(2));
};

const cal = (radiusArr, callBack) => {
  let resultArr = [];
  for (let r = 0; r < radiusArr.length; r++) {
    resultArr.push(callBack(radiusArr[r]));
  }
  return resultArr;
};

console.log(cal(arr, circfCircle));
