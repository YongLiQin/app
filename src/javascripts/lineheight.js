let lineHeight = (dom1, dom2) => {
	let size = dom2.offsetHeight;
	for(let i = 0; i < dom1.length; i++){
		dom1[i].style.lineHeight = size + "px";
	}
};
export default lineHeight;