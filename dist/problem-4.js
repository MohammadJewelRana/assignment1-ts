"use strict";
{
    const reverseArray = (arr) => {
        const reverseNewArray = arr.reverse();
        return reverseNewArray;
    };
    const numberArray = [3, 45, 2, 54];
    const reverseNumberArray = reverseArray(numberArray);
    console.log(reverseNumberArray);
    const stringArray = ["cherry", "banana", "apple"];
    const reverseStringArray = reverseArray(stringArray);
    console.log(reverseStringArray);
}
