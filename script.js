let aside = document.querySelector('#aside');

function handleChangeState(){
  if (aside.classList.contains('active') === true){
    aside.classList.remove('active');
    aside.classList.add('closed');
  } else {
    aside.classList.remove('closed');
    aside.classList.add('active');
  }
}