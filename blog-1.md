
# The significance of union and intersection types in Typescript:

 


## Union Type

A union type in typescript as like an OR . It is denoted by ( | ). It is used when a value can be many types. Like string, number, Boolean, any, unknown etc. are so many types. By using this we can set a different daa types, different function return type, error handling and so on.
Error handling: When a function maybe return a number or string then we can use this.So error will be gone.Otherwise its only take one return type.But using this Union we can easily return multi type.

Flexible parameter: it is useful when a function can accept multiple type.


## Usage/Examples

```javascript
  type Frontend = "new developer" | "senior developer";
  type FullStack = "Frontend" | "Expert";
  type Developer = Frontend | FullStack;
  const newDeveloper: Frontend = "junior developer";
  
```

## Intersection type
It allows to combine multiple type in one. The new type has all features of all existing types. Its denoted by (&).
Its combine multiple functionality,also creating multiple types.


## Usage/Examples

```javascript
 type FrontendDeveloper = {
    skills: string[];
    designation: "Frontend Developer";
  };
  type BackendDeveloper = {
    skills: string[];
    designation2: "Backend Developer";
  };

  type FullStackDeveloper = FrontendDeveloper & BackendDeveloper;
  const fullStack: FullStackDeveloper = {
    skills: ["Html", "Express"],
    designation: "Frontend Developer",
    designation2: "Backend Developer",
  };
  
```