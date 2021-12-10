from flask import Flask
import utils
from flask import jsonify

app = Flask(__name__)
@app.route("/L2")
def get_L2_data():
    data = utils.L2_data()
    data_time, new_diagnosis, new_cure, new_death = [], [], [], []
    for e, a, b, c, d in data:
        data_time.append(a.strftime("%Y-%m-%d"))  # a是datatime类型
        new_diagnosis.append(b)
        new_cure.append(c)
        new_death.append(d)
    return jsonify({"data_time": data_time, "new_diagnosis": new_diagnosis, "new_cure": new_cure, "new_death": new_death})

   
@app.route('/time')
def gettime():
    return utils.get_time()

if __name__ == '__main__':
   app.run(debug = True)


