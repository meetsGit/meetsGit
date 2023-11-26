// Name: Meet pandya
// File: index.html
// Date: 4th October 2023
// Description: This is my main.js which will change the look of the webpage.

const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const images = ["pic1.jpg","pic2.jpg","pic3.jpg","pic4.jpg","pic5.jpg"];
/* Declaring the alternative text for each image file */

/* Looping through images */

for (let i = 1; i <= images.length; i++) {
	const newImage = document.createElement('img');
	newImage.setAttribute('src', `images/pic${i}.jpg`);
	newImage.setAttribute('alt', `Image/ ${i}`);
	thumbBar.appendChild(newImage);
	
	newImage.addEventListener('click', function() {
	  displayedImage.setAttribute('src', `images/pic${i}.jpg`);
	});
  }

/* Wiring up the Darken/Lighten button */



btn.addEventListener('click', function() {

	const btnClass = btn.getAttribute('class');

	if (btnClass === 'dark') {
	  btn.setAttribute('class', 'light');
	  overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
	  btn.textContent = 'Lighten';

	} else {

	  btn.setAttribute('class', 'dark');
	  overlay.style.backgroundColor = 'rgba(0,0,0,0)';
	  btn.textContent = 'Darken';
	  
	}

  });