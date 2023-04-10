import requests 
from bs4 import BeautifulSoup
import pandas as  pd

url = 'https://hunterxhunter.fandom.com/wiki/List_of_Hunter_%C3%97_Hunter_Characters'
response = requests.get(url)


soup = BeautifulSoup(response.text, 'html.parser')
table = soup.findAll('div', attrs= {"class":"wds-is-not-scrollable wds-dropdown__content"})
data = table[2].findAll('li')


resultado = {}
personagem = []
url = []
tipo = []

for i in data:

  tags = i.findAll('a')
  
  for tag in tags:
   
    if tag['data-tracking'] == 'custom-level-2':
      classe =  i.find('span').text
      
    else:
      if tag.find('span').text not in personagem:
        url.append(tag['href'])
        personagem.append(tag.find('span').text)
        tipo.append(classe)


resultado['personagem'] = personagem
resultado['tipo'] = tipo
resultado['url'] = url
final = pd.DataFrame(resultado)

try:
  final.to_csv('personagens.csv', index=False)
  print(final)
except:
  print('Erro ao gerar csv')
