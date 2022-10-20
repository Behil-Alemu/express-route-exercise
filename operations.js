

function mean(numbers){
    let sum = 0
    for (let number of numbers) {
        sum += number;
    }
    return sum / numbers.length;
}


function median(numbers){
    const half = Math.floor(numbers.length / 2)
    numbers.sort((a, b) => a - b);
    if (numbers.length % 2)
        return numbers[half]

    return (numbers[half - 1] + numbers[half]) / 2.0;

}



function findMode(array) {
    // This function starts by creating an object where the keys are each unique number of the array and the values are the amount of times that number appears in the array.
  
    let object = {}
  
    for (let i = 0; i < array.length; i++) {
      if (object[array[i]]) {
        // increment existing key's value
        object[array[i]] += 1
      } else {
        // make a new key and set its value to 1
        object[array[i]] = 1
      }
    }
  
    // assign a value guaranteed to be smaller than any number in the array
    let biggestValue = -1
    let biggestValuesKey = -1
  
    // finding the biggest value and its corresponding key
    Object.keys(object).forEach(key => {
      let value = object[key]
      if (value > biggestValue) {
        biggestValue = value
        biggestValuesKey = key
      }
    })
  
    return biggestValuesKey
  
  }




// arr = [1,1,1,6,2,3,4];

// mapping = {};
// counter = 0
// for(var i = 0;i < arr.length; i++){
//     if (!mapping[arr[i]]) mapping[arr[i]] = 0;
//     mapping[arr[i]] += 1
// }

// console.log(mapping)

function changeToNum(arrStr){
  arr = []
  for(let i in arrStr){
    let valToNumber = Number(arrStr[i]);
    arr.push(valToNumber)
  }
  return arr
}

console.log(changeToNum(['1','2']))


module.exports = { findMode, mean, median, changeToNum };

