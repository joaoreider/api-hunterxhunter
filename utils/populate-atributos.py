import requests 
from bs4 import BeautifulSoup
import pandas as  pd
from gpt import reduz_descricao, traduz


df = pd.read_csv('api-hxh/utils/personagens.csv')
resultado = {}
img_url_list = []
descricao_list= []
habilidades_list = []
#count = 0 
for url in df['url']:
    print(f'consultando url {url}')
    #count+=1
    response_personagem = requests.get(url)
    soup_personagem = BeautifulSoup(response_personagem.text, 'html.parser')

    # Descrição
    try:
        descricao_personagem = soup_personagem.find('span', attrs={"id":"Personality"}).find_all_next('p')[1].text
        descricao_reduzida = reduz_descricao(descricao_personagem)
    except:
        descricao_reduzida = ''

    descricao_list.append(descricao_reduzida)
    print(descricao_reduzida)

    # img url
    try:
        aux_img_url = soup_personagem.find('span', attrs={"id":"Personality"}).find_all_next('a', attrs={"class":"image"})[0]["href"]
    except:
        aux_img_url = ''

    img_url_list.append(aux_img_url)
    print(img_url_list)

    # Habilidades
    habilidades_personagem = []
    for i in range(10):

        try:
            texto = soup_personagem.find('span', attrs={"id":"Abilities_&_Powers"}).find_all_next('b')[i].text.replace(':','')
            habilidades_personagem.append(traduz(texto))
        except:
            pass
    
    habilidades_list.append(habilidades_personagem)
    print(habilidades_list)




resultado['descricao'] = descricao_list
resultado['habilidades'] = habilidades_list
resultado['img_url'] = img_url_list
final = pd.DataFrame(resultado)

try:
    final.to_csv('./api-hxh/utils/atributos.csv', index=False)
    print(final)
except:
  print('Erro ao gerar csv')      






