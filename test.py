import json
data = []
def conversion(data):
    countries = []
    confirm = []
    for k, v in data:
        countries.append(k)
        confirm.append(int(v))

    a = []
    i = 0
    while True:
        item = {
            "name": countries[i],
            "confirm": confirm[i]
        }
        a.append(item)
        i += 1
        if i > 220:
            break
    data = json.dumps(a, ensure_ascii=False)
    with open('./static/json/r2.json', 'w') as dump_f:
        dump_f.write(data)
