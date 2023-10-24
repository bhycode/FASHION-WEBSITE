


function openAnswer(num) {
    let faq_answer =  document.getElementById("faq-answer"+ num);
    if(faq_answer.style.display === 'none') {
        faq_answer.style.display = 'block';
    } else {
        faq_answer.style.display = 'none';
    }
}



let burger_menu = document.getElementById("burger-menu");
let burger_nav = document.getElementById("burger-nav");
let burger_icon = document.getElementById("burger-icon");


burger_icon.addEventListener("click", function() {

    if(burger_nav.style.display === 'none') {
        burger_nav.style.display = 'block';
    } else {
        burger_nav.style.display = 'none';
    }
});