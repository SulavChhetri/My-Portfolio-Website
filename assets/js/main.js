const currentSlide=(n)=>{
  let y = document.getElementsByClassName('project__items');
    if(n==1){
      y[0].classList = 'project__items';
      y[1].classList = 'project__items id2';
      y[2].classList = 'project__items id2';
      y[3].classList = 'project__items id2';
      
    }
    else if(n==2){
      y[0].classList = 'project__items id2';
      y[1].classList = 'project__items ';
      y[2].classList = 'project__items id2';
      y[3].classList = 'project__items id2';
    }
    else if(n==3){
      y[0].classList = 'project__items id2';
      y[1].classList = 'project__items id2';
      y[2].classList = 'project__items ';
      y[3].classList = 'project__items id2';
    }
    else if(n==4){
      y[0].classList = 'project__items id2';
      y[1].classList = 'project__items id2';
      y[2].classList = 'project__items id2';
      y[3].classList = 'project__items ';
    }
}
