
------------------------------------------------------------------------------------------------------------
此项目经优化，详情请移步: [Epidemic_Project](https://github.com/WxylkxyZz/Epidemic_Project)
------------------------------------------------------------------------------------------------------------
一.  数据预处理、
    Task --> task1


二. 利用 Python + Flask ＋ Echarts 实现可视化大屏

    2.1 数据提取 :
				(1)使用 result1 中的数据 利用EXCEL数据透视表以及python工具 拿到自己想要的数据 操作不再给出
				(2)导入SQL 供ajax请求调用(动态更新)

	2.2 可视化展示 : 
				(1)  固定数据  ---> 直接html解决 ---> 不再需要Flask做后端支持
		        (2)  实时更新数据  ---> 部署定时爬虫 写入SQL ---> 动态更新可视化数据 + Flask做后端支持
					  
	2.2 生产模式部署 :
				利用 Nginx作反向代理的网关实现负载均衡
					  
	注: 1. 当前使用了(1)ajax调用RDS云数据库(2)直接调用本地json数据 仅仅是为了练习
	    2. r2数据调用的腾讯疫情api url='https://api.inews.qq.com/newsqa/v1/automation/foreign/country/ranklist'


三. 国际疫情的发展分析
    Task --> task3


四. 安装相关依赖
    执行 pip install -r requirements.txt  即可  
    注: (1) 需要更改数据库user/password  本例直接导入SQL_tables内的sql文件即可 不需要重写sql表  
        (2) json数据转换  
               (2.1): 利用 Flask的jsonify  
               (2.2): 利用 json模块 eg ---> test.py  


五. 运行
    执行 app.py 即可



