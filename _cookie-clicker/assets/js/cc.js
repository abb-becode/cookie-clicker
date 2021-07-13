window.onload = () => {

  var score;
  var cookieX;
  var cookieY;
  /*
  var mousePos = {
    x: null,
    y: null
  }
  var mouseX;
  var mouseY;
  */

  var sc = document.getElementById("score");
  var ctxc = sc.getContext("2d");

  var cookie = document.getElementById('cookie');
  var ctx = cookie.getContext('2d');

  /*
  const digits = 4;
  var w = window.innerWidth;
  var h = window.innerHeight;
  */

  setup = () => {
    createCookieCanvas();
    score = 0;
    displayScore();
  }


  /*draw = () => {
      background(100, 0, 100);
      Image(cookie, cookieX, cookieY, 400, 400);
      textSize(50);
      fill(255);
      text(score, 50, 50);
  }*/

  displayScore = () => {
    ctxc.font = "110px Arial";
    ctxc.fillStyle = "white";
    ctxc.clearRect(0, 0, sc.width, sc.height);
    const defaultFill = "0000"

    const formattedNumber = (defaultFill + score).substr(String(score).length)
    ctxc.fillText(formattedNumber,30,110);
  };

  createCanvas = () => {
    /*const canvas = document.getElementById("score");
    const ctx = canvas.getContext("2d");
    ctx.font = "110px Arial";
    ctx.fillStyle = "white";
    ctx.clearRect(0, 0, sc.width, sc.height);
    score = "0".repeat(digits - String(score).length) + score;
    ctx.fillText(score,30,110);*/
    /*image = new Image();
    image.src = './assets/img/click-on-me.png';*/
    /*image.onload = () => {
      ctxCookie.drawImage(image, 0, 0, image.width, image.height);
    }*/
    //drawImageScaled(image, ctxk)
  };

  createCookieCanvas = () => {    
    var img = new Image();
    img.src = './assets/img/click-on-me.png';
    img.onload= drawImageScaled.bind(null, img, ctx);
  }

  function drawImageScaled(img, ctx) {
    var canvas = ctx.canvas ;
    var hRatio = canvas.width  / img.width    ;
    var vRatio =  canvas.height / img.height  ;
    var ratio  = Math.min ( hRatio, vRatio );
    var centerShift_x = ( canvas.width - img.width*ratio ) / 2;
    var centerShift_y = ( canvas.height - img.height*ratio ) / 2;  
    ctx.clearRect(0,0,canvas.width, canvas.height);
    ctx.drawImage(img, 0,0, img.width, img.height,
                       centerShift_x,centerShift_y,img.width*ratio, img.height*ratio);  
 }

  cookie.addEventListener('mousedown', (e) => {
    const rect = cookie.getBoundingClientRect();
    cookieX = e.clientX - rect.left;
    cookieY = e.clientY - rect.top;
    if (cookieX > 145 && 
        cookieX < 223 &&
        cookieY > 57 &&
        cookieY < 145 ) {

      score++;
      displayScore();
  }
      
  });

  function random() {
    //return score > 10 ? true : false;
    if (score > 10) {
      score += 200; 
      displayScore();
    }
  }

  const interval = setInterval(function() {
    random();
  }, 2000);

  //clearInterval(interval); // 


  setup();

}




