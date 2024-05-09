{
  const logString = (str: unknown) : string  => {
    if (typeof str === "string") {
       return str;
    } else {
       return  "Input is not a string";
    }
  };

 const stringPass= logString(" Hello ! TypeScript!");
 console.log(stringPass);
 
  const withOutString= logString(42);
  console.log(withOutString);
  
}
