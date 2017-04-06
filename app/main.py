import sys
from flask import Flask, render_template
from flask_pymongo import PyMongo
import views

app = Flask(__name__)
mongo = PyMongo(app)

app.config['MONGO_HOST'] = 'localhost'
app.config['MONGO_PORT'] = 27017

@app.route('/')
def main():
    user = mongo.db.users.find({'id': 1})
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

if __name__=="__main__":
    app.run(debug=True)