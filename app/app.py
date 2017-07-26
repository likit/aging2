from flask import Flask
from flask_pymongo import PyMongo

app = Flask(__name__)
app.config['MONGO_HOST'] = 'localhost'
app.config['MONGO_PORT'] = 27017
app.config['MONGO_DBNAME'] = 'hsudb'
mongo = PyMongo(app)

app.config['MONGO2_HOST'] = 'localhost'
app.config['MONGO2_PORT'] = 27017
app.config['MONGO2_DBNAME'] = 'survey_dementia01'
mongo2 = PyMongo(app, config_prefix='MONGO2')