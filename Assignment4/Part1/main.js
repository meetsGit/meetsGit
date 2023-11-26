
// Name: Meet pandya
// File: index.html
// Date: 4th October 2023
// Description: This is my main.js which will change the look of the webpage

const storyText = 'This all started in Japan when it was very cold in the whole village, and the temperature was 94 fahrenheit there was a :inserta: guy named Albert Einstein who wanted to prove the :insertb: wrong. Evantually he was able to prove them wrong. He even got :insertc: award for his results which wheighted 300 pounds ';
const inserta = ['genius', 'bookworm', 'knowledgeable'];
const insertb = ['Wave Theory', 'Particle nature of light', 'Law of gravity', 'Space Principals', 'Big Scientific statements'];
const insertc = ['Nobel Price', 'Best Physicist of the history',]

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

    if (document.getElementById("uk").checked) 
    {
      const weight = `${Math.round(300*0.0714286)} stone`;
      const temperature =  `${Math.round((94-32) * 5 / 9)} centigrade`;
      string = string.replaceAll('94 fahrenheit', temperature);
      string = string.replaceAll('300 pounds', weight);
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

