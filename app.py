from flask import Flask
from pymongo import MongoClient

app = Flask(__name__)


# Connect to MongoDB
client = MongoClient('mongodb://localhost:27017/')
db = client['test_database']  # Replace 'test_database' with your database name
collection = db['test_collection']  # Replace 'test_collection' with your collection

@app.route('/')
def index():
    return 'Hello, World!'

if __name__ == '__main__':
    app.run(debug=True)