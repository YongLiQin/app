var $ = (query) => {
	return document.querySelector(query);
};
var $$ = (query) => {
	return document.querySelectorAll(query);
};
export {$, $$};