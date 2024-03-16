import json


def parse_json(json_data):
    generated_code = []
    for node in json_data["flowChart"]:
        node_id = node["nodeId"]
        node_name = node["nodeName"]
        arguments = node.get("arguments", {})
        child_ids = node.get("childId", [])
        parent_ids = node.get("parentId", [])
        print(node_id)
        if not child_ids:
            print("no child")
            temp_code = []
            if not arguments:
             
                for i in parent_ids:
                   
                    if json_data["flowChart"][int(i)]["nodeName"] == "system_prompt":
                    
                        temp_code.append(f"system_prompt = node_{i}")

                    elif json_data["flowChart"][int(i)]["nodeName"][:9] == "embedding":
                       
                        temp_code.append(f"index = node_{i}")

                    elif json_data["flowChart"][int(i)]["nodeName"] == "query":
                      
                        temp_code.append(f"query = node_{i}")
                    
                code = f"node_{node_id} = engineFunctions.{node_name}(user_api_input,{', '.join(temp_code)})"
                   
            else:
                code = f"node_{node_id} = engineFunctions.{node_name}(user_api_input," + ", ".join([f"{k}='{v}'" for k, v in arguments.items()]) + ", [node_{i} for i in parent_ids])"
        elif not parent_ids:
            print("no parent")
            code = f"node_{node_id} = engineFunctions.{node_name}(" + ", ".join([f"{k}='{v}'" for k, v in arguments.items()]) + ")"
        
        else:
            print("both")
            if json_data["flowChart"][int(parent_ids[0])]["nodeName"][:3] == "llm":
                temp_code = []
                for i in parent_ids:
                    if json_data["flowChart"][int(i)]["nodeName"] == "system_prompt":
                        temp_code.append(f"system_prompt = node{i}")

                    elif json_data["flowChart"][int(i)]["nodeName"][:9] == "embedding":
                        temp_code.append(f"index = node{i}")

                    elif json_data["flowChart"][int(i)]["nodeName"] == "query":
                        temp_code.append(f"query_input = node{i}")

                code = f"node_{node_id} = engineFunctions.{node_name}({', '.join(temp_code)})"
                continue

            # no arguments then just pass the parent nodes
            if not arguments:
               
                # print([f'node_{i}' for i in parent_ids])
                temp_code_1 = []
                for i in parent_ids:
                    temp_code_1.append(f'node_{i}')
                code = f"node_{node_id} = engineFunctions.{node_name}(["
                for j in temp_code_1:
                   
                    code += j
                    code += ","
                code = code[:-1]
                code += "])"
            else:
              
                temp_code_1 = []

                for i in parent_ids:
                    temp_code_1.append(f'node_{i}')

                
                code = f"node_{node_id} = engineFunctions.{node_name}(" + ", ".join([f"{k}='{v}'" for k, v in arguments.items()]) + f", ["
                for j in temp_code_1:
                    code+= j+","
                code = code[:-1]
                code+= "])"

        
        generated_code.append(code)
    temp = f"print(node_{json_data['flowChart'][-1]['nodeId']})"
    generated_code.append(temp)
    return '\n'.join(generated_code)

        


# with open("test.json", "r") as f:
#     json_data = json.load(f)

# # Parse the JSON and generate the code
# code = parse_json(json_data)
# print(code)