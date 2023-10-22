



function openAnswer(num) {
    let faq_answer =  document.getElementById("faq-answer"+ num);
    if(faq_answer.style.display === 'none') {
        faq_answer.style.display = 'block';
    } else {
        faq_answer.style.display = 'none';
    }
}