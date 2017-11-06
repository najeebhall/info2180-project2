var posX;
var posY;
var tiles;
window.onload = function() {
	var walls = document.getElementById("puzzlearea");
	tiles = walls.getElementsByTagName('div');
	for (var i = 0; i < tiles.length; i++) {
		tiles[i].setAttribute("class", "puzzlepiece");
		//tiles[i].className = 'puzzlepiece';
    	tiles[i].style.left = (i%4*100)+'px';
    	tiles[i].style.top = (parseInt(i/4)*100) + 'px';
    	tiles[i].style.backgroundPosition= '-' + tiles[i].style.left + ' ' + '-' + tiles[i].style.top;
    	tiles[i].onmouseover = function()
    	{
      		if (moveCheck(parseInt(this.innerHTML)))
      		{
        		this.setAttribute('class', 'puzzlepiece movablepiece');
      		}
    	}
     	tiles[i].onclick = function(){
      		if (moveCheck(parseInt(this.innerHTML))){
        		swap(this.innerHTML-1);
        		if (finished()===true){
          			setTimeout(function()
          			{
          				document.getElementsByTagName("H1")[0].setAttribute("id", "change");
          				var test = document.getElementsByTagName('title');
          				var pic = document.createElement("IMG");
          				pic.setAttribute("src", "https://bfgblog-a.akamaihd.net/uploads/2015/01/Screen-Shot-2015-01-28-at-1.24.57-PM.png");
          				pic.style.float = top;
          				document.body.appendChild(pic);
          				document.getElementById('change').innerHTML = ("YOU HAVE WON!! SEE BELOW!");
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
				return;		
			}
        }
	}
	posX = '300px';
  	posY = '300px';
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

function swap(pos)
{
  var temp = tiles[pos].style.top;
  tiles[pos].style.top = posY;
  posY = temp;
  temp = tiles[pos].style.left;
  tiles[pos].style.left = posX;
  posX = temp;
}

function moveLeft(x, y)
{
  var xx = parseInt(x);
  var yy = parseInt(y);

  if (xx > 0)
  {
    for (var m = 0; m < tiles.length; m++)
    {
      if (parseInt(tiles[m].style.left) + 100 == xx && parseInt(tiles[m].style.top) == yy)
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
    for (var n =0; n < tiles.length; n++)
    {
      if (parseInt(tiles[n].style.left) - 100 == xx && parseInt(tiles[n].style.top) == yy)
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
    for (var o = 0; o < tiles.length; o++){
      if (parseInt(tiles[o].style.top) + 100 == yy && parseInt(tiles[o].style.left) == xx)
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
    for (var p = 0; p < tiles.length; p++)
    {
      if (parseInt(tiles[p].style.top) - 100 == yy && parseInt(tiles[p].style.left) == xx)
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
  for (var q = 0; q < tiles.length; q++)
  {
    var y = parseInt(tiles[q].style.top);
    var x = parseInt(tiles[q].style.left);
    if (x != (q%4*100) || y != parseInt(q/4)*100)
    {
      finish = false;
      break;
    }
  }
  return finish;
}