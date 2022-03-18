/*const myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';
document.querySelector('html').addEventListener('click', ()=> {
    alert('Ouch! Stop poking me!');
  });*/

let myImage = document.querySelector('img');
myImage.onclick = function(){
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/flenex-plate.jpg'){
        myImage.setAttribute('src','images/flexo-plate.jpg');
    }else {
        myImage.setAttribute('src','images/flenex-plate.jpg');
    }
}
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName(){
    let myName = prompt('Please enter your name');
    if(!myName){
        setUserName();
    }else{
    localStorage.setItem('name',myName);
    myHeading.textContent = 'Fujifilm Flenex Plates, '+ myName;
    }
}

if(!localStorage.getItem('name')){
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Fujifilm Flenex Plates, ' + storedName;
}
myButton.onclick = function () {
    setUserName();
}
  
