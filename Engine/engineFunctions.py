from llama_index.llms.gemini import Gemini
from llama_index.embeddings.gemini import GeminiEmbedding
from llama_index.core.readers import SimpleDirectoryReader
from llama_index.core import VectorStoreIndex
from llama_index.core.retrievers import VectorIndexRetriever
from llama_index.core.query_engine import RetrieverQueryEngine


from llama_index.core import VectorStoreIndex, get_response_synthesizer
from llama_index.core.retrievers import VectorIndexRetriever
from llama_index.core.query_engine import RetrieverQueryEngine
from llama_index.core.postprocessor import SimilarityPostprocessor

import google.generativeai as genai


from llama_index.vector_stores.chroma import ChromaVectorStore
from llama_index.core.storage.storage_context import StorageContext

import chromadb

from llama_index.core import ServiceContext
import dotenv
import os
dotenv.load_dotenv()



# Loaders
def loader_csv(path):
    return path

def loader_text(path):
    return path

def loader_json(path):
    return path

def embedding_openai(path):
    return "Currently not Available"


# Embeddings
def embedding_gemini(path):
    embdding_instance = GeminiEmbedding(api_key=os.getenv("GOOGLE_GEMINI_API_KEY"))
    reader = SimpleDirectoryReader(input_dir="/home/dev/Code/Hackathon/Devhouse/"+path, recursive=True)
    document = reader.load_data()
    service_context = ServiceContext.from_defaults(llm= None, embed_model=embdding_instance)
    index = VectorStoreIndex.from_documents(documents=document, service_context=service_context)
    return index

def embedding_bert(path):
    return "Currently not Available"

def embedding_huggingface(path):
    return "Currently not Available"


# Vector Store
def vectorStore_chormaDB(index, collectionName):
    db = chromadb.PersistentClient(path="./ChromaDatabase")
    collection = db.get_or_create_collection(collectionName)
    vector_store = ChromaVectorStore(collection)
    storage_context = StorageContext.from_defaults(vector_store=vector_store)
    index.store(storage_context=storage_context)
    return index






# LLM
def llm_gemini(query, index=None):
    if index:
        llm = Gemini(api_key= os.getenv("GOOGLE_GEMINI_API_KEY"))
        embedding_instance = GeminiEmbedding(api_key=os.getenv("GOOGLE_GEMINI_API_KEY"))
        service_context = ServiceContext.from_defaults(llm=llm, embed_model=embedding_instance)
        retriever = VectorIndexRetriever(
            index=index,
            similarity_top_k=10,
        )
        response_synthesizer = get_response_synthesizer(service_context=service_context)
        query_engine = RetrieverQueryEngine(
            retriever=retriever,
            response_synthesizer=response_synthesizer,
            node_postprocessors=[SimilarityPostprocessor(similarity_cutoff=0.7)],
        )
        response = query_engine.query(query)
        return response
    else:
        genai.configure(api_key=os.getenv("GOOGLE_GEMINI_API_KEY"))
        model = genai.load_model("gemini-pro")
        response = model.query(query)
        return response
    
def llm_openai(query, index=None):
    return "Currently not Available"



def llm_llama2(query, index=None):
    return "Currently not Available"


