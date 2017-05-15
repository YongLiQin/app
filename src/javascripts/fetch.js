export default (method, url, data) => {
	return new Promise((resolve, reject) => {
		let xhr = new XMLHttpRequest();
		xhr.open(method, url, true);
		xhr.send(data);
		xhr.onload = () => {
			if(xhr.status == 200){
				resolve(xhr.response);
			}
		};
	});
};