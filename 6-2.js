


function reversibleInclusiveList(num1,num2){
    const inclusiveList = [];

    for (let i=num1; i <= num2; i++) {
        inclusiveList.push(i);
    }
        return inclusiveList;
                
};

// function reversibleInclusiveList(num1, num2) {
//     const inclusiveList = [];
//     if (num2 > num1) {
//         let i = num2; i <= num1; i--;
//     } else {
//         let i = num1; i <= num2; i++;
//     }
//     return inclusiveList;
// }




// reversibleInclusiveList(1, 5)    ➞    [1, 2, 3, 4, 5]
const listOne = reversibleInclusiveList(1,5);
console.log("listOne",listOne);

// reversibleInclusiveList(2, 8)    ➞    [2, 3, 4, 5, 6, 7, 8]
const listTwo = reversibleInclusiveList(2,8);
console.log("listTwo", listTwo);

// reversibleInclusiveList(10, 20)    ➞   [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
const listThree = reversibleInclusiveList(10,20);
console.log("listThree", listThree);
// reversibleInclusiveList(24, 17)    ➞   [24, 23, 22, 21, 20, 19, 18, 17]
const listFour = reversibleInclusiveList(24,17);
console.log("listFour", listFour);