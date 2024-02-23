// Problem 1: You have an odd array [1,3,5,7,9]. Now convert this array into an even array output : [2,4,6,8,10]. Do this using for loop & array.map () PaymentMethodChangeEvent 
const oddArray = [1,3,5,7,9];
const evenArray = oddArray.map (value => value + 1);
console.log(evenArray)

// Problem 2: You are given an array say :[33,50,79,78,90,101,30]. Now return all the element which are divisible by 10 using array.filter () Method 
const randomArray = [33,50,79,78,90,101,30];
const divisibleByTen = randomArray.filter ((value) => value % 10 === 0);
console.log(divisibleByTen)
// Problem 3: You have an array of objects:
// const instructor = [
//     {name : "Nodi",age : 28, position :"Senior"},
//     {name : "Akil",age : 26, position :"Junior"},
//     {name : "Shobuj",age : 30, position :"Senior"}
// ];
// Your task is to display the instructor names that has the position senior using filter
const instructor = [
    {name : "Nodi",age : 28, position :"Senior"},
    {name : "Akil",age : 26, position :"Junior"},
    {name : "Shobuj",age : 30, position :"Senior"}
];
const seniorInstructors = instructor.filter ((item) => item.position === "Senior");
console.log(seniorInstructors)

// Problem 4: 
// const people = [
//     {name : "Meena",age : 20},
//     {name : "Rina",age : 15},
//     {name : "Suchorita",age : 22}
// ];
// (1) => Follow above array of objects. So you have 3 objects as array Element. Can you find out the total sum form here 20 + 15 + 22. the output will be 57
// using reduce () mehtod
const people = [
    {name : "Meena",age : 20},
    {name : "Rina",age : 15},
    {name : "Suchorita",age : 22}
];
const sumOfAge = people.reduce((prev,curr) =>{
  return  prev + curr.age
},0);
console.log(sumOfAge)