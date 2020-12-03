var Links = {
  SetColor:function(color){
    // var alist = document.querySelectorAll('a');
    // var i = 0;
    // while(i < alist.length){
    //   alist[i].style.color = color;
    //   i = i + 1;
    // }
    $('a').css('color', color);
  }
}

var Border = {
  SetColor:function(color){
    // document.querySelector('ol').style.borderColor=color;
    // document.querySelector('#withbutton').style.borderColor=color;
    // document.querySelector('#grid').style.borderColor=color;
    $('ol').css('borderColor', color);
    $('#withbutton').css('borderColor', color);
    $('#grid').css('borderColor', color);
  }
}

var Body = {
  SetBackgroundColor:function(color){
    // document.querySelector('body').style.backgroundColor=color;
    $('body').css('backgroundColor',color);
  },
  SetColor:function(color){
    // document.querySelector('body').style.color = color;
    $('body').css('color',color);
  }
}

function HomeAwayHandler(self){
  var target = document.querySelector('body');
  if(self.value === 'home'){
    Body.SetBackgroundColor('#c0392b');
    Body.SetColor('#95a5a6');
    Border.SetColor('#95a5a6')
    Links.SetColor('#95a5a6');

    self.value = 'away';
  }else{
    Body.SetBackgroundColor('#95a5a6');
    Body.SetColor('black');
    Border.SetColor('#c0392b');
    Links.SetColor('black');

    self.value = 'home';
  }
}
