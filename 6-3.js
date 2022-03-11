const myProduct = getSumOfProducts(
    [[1,2],
    [1,1],
    [2,3]]
    )


function getSumOfProducts(nestedArr){
    let getSumOfProducts = 0;

    nestedArr.forEach((arr)=> {
        getSumOfProducts += arr[0] *arr[1];
        
    })

    return getSumOfProducts;
}





console.log("myProduct",myProduct);



// ## Exercise #3: Advanced

// **Aim**: Create a function that takes three collections of arguments and returns the sum of the product of the grouped numbers.

// _Examples_

// ```js
// product([[1,2],[1,1],[2,3]])    ➞    9
// // 1 * 2 + 1 * 1 + 2 * 3

// product([[10,2],[5,0],[2,3]])    ➞    26
// // 10 * 2 + 5 * 0 + 2 * 3

// product([[1,2],[2,3],[3,4]])   ➞    20
// // 1 * 2 + 2 * 3 + 3 * 4

// product([[1,2],[0,3],[3,0]])    ➞    2
// // 1 * 2 + 0 * 3 + 3 * 0
// ```

// function getSumOfProducts(nestedArr){
//     const productOne = nestedArr[0][0] * nestedArr[0][1];
//     const productTwo = nestedArr[1][0] * nestedArr[1][1];
//     const productThree = nestedArr[2][0] * nestedArr[2][1];

//     return productOne + productTwo + productThree;

//     console.log("productOne:",productOne);
// }