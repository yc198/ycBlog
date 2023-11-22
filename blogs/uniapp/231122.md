---
title: uniapp
date: 2023-11-22
sidebar: 'auto'
tags:
 - uniapp
# categories 文章所属类别，这个是一个数组，必填项
categories:   
 -  uniapp
---

## uniapp
### 对象传参

### 1.编码(`encodeURIComponent`)
```js
    let str = JSON.stringify(deviceInfo)
    // 正常解码，编码时对所有“%”进行单独处理，手动转换为“%25”
    str = str.replace(/%/g, '%25')
	let query = encodeURIComponent(str)
    uni.navigateTo({
		// 将搜索结果作为参数传递
		url:'/pages/Home/search?results=' + query
	})
```    
### 2.解码(`decodeURIComponent`)
```js
    data() {
        return{
            // 获取参数
	        results: [], // 用于存储搜索结果的数据列表
        }
    }
    onLoad(options) {
        if (options.results) {
            // 获取传递过来的搜索结果参数
            this.results = JSON.parse(decodeURIComponent(options.results));
	    }
    }
```