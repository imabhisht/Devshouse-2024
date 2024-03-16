import engineFunctions
node_1 = engineFunctions.loader_text(path='https://firebasestorage.googleapis.com/v0/b/buildify-ai.appspot.com/o/uploads%2Fwittyhacks.txt?alt=media&token=6b4c230e-0f9c-4da7-ae91-daa523117489')
node_22 = engineFunctions.loader_text(path='https://firebasestorage.googleapis.com/v0/b/buildify-ai.appspot.com/o/uploads%2Fwittyhacks.txt?alt=media&token=6b4c230e-0f9c-4da7-ae91-daa523117489')
node_2 = engineFunctions.embedding_gemini([node_1, node_22])
node_3 = engineFunctions.system_prompt(prompt='you are expert')
user_api_input = "which is the hackathon"
node_4 = engineFunctions.llm_gemini(user_api_input,system_prompt = node_3, index = node_2)
print(node_4)