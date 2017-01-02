function getLeftCoord(elem){
	var box = elem.getBoundingClientRect();
	return box.left + window.pageXOffset;
}


function Switcher(options) {

	var elem = options.elem;
	var strip = elem.querySelector(".price-strip");
	var stripLeftCoord = getLeftCoord(strip); 
	var leftSwitcher = elem.querySelector(".switcher-left");
	var rightSwitcher = elem.querySelector(".switcher-right");

	var max = options.max;
	var pixelsPerValue = (strip.clientWidth - leftSwitcher.clientWidth) / max;

	elem.onmousedown = function(event){
		var target = event.target;
		if( !target.classList.contains("switcher") ) return;
		var switcherState = target.getAttribute("state");

		var stripLeftSide = getLeftCoord(strip);
    var stripRightSide = strip.offsetWidth - target.offsetWidth + 2;
		var shiftX = event.pageX - getLeftCoord(target);

		document.onmousemove = function(event){

			var newCoord = event.pageX - shiftX - stripLeftSide;
			if(newCoord < 0) newCoord = 0;
			if(newCoord > stripRightSide) newCoord = stripRightSide;
			if(switcherState === "left"){
				var rightSwitcherCoord = getLeftCoord(rightSwitcher) - stripLeftSide - target.offsetWidth;
				if(newCoord > rightSwitcherCoord) newCoord = rightSwitcherCoord;
			}else {
				var leftSwitcherCoord = getLeftCoord(leftSwitcher) - stripLeftSide + target.offsetWidth;
				if(newCoord < leftSwitcherCoord) newCoord = leftSwitcherCoord;
			}

			target.style.left = newCoord + "px";

			 elem.dispatchEvent(new CustomEvent('slide', {
     		 bubbles: true,
     		 cancelable:true,
      	 detail: {value: positionToValue(newCoord), state: switcherState}
    	 }));
		};

		document.onmouseup = function(event){
			document.onmousemove = document.onmouseup = null;
    };

	};

	 leftSwitcher.ondragstart = function() {
      return false;
   };
   rightSwitcher.ondragstart = function() {
      return false;
   };

    function positionToValue(left) {
   		 return Math.round(left / pixelsPerValue);
 	  }
}

var minPrice = document.querySelector(".min-price");
var maxPrice = document.querySelector(".max-price");


function changeValue(event){
	var state = event.detail.state;
	var newValue = event.detail.value;
	if(state === "left"){
		minPrice.innerHTML = newValue;
	}else{
		maxPrice.innerHTML = newValue;
	}
}
