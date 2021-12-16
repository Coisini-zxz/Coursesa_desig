/**
 * 实时显示时间
 */
 function showTime(){
	var time = new Date();
	var year = time.getFullYear();
	var month = (time.getMonth()+1+'').padStart(2,'0');
	var day = (time.getDate()+'').padStart(2,'0');
	var hour = (time.getHours()+'').padStart(2,'0');
	var minute = (time.getMinutes()+'').padStart(2,'0');
	var second = (time.getSeconds()+'').padStart(2,'0');
	
	var content = `${year}年${month}月${day}日${hour}:${minute}:${second}`;
	// $('#title .time').text(content);
	$("#tim").html(content)
}

showTime();
setInterval(showTime,1000);      //每秒运行一次