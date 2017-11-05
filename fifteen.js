var posX;
var posY;
var pieces;
window.onload = function() {
	var walls = document.getElementById("puzzlearea");
	var tiles = walls.getElementsByTagName('div');
	for (var i = 0; i < tiles.length; i++) {
		tiles[i].setAttribute("class", "puzzlepiece");
		//tiles[i].className = 'puzzlepiece';
    	tiles[i].style.left = (i%4*100)+'px';
    	tiles[i].style.top = (parseInt(i/4)*100) + 'px';
    	tiles[i].style.backgroundPosition= '-' + tiles[i].style.left + ' ' + '-' + tiles[i].style.top;
    	pieces[i].onmouseover = function()
    {
      if (moveCheck(parseInt(this.innerHTML)))
      {
        this.setAttribute('class', 'puzzlepiece movablepiece');
      }
    }
     pieces[i].onclick = function(){
      if (moveCheck(parseInt(this.innerHTML))){
        swap(this.innerHTML-1);
        if (finished()===true){
          setTimeout(function()
          {
          document.getElementsByTagName("H1")[0].setAttribute("id", "change");
          document.getElementById('change').innerHTML = ("YOU WON, CONGRATULATIONS");
          }, 500);
          setTimeout(function()
          {
          alert("The winning text will revert back to normal within ten seconds");
        }, 1000); 

          setTimeout(function()
          {
          document.getElementsByTagName("H1")[0].setAttribute("id", "change");
          document.getElementById('change').innerHTML = ("Fifteen Puzzle");
        }, 10000);




        }

	}
	var shufflebutton = document.getElementById('shufflebutton');
  shufflebutton.onclick = function(){
  	for (var k = 0; k < 250; k++){
      var l = parseInt(Math.random()* 100) %4;
      if (l == 0){
        var temp = moveUp(posX, posY);
        if (temp != -1){
          swap(temp);
        }
      }
      if (l == 1){
        var temp = moveDown(posX, posY);
        if (temp != -1){
          swap(temp);
        }
      }
      if (l == 2){
        var temp = moveLeft(posX, posY);
        if (temp != -1){
          swap(temp);
        }
      }
      if (l == 3)
      {
        var temp = moveRight(posX, posY);
        if (temp != -1){
          swap(temp);
        }
      }
    }
  }
}

function moveLeft(x, y)
{
  var xx = parseInt(x);
  var yy = parseInt(y);

  if (xx > 0)
  {
    for (var m = 0; m < pieces.length; m++)
    {
      if (parseInt(pieces[m].style.left) + 100 == xx && parseInt(pieces[m].style.top) == yy)
      {
        return m;
      }
    }
  }
  else
  {
    return -1;
  }
}

function moveRight(x, y)
{
  var xx = parseInt(x);
  var yy = parseInt(y);
  if (xx < 300)
  {
    for (var n =0; n < pieces.length; n++)
    {
      if (parseInt(pieces[n].style.left) - 100 == xx && parseInt(pieces[n].style.top) == yy)
      {
        return n;
      }
    }
  }
  else
  {
    return -1;
  }
}

function moveUp(x, y)
{
  var xx = parseInt(x);
  var yy = parseInt(y);
  if (yy > 0)
  {
    for (var o = 0; o < pieces.length; o++){
      if (parseInt(pieces[o].style.top) + 100 == yy && parseInt(pieces[o].style.left) == xx)
      {
        return o;
      }
    }
  }
  else
  {
    return -1;
  }
}

function moveDown(x, y)
{
  var xx = parseInt(x);
  var yy = parseInt(y);
  if (yy < 300)
  {
    for (var p = 0; p < pieces.length; p++)
    {
      if (parseInt(pieces[p].style.top) - 100 == yy && parseInt(pieces[p].style.left) == xx)
      {
        return p;
      }
    }
  }
  else
  {
    return -1;
  }
}

function moveCheck(pos)
{
  if (moveLeft(posX, posY) == (pos-1))
  {
    return true;
  }

  if (moveDown(posX, posY) == (pos-1))
  {
    return true;
  }

  if (moveUp(posX, posY) == (pos-1))
  {
    return true;
  }

  if (moveRight(posX, posY) == (pos-1))
  {
    return true;
  }
}

function finished()
{
  var finish = true;
  for (var q = 0; q < pieces.length; q++)
  {
    var y = parseInt(pieces[q].style.top);
    var x = parseInt(pieces[q].style.left);
    if (x != (q%4*100) || y != parseInt(q/4)*100)
    {
      finish = false;
      break;
    }
  }
  return finish;
}