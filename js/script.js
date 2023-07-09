const submitBtn = document.querySelector('#submitBtn'); 
const paragraph = document.querySelector('.text');


submitBtn.addEventListener('click',fun)

function fun(evt){
	evt.preventDefault(); 
	paragraph.style.color = 'green'; 
}
