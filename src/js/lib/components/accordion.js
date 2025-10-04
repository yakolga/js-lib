import $ from '../core';

// $.prototype.accordion = function(headActive = 'accordion-head--active', contentActive = 'accordion-content--active', paddings = 40) {
//     for (let i = 0; i < this.length; i++) {
//         $(this[i]).click(() => {
//             $(this[i]).toggleClass(headActive);
//             $(this[i].nextElementSibling).toggleClass(contentActive);

//             if (this[i].classList.contains(headActive)) {
//                 this[i].nextElementSibling.style.maxHeight = this[i].nextElementSibling.scrollHeight + paddings + "px";
//             } else {
//                 this[i].nextElementSibling.style.maxHeight = "0px";
//             }
//         });
//     }
// };

$.prototype.accordion = function() {
    $(this[0]).addClass('accordion-head--active');
    $(this[0].nextElementSibling).addClass('accordion-content--active');
    for (let i = 0; i < this.length; i++) {
        $(this[i]).click(() => {
            $(this[i]).toggleClass('accordion-head--active').siblings().removeClass('accordion-head--active');
            $(this[i].nextElementSibling).toggleClass('accordion-content--active').siblings().removeClass('accordion-content--active');
        });
    }
};

$('.accordion-head').accordion();