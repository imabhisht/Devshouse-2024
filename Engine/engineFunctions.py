from llama_index.llms.gemini import Gemini
from llama_index.embeddings.gemini import GeminiEmbedding
from llama_index.core.readers import SimpleDirectoryReader
from llama_index.core import VectorStoreIndex
from llama_index.core.retrievers import VectorIndexRetriever
from llama_index.core.query_engine import RetrieverQueryEngine
from llama_index.readers.web import SimpleWebPageReader
from llama_index.core import VectorStoreIndex, ServiceContext, get_response_synthesizer
from llama_index.core.retrievers import VectorIndexRetriever
from llama_index.core.query_engine import RetrieverQueryEngine
from llama_index.core.postprocessor import SimilarityPostprocessor
from llama_index.vector_stores.chroma import ChromaVectorStore
from llama_index.core.storage.storage_context import StorageContext
from dotenv import load_dotenv
from llama_index.core import ServiceContext
import google.generativeai as genai
from googlesearch import search
import chromadb
import dotenv
import random
import os

dotenv.load_dotenv()

# Loaders
def loader_csv(path):
    import requests
    url = path
    # download the text from the url and store it in the unique folder and return the folder name
    r = requests.get(url)
    # make the unique name
    file_name = random.randint(1000, 9999)
    if not os.path.exists("temp"):
        os.makedirs("temp")
    while os.path.exists("temp/"+str(file_name)):
        file_name = random.randint(1000, 9999)
    os.makedirs("temp/"+str(file_name))
    with open('temp/'+str(file_name)+'/data.csv', 'wb') as f:
        f.write(r.content)
    return "temp/"+str(file_name)



def loader_text(path):
    import requests
    url = path
    # download the text from the url and store it in the unique folder and return the folder name
    r = requests.get(url)
    file_name = random.randint(1000, 9999)
    if not os.path.exists("temp"):
        os.makedirs("temp")
    while os.path.exists("temp/"+str(file_name)):
        file_name = random.randint(1000, 9999)
    os.makedirs("temp/"+str(file_name))
    with open('temp/'+str(file_name)+'/data.txt', 'wb') as f:
        f.write(r.content)
    return "temp/"+str(file_name)


def loader_json(path):
    import requests
    url = path
    # download the text from the url and store it in the unique folder and return the folder name
    r = requests.get(url)
    file_name = random.randint(1000, 9999)
    if not os.path.exists("temp"):
        os.makedirs("temp")
    while os.path.exists("temp/"+str(file_name)):
        file_name = random.randint(1000, 9999)
    os.makedirs("temp/"+str(file_name))
    with open('temp/'+str(file_name)+'/data.json', 'wb') as f:
        f.write(r.content)
    return "temp/"+str(file_name)

def embedding_openai(path):
    return "Currently not Available"


# Embeddings
def embedding_gemini(path):
    # move all the folder to one forlder
    for folder in path:
        for file in os.listdir(folder):
            # move the file to the temp folder and delete the folder name the file as foldernam+filename
            os.rename(folder+"/"+file, "temp/"+folder.split("/")[-1]+file)

        os.rmdir(folder)

    
    embdding_instance = GeminiEmbedding(api_key=os.getenv("GOOGLE_GEMINI_API_KEY"))
    reader = SimpleDirectoryReader(input_dir=os.getcwd()+"/"+"temp", recursive=True)
    document = reader.load_data()
    service_context = ServiceContext.from_defaults(llm= None, embed_model=embdding_instance)
    index = VectorStoreIndex.from_documents(documents=document, service_context=service_context)
    # remove the temp folder recursively
    import shutil
    shutil.rmtree("temp", ignore_errors=True)

    return index

def fetch_top_websites(query, num_results=3):
    search_results = search(query, num_results=num_results)
    urls = []
    for url in search_results:
        urls.append(str(url))
    
    reader = SimpleWebPageReader(html_to_text=True)
    documents = reader.load_data(urls)
    
    embdding_instance = GeminiEmbedding(api_key=os.getenv("GOOGLE_GEMINI_AI"))
    service_context = ServiceContext.from_defaults(llm=None, embed_model=embdding_instance)
    index = VectorStoreIndex.from_documents(documents=documents, service_context=service_context)
    
    return index

def embedding_bert(path):
    return "Currently not Available"

def embedding_huggingface(path):
    return "Currently not Available"


# Vector Store
def vectorStore_chormaDB(collectionName,   index):
    db = chromadb.PersistentClient(path="./ChromaDatabase")
    collection = db.get_or_create_collection(collectionName)
    vector_store = ChromaVectorStore(collection)
    storage_context = StorageContext.from_defaults(vector_store=vector_store)
    index.store(storage_context=storage_context)
    return index


# System Prompt  
def system_prompt(prompt):
    return prompt


# LLM
def llm_gemini(query_input, system_prompt=None, query = None, index=None):
    if index:
        llm = Gemini(api_key= os.getenv("GOOGLE_GEMINI_API_KEY"))
        embedding_instance = GeminiEmbedding(api_key=os.getenv("GOOGLE_GEMINI_API_KEY"))
        service_context = ServiceContext.from_defaults(llm=llm, embed_model=embedding_instance, system_prompt=system_prompt)
        print(query_input)
        query_engine = index.as_query_engine(service_context=service_context)
        if query:
            response = query_engine.query(query_input+query)
        else:
            response = query_engine.query(query_input)
        return response
    
    else:
        genai.configure(api_key=os.getenv("GOOGLE_GEMINI_API_KEY"))
        model = genai.GenerativeModel('gemini-pro')
        if query:
            response = model.query(query_input+query)
        else:
            response = model.query(query_input)
        return response.response
    
def llm_openai(query, index=None):
    return "Currently not Available"



def llm_llama2(query, index=None):
    return "Currently not Available"
