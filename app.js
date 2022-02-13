const colors = ["green", "red", "rgba(133, 122, 200)", "yellow", "orange", "blue", "aqua", "brown", "violet", "black", "pink", "gray"];

let btn = document.getElementById('btn');
let color = document.querySelector('.color');

btn.addEventListener('click', function(){
    const randomNumber = getRandomNumber();
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber]
    // console.log(document.body);

});

function getRandomNumber(){
    let myRndNumber = Math.floor(Math.random() * colors.length);
    // console.log(myRndNumber);
    return myRndNumber;
}
