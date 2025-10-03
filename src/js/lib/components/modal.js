import $ from "../core";

$.prototype.modal = function() {
    for (let i = 0; i < this.length; i++) {
        const target = this[i].getAttribute('data-target');
        $(this[i]).click((e) => {
            e.preventDefault();
            $(target).fadeIn(300);
            document.body.style.overflow = 'hidden';
        });
    }

    const closeElements = document.querySelectorAll('[data-close');
    closeElements.forEach(elem => {
        $(elem).click((e) => {
            $('.modal').fadeOut(300);
            document.body.style.overflow = '';
        });
    });

    $('.modal').click((e) => {
        if (e.target.classList.contains('modal')) {
            $('.modal').fadeOut(300);
            document.body.style.overflow = '';
        }
    });

}

$('[data-toggle="modal"]').modal();