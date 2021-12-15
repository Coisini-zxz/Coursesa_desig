import matplotlib.pyplot as plt
import pandas as pd
import seaborn as sb

cities = pd.read_excel('./附件/附件1.xlsx', '城市疫情')
district = pd.read_excel('./附件/附件1.xlsx', '城市省份对照表')
a = pd.read_excel('./附件/附件1.xlsx', 'A市涉疫场所分布')
pd.set_option('mode.chained_assignment', None)


# task1_1
def fill(x, a):
    if str(x['日期'].max())[6:10] != '6-30':
        x = x.append(a)
    x.index = x['日期'].drop_duplicates()
    x = x.resample('D').asfreq()
    x = x.drop(columns='日期')
    x = x.drop(columns='城市')
    x = x.fillna(0)
    return x


temp = pd.DataFrame([pd.Timestamp('2020-06-30'), 'o', 0, 0, 0], index=list(cities.columns)).T
cities = cities.groupby('城市').apply(fill, temp).reset_index()
cities['新增确诊'] = cities['新增确诊'].astype('int')
cities['新增治愈'] = cities['新增治愈'].astype('int')
cities['新增死亡'] = cities['新增死亡'].astype('int')

cities = pd.concat([cities, cities.groupby('城市').cumsum()], axis=1)
cities.columns = ['城市', '日期', '新增确诊', '新增治愈', '新增死亡', '累计确诊', '累计治愈', '累计死亡']
order = ['城市', '日期', '累计确诊', '累计治愈', '累计死亡']
cusum = cities[order]
cusum.to_csv('./result/result1/task1_1.csv', index=False, encoding='utf_8_sig')

c = {'武汉', '深圳', '保定'}
d = {10, 15}
cusum['day'] = cusum['日期'].apply(lambda x: x.day)
cusum['day'] = cusum['day'].apply(lambda x: True if x in d else False)
temp = cusum[cusum['城市'].isin(c) & cusum['day']].drop(columns=['day']).reset_index(drop=True)
temp.to_csv('./result/result1/task1_1_temp.csv', encoding='utf_8_sig')

print('Task finished')

# task1_2
d_ = {}
for i, v in district.values:
    d_[i] = v
cities['省份'] = cities['城市'].apply(lambda x: d_[x])
order = ['省份', '日期', '新增确诊', '新增治愈', '新增死亡']
provinces = cities[order]
provinces = pd.concat([provinces, provinces.groupby('省份').cumsum()], axis=1)
provinces.columns = ['省份', '日期', '新增确诊人数', '新增治愈人数', '新增死亡人数', '累计确诊人数', '累计治愈人数', '累计死亡人数']
provinces[['省份', '日期']].duplicated().sum()
provinces = provinces.groupby(['省份', '日期']).sum().reset_index()
provinces.to_csv('./result/result1/task1_2.csv', index=False, encoding='utf_8_sig')

c = {'湖北', '广东', '河北'}
provinces['day'] = provinces['日期'].apply(lambda x: x.day)
provinces['day'] = provinces['day'].apply(lambda x: True if x == 15 else False)
temp = provinces[provinces['省份'].isin(c) & provinces['day']].drop(columns=['day']).reset_index(drop=True)
temp.to_csv('./result/result1/task1_2_temp.csv', encoding='utf_8_sig')

print('task2 --finished')

# task1_3
provinces['住院人数'] = provinces['累计确诊人数'] - provinces['新增治愈人数'] - provinces['新增死亡人数']
order = ['省份', '日期', '住院人数']
temp = provinces[order]
temp.to_csv('./result/result1/task1_3.csv', index=False, encoding='utf_8_sig')

c = ['湖北', '广东', '上海']
provinces['day'] = provinces['日期'].apply(lambda x: x.day)
provinces['day'] = provinces['day'].apply(lambda x: True if x == 20 else False)
temp = provinces[provinces['省份'].isin(c) & provinces['day']].drop(columns=['day']).reset_index(drop=True)
temp.to_csv('./result/result1/task1_3_temp.csv', encoding='utf_8_sig')

print('task1_3 --finished')

# task1_4
a.columns = ['疫情场所', '通报日期', 'x', 'y']
a['w'] = 1

sb.set_style('darkgrid')  # 设置风格为暗，要不然看不出来

g = sb.FacetGrid(data=a[:6], col_order='class', height=7)  # (height)size为设置显示界面大小
g.map(plt.scatter, 'x', 'y', s=1400, linewidth=1, edgecolor='red', color='#ff8000')  # edgecolor为全边颜色，color为圈内颜色
g.set_axis_labels('X', 'Y')  # 设置标题
plt.savefig('./result/result1/task1_4_1.svg')

sb.set_style('darkgrid')  # 设置风格为暗，要不然看不出来

g = sb.FacetGrid(data=a[:10], col_order='class', height=7)  # (height)size为设置显示界面大小
g.map(plt.scatter, 'x', 'y', s=1400, linewidth=1, edgecolor='red', color='#ff8000')  # edgecolor为全边颜色，color为圈内颜色
g.set_axis_labels('X', 'Y')  # 设置标题
plt.savefig('./result/result1/task1_4_2.svg')
