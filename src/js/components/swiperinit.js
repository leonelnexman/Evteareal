export class SwiperInit {
  constructor() {
    document.addEventListener('DOMContentLoaded', () => {
      

      if (document.querySelector('.mySwiper')) {
        let mainthumb;
        let thumbs;
      
        function initSwipers() {
          mainthumb = new Swiper('.mySwiper', {
            spaceBetween: 17,
            slidesPerView: 3,
            direction: window.innerWidth < 962 ? 'horizontal' : 'vertical',
          });
      
          if (document.querySelector('.mySwiper2')) {
            thumbs = new Swiper('.mySwiper2', {
              spaceBetween: 10,
              navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              },
              thumbs: {
                swiper: mainthumb,
              },
            });
          }
        }
      
        initSwipers(); // Инициализируем слайдеры при загрузке страницы
      
        // Обновляем настройки слайдера mainthumb при изменении размера окна
        window.addEventListener('resize', function () {
          if (mainthumb) {
            mainthumb.changeDirection(window.innerWidth < 962 ? 'horizontal' : 'vertical');
            mainthumb.update(); // Обновляем слайдер
          }
        });
      }


              
              // Здесь можно добавить дополнительный функционал, если необходимо
              
            });
          }
        } 