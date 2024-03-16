from dotenv import load_dotenv
import os
load_dotenv()
from flask import Flask, jsonify, request
from pymongo import MongoClient

app = Flask(__name__)

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
            'user_id': user_id    
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




if __name__ == '__main__':
    app.run(debug=True)