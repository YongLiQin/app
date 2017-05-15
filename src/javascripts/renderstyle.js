export default (dom, target, value) => {
	for(let i = 0; i < dom.length; i++)
	dom[i].style[target] = value;
};