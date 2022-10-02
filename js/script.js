//Question 1

var pets = [
  {
    type: "cat",
    age: 5.5,
  },
  {
    type: "dog",
    age: 3.8,
  },
  {
    type: "parrot",
    age: 4.0,
  },
];

for (var i = 0; i < pets.length; i++) {

    var age = pets[i].age;
    var petsInfo = pets[i].type + " " + pets[i].age;

    if (age = 4 && age >= 4) {
        console.log(petsInfo);
    }
}

//Answer cat 5.5. parrot 4. 


//Question 2.

function logAnswer(answer) {
    if(typeof answer === "boolean") {
        console.log(answer);
    } else {
        console.log("Please pass a boolean value in");
    }
}
logAnswer(true);
logAnswer("Hello world");
 
//Answer true, "Please pass a boolean value in".


//Question 3. 

var subheading = document.querySelector("h2"); 
var button = document.querySelector("button");

button.onclick = function() {
    subheading.innerHTML = "Updated subheading"
    subheading.style.color = "blue"
}

//Answer h2 changed color and tekst.

