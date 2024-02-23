// Practis problems //
//Problem 1: Write an arrow function that will take 3 paramiters, will multiply the parameters and will return the result 
const multiplyedParamiters = (n1,n2,n3) => n1 * n2 * n3;
console.log(multiplyedParamiters(10,20,30));
// Problem 2 : Write the following sentence in three lines and print the result: (I am a web developer . i live to code. i love to eat biryani.);
const sentence = `I am a web developer,
I live to code .
I love to eat biryani.`;
console.log(sentence);
// Problem 3 : Write an arrow function that will take 2 parameters one parameter will come form the other parameter will be a default parameter. add those tow parameters and return the result 
const sumParamiters = (n1,n2 = 1) => n1 + n2;
console.log(sumParamiters(10));
// Problem 4 : write an arrow function where it will do the following : 
// 1 It will take an array where the array elements will be the name of your friends
// 2 Check if the length of each element is even push elements with even length to a new array and return the result 
const myFrends = ["Rakibul","Hassan","Shehab","Mr.x"]
const findEventLength = (array) => {
    const evenArray = [];
    for (elem of array) {
        if (elem.length % 2 === 0) {
            evenArray.push (elem)
        }
    }
    return evenArray;
}
const friendsEvenName = findEventLength (myFrends);
console.log(friendsEvenName);
// Problem 5 : Write an arrow function where it will do the following x2;
// 1 Square each array Element
// 2Calculate the sum of the squared elements 
// 3 Return the average of the sum of the aquared elements 
const averageOfSum = (array) => {
    let sum = 0;
    const length = array.length;
    for (elem of array) {
        sum += (elem * elem) / length;
    }
    return sum;
}
const averageOfSumArrayElement = averageOfSum([10,20,30,40]);
console.log(averageOfSumArrayElement);
// Problem 6 : Write an arrow function where it will do the following :
// 1 It will take two array inputs
// 2 Combine the two arrays and assign them in new array 
// 3 find the maximum number form the new array and return the result 
const arr1 = [10,20,30,40,50];
const arr2 = [20,80,90,40,20,50];
const findMaximumOfCombinedArray = (array1,array2) => {
    const newArray = [...array1,...array2];
    const max = Math.max(...newArray);
    return max;
}
const maximum = findMaximumOfCombinedArray (arr1,arr2);
console.log(maximum)
