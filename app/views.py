from bson.json_util import dumps
from flask import render_template, jsonify
from app import app, mongo

@app.route('/')
def main():
    return render_template('index.html')


@app.route('/partone')
def partone():
    return render_template('part1.html')


@app.route('/parttwo')
def parttwo():
    return render_template('part2.html')


@app.route('/partthree')
def partthree():
    return render_template('part3.html')


@app.route('/about')
def about():
    return render_template('about.html')

@app.route('/api/v1/hsu/<hsuid>')
@app.route('/api/v1/hsu/')
def get_hsu(hsuid=None):
    if not hsuid:
        hsu_list = []
        for hsu in mongo.db.health_care_unit.find():
            hsu_list.append(dumps(hsu))
        return jsonify({'data': hsu_list})
    else:
        hsu = mongo.db.health_care_unit.find_one({'unit_id_short': hsuid})
        return jsonify({'data', [dumps(hsu)]})
