import LZString from 'lz-string';
import ajax from '@fdaciuk/ajax';
import rrwebRecord from 'rrweb/lib/record/rrweb-record.js';

class BehaviorRecord {
	constructor() {
    this.stop = null;
    this.eventsMatrix = [];
	}

	// 开始录制
	startRecord() {
		console.log('start record');
		this.stop = rrwebRecord({
			emit: (event, isCheckout) => {
        if (isCheckout) this.rrwebSessionSet();
		    this.eventsMatrix.push(event);				
			},
		  // checkoutEveryNms: 1 * 60 * 1000, // checkout every 1 minutes
		  checkoutEveryNth: 10, // checkout every 100 events
		});

		return this.stop
	}

	// 停止录制
	stopRecord() {
		console.log('stop record');
    this.stop && this.stop();
	}

	// 触发发送数据到服务器
	rrwebSessionSet() {
		const eventsString = JSON.stringify(this.eventsMatrix);
		this.eventsMatrix = [];
		this.eventsMatrix.length = 0;
	  const currentUlr = window.location.href;
 		const appName = this.getHostPath();
		const params = {
 			url: currentUlr,
 			appName: appName + '-web',
			events: LZString.compressToEncodedURIComponent(eventsString),
		}
		this.sendServer(params);
	}

	//  发送服务器
	sendServer(params) {
		console.log(params);
		const request = ajax({
			method: 'POST',
      url: 'http://172.27.84.80:5000/api/bodies',
      data: params
		})
		const timer = setTimeout(function () {
		  request.abort()
		}, 10000)
		request.then((reult)  => {
			clearTimeout(timer)
			this.successCallBack(reult);
		}).catch(() => this.stopRecord());
	}

	// 服务器成功回调
	successCallBack(data) {
    console.log(data);
	}

	// 获取host path
	getHostPath() {
		const path = window.location.pathname;
		if (path) {
			return `${path.split('/')[1]}-web`;
		}
		return '';
	}
}

window.onload = () => {
	const haviorRecord = new BehaviorRecord();
	haviorRecord.startRecord();
}

// export default new BehaviorRecord();
