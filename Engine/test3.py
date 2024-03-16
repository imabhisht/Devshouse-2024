import engineFunctions

def parse_json_and_generate_code(json_data):
  """Parses the provided JSON data and generates Python code using engineFunctions.

  Args:
      json_data: A dictionary representing the JSON data structure.

  Returns:
      A string containing the generated Python code.
  """

  code_lines = []

  # Loop through each node in the flowchart
  for node in json_data["flowChart"]:
    node_id = node["nodeID"]
    node_name = node["nodeName"]
    arguments = node.get("arguments", {})  # Handle optional 'arguments' key

    # Call the corresponding engine function based on the node name
    if node_name == "loader_text":
      path = arguments["path"]
      code_lines.append(f"node_{node_id} = engineFunctions.loader_text(path='{path}')")
    elif node_name == "embedding_gemini":
      parent_ids = node["parentsID"]
      parent_nodes = [f"node_{parent_id}" for parent_id in parent_ids]  # Construct list of parent node references
      code_lines.append(f"node_{node_id} = engineFunctions.embedding_gemini([{', '.join(parent_nodes)}])")
    elif node_name == "system_prompt":
      prompt = arguments["prompt"]
      code_lines.append(f"node_{node_id} = engineFunctions.system_prompt(prompt='{prompt}')")
    elif node_name == "llm_gemini":
      parent_ids = node["parentsID"]
      system_prompt_node_id = None
      embedding_node_id = None
      for parent_id in parent_ids:
        if "system_prompt" in json_data["flowChart"][parent_id]["nodeName"]:
          system_prompt_node_id = parent_id
        elif "embedding_gemini" in json_data["flowChart"][parent_id]["nodeName"]:
          embedding_node_id = parent_id
      query_input = "user_input"  # Assuming user input comes from outside
      system_prompt = None if system_prompt_node_id is None else f"node_{system_prompt_node_id}"
      index = f"node_{embedding_node_id}" if embedding_node_id is not None else None
      code_lines.append(f"node_{node_id} = engineFunctions.llm_gemini(query_input='{query_input}', system_prompt={system_prompt}, index={index})")
    else:
      print(f"Warning: Unknown node name: {node_name}")  # Handle unexpected node names

  # Print the final output of the last LLM node
  code_lines.append(f"print(node_{node_id})")  # Assuming the last node is the output

  return "\n".join(code_lines)

json_file= {
  "userID": "1",
  "appName": "testing",
  "flowChart": [
    {
      "nodeID": "1",
      "nodeName": "loader_text",
      "childID": [2],
      "parentsID": [],
      "arguments": {
        "path": "https://firebasestorage.googleapis.com/v0/b/buildify-ai.appspot.com/o/uploads%2Fwittyhacks.txt?alt=media&token=6b4c230e-0f9c-4da7-ae91-daa523117489"
      }
    },
    {
      "nodeID": "22",
      "nodeName": "loader_text",
      "childID": [2],
      "parentsID": [],
      "arguments": {
        "path": "https://firebasestorage.googleapis.com/v0/b/buildify-ai.appspot.com/o/uploads%2Fwittyhacks.txt?alt=media&token=6b4c230e-0f9c-4da7-ae91-daa523117489"
      }

    },
    {
      "nodeID": "2",
      "nodeName": "embedding_gemini",
      "childID": [4],
      "parentsID": [1],
      "arguments": {},
      "context": "middle"
    },
    {"nodeID":"3",
    "nodeName":"system_prompt",
    "childID":[4],
    "parentsID" : [],
    "arguments" :{
        "prompt":"you are expert"
    }
  
  },
    {"nodeID":"4",
    "nodeName":"llm_gemini",
    "childID":[],
    "parentsID" : [3,2],
    "arguments" :{
        
    }
    }
  ]
}


generated_code = parse_json_and_generate_code(json_file)

with open("generated_code.py", "w") as file:
  file.write(generated_code)
  