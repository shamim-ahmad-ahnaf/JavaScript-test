// question-1
let name = 'john'
age = '25'
console.log('My name john and i am 25 years old');


// question-2
let num = [4];
if (num % 2) {
    console.log("The number is even");
} else {
    console.log("the number is odd");

}

// question-3
for (let s = 1; s <= 5; s++) {
    console.log(s);
}


// question-4
function addNumber(a, b) {
    return a + b;
}
let result = addNumber(4, 7);
console.log(result);


// question-5
let fruits = ["apple", "banana", "cherry"];
fruits.push("orange");
console.log(fruits[0]);
console.log(fruits.length);


// question-6
const numbers = [1, 2, 3, 4, 5];
numbers.forEach(number => {
    console.log(number * 2);

});



// question-7
const button = document.getElementById('changeText');
const heading = document.querySelector('h1');

button.addEventListener('click', function () {
    heading.textContent = "You clicked the button!";
});




// question-8
let text = "hello world";
console.log(text.toUpperCase());



// question-9
let person = {
    name: "Shamim",
    age: "66",
    greet: function () {
        return "Hello, My name is Shamim";
    }
}

console.log(person.greet());







