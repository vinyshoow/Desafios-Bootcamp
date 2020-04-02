const modalOverlay = document.querySelector('.modal-overlay');
const modal = document.querySelector('.modal');

const cards = document.querySelectorAll('.card');

for (let card of cards){
  card.addEventListener("click", function(){
    const cursoId = card.getAttribute("id");
    window.location.href = `/description?id=${cursoId}`;    
  })
}


/* document.querySelector(".close-modal").addEventListener("click", function(){
  modalOverlay.classList.remove('active');
  modalOverlay.querySelector('iframe').src = "";

})

document.querySelector(".maximize-modal").addEventListener("click", function(){
  
  if(modal.classList.contains('maximize')){
    modal.classList.remove('maximize');
  } else{
    modal.classList.add('maximize');
  }
}) */

