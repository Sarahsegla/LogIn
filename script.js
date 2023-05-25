// let back = document.querySelector(".back");
// let modal = document.querySelector(".modal");



// let button = document.querySelector(".logButton");
// function ModalUp () {
    
//     back.style.display = 'block';
//     modal.style.display = 'block';

// };

// ModalUp();

$(document).ready(function() {
$('.logButton').click(function() {
    $('.back').toggle()
}) 
});