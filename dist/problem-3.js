"use strict";
{
    const filterEvenNumbers = (numberArray) => {
        let evenArray = [];
        for (let index = 0; index < numberArray.length; index++) {
            const element = numberArray[index];
            // console.log(element);
            if (element % 2 == 0) {
                evenArray.push(element);
            }
        }
        return evenArray;
    };
    const numbers = [1, 2, 3, 4, 5, 6, 12, 13, 17, 21, 26];
    const res = filterEvenNumbers(numbers);
    console.log(res);
}
