
document.querySelector("#topArrow").addEventListener("click", () => {
    
});

document.querySelector("#leftArrow").addEventListener("click", () => {
    
});

document.querySelector("#rightArrow").addEventListener("click", () => {
    
});

document.querySelector("#bottomArrow").addEventListener("click", () => {

});

document.querySelector("#front-arrow-on").addEventListener("click", () => {

});

document.querySelector("#front-arrow-off").addEventListener("click", () => {
    
});

document.querySelector("#back-arrow-on").addEventListener("click", () => {
    
});

document.querySelector("#back-arrow-off").addEventListener("click", () => {

});

document.querySelector(".stop").addEventListener("click", () => {
    
});

function sendChar(body){
    window.fetch("url", {
        method:"POST", 
        headers: {
            'Content-Type': 'application/json'
        },
        body,
    }).then(console.log)
}