var lineHeight = (dom1, dom2) => {
	var size = dom2.offsetHeight;
	for(let i = 0; i < dom1.length; i++){
		dom1[i].style.lineHeight = size + "px";
	}
};
export default lineHeight;