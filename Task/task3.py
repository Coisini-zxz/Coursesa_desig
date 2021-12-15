import matplotlib.pyplot as plt
import pandas as pd
import seaborn as sb

inter = pd.read_excel('./附件/附件1.xlsx', '国际疫情')
a = inter.copy()

c = ['印度', '伊朗', '意大利', '加拿大', '秘鲁', '南非']
inter = inter[inter['国家'].isin(c)]
temp = inter.groupby('国家').diff().drop(columns='日期').fillna(0)
temp.columns = ['新增确诊', '新增治愈', '新增死亡']
inter = pd.concat([inter, temp], axis=1).reset_index(drop=True)
inter['index_'] = inter.index

sb.set_theme(font='Microsoft YaHei')
sb.histplot(x='日期', y='新增确诊', hue='国家', kde=True, data=inter)

# plt.figure(figsize=(8, 8))
sb.lineplot(x='日期', y='新增治愈', hue='国家', data=inter)
plt.savefig('./result/result3/task3_1_1_新增治愈.svg')

plt.figure(figsize=(15, 15))
sb.lineplot(x='日期', y='新增死亡', hue='国家', data=inter)
plt.savefig('./result/result3/task3_1_2_新增死亡.svg')

# plt.figure(figsize=(15, 15))
sb.lineplot(x='日期', y='新增确诊', hue='国家', data=inter)
plt.savefig('./result/result3/task3_1_3_新增确诊.svg')

# plt.figure(figsize=(15, 15))
sb.lineplot(x='日期', y='累计死亡', hue='国家', data=inter)
plt.savefig('./result/result3/task3_1_4_累计死亡.svg')

# plt.figure(figsize=(15, 15))
sb.lineplot(x='日期', y='累计治愈', hue='国家', data=inter)
plt.savefig('./result/result3/task3_1_5_累计治愈.svg')

# plt.figure(figsize=(15, 15))
sb.lineplot(x='日期', y='累计确诊', hue='国家', data=inter)
plt.savefig('./result/result3/task3_1_6_累计确诊.svg')
plt.show()

inter = a
c = ['美国', '英国', '俄罗斯']
inter = inter[inter['国家'].isin(c)]
temp = inter.groupby('国家').diff().drop(columns='日期').fillna(0)
temp.columns = ['新增确诊', '新增治愈', '新增死亡']
inter = pd.concat([inter, temp], axis=1).reset_index(drop=True)
inter['index_'] = inter.index

# plt.figure(figsize=(10, 10))
sb.lineplot(x='日期', y='新增治愈', hue='国家', data=inter)
plt.savefig('./result/result3/task3_2_1_新增治愈.svg')

# plt.figure(figsize=(10, 10))
sb.lineplot(x='日期', y='新增确诊', hue='国家', data=inter)
plt.savefig('./result/result3/task3_2_2_新增确诊.svg')

# plt.figure(figsize=(10, 10))
sb.lineplot(x='日期', y='新增死亡', hue='国家', data=inter)
plt.savefig('./result/result3/task3_2_3_新增死亡.svg')

# plt.figure(figsize=(10, 10))
sb.lineplot(x='日期', y='累计死亡', hue='国家', data=inter)
plt.savefig('./result/result3/task3_2_4_累计死亡.svg')

# plt.figure(figsize=(10, 10))
sb.lineplot(x='日期', y='累计确诊', hue='国家', data=inter)
plt.savefig('./result/result3/task3_2_5_累计确诊.svg')

# plt.figure(figsize=(10, 10))
sb.lineplot(x='日期', y='累计治愈', hue='国家', data=inter)
plt.savefig('./result/result3/task3_2_6_累计治愈.svg')
