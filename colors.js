var Links = {
  setColor:function(color){
    // var alist = document.querySelectorAll('a');
    // var i = 0;
    // while(i < alist.length){
    //     alist[i].style.color = color;
    //     i = i + 1;
    // }
    $('s').css('color', color);
  }
}

  var Body = {
    setColor:function (color){
      // document.querySelector('body').style.color = color;
      $('body').css('color', color);
    },
    setbackgroundColor:function (color){
      // document.querySelector('body').style.backgroundColor = color;
      $('body').css('backgroundColor', color);
    }
  }

  var Border = {
    h1TagSetColor:function (color){
      $('#main').css('borderColor', color);
    },
    divIdSetColor:function (color){
      $('#line').css('borderColor', color);
    }
  }

  function nightdayHandler(self){
    var target = document.querySelector('body');
    if(self.value === 'night'){
      Body.setbackgroundColor('black');
      Body.setColor('white');

      self.value = 'day';

      Border.h1TagSetColor('white');
      Border.divIdSetColor('white');

      Links.setColor('powderblue');
    } else {
      Body.setbackgroundColor('white');
      Body.setColor('black');

      self.value = 'night';

      Border.h1TagSetColor('black');
      Border.divIdSetColor('black');

      Links.setColor('DodgerBlue');
    }
  }
