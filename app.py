from flask import Flask
import utils
from flask import jsonify
from flask import render_template

app = Flask(__name__)

@app.route('/')
def hello_word():
    return render_template('main.html')

@app.route("/l1")
def get_l1_data():
    data = utils.L1_data()
    day, confirm, cure, dead = [], [], [], []
    for id_, a, b, c, d in data:
        day.append(a.strftime("%Y-%m-%d")) #a是datatime类型
        confirm.append(b)
        cure.append(c)
        dead.append(d)
    return jsonify({"day": day, "confirm": confirm, "cure": cure, "dead": dead})


@app.route("/l2")
def get_L2_data():
    data = utils.L2_data()
    data_time, new_diagnosis, new_cure, new_death = [], [], [], []
    for id_, a, b, c, d in data:
        data_time.append(a.strftime("%Y-%m-%d"))  # a是datatime类型
        new_diagnosis.append(b)
        new_cure.append(c)
        new_death.append(d)
    return jsonify({"data_time": data_time, "new_diagnosis": new_diagnosis, "new_cure": new_cure, "new_death": new_death})

@app.route('/c1')
def get_c1_data():
    data = utils.C1_data()
    return jsonify({'confirm': data[2],  'cure': data[3], 'dead': data[4]})

@app.route('/c2')
def get_c2_data():
    res = []
    for tup in utils.C2_data()[1:]:
        res.append({"name": tup[1], "value": tup[2]})
    return jsonify({"data": res})

@app.route('/tim')
def gettime():
    return utils.get_time()


@app.route('/r1')
def get_r1_data():
    data = utils.R1_data()
    data_time, city, confirm = [], [], []
    for a, b, k, v in data:
        data_time.append(b.strftime("%Y-%m-%d"))
        city.append(k)
        confirm.append(int(v))
    return jsonify({"confirm": confirm, "Country": city, "Year": data_time})

# @app.route('/r2')
# def get_r2_data():
#     data = utils.R2_data()
#     countries = []
#     confirm = []
#     for k, v in data:
#         countries.append(k)
#         confirm.append(int(v))
#     return jsonify({"name": countries, "value": confirm})

if __name__ == '__main__':
    app.run(debug = True)
