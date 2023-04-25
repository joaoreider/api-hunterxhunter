from dotenv import load_dotenv
import json
load_dotenv()
import os
import requests
from googletrans import Translator

def reduz_descricao(message):
    api_key = os.getenv("GPT_KEY")
    headers = {"Authorization": f"Bearer {api_key}", "Content-Type": "application/json"}
    id_modelo = "gpt-3.5-turbo"
    link = "https://api.openai.com/v1/chat/completions"

    body = {
      "model": id_modelo,
      "messages": [{"role": "user", "content": f"Sempre forneça as repostas em português. Resuma o seguinte texto:\n {message} "}]
    }
    body = json.dumps(body)

    print('Perguntando ao gpt...')
    gpt_post = requests.post(link, headers=headers, data = body)

    gpt_response = gpt_post.json()
    result = gpt_response["choices"][0]["message"]["content"]

    return result


def traduz(texto):
    tradutor = Translator()
    resultado = tradutor.translate(texto, src='en', dest='pt')
    return resultado.text

