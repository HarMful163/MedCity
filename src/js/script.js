window.addEventListener('DOMContentLoaded', function() {

    const slides = document.querySelectorAll('.action__slide'),
          prev = document.querySelectorAll('.action__slide-arrow_left'),
          next = document.querySelectorAll('.action__slide-arrow_right');

          let slideIndex = 1;

        showSlides(slideIndex);

        function showSlides(n) {
            if (n > slides.length) {
                slideIndex = 1;
            }

            if (n < 1) {
                slideIndex = slides.length;
            }

            slides.forEach(item => item.style.display = 'none');

            slides[slideIndex - 1].style.display = 'block';
        }

        function plusSlides(n) {
            showSlides(slideIndex += n);
        }

        prev.forEach(item => {
            item.addEventListener('click', () => {
                plusSlides(-1);
            });
        });

        next.forEach(item => {
            item.addEventListener('click', () => {
                plusSlides(+1);
            });
        });

});

    // Так же хотел бы показать еще один вариант решения, более плавный и красивый, но там не получается из-за "вылезающих за wrapper картинок"

    // const slides = document.querySelectorAll('.action__slide'),
    //       prev = document.querySelector('.action__arrow_left'),
    //       next = document.querySelector('.action__arrow_right'),
    //       slidesWrapper = document.querySelector('.action__slider-wrapper'), // удаленный элемент
    //       slidesField = document.querySelector('.action__slider-inner'), //удаленный элемент
    //       width = window.getComputedStyle(slidesWrapper).width;

    // let slideIndex = 1,
    //     offset = 0;

    // slidesField.style.width = 100 * slides.length + "%";
    // slidesField.style.display = 'flex';
    // slidesField.style.transition = '0.5s all';

    // next.addEventListener('click', (e) => {
    //     e.preventDefault();
    //     if (offset == +width.slice(0, width.length - 2) * (slides.length -1)) {
    //         offset = 0;
    //     } else {
    //         offset += +width.slice(0, width.length - 2);
    //     }

    //     slidesField.style.transform = `translateX(-${offset}px)`
    // });
    // prev.addEventListener('click', (e) => {
    //     e.preventDefault();
    //     if (offset == 0) {
    //         offset = +width.slice(0, width.length - 2) * (slides.length - 1);
    //     } else {
    //         offset -= +width.slice(0, width.length - 2);
    //     }

    //     slidesField.style.transform = `translateX(-${offset}px)`
    // });