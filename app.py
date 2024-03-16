from dotenv import load_dotenv
import os
load_dotenv()
from flask import Flask, jsonify, request
from pymongo import MongoClient
from flask_cors import CORS, cross_origin

app = Flask(__name__)
cors = CORS(app)

user_id = os.getenv('USER_ID')
# Connect to MongoDB
client = MongoClient(os.getenv('MONGO_URI'))
db = client['buildify']

@app.route('/')
def index():
    return 'Hello, World!'


@app.route('/projects', methods=['POST'])
def create_project():
    new_data = request.json
    try:
        db['projects'].insert_one({
            'name': new_data['name'],  
            'user_id': user_id,
            'description': new_data['description'],  
        })
        return jsonify({'message': 'Project created successfully'}), 200
    except Exception as e:
        return jsonify({'message': str(e)}), 500


@app.route('/projects', methods=['GET'])
def get_projects():
    projects = db['projects'].find()
    data = []
    for project in projects:
        project['_id'] = str(project['_id'])
        data.append(project)
    return jsonify(data), 200


@app.route('/projects/<id>', methods=['GET'])
def get_project():
    project = db['projects'].find_one({'_id': id})
    project['_id'] = str(project['_id'])
    return jsonify(project), 200

@app.route('/projects/<id>', methods=['PUT'])
def update_project(id):
    new_data = request.json
    try:
        db['projects'].update_one({'_id': id}, {'$set': new_data})
        return jsonify({'message': 'Project updated successfully'}), 200
    except Exception as e:
        return jsonify({'message': str(e)}), 500
    

## Update Workflow inside Project
@app.route('/workflows/<id>', methods=['POST'])
def create_workflow(id):
    print(request.json)
    new_data = request.json
    try:
        db['workflows'].update_one({'_id':id}, {"$set": new_data}, upsert=True)
        return jsonify({'message': 'Workflow created successfully'}), 200
    except Exception as e:
        return jsonify({'message': str(e)}), 500




if __name__ == '__main__':
    app.run(debug=True)