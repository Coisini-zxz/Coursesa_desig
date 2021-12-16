    	const countries = [
    		'澳大利亚',
    		'巴西',
    		'俄罗斯',
    		'法国',
    		'韩国',
    		'加拿大',
    		'美国',
    		'日本',
    		'英国（含北爱尔兰）'
    	];
		
		
		
		$.get(
		    '../static/json/data.json',
		    function (_rawData) {
		        run(_rawData);
		    }
		);