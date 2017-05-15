export default (method, url, data, callback) => {
	return new Promise((resolve, reject) => {
		let xhr = new XMLHttpRequest();
		xhr.open(method, url, true);
		xhr.send(data);
		xhr.onload = callback;
	});
};