
import { SwiperInit } from './components/swiperinit.js';
import { Accordion } from './components/accordion.js';
import { Modal } from './components/modal.js';


const SwiperInstance = new SwiperInit();
const  AccordionInstance = new Accordion();
const ModalInstance = new Modal();

document.addEventListener('DOMContentLoaded', function() {
    const topElement = document.querySelector('.characteristics__top');
    const contentElement = document.querySelector('.characteristics__content');
    const paragraphElement = topElement.querySelector('p');
  
    topElement.classList.add('active');
  
    contentElement.style.maxHeight = contentElement.scrollHeight + 'px';
  
    paragraphElement.textContent = 'Скрыть';
  
    topElement.addEventListener('click', function() {
      topElement.classList.toggle('active');
  
      if (topElement.classList.contains('active')) {
        paragraphElement.textContent = 'Скрыть';
        contentElement.style.maxHeight = contentElement.scrollHeight + 'px';
      } else {
        paragraphElement.textContent = 'Показать';
        contentElement.style.maxHeight = null;
      }
    });
  });