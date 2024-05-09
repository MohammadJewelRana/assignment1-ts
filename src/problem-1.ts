{
//problem 1
  type RepeatString = (str: string, num: number) => string;

  const repeatString: RepeatString = (str, num): string => {
    let newString = "";
    for (let index = 0; index < num; index++) {
      // console.log(index);
      newString = newString + str;
    }
    return newString;
  };

  const res = repeatString("Hello!", 5);
  console.log(res);
  
}
