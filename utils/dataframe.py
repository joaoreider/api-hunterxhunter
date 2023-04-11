
import pandas as pd

df1 = pd.read_csv('api-hxh/utils/csv/atributos.csv')
df2 = pd.read_csv('api-hxh/utils/csv/personagens.csv')
df = pd.concat([df2, df1], axis=1)
print(df.head())
try:
  df.to_csv('./api-hxh/utils/csv/schema_hxh.csv', index=False)
  print(df)
except:
  print('Erro ao gerar csv')