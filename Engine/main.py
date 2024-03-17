from flask import Flask, jsonify, request
from pymongo import MongoClient
import subprocess
app = Flask(__name__)
import os
import dotenv
import json

from bson import ObjectId

import codeGenerator as codeGenerator
dotenv.load_dotenv()
# Connect to MongoDB
client = MongoClient(os.getenv('MONGO_URI'))
db = client['buildify']
app_code_collection = db['workflows']


@app.route('/')
def hello_world():
    return 'Hello, World!'

@app.route('/execute/<unique_code>')
def execute_code(unique_code):
    user_api_input = request.args.get('input')
    print(unique_code)
    unique_code = ObjectId(unique_code)
    # mongo_id = ObjectId(unique_code)
    
    # Retrieve the Python code associated with the unique identifier from MongoDB
    code_doc = app_code_collection.find_one({'_id': unique_code})

    if code_doc:
        # python_code = "print('Hello, World!')"
        # with open("test.json", "r") as f:
        #     json_data = json.load(f)
        json_data = {
         "flowChart": code_doc["dataxx2"]
        }
        print(json_data)
        # Parse the JSON and generate the code
        python_code = f"import engineFunctions\nuser_api_input={user_api_input}\n"
        python_code += codeGenerator.parse_json(json_data)
        print(python_code)
        try:
            # Path to your virtual environment's Python interpreter
            virtualenv_python = "/home/dev/Code/Hackathon/Devshouse-2024"+"/venv/bin/python"

            # Current working directory
            cwd = os.getcwd()

            # Construct the command to execute the Python code in the virtual environment
            command = [virtualenv_python, '-c', python_code]

            # Run the command in the specified directory
            process = subprocess.Popen(command, cwd=cwd, stdout=subprocess.PIPE, stderr=subprocess.PIPE)
            stdout, stderr = process.communicate()

            # Decode bytes to string
            output = stdout.decode('utf-8')
            errors = stderr.decode('utf-8')

            # Return the captured output as the API response
            result = {'output': output.strip(), 'errors': errors.strip()}
            return jsonify(result), 200
        except Exception as e:
            # Handle any errors that occur during code execution
            error_message = {'error': str(e)}
            return jsonify(error_message), 500
    else:
        # Handle the case where the unique identifier is not found in the database
        return jsonify({'error': 'Invalid unique code'}), 404


@app.route("/test")
def test():
    from engineFunctions import my_llmops
    import os 

    # Create an instance of my_llmops
    my_llm  = my_llmops()

    # Upload document and create embedding
    a = my_llm.upload_doument("test.txt")
    b = my_llm.create_embedding(doc="test", embedding_model= 'gemini')

    # Chat with index
    c = my_llm.chat_with_index(b, 'mission of microsoft?', 'gemini', "gemini")

    # Print response
    print(c)

    # Return response as JSON
    return jsonify({"response": str(c)})
@app.route('/test_add_data')
def test_add_data():
    code_my= '''
`from test1 import my_llmops
import os 
my_llm  = my_llmops('gemini', 1)
a = my_llm.upload_doument("test.txt")
b = my_llm.create_embedding(doc="test", embedding_model= 'gemini')
c = my_llm.chat_with_index(b, 'mission of microsoft?', 'gemini')
print(c)`

'''
    app_code_collection.insert_one({'unique_code': '4', 'code': code_my})
    return 'Data added successfully'

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')