var Body = {
    setBackgroundColor : function(color){
        $('body').css('background-color', color);
      //document.querySelector('body').style.backgroundColor = color;
    },
    setColor : function(color){
        $('body').css('color', color);
      //document.querySelector('body').style.color = color;
    }
  }
  var Links = {
    setColor : function(color){
        $('a').css('color', color);
      } 
    }
  
  function hipmaker(self){
    var target = document.querySelector('body');
    if(self.value=='nonehip'){
      Body.setBackgroundColor('yellow');
      Body.setColor('green');
      Links.setColor('powderblue'); 
      self.value='hip';
    } else {
      Body.setBackgroundColor('white');
      Body.setColor('black');        
      Links.setColor('blue');
      self.value='nonehip';
    }
  } 