var circleWidth = (dom1, dom2) => {
	var size = dom2.offsetWidth;
	for(let i = 0; i < dom1.length; i++){
		dom1[i].style.height = size + "px";
		dom1[i].style.width = size + "px";
	}
};
var circleHeight = (dom1, dom2) => {
	var size = dom2.offsetHeight;
	for(let i = 0; i < dom1.length; i++){
		dom1[i].style.height = size + "px";
		dom1[i].style.width = size + "px";
	}
};
export {circleWidth, circleHeight};