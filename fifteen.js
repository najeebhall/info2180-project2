window.onload = function() {
	var walls = document.getElementById("puzzlearea");
	var tiles = walls.getElementsByTagName('div');
	for (var i = 0; i < tiles.length; i++) {
		tiles[i].setAttribute("class", "puzzlepiece");
		//tiles[i].className = 'puzzlepiece';
    	tiles[i].style.left = (i%4*100)+'px';
    	tiles[i].style.top = (parseInt(i/4)*100) + 'px';
    	tiles[i].style.backgroundPosition= '-' + tiles[i].style.left + ' ' + '-' + tiles[i].style.top;
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