
// Name: Meet pandya
// File: index.html
// Date: 4th October 2023
// Description: This is my main.js which will change the look of the webpage

const storyText = 'This all started in Japan when there was chaos in the whole village, and the temperature was very cold like  there was a :inserta: guy named Albert Einstein who wanted to prove the :insertb: wrong. Evantually he was able to prove them wrong. He even got :insertc: award for his results ';
const inserta = ['genius', 'bookworm', 'knowledgeable'];
const insertb = ['Wave Theory', 'Particle nature of light', 'Law of gravity', 'Space Principals', 'Big Scientific statements'];
const insertc = ['Nobel Price', 'Best Physicist of the history', 'solved a mystery']

const button = document.querySelector('.randomize');
const paragraph = document.querySelector('.story');
const new_name = document.getElementById('customname');

button.addEventListener('click', main);

function random_item(list)
  {
    const i = Math.floor(Math.random() * list.length);
    return list[i];
  }


function main()
{

    let string = storyText;

    if (new_name.value !== '') 
    {
        const name = new_name.value;
        string = string.replaceAll('Albert Einstein', name);
      
    }
    const x_random = random_item(inserta);
    const y_random = random_item(insertb);
    const z_random = random_item(insertc);
  
    string = string.replaceAll(':inserta:', x_random);
    string = string.replaceAll(':insertb:', y_random);
    string = string.replaceAll(':insertc:', z_random);

    paragraph.textContent = string;
    paragraph.style.visibility = 'visible';

}

