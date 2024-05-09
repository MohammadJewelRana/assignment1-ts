{
  const findLargestNumber = (numberArray: number[]): number => {
  
    let max = numberArray[0];
    for (let index = 0; index < numberArray.length; index++) {
        const element = numberArray[index];
      if (element > max) {
        max = element;
      }
    }
    return max;
  };

  const largestNumber = findLargestNumber([5, 6, 1, 12, 40, 20, 0, 2]);
  console.log(largestNumber);
}
