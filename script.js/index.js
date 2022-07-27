let popup_wrap = document.querySelector('.popup_wrap');
let btn_open = document.querySelector('.btn');
let btn_close = document.querySelector('.popup_close');
let body = document.querySelector('body');

btn_open.addEventListener('click', () => {
    popup_wrap.style.display = 'block';
    body.classList.add('no-scroll');
});

btn_close.addEventListener('click', () => {
    popup_wrap.style.display = 'none';
    body.classList.remove('no-scroll');
});

// window.addEventListener('click', (e) => {

//     if(e.target.classList == 'popup_wrap') {
//         return;
//     } else {
//         popup_wrap.style.display = 'none';
//         body.classList.remove('no-scroll');
//     }
// })