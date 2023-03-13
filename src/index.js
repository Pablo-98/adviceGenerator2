const resultsDiv = document.querySelector('#results');

const resultsButton = document.querySelector("#get-advice");

// this is the url we have been given for our api
//var apiUrl = 'https://api.adviceslip.com'


//1. we will now be creating our own function! to do this we start by declaring a function by typing 'function'
// 2. we then name this function whatever we want and add parenthesis. The parenthesis are necessary for all function delarations 
function getAdvice(){
    //fetch method doumentation: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //the fetch() method provides a logical way to literally fetch resources across the network

    // the fetch method does not directly return the JSON response body but instead returns a promise, here our promise is the res object!
    // the res object not not directly contain the actual json. The res object is simply a representation of the entire http response. To extract content from the JSON body from the res object, we use the json() method
    fetch ('https://api.adviceslip.com/advice').then(res => {
    return res.json();
    }).then(adviceData => {
        const adviceObject = adviceData.slip;
        resultsDiv.innerHTML = `<p> ${adviceObject.advice} <p>`;
    }).catch(error => {
        console.log(error);
    }); // end of fetch method 

} // end of function




resultsButton.addEventListener('click', () => {
    getAdvice(); // when the EVENT is met, a callback function will point to  a code block for code to execute. The code that executes here is a FUNCTION CALL
})

// an event listener not attached to any specific element in the dom. The event to be met is the LOAD event
addEventListener("load", (event) => {
    // the word event     ^^^^ might throw you off. This is just to represent an event that takes place in the DOM
    getAdvice();
}) 

//  IMPORTANT documentation to read for this project:
// https://developer.mozilla.org/en-US/docs/Web/API/Event events 
// https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
// https://www.w3schools.com/js/js_this.asp
// https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON