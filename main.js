var modal = document.getElementById('simpleModal');
// Abrir butao
var modalBtn=document.getElementById('modalBtn');
//Fechar
var closeBtn = document.getElementsByClassName('closeBtn');


// Lista clique
modalBtn.addEventListener('click',openModal);
// para fechar
closewBtn.addEventListener('click',closeModal);
// outside click
window.addEventListener('click',outsideClick);
// funções
function openModal(){
    modal.style.display ='block';

}
function closeModal(){
    modal.style.display ='none';
}

function outsideClick(e){
    if(e.target == modal){
        modal.style.display='none'
    }
}