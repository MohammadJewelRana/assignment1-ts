{
    const reverseArray = <T>(arr: T[]): T[] => {
        const reverseNewArray = arr.reverse();
        return reverseNewArray;
      };
    
      const numberArray: number[] = [3, 45, 2, 54];
      const reverseNumberArray = reverseArray<number>(numberArray);
      console.log(reverseNumberArray);
    
      const stringArray: string[] = ["cherry", "banana", "apple"];
      const reverseStringArray = reverseArray<string>(stringArray);
      console.log(reverseStringArray);
}
