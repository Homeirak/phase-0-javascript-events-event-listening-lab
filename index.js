// function addingEventListener() {
// const button = document.getElementById('button');

// button.addEventListener('click', function(){
// });
// }

//If we only call our callback function in one place, using an anonymous function makes sense. 
// However, what if we want to use this on a bunch of elements it makes more sense to create a separate, named function that can be called by all of our event listeners. 
//With this approach, we would pass the function name as the second argument to addEventListener() rather than the function itself.


//Assignement:
//Create a function called addingEventListener which litens for a 'click' event on the 'button' id and creates a pop-up alert box withe message 'I was clicked!'
//In JavaScript. 'alert' is a built-in function that creates a pop-up dialog box with a message

//There are two ways to do this:
//1) We keep everything inside the function

// function addingEventListener(){ 
//     const input = document.getElementById('button');
//     function clickAlert () {
//         alert('I was clicked!')
//     }
//     input.addEventListener('click', clickAlert)
// }

// addingEventListener();

//Or 2) If the function 'clickAlert' needs to be used elsewhere, we define it globally
//(Note: if we wanted to used this function in multiple places, we would likely use a tag or class instead of id, which is usually unique.)

const input = document.getElementById('button');

function clickAlert () {
    alert('I was clicked');
}

function addingEventListener(){
    input.addEventListener('click', clickAlert);
}

addingEventListener();

//both versions pass the test