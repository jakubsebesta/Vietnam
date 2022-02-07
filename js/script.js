'use strict';

/////dotts/////////
let decor = document.querySelector('.decoration');

for (let i = 0; i < 16; i++){

    let row = document.createElement('tr');
    for (let j = 0; j < 5; j++){
        let cell = document.createElement('td');
        cell.textContent = '●';
        row.appendChild(cell);
    }
    decor.appendChild(row);
}

///////////////////////////////////////


///////////SLIDER//////////////////////

////VARIABLES///////

const btnNext = document.getElementById('next');
const slider = document.querySelector('.slider');
const sliderRect = slider.getBoundingClientRect().right;
const article = document.querySelector('article');
const articleRect = article.getBoundingClientRect().right;
const slideValue = articleRect - sliderRect;
const buttons = document.querySelector('.buttons');
const buttonsArr = Array.prototype.slice.call(document.querySelectorAll('.buttons > button'));
let switcher = false;
let x =  0;


////////CLICK///////

buttonsArr.forEach(element => {

    element.addEventListener('click', event => {
        event.preventDefault();
        switcher = !switcher;
        if(switcher == true){
            slideLeft();
            
        }
        else{
            slideRight();
            
        }
    });

});

///////FUNCTIONS////////

function slideLeft() {
  
    if(x == slideValue){
        buttons.style.transform = `translate(${slideValue * (-1)}px, 0px)`;
        buttons.style.display=`flex`;
        buttonsArr[0].style.display=`none`;
        btnNext.style.transform = `rotateY(${180}deg)`
    }
    else{

        slider.style.transform = `translate(${x-= 3}px, 0px)`;
        buttons.style.display=`none`;
    requestAnimationFrame(slideLeft);
    }
};

function slideRight() {
  
    if(x == 0){
        buttons.style.transform = `translate(${0 }px, 0px)`;
        buttonsArr[0].style.display=`flex`;
        buttons.style.display=`flex`;
        btnNext.style.transform = `rotateY(${0}deg)`
    }
    else{

        slider.style.transform = `translate(${x += 3}px, 0px)`;
        buttons.style.display=`none`;
    requestAnimationFrame(slideRight);
    }
};




