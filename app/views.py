import pprint
from datetime import datetime
from bson.json_util import dumps
from flask import render_template, jsonify, request
from app import app, mongo, mongo2

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
            hsu['_id'] = str(hsu['_id'])  # convert mongo object to string
            hsu_list.append(hsu)
        return jsonify({'data': hsu_list})
    else:
        hsu = mongo.db.health_care_unit.find_one({'unit_id_short': hsuid})
        hsu['_id'] = str(hsu['_id'])  # convert object to string
        return jsonify({'data', [hsu]})

@app.route('/api/v1/results/', methods=['POST'])
def get_results():
    data = request.get_json()
    data['addedAt'] = datetime.now()
    hsu_doc_count = mongo2.db.results.count({'hospitalId': data.get('hospitalId')})
    data['surveyId'] = hsu_doc_count + 1
    inserted_id = mongo2.db.results.insert_one(data).inserted_id
    return jsonify({'response': str(inserted_id)})


@app.route('/api/v1/results/<int:hospital_id>', methods=['GET'])
def get_hsu_result(hospital_id):
    results = mongo2.db.results.find({'hospitalId': hospital_id})
    data = []
    for res in results:
        data.append({
            'hospitalName': res['hospitalName'],
            'hospitalId': res['hospitalId'],
            'surveyId': res['surveyId'],
            'addedAt': res['addedAt'],
            'addedBy': res['hospitalAssessor']
        })
    return jsonify({'response': [{'count': len(data), 'data': data}]})

@app.route('/results/<int:hospital_id>')
def get_hsu_result_list(hospital_id):
    return render_template('results.html', hospital_id=hospital_id)