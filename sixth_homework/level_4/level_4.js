function frankAjax(paramObj) {
	
	return new Promise((resolve,reject)=>{
		//处理参数
		if (paramObj.type.toLowerCase() == 'get') {
		
			let arr = []
			for (let item in paramObj.data) {
				let str = item + '=' + paramObj.data[item]
				arr.push(str)
			}
		
			let paramStr = arr.join('&')
		
			paramObj.url += paramObj.url.indexOf('?') == -1 ?
				'?' + paramStr :
				'&' + paramStr;
		
		} else if (paramObj.type.toLowerCase() == 'post') {
			var formData = new FormData();
			for (let pro in paramObj.data) {
				formData.append(pro, paramObj.data[pro])
				//console.log(formData);
			}
		} else {
			console.log('请求类型错误');
		}
		
		//准备xhr
		let xhr = new XMLHttpRequest()
		xhr.onreadystatechange = function() {
			if (xhr.readyState == 4) {
				if (xhr.status == 200) {
					//paramObj.success(JSON.parse(xhr.responseText))
					resolve(JSON.parse(xhr.responseText));
				} else {
					reject("请求数据错误");
				}
			}
		}
		//准备发送
		
		xhr.open(paramObj.type, paramObj.url, true);
		//发送请求
		if (paramObj.type.toLowerCase() == 'get') {
			xhr.send()
		} else if (paramObj.type.toLowerCase() == 'post') {
			xhr.send(formData);
		} else {
			console.log('请求类型错误');
		}
	})
	
}
