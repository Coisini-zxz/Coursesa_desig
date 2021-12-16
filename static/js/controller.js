function gettime() {
	$.ajax({
		url: '/tim',
		timeout: 10000, //超时时间设置为10秒；
		success: function(data) {
			$("#tim").html(data)

		},
		error: function(xhr, type, errorThrown) {

		}
	});
}

function get_c1_data() {
	$.ajax({
		url: '/c1',
		success: function(data) {
			$(".num h1").eq(0).text(data.confirm)
			$(".num h1").eq(1).text(data.cure)
			$(".num h1").eq(2).text(data.dead)
		},
		error: function(xhr, type, errorThrown) {}
	})
}

function get_c2_data() {
	$.ajax({
		url: '/c2',
		success: function(data) {
			center_option.series[0].data = data.data
			center.setOption(center_option)

		},
		error: function(xhr, type, errorThrown) {}
	})
}

function get_l1_data() {
	$.ajax({
		url: "/l1",
		success: function(data) {
			left1_Option.xAxis[0].data = data.day
			left1_Option.series[0].data = data.confirm
			left1_Option.series[1].data = data.cure
			left1_Option.series[2].data = data.dead
			left1.setOption(left1_Option)
		},
		error: function(xhr, type, errorThrown) {

		}
	})
}

function get_l2_data() {
	$.ajax({
		url: "/l2",
		success: function(data) {
			left2_Option.xAxis[0].data = data.data_time
			left2_Option.series[0].data = data.new_diagnosis
			left2_Option.series[1].data = data.new_cure
			left2_Option.series[2].data = data.new_death
			left2.setOption(left2_Option)
		},
		error: function(xhr, type, errorThrown) {}
	})
}



function get_r2_data() {
	$.ajax({
		url: "/r2",
		success: function(countries) {
			for(var country of countries){
			    right2_option.series[0].data.push({
			        name:country.name,
			        value:country.confirm
			    })
			}
			right2.setOption(right2_option);
		}
	})
}


gettime()
get_l1_data()
get_l2_data()
get_c1_data()
get_c2_data()


setInterval(gettime, 300)
setInterval(get_l1_data, 600000)
setInterval(get_l2_data, 600000)
setInterval(get_c1_data, 600000)
setInterval(get_c2_data, 600000)

