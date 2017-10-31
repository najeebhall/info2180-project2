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
	
	//var wall = document.getElementById("puzzlearea");
	//walls.addclass('puzzlepiece');
	/*var puzzlearea = $(#puzzlearea);
	var tiles = puzzlearea.children();
	for (var i = 0, i < tiles.length, i++) {
		tiles=.addclass(puzzlepiece);

	}*/
}