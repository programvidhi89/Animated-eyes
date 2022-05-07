//////////pupil start point

let pupils = document.getElementsByClassName('pupil');
console.log(pupils);

let pupilsArr = Array.from(pupils);

let pupilStartPoint = -60;
let pupilRange = 130;

let mouseXStartPoint = 0;
   let mouseXEndPoint = window.innerWidth;
   let currentXPosition = 0;
   let fractXvalue = 0;
    let mouseXrange = mouseXEndPoint - mouseXStartPoint;
//Mouse Y position
   let mouseYEndPoint = window.innerHeight;
   let currentYPosition = 0;
   let fractYvalue = 0;
  
   const mouseMove = (event) => {
   	// console.log(`x value = ${event.clientX} & y value = ${event.clientY}`);
   	currentXPosition = event.clientX - mouseXStartPoint;
   	fractXvalue = currentXPosition/mouseXrange;
   //-65 + 0 = -65
   //-65 + 130 = 65
//start = 0;
//width 170
//left 65
//right 65

   	currentYPosition = event.clientY;
   	fractYvalue = currentYPosition/mouseYEndPoint;
   	let pupilXCurrentPosition = pupilStartPoint + (fractXvalue * pupilRange);
   	let pupilYCurrentPosition = pupilStartPoint + (fractYvalue * pupilRange);

   	pupilsArr.forEach((currPupil)=>{
   		currPupil.style.transform = `translate(${pupilXCurrentPosition}px,${pupilYCurrentPosition}px)`;
   	});
   }
   const windowResize = (event)=>{
   	 mouseXEndPoint = window.innerWidth;
   	 mouseYEndPoint = window.innerHeight;
   	 mouseXrange = mouseXEndPoint - mouseXStartPoint;
   }
   	window.addEventListener('mousemove',mouseMove);
   	window.addEventListener('resize',windowResize);

