function request(method,url,success/* ,failure */) { 
	//实例化XMLHttpRequest对象
	const xhr = new XMLHttpRequest()
	//初始化一个get请求
	xhr.open(method, url, true)
	//接收返回值
	xhr.onreadystatechange = () => {
	  if (xhr.readyState === 4) {
	    if ((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304) {
	      const res = JSON.parse(xhr.responseText)
	      console.log(res)
	      console.log("请求成功")
		  success(res.result)
	      // do something
	    } else {
	      console.log("请求失败")
	    }
	  }
	}
	//发送请求
	xhr.send()
}
