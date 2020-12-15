function isTouching(atharva,tanmay){

    if(atharva.x-tanmay.x<atharva.width/2+tanmay.width/2 &&tanmay.x-atharva.x<atharva.width/2+tanmay.width/2 && atharva.y-tanmay.y<atharva.height/2+tanmay.height/2  && tanmay.y-atharva.y<atharva.height/2+tanmay.height/2){
     return true;
    }
    
    else {
     return false;
    }
  
  }