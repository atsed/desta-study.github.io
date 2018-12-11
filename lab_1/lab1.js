 var canvas = document.getElementById("canvas");
 var ctx = canvas.getContext('2d');


ctx.fillStyle = '#809080';
ctx.fillRect(0, 0, 800, 600);

var timer_1 = setInterval(
    function() 
	{
		ctx.fillStyle = '#300000';
		ctx.fillRect(Math.random() * (800 - 1) + 1, Math.random() * (600 - 1) + 10, 10, 10);
    }	
  	, 200);

canvas.onclick = function() {

var moon = new Image(); 
moon.src = '001.png';
var x = Math.random() * (600 - 1) + 1;
var y = -200;

var start = Date.now();

var timer_2 = setInterval(
function draw()
{
	var timePassed = Date.now() - start;
    if (timePassed > 10000) 
    {
       clearInterval (timer_2);
    }

	ctx.fillStyle = '#809080';
    ctx.fillRect(x,y,160,170);
    ctx.drawImage(moon,x,y);
    y++;
    x--;
    window.requestAnimationFrame(draw);
}
, 1000)

draw();

}
