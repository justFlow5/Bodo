export let javascript = [{
    text: 'What is Coercion in JavaScript?',
    answer: {
      title: `Type coercion is the process of converting value from one type to another (such as string to number, object to boolean, and so on). Any type, be it primitive or an object, is a valid subject for type coercion. To recall, primitives are: number, string, boolean, null, undefined + Symbol (added in ES6). Type coercion can be explicit and implicit.`,
      par1: `When a developer expresses the intention to convert between types by writing the appropriate code, like Number(value), it’s called explicit type coercion (or type casting).`,
      par2: `Since JavaScript is a weakly-typed language, values can also be converted between different types automatically, and it is called implicit type coercion. It usually happens when you apply operators to values of different types, like
      1 == null, 2/’5', null + new Date(), or it can be triggered by the surrounding context, like with if (value) {…}, where value is coerced to boolean.`,
      par3: `Implicit type coercion is a double edge sword: it’s a great source of frustration and defects, but also a useful mechanism that allows us to write less code without losing the readability.`
    },
    note: '',
    level: 'junior',
    known: false,
    language: 'javascript',
  },

  {
    text: 'What is Scope in JavaScript? ',
    answer: {
      title: `Scope in JavaScript refers to the current context of code, which determines the accessibility of variables to JavaScript. The two types of scope are local and global`,
      par1: `Global variables are those declared outside of a block`,
      par2: `Local variables are those declared inside of a block`,
      par3: `Using local scope, we can actually create new variables with the same name as a variable in an outer scope without changing or reassigning the original value.`,
      par4: `Variables declared with the var keyword are always function-scoped, meaning they recognize functions as having a separate scope. This locally-scoped variable is therefore not accessible from the global scope.`,
      par5: `The new keywords let and const, however, are block-scoped. This means that a new, local scope is created from any kind of block, including function blocks, if statements, and for and while loops.`
    },
    note: '',
    level: 'junior',
    known: false,
    language: 'javascript',
  },

  {
    text: 'Explain equality in JavaScript.',
    answer: {
      title: 'The equality operator converts the operands if they are not of the same type, then applies strict comparison. If both operands are objects, then JavaScript compares internal references which are equal when operands refer to the same object in memory.'
    },
    note: '',
    level: 'junior',
    known: false,
    language: 'javascript',
  },

  {
    text: 'Write the errors shown in JavaScript ?',
    answer: {
      title: `There are three different types of errors in JavaScript.`,
      par1: `Syntax error: A syntax error is an error in the syntax of a sequence of characters or tokens that are intended to be written in a particular programming language.`,
      par2: `Logical error: It is the most difficult error to be traced as it is the error on the logical part of the coding or logical error is a bug in a program that causes to operate incorrectly and terminate abnormally.`,
      par3: `Runtime Error: A runtime error is an error that occurs during the running of the program, also known as the exceptions.`,

    },
    note: '',
    level: 'junior',
    known: false,
    language: 'javascript',
  },

  {
    text: 'What is the difference between innerHTML & innerText ?',
    answer: {
      title: 'The innerText property sets or returns the text content as plain text of the specified node, and all its descendants whereas the innerHTML property sets or returns the plain text or HTML contents in the elements. Unlike innerText, inner HTML lets you work with HTML rich text and doesn’t automatically encode and decode text.'
    },
    note: '',
    level: 'junior',
    known: false,
    language: 'javascript',
  },

  {
    text: 'How many ways an HTML element can be accessed in a JavaScript code ?',
    answer: {
      title: `There are four possible ways to access HTML element in JavaScript which are:`,
      par1: `getElementById() Method: It is used to get the element by its id name.`,
      par2: `getElementsByClass() Method: It is used to get all the elements that have the given classname.`,
      par3: `getElementsByTagName() Method: It is used to get all the elements that have the given tag name.`,
      par4: `querySelector() Method: This function takes css style selector and returns the first selected element.`,

    },
    note: '',
    level: 'junior',
    known: false,
    language: 'javascript',
  },

  {
    text: 'What is typeof operator?',
    answer: {
      title: `The typeof operator is used to get the data type (returns a string) of its operand. The operand can be either a literal or a data structure such as a variable, a function, or an object. The operator returns the data type.`,
      par1: `There are six possible values that typeof returns: object, boolean, function, number, string, and undefined. `,

    },
    note: '',
    level: 'junior',
    known: false,
    language: 'javascript',
  },

  {
    text: 'What is the object type?',
    answer: {
      title: `Objects, in JavaScript, is it’s most important data-type and forms the building blocks for modern JavaScript. These objects are quite different from JavaScript’s primitive data-types(Number, String, Boolean, null, undefined and symbol) in the sense that while these primitive data-types all store a single value each (depending on their types).`,
      par1: `Objects are more complex and each object may contain any combination of these primitive data-types as well as reference data-types.`,
      par2: `An object, is a reference data type. Variables that are assigned a reference value are given a reference or a pointer to that value. That reference or pointer points to the location in memory where the object is stored. The variables don’t actually store the value.`,
      par3: `Loosely speaking, objects in JavaScript may be defined as an unordered collection of related data, of primitive or reference types, in the form of “key: value” pairs. These keys can be variables or functions and are called properties and methods, respectively, in the context of an object`,
      par4: `An object can be created with figure brackets {…} with an optional list of properties. A property is a “key: value” pair, where a key is a string (also called a “property name”), and value can be anything.`,

    },
    note: '',
    level: 'junior',
    known: false,
    language: 'javascript',
  },

  {
    text: 'Explain arrays in JavaScript.',
    answer: {
      title: `In JavaScript, array is a single variable that is used to store different elements. It is often used when we want to store list of elements and access them by a single variable. Unlike most languages where array is a reference to the multiple variable, in JavaScript array is a single variable that stores multiple elements.`,
      par1: `An array in JavaScript can hold different elements.
      We can store Numbers, Strings and Boolean in a single array.`,
      par2: `Array in JavaScript are indexed from 0 `,
      par3: `Length property of an Array returns the length of an Array. Length of an Array is always one more than the highest index of an Array.`,


    },
    note: '',
    level: 'junior',
    known: false,
    language: 'javascript',
  },

  {
    text: 'Explain Values and Types in JavaScript.',
    answer: {
      title: `There are two kinds of types in JavaScript: primitive types and reference types. There are, correspondingly, two kinds of data values that can be stored in variables, passed as arguments, returned by methods, and operated on: primitive values and reference values.`,
      par1: `JavaScript's primitive data types are boolean, number, and undefined; its reference types are string, object (including the null object), and function. Strings compare by value (ASCII lexicographical order), not reference, when used as operands of the equality and relational operators.`,
      par2: `The boolean type has the truth values true and false. A number can be either an integer or floating-point; JavaScript does not explicitly distinguish between them. The integer bitwise-logical and shift operators work with 32-bit signed two's-complement integers. Floating-point numbers are in 64-bit IEEE 754 format.`,
      par3: `An object in JavaScript is a container that associates names and indexes with data of arbitrary type. These associations are called properties. Properties with function values are called the object's methods.`,
      par4: `Each type has a corresponding object class: Boolean, Number, String, Object, and Function. JavaScript converts values to objects by constructing an object of the corresponding class for the value's type.`,

    },
    note: '',
    level: 'junior',
    known: false,
    language: 'javascript',
  },

  {
    text: 'Explain Null and Undefined in JavaScript.',
    answer: {
      title: `In JavaScript there are only six falsy values. Both null and undefined are two of the six falsy values.`,
      par1: `null is an empty or non-existent value.`,
      par2: `null must be assigned`,
      par3: `Undefined most typically means a variable has been declared, but not defined.`,
      par4: `null and undefined are both primitives. However an error shows that typeof null = object`,
      par5: `null !== undefined but null == undefined`,
    },
    note: '',
    level: 'junior',
    known: false,
    language: 'javascript',
  },


  {
    text: 'What is strict mode?',
    answer: {
      title: `Strict Mode was a new feature in ECMAScript 5 that allows you to place a program, or a function, in a “strict” operating context. This strict context prevents certain actions from being taken and throws more exceptions. The statement “use strict”; instructs the browser to use the Strict mode, which is a reduced and safer feature set of JavaScript.`,
      par1: `Strict mode eliminates some JavaScript silent errors by changing them to throw errors.`,
      par2: `Strict mode fixes mistakes that make it difficult for JavaScript engines to perform optimizations: strict mode code can sometimes be made to run faster than identical code that’s not strict mode.`,
      par3: `It prevents, or throws errors, when relatively “unsafe” actions are taken (such as gaining access to the global object).`,
      par4: `It disables features that are confusing or poorly thought out.`,

    },
    note: '',
    level: 'junior',
    known: false,
    language: 'javascript',
  },

  {
    text: 'What is a Polyfill?',
    answer: {
      title: `A polyfill is a piece of code (usually JavaScript on the Web) used to provide modern functionality on older browsers that do not natively support it.`
    },
    note: '',
    level: 'junior',
    known: false,
    language: 'javascript',
  },

  {
    text: 'What is let keyword in JavaScript?',
    answer: {
      title: `The let keyword is used to declare variables in JavaScript.`,
      par1: `let allows you to declare variables that are limited to a scope of a block statement, or expression on which it is used, unlike the var keyword, which defines a variable globally, or locally to an entire function regardless of block scope. `,
      par2: `The other difference between var and let is that the latter is initialized to a value only when a parser evaluates it (see below).`,
      par3: `Just like const the let does not create properties of the window object when declared globally (in the top-most scope).`,


    },
    note: '',
    level: 'junior',
    known: false,
    language: 'javascript',
  },





  {
    text: 'What language constructions do you use for iterating over object properties and array items?',
    answer: '',
    note: '',
    level: 'junior',
    known: false,
    language: 'javascript',
  },

  ,
  {
    text: 'What are some of the advantages/disadvantages of writing JavaScript code in a language that compiles to JavaScript? ',
    answer: {
      title: `The let keyword is used to declare variables in JavaScript.`,
      par1: `let allows you to declare variables that are limited to a scope of a block statement, or expression on which it is used, unlike the var keyword, which defines a variable globally, or locally to an entire function regardless of block scope. `,
      par2: `The other difference between var and let is that the latter is initialized to a value only when a parser evaluates it (see below).`,
      par3: `Just like const the let does not create properties of the window object when declared globally (in the top-most scope).`,


    },
    note: '',
    level: 'junior',
    known: false,
    language: 'javascript',
  },

  {
    text: 'What is the difference between `==` and `===`?',
    answer: {
      title: `Since JavaScript support both strict equality and type-converting equality, it's important to know which operator is used for which operation. `,
      par1: `"==" operator is known as type coercion operator and anytime if both values are same and compared using == operator, type coercion happens. On the other hand === is known as strictly equality operator. `,
      par2: `the ‘===’ operator tests for strict equality i.e it will not do the type conversion hence if the two values are not of the same type, when compared, it will return false.`,
      par3: `In general “===” operator is recommended since it never does type conversion we are doing an exact comparison thus it always produces correct results.`,


    },
    note: '',
    level: 'junior',
    known: false,
    language: 'javascript',
  },



  {
    text: 'How to compare two objects in JavaScript?',
    answer: {
      title: `It’s easy to compare objects for equality, but not so easy to tell if they contain the same values.`,
      par1: `"==" operator is known as type coercion operator and anytime if both values are same and compared using == operator, type coercion happens. On the other hand === is known as strictly equality operator. `,
      par2: `the ‘===’ operator tests for strict equality i.e it will not do the type conversion hence if the two values are not of the same type, when compared, it will return false.`,
      par3: `In general “===” operator is recommended since it never does type conversion we are doing an exact comparison thus it always produces correct results.`,


    },
    note: '',
    level: 'mid',
    known: false,
    language: 'javascript',
  },

  {
    text: 'What is the difference between anonymous and named functions?',
    answer: {
      title: `Anonymous functions are function expressions, and thus we can pass them as variables and return functions. When used as IIFE, they are used to maintain scope.`,
      par1: `Anonymous functions are function expressions, and thus we can pass them as variables and return functions. When used as IIFE, they are used to maintain scope.`,
      par2: `Anonymous functions are functions without a name. There are a couple of ways to create anonymous functions however they are all created on application runtime. `,
      par3: `One of the more famous use cases for anonymous functions are Immediately Invokable Function Expressions (IIFE). IIFE, for short, is a pattern that uses an anonymous function which immediately creates and invokes the contents of the function.`,


    },
    note: '',
    level: 'mid',
    known: false,
    language: 'javascript',
  },

  {
    text: 'Describe closure concept in JavaScript as best as you could.',
    answer: {
      title: `A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives you access to an outer function’s scope from an inner function. In JavaScript, closures are created every time a function is created, at function creation time.`,
      par1: `To use a closure, define a function inside another function and expose it. To expose a function, return it or pass it to another function.`,
      par2: `The inner function will have access to the variables in the outer function scope, even after the outer function has returned.`,
      par3: `Among other things, closures are commonly used to give objects data privacy. Data privacy is an essential property that helps us program to an interface, not an implementation. This is an important concept that helps us build more robust software because implementation details are more likely to change in breaking ways than interface contracts.`,
      par4: `In JavaScript, closures are the primary mechanism used to enable data privacy. When you use closures for data privacy, the enclosed variables are only in scope within the containing (outer) function. You can’t get at the data from an outside scope except through the object’s privileged methods. In JavaScript, any exposed method defined within the closure scope is privileged.`,


    },
    note: '',
    level: 'mid',
    known: false,
    language: 'javascript',
  },



  {
    text: 'What is IIFEs (Immediately Invoked Function Expressions)?',
    answer: {
      title: `An Immediately-invoked Function Expression (IIFE for friends) is a way to execute functions immediately, as soon as they are created.`,
      par1: `IIFEs are very useful because they don’t pollute the global object, and they are a simple way to isolate variables declarations.`,
      par2: `We can make any function expression an IIFE by wrapping it in parentheses, and adding a following pair of parentheses at the end. The parentheses surrounding the function definition lets JavaScript know that it will process a function expression. The last pair of parentheses invoke the function.`,
    },
    note: '',
    level: 'mid',
    known: false,
    language: 'javascript',
  },

  {
    text: `What's the difference between using “let” and “var” to declare a variable in ES6?`,
    answer: {
      title: `Main difference is scoping rules.`,
      par1: ` A variable defined using a var statement is known throughout the function it is defined in, from the start of the function.`,
      par2: `A variable defined using a let statement is only known in the block it is defined in, from the moment it is defined onward.`,
    },
    note: '',
    level: 'mid',
    known: false,
    language: 'javascript',
  },

  {
    text: 'When should You use Arrow functions in ES6?',
    answer: {
      title: `Why use arrow functions almost everywhere?`,
      par1: `Scope safety: When arrow functions are used consistently, everything is guaranteed to use the same thisObject as the root. If even a single standard function callback is mixed in with a bunch of arrow functions there's a chance the scope will become messed up.`,
      par2: `Compactness: Arrow functions are easier to read and write.`,
      par3: `Clarity: When almost everything is an arrow function, any regular function immediately sticks out for defining the scope. A developer can always look up the next-higher function statement to see what the thisObject is.`,
      par4: `One of the primary usecases for arrow functions in JavaScript, is for functions that get applied over and over again to items in a list. For example, if you have an array of values that you want to transform using a map, an arrow function is ideal.`,
      par5: `Another place arrow functions make for cleaner and more intuitive code is in managing asynchronous code. Promises make it far easier to manage async code. However, while using promises still requires defining functions that run after your asynchronous code or call completes. This is an ideal location for an arrow function, especially if your resulting function is stateful, referencing something in your object.`,
    },
    note: '',
    level: 'mid',
    known: false,
    language: 'javascript',
  },

  {
    text: 'What is the motivation for bringing Symbols to ES6?',
    answer: {
      title: 'They are known as unique symbols and their only intended use is to avoid name clashes between properties. For example, ECMAScript itself can now introduce extension hooks via certain methods that you can put on objects (e.g. to define their iteration protocol) without risking them to clash with user names.'
    },
    note: '',
    level: 'mid',
    known: false,
    language: 'javascript',
  },

  {
    text: 'What are the benefits of using spread syntax in ES6 and how is it different from rest syntax? ',
    answer: {
      title: `Why use arrow functions almost everywhere?`,
      par1: `Copying an array.
      The traditional way was to use the Array.prototype.slice()method. But with the spread operator, it just takes three dots …`,
      par2: `Concatenating arrays. This objective was previously achieved by using the Array.prototype.concat() method. Now it can be easily achieved using the spread operator.`,
      par3: `Spreading elements together with an individual element`,
      par4: `Spreading elements on function calls. `,
      par5: `Spread syntax for object literals. The traditional way of achieving this was by using the Object.assign() method.
      The Object.assign() method can be used to copy the values of all enumerables’ own properties from one or more source objects to a target object, and it will return the target object.
      But with the spread operator, three dots simply get the job done.`,
      par6: `It is a collection of all remaining elements (hence, the name rest, as in “the rest of the elements”) into an array. Spread operator is the opposite to rest parameter, where rest parameter collects items into an array, the spread operator unpacks the collected elements into single elements.`,
    },
    note: '',
    level: 'mid',
    known: false,
    language: 'javascript',
  },

  {
    text: 'What is the definition of a higher-order function?',
    answer: {
      title: 'A higher order function is a function that takes a function as an argument, or returns a function. Higher order function is in contrast to first order functions, which don’t take a function as an argument or return a function as output.'
    },
    note: '',
    level: 'mid',
    known: false,
    language: 'javascript',
  },





  {
    text: 'What is generator in JS?',
    answer: ' A generator-function is defined like a normal function, but whenever it needs to generate a value, it does so with the yield keyword rather than return. The yield statement suspends function’s execution and sends a value back to caller, but retains enough state to enable function to resume where it is left off. When resumed, the function continues execution immediately after the last yield run.',
    note: '',
    level: 'mid',
    known: false,
    language: 'javascript',
  },

  {
    text: 'When should we use generators in ES6?',
    answer: {
      title: `There are many awesome use cases of generators.`,
      par1: `When you implement an iterator, you have to manually make an iterator object with a next() method. Also, you have to manually save the state. Often times, it becomes really hard to do that. Since generators are also iterables, they can be used to implement iterables without the extra boilerplate code. `,
      par2: `Generators can also receive values using the next(val) function. Then the generator is called an observer since it wakes up when it receives new values. In a sense, it keeps observing for values and acts when it gets one.`,
      par3: `Ifinite Data Streams.
      It’s possible to create generators that never end.`,
    },
    note: '',
    level: 'mid',
    known: false,
    language: 'javascript',
  },

  {
    text: 'What is Hoisting in JavaScript?',
    answer: {
      title: `Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution.`,
      par1: `Functions declarations go to the very top, so will sit above all of the variable declarations.`,

    },
    note: '',
    level: 'mid',
    known: false,
    language: 'javascript',
  },



  {
    text: 'What does the term "Transpiling" stand for?',
    answer: {
      title: `There's no way to polyfill new syntax that has been added to the language. So the better option is to use a tool that converts your newer code into older code equivalents. This process is commonly called transpiling, a term for transforming + compiling.`,
      par1: `Typically you insert the transpiler into your build process, similar to your code linter or your minifier. There are quite a few great transpilers for you to choose from: Babel (Transpiles ES6+ into ES5) and Traceur (Transpiles ES6, ES7, and beyond into ES5)`,
      par2: `In other words: Transpilers, or source-to-source compilers, are tools that read source code written in one programming language, and produce the equivalent code in another language. Languages you write that transpile to JavaScript are often called compile-to-JS languages, and are said to target JavaScript.`
    },
    answer: '',
    note: '',
    level: 'mid',
    known: false,
    language: 'javascript',
  },


  {
    text: 'Can you describe the main difference between a `.forEach` loop and a `.map()` loop and why you would pick one versus the other?',
    answer: {
      title: `Both of these functions were introduced in ECMA2016`,
      par1: `forEach() — executes a provided function once for each array element.`,
      par2: `forEach() method doesn’t actually return anything (undefined). It simply calls a provided function on each element in your array. This callback is allowed to mutate the calling array.`,
      par3: `forEach() may be preferable when you’re not trying to change the data in your array, but instead want to just do something with it — like saving it to a database or logging it out.`,
      par4: `map() — creates a new array with the results of calling a provided function on every element in the calling array.`,
      par5: `the map() method will also call a provided function on every element in the array. The difference is that map() utilizes return values and actually returns a new Array of the same size.`,
      par5: `map() might be preferable when changing or altering data. Not only is it faster but it returns a new Array. This means we can do cool things like chaining on other methods ( map(), filter(), reduce(), etc.)`,

    },
    note: '',
    level: 'mid',
    known: false,
    language: 'javascript',
  },

  {
    text: 'What does the && operator do?',
    answer: {
      title: `The AND operator is represented with two ampersands &&. AND “&&” finds the first falsy value`,
      par1: `Evaluates operands from left to right.`,
      par2: `For each operand, converts it to a boolean. If the result is false, stops and returns the original value of that operand.`,
      par3: `If all operands have been evaluated (i.e. all were truthy), returns the last operand.`,
      par4: `In other words, AND returns the first falsy value or the last value if none were found.      `,


    },
    note: '',
    level: 'junior',
    known: false,
    language: 'javascript',
  },

  {
    text: 'What does the || operator do?',
    answer: {
      title: `Logical operators OR. Although it's called “logical”, it can be applied to values of any type, not only boolean. Their result can also be of any type. OR “||” finds the first truthy value`,
      par1: ` OR evaluates operands from left to right.`,
      par2: `For each operand, converts it to boolean. If the result is true, stops and returns the original value of that operand.`,
      par3: ` If all operands have been evaluated (i.e. all were false), returns the last operand.`,


    },
    note: '',
    level: 'junior',
    known: false,
    language: 'javascript',
  },

  {
    text: 'What is the DOM?',

    answer: {
      title: `The Document Object Model, or the “DOM”, is an interface to web pages. It is essentially an API to the page, allowing programs to read and manipulate the page’s content, structure, and styles.`,
      par1: `Although similar to other forms of the source HTML document, the DOM is different in a number of ways.`,
      par2: `It is always valid HTML.`,
      par3: ` It is a living model that can be modifed by Javascript.`,
      par4: `It doesn't include pseudo-elements (e.g. ::after). `,
      par5: `It does include hidden elements (e.g. with display: none).`,

    },
    note: '',
    level: 'junior',
    known: false,
    language: 'javascript',
  },

  {
    text: 'What is Event Propagation?',
    answer: {
      title: `Event propagation is a mechanism that defines how events propagate or travel through the DOM tree to arrive at its target and what happens to it afterward. In modern browser event propagation proceeds in two phases: capturing, and bubbling phase.`,
      par1: `With bubbling, the event is first captured and handled by the innermost element and then propagated to outer elements.`,
      par2: `With capturing, the event is first captured by the outermost element and propagated to the inner elements.`,
    },
    note: '',
    level: 'junior',
    known: false,
    language: 'javascript',
  },

  {
    text: `What's Event Bubbling?`,
    answer: {
      title: `Event bubbling and capturing are two ways of event propagation in the HTML DOM API, when an event occurs in an element inside another element, and both elements have registered a handle for that event. The event propagation mode determines in which order the elements receive the event.`,
      par1: `With bubbling, the event is first captured and handled by the innermost element and then propagated to outer elements.`,
      par2: `We can use the addEventListener(type, listener, useCapture) to register event handlers for in either bubbling (default) or capturing mode. To use the bubbling model pass the third argument as false.`,
    },
    note: '',
    level: 'junior',
    known: false,
    language: 'javascript',
  },

  {
    text: `What's Event Capturing?`,
    answer: {
      title: `Event bubbling and capturing are two ways of event propagation in the HTML DOM API, when an event occurs in an element inside another element, and both elements have registered a handle for that event. The event propagation mode determines in which order the elements receive the event.`,
      par1: `With capturing, the event is first captured by the outermost element and propagated to the inner elements.`,
      par2: `We can use the addEventListener(type, listener, useCapture) to register event handlers for in either bubbling (default) or capturing mode. To use the bubbling model pass the third argument as true.`
    },
    note: '',
    level: 'junior',
    known: false,
    language: 'javascript',
  },

  {
    text: `What's the difference between event.preventDefault() and event.stopPropagation() methods?`,
    answer: {
      title: `Event propagation is a mechanism of how events propagate through the DOM tree to arrive at its target.`,
      par1: `Event Propagation has three phases: Capturing Phase (the event starts from the window down until it reaches the event.target),
      Target Phase (the event has reached the event.target)
      Bubling Phase (the event bubbles up from the event.target element up until it reaches the window).`,
      par2: `The event.preventDefault() method prevents the default behavior of an element. If we use form element it prevents form submitting. If we use a href element it prevents navigating. If we use contextMenu element it prevents displaying.`,
      par3: `The event.stopPropagation() method stops the propagation of an event from occurring in the bubbling or capturing phase.`,


    },
    note: '',
    level: 'junior',
    known: false,
    language: 'javascript',
  },

  {
    text: 'What is event.target ?',
    answer: {
      title: `The target event property returns the element that triggered the event.`,
      par1: `The target property gets the element on which the event originally occurred, opposed to the currentTarget property, which always refers to the element whose event listener triggered the event.`,



    },
    note: '',
    level: 'junior',
    known: false,
    language: 'javascript',
  },

  {
    text: 'What is event.currentTarget?',
    answer: {
      title: `The currentTarget event property returns the element whose event listeners triggered the event.`,
      par1: `This is particularly useful during capturing and bubbling.`,
      par2: `The currentTarget property always refers to the element whose event listener triggered the event, opposed to the target property, which returns the element that triggered the event.`,


    },
    note: '',
    level: 'junior',
    known: false,
    language: 'javascript',
  },

  {
    text: 'Why does it return false when comparing two similar objects in JavaScript?',
    answer: {
      title: `Equality sign (===) doesn't check that both objects have the same property keys and values. Instead, it checks that the two objects occupy the same place in memory.`,
      par1: `Hence, when we declare a it is given a place in memory. When we assign a to b, we are not declaring a new object, rather we are telling b that its value is in the same location as a. So essentially, when we do a === b, it returns true because we are essentially doing a === a (which is obviously going to be true).`,
      par2: `However, when we take a (its value being { name: 'simple object' }) and compare it to a new object that looks the same (a === c), we get false. The reason this happens is that the object we assigned to c occupies a different place in memory than a. Therefore, when === tries to check if the two objects are the same place in memory, it returns false because they are in different places in memory.`,


    },
    note: '',
    level: 'junior',
    known: false,
    language: 'javascript',
  },

  {
    text: 'What are the falsy values in JavaScript?',
    answer: 'A falsy value is something which evaluates to FALSE, for instance when checking a variable. There are only six falsey values in JavaScript: undefined, null, NaN, 0, "" (empty string), and false of course.',
    note: '',
    level: 'junior',
    known: false,
    language: 'javascript',
  },

  {
    text: `What's the value of this in JavaScript?`,
    answer: {
      title: `The JavaScript this keyword refers to the object it belongs to. It has different values depending on where it is used.`,
      par1: `In a method, this refers to the owner object.`,
      par2: `Alone, this refers to the global object.`,
      par3: `In a function, this refers to the global object.`,
      par4: `In a function, in strict mode, this is undefined.`,
      par5: `In an event, this refers to the element that received the event.`,
      par6: `Methods like call(), and apply() can refer this to any object.`,

    },
    note: '',
    level: 'junior',
    known: false,
    language: 'javascript',
  },

  {
    text: `What's the difference between var, let and const keywords?`,
    answer: {
      title: `In Javascript one can define variables using the keywords var, let, const`,
      par1: `VAR: the JavaScript variables statement is used to declare a variable and, optionally, we can initialize the value of that variable. Variable declarations are processed before the execution of the code. The scope of a JavaScript variable declared with var is its current execution context. The scope of a JavaScript variable declared outside the function is global.`,
      par2: `LET: the let statement declares a local variable in a block scope. It is similar to var, in that we can optionally initialize the variable. The let statement allows you to create a variable with the scope limited to the block on which it is used. It is similar to the variable we declare in other languages like Java, .NET, etc.`,
      par3: `CONST: const statement values can be assigned once and they cannot be reassigned. The scope of const statement works similar to let statements.`,

    },
    note: '',
    level: 'junior',
    known: false,
    language: 'javascript',
  },

  {
    text: 'What are Template Literals?',
    answer: {
      title: `Template literals are enclosed by the backtick (\`
      \`) character instead of double or single quotes.`,
      par1: `Template literals can contain placeholders. These are indicated by the dollar sign and curly braces (\${expression}). The expressions in the placeholders and the text between the backticks (\`
      \`) get passed to a function.`,
      par2: `The default function just concatenates the parts into a single string. If there is an expression preceding the template literal (tag here), this is called a tagged template. In that case, the tag expression (usually a function) gets called with the template literal, which you can then manipulate before outputting.`,

    },
    note: '',
    level: 'junior',
    known: false,
    language: 'javascript',
  },

  {
    text: 'What is Object Destructuring?',
    answer: {
      title: `Destructuring is a JavaScript expression that allows us to extract data from arrays, objects, and maps and set them into new, distinct variables. Destructuring allows us to extract multiple properties, or items, from an array​ at a time.`,
      par1: `Possible actions with destructuring: assigning to existing variable names, assigning to new variable names, assigning to a variable with default values, `,

    },
    note: '',
    level: 'junior',
    known: false,
    language: 'javascript',
  },

  {
    text: 'What are Promises?',
    answer: {
      title: `Promises are used to handle asynchronous operations in JavaScript. They are easy to manage when dealing with multiple asynchronous operations where callbacks can create callback hell leading to unmanageable code.`,
      par1: `A promise is an object that may produce a single value some time in the future: either a resolved value, or a reason that it’s not resolved (e.g., a network error occurred). A promise may be in one of 3 possible states: fulfilled, rejected, or pending. Promise users can attach callbacks to handle the fulfilled value or the reason for rejection.`,
      par2: `Promises are eager, meaning that a promise will start doing whatever task you give it as soon as the promise constructor is invoked.`,
      par3: `Benefits of Promises: improves Code Readability, better handling of asynchronous operations, better flow of control definition in asynchronous logic, better error handling
      `
    },
    note: '',
    level: 'junior',
    known: false,
    language: 'javascript',
  },

  {
    text: 'What is async/await and How does it work?',
    answer: {
      title: `Async and Await are extensions of promises. The name comes from async and await - the two keywords that will help us clean up our asynchronous code`,
      par1: `Async - declares an asynchronous function. Automatically transforms a regular function into a Promise. When called async functions resolve with whatever is returned in their body. Async functions enable the use of await`,
      par2: `Await - pauses the execution of async functions. When placed in front of a Promise call, await forces the rest of the code to wait until that Promise finishes and returns a result. Await works only with Promises, it does not work with callbacks. Await can only be used inside async functions.`,
      par3: `With the addition of Async/Await the JavaScript language takes a huge leap forward in terms of code readability and ease of use. The ability to write asynchronous code that resembles regular synchronous functions will be appreciated by both beginners to JavaScript and veteran coders.`
    },
    note: '',
    level: 'junior',
    known: false,
    language: 'javascript',
  },

  {
    text: `What is AJAX?`,
    answer: {
      title: 'AJAX stands for Asynchronous JavaScript and XML. AJAX is a new technique for creating better, faster, and more  interactive web applications with the help of XML, HTML, CSS, and Java Script.',
      par1: 'Ajax uses XHTML for content, CSS for presentation, along with Document Object Model and JavaScript for dynamic content display.',
      par2: 'Conventional web applications transmit information to and from the sever using synchronous requests. It means you fill out a form, hit submit, and get directed to a new page with new information from the server.',
      par3: 'With AJAX, when you hit submit, JavaScript will make a request to the server, interpret the results, and update the current screen. In the purest sense, the user would never know that anything was even transmitted to the server.'
    },
    note: '',
    level: 'junior',
    known: false,
    language: 'javascript',
  },

  {
    text: `What are the ways to deal with Asynchronous Code in JavasScript?`,
    answer: {
      title: `JavaScript is synchronous by default and is single threaded.
      This means that code cannot create new threads and it will execute your code block by order after hoisting. Asynchronous means that things can happen independently of the main program flow.`,
      par1: `A callback is a simple function that’s passed as a value to another function, and will only be executed when the event happens.
      With a callback you can guarantee that function B is only called after function A is finished with its thing because function A is actually the one responsible for calling function B. Callbacks are great for simple cases, However every callback adds a level of nesting, and when you have lots of callbacks, the code starts to get complicated very quickly.`,
      par2: `Promises is one way to deal with callback dilemma and prevent writing too many callbacks in your code. Once a promise has been called, it will start in pending state. This means that the caller function continues the execution, while it waits for the promise to do its own processing, and give the caller function some feedback.
      At this point, the caller function waits for it to either return the promise in a resolved state, or in a rejected state, but the function continues its execution while the promise does it work. The resulting promise object has internal properties: state (initially “pending”, then changes to either “fulfilled” or “rejected”) and
      result (an arbitrary value of your choosing, initially undefined).`,
      par3: `Since ES2017 asynchronous JavaScript is even simpler with the async/await syntax. In a more comfortable fashion, they reduce the boilerplate around promises, and the “don’t break the chain” limitation of chaining promises.
      Async keyword placed before a function and the keyword await makes JavaScript wait until that promise settles and returns its result. Prepending the async keyword to any function means that the function will return a promise and wraps non-promises in it. await literally makes JavaScript wait until the promise settles, and then go on with the result. That doesn’t cost any CPU resources, because the engine can do other jobs meanwhile: execute other scripts, handle events etc.`
    },
    note: '',
    level: 'junior',
    known: false,
    language: 'javascript',
  },

  {
    text: `What's the difference between a function expression and function declaration?`,
    answer: {
      title: `They're actually really similar. How you call them is exactly the same.The difference lies in how the browser loads them into the execution context.`,
      par1: `Function declarations load before any code is executed.`,
      par2: `Function expressions load only when the interpreter reaches that line of code.`,
      par3: `So if you try to call a function expression before it's loaded, you'll get an error! If you call a function declaration instead, it'll always work, because no code can be called until all declarations are loaded.`
    },
    note: '',
    level: 'junior',
    known: false,
    language: 'javascript',
  },

  {
    text: `How many ways can a function be invoked? `,
    answer: {
      title: `In JavaScript the way a function is invoked has a significant impact on how the code within it executes, especially regarding this parameter.`,
      par1: `Invoking functions as functions. A function can be invoked simply using the () operator on any expression that resolves to a function reference. When function is invoked in this manner the function context is Window i.e. the global context. This is true even when a function is deeply nested within other functions.`,
      par2: `Invoking functions as object methods. Functions can be assigned to object properties and can be invoked using parentheses (). Similar to object-oriented languages, if a function is invoked as an object’s method then the object becomes the function context.`,
      par3: `Invoking functions as constructors. Functions that can be invoked as constructors are just like any other functions. What makes a function a constructor function is the way it is invoked which is using new keyword.
      `,
      par4: `Invoking function with apply() and call() methods. All the above ways of function invocation dictate what will be the function context But what if you want to force what will be the function context ? Well, function themselves provides you with the means to do so with apply() and call() methods. Both, apply() and call() methods takes first argument as the object that can be used as function context i.e. this. The difference between these two methods is how the rest of the arguments are supplied to the function. apply() takes an array of arguments whereas call() takes any number of arguments.
      `,

    },
    note: '',
    level: 'junior',
    known: false,
    language: 'javascript',
  },

  {
    text: `Why does typeof null return object? How to check if a value is null?`,
    answer: {
      title: `The null value is technically a primitive, the way "object" or "number" are primitives. This would typically mean that the type of null should also be "null". However, this is not the case because of a peculiarity with the way JavaScript was first defined.`,
      par1: `To check for null SPECIFICALLY you would use this: if (variable === null)`,
      par2: `This test will ONLY pass for null and will not pass for "", undefined, false, 0, or NaN.`,


    },
    note: '',
    level: 'junior',
    known: false,
    language: 'javascript',
  },



  {
    text: `What's the difference between Spread operator and Rest operator?`,
    answer: {
      title: `Javascript's ECMA6 came out with a cool new features; 
    ... is one of these new Javascript functionalities. It can be used in two
     different ways; as a spread operator OR as a rest parameter.
     Rest parameter: collects all remaining elements into an array.
     Spread operator: allows iterables( arrays / objects / strings ) to be expanded into
      single arguments/elements.`
    },
    note: '',
    level: 'junior',
    known: false,
    language: 'javascript',
  },
];

// export default questions;