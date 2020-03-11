// Your code goes here
let funBus = document.querySelector('.logo-heading');
funBus.addEventListener('click', (event) =>{
    event.target.style.color =  event.target.style.color === "red" ? "black" : "red";
});

// Mouse Over Header IMG
let funImg = document.querySelector("header img");
funImg.addEventListener('mouseover', event => {
    gsap.to(event.target, {duration: 1, x: 100});
    event.target.zIndex = 2;
})
//Drag header Img
Draggable.create(funImg);
//CLicking bottom buttons
const button = document.querySelectorAll('.btn');
console.log(button);
function colorful(e) {
    var colorIt = 'rgb(' + Math.random()*255 + ',' + Math.random()*255 + ',' + Math.random()*255 + ')'; 
    e.target.style.backgroundColor = colorIt;
}
button.forEach(element => {
    element.addEventListener('click', colorful);
})
//Scrolling on the page
let navBar = document.querySelector('header.main-navigation');
window.addEventListener('scroll', (event) => {
    if (document.documentElement.scrollTop >= 100){
        navBar.style.backgroundColor = 'grey';
    } else {
        navBar.style.backgroundColor = 'white';
    }
    
});
//Double clicking on thhe image with the map
let mapImage = document.querySelector('.img-content img:nth-of-type(1)')
console.log(mapImage);
mapImage.addEventListener('dblclick', (event) =>{
    if (event.target.src !== '//:0'){
        event.target.src = '//:0';
        event.target.alt= 'Well now you broke it!';
        event.target.style.fontSize = '10rem'
    } else {
        event.target.src = "img/adventure.jpg";
    }
})


//Pressing alt
let destinationHeading = document.querySelector('.text-content h2:first-of-type');
let destinationHeadingValue = destinationHeading.innerText;

window.addEventListener('keydown', (e) => {
    if (e.code === 'AltLeft' || e.code == 'AltRight'){
        destinationHeading.innerText = "Hover over me";
    } else {
        console.log(e.code);
    } 
})
//Leaving mouseover the heading in the destination element
destinationHeading.addEventListener('mouseleave', (e) => {
    if(e.altKey){
        document.querySelector('.text-content p:first-of-type').innerText = "You're free to go";
    } else {
        e.target.innerText = "You're not going anywhere!";
    }
})
//pressing left/right arrow
let firstImage = document.querySelector('img:nth-of-type(1)')
console.log(firstImage);
window.addEventListener('keydown', (event) =>{
    console.log(event.keyCode);
    console.log(event.code);
    if(event.keyCode === 39){
       firstImage.src = '//:0';
        firstImage.alt= 'VRRROOOMMM!!!';
        firstImage.style.fontSize = '10rem'
        firstImage.style.color = 'red'; 
    }  
    if(event.code === 'ArrowLeft') {
        firstImage.src = '//:0';
        firstImage.alt= 'No gas silly!';
        firstImage.style.fontSize = '10rem'
        firstImage.style.color = 'blue'; 
    }

}); 
//focusing home link and pressing a keywhile it is focused.
let firstAnchor = document.querySelector('a:first-of-type');
console.log(firstAnchor)
firstAnchor.addEventListener('keydown', event => {
    event.target.style.backgroundColor = 'red';
});
firstAnchor.addEventListener('focus', event => {
    event.target.style.backgroundColor='maroon';
});

let anchors = Array.from(document.querySelectorAll('a'));
anchors.forEach( x => {
    x.addEventListener('click', (event) =>{
        event.preventDefault();
    })
});


let parent = document.querySelector('.destination');
let child = document.querySelector('.destination .btn');

parent.addEventListener('click', event => {
    event.target.style.backgroundColor = 'red';
    
    console.log('parent clicked')
} );

child.addEventListener('click', event => {
    console.log('childe clicked');
    event.stopPropagation();
});

parent.addEventListener()