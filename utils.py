import time

import pymysql


def get_time():
    time_str =  time.strftime("%Y{}%m{}%d{} %X")
    return time_str.format("年","月","日")     #因为直接写不支持直接识别中文，才用format写

#return: 连接，游标
def get_conn():

    # 创建连接
    conn = pymysql.connect(host='rm-2ze9ef54d26gq84puao.mysql.rds.aliyuncs.com',
                            port=3306,
                            user='curriculum_design',
                            password='Zhang0415',
                            db='Cov',
                            charset='utf8'
                           )
    # 创建游标
    cursor = conn.cursor()# 执行完毕返回的结果集默认以元组显示
    return conn, cursor


def close_conn(conn, cursor):
    cursor.close()
    conn.close()

def query(sql,*args):
    """
    封装通用查询
    :param sql:
    :param args:
    :return: 返回查询到的结果，((),(),)的形式
    """
    conn, cursor = get_conn()
    cursor.execute(sql, args)
    res = cursor.fetchall()
    close_conn(conn, cursor)
    return res

def C1_data():
    """
    :return: 返回大屏div id=c1 的数据
    """
    # 因为会更新多次数据，取时间戳最新的那组数据
    sql = "select * from L1 order by id desc limit 1"
    res = query(sql)
    res_list = [str(i) for i in res[0]]
    res_tuple = tuple(res_list)
    return res_tuple


def C2_data():
    # 因为会更新多次数据，取时间戳最新的那组数据
    sql = "select * from C2"
    res = query(sql)
    return res

def L1_data():
    sql = "select * from L1"
    res = query(sql)
  return res

def L2_data():
    sql = "SELECT * FROM `L2`"
    res = query(sql)
  return res


def get_r1_data():
    day = time.localtime().tm_yday
    progress = (day/365)*100
    progress = '%.2f' % progress
    return progress

#返回最近的30条热搜
def get_r2_data():
    sql = 'select content from guonei_dynamic order by dt asc limit 30'
    res = query(sql)
    return res

