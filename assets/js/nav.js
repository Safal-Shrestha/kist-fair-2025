let clickCount=0;
document.querySelector('.bar').addEventListener('click',()=>{
  clickCount++;
  if(clickCount%2!==0){
    document.querySelector('.mobile').style.display = 'flex';
  }
  else{
    document.querySelector('.mobile').style.display = 'none';
  }
});