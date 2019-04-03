/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window binding is when using this in the global scope. The value will be the window Object if declared. This type of binding can be dangerous and detrimental to the code.
* 2. Implicit binding is when a function is called by including an object then "." then the function name. That object preceding the "." will contain the information being passed into the "this" keyword.
* 3. New binding is used while using a constructor function to create new objects from an existing function.
* 4. Explicit binding is when adding binding context while calling objects such as ".call", ".apply" or ".bind."
*
* write out a code example of each explanation above
*/
// Principle 1
// code example for Window Binding

function sayHello(hello){
    console.log(this);
    return hello;
}
sayHello("Howdy");

// Principle 2
// code example for Implicit Binding
var Person = function(name){
    return{
    name: name,
    sayName: function(){
        console.log(this.name);
     }
    };
};
var gus = Person("Gus");
gus.sayName();

// Principle 3
// code example for New Binding

var Fruit = function(name, color) {
        this.name = name;
        this.color = color;
};

var banana = new Fruit('banana', 'yellow');

// Principle 4

// code example for Explicit Binding

var sayHello = function(){
    console.log(`Good morning and ${this.greeting}`);
}

var gus = {
    greeting: 'Hello'
};

sayHello.call(gus);