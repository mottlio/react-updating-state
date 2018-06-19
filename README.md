# Modifying state

## Arrow functions in class definitions

- .this in an arrow function within a class definition will refer to the class (because of the arrow syntax)

```
setTimeout(() => {
      this.setState
    })
```