import engineFunctions

def generate_code_from_json(json_data):
    code = ""
    for step in json_data["flowChart"]:
        node_name = step["nodeName"]
        arguments = ", ".join([f"{arg}={repr(val)}" for arg, val in step["arguments"].items()])
        parents = step["parentsID"]
        
        if not parents:
            code += f"{node_name}({arguments})\n"
        else:
            parent_args = ", ".join([f"node_{parent}" for parent in parents])
            code += f"node_{step['nodeID']} = {node_name}({parent_args}, {arguments})\n"
    
    return code

# Example JSON
json_data = {
    "userID": "1",
    "appName": "testing",
    "flowChart": [
        {
            "nodeID": "1",
            "nodeName": "loader_text",
            "childID": ["2"],
            "parentsID": [],
            "arguments": {"path": "test"},
            "context": "initial"
        },
        {
            "nodeID": "2",
            "nodeName": "embedding_gemini",
            "childID": ["3"],
            "parentsID": ["1"],
            "arguments": {},
            "context": "middle"
        },
        {
            "nodeID": "3",
            "nodeName": "llm_gemini",
            "childID": ["4"],
            "parentsID": ["2"],
            "arguments": {},
            "context": "end"
        }
    ]
}

# Generating code from JSON
generated_code = generate_code_from_json(json_data)
print(generated_code)

with open("test123.py","w") as file:
    for line in generated_code:
        file.write(line)
    file.close()