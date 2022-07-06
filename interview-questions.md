# ASSESSMENT 3: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.


1. What is `this` in JavaScript?

  Your answer: .this is a keyword that can be called in an arguement to excute its giving task.

  Researched answer:

  .this is a keyword in Javascript. the .this keyword refers to different objects. Its purpose depends on how its being invoked or used.

  Example 

  handleChange = () => {
    let newCount = this.state.count + 1
    this.setState({count: newCount})
  }

  render(){
    let {count} = this.state

    return(
      <>
        <h2>Counter: {count}</h2>
        <button onClick = {this.handleChange}>
          Press Me!
        </button>


2. What is React? Why would you use it?

  Your answer: 
  
  React is a tool that is used to create and maintain web applications. I would use it because it a popular tool in my new career field. 

  Researched answer:

React is used to build webpages, mobile web pages, and even native mobile applications. It is component based, which means that we use it to build small parts of an application and then join them together to form entire applications. This turns out to be extremely scalable & dynamic.



3. Which lifecycle method is required in a React class component?

  Your answer:

  The lifecycle method that is required in a react clss component is render.

  Researched answer:

  The lifecycle method that is required in a React class component is called render. The render method return a single html element.

  The final lines in script define a container and tell React to render our component in the container.


4. What is JSX? What is one syntax difference between HTML and JSX?

  Your answer:

  JSX is a javascript language type for React. One syntax difference between HTML and JSX is the usage of class.

  Researched answer:

JSX is JavaScript inspired HTML that acts almost like HTML with a couple small exceptions. Most notably JSX uses the syntax className rather than HTML's class because class is reserved for HTML. As the building block of React Components, you all will be using JSX a lot.

5. What is yarn? What file(s) are modified in a React application when you run yarn?

  Your answer: Yarn is a tool that mange code and can be use across different platfloms.

  Researched answer:

Yarn is a package manager for code that helps to manage project dependencies. Yarn is open-source and developed by Facebook. Yarn is a fast, reliable, and secure dependency management tool. Yarn stores dependencies locally which avoids the download of these packages multiple times. 


6. STRETCH: What is an anonymous function in JavaScript?

  Your answer:

  Anonymous functions are unpopular functions witthin Javascript thats barely

  Researched answer:

  Anonymous Function is a function that does not have any name associated with it. Normally we use the function keyword before the function name to define a function in JavaScript, however, in anonymous functions in JavaScript, we use only the function keyword without the function name.


## Looking Ahead: Terms for Next Week

1. Conditional rendering:

In React, you can create distinct components that encapsulate behavior you need. Then, you can render only some of them, depending on the state of your application.

2. Object-oriented programming:

Object-oriented programming (OOP) is a computer programming model that organizes software design around data, or objects, rather than functions and logic. An object can be defined as a data field that has unique attributes and behavior.

3. Ruby:

Ruby is a server-side scripting language similar to Python and PERL. Ruby can be used to write Common Gateway Interface (CGI) scripts. Ruby can be embedded into Hypertext Markup Language (HTML). Ruby has a clean and easy syntax that allows a new developer to learn very quickly and easily.

4. Ruby blocks:

Ruby blocks are little anonymous functions that can be passed into methods. Blocks are enclosed in a do / end statement or between brackets {} , and they can have multiple arguments.

5. Ruby hashes:

In Ruby, Hash is a collection of unique keys and their values. Hash is like an Array, except the indexing is done with the help of arbitrary keys of any object type. In Hash, the order of returning keys and their value by various iterators is arbitrary and will generally not be in the insertion order.