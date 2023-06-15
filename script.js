// scroll sections
const header = document.querySelector("header");

 // sticky header

 window.onscroll = () => {

    header.classList.toggle('sticky', window.scrollY > 100);

 }
