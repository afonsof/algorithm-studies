# Análise de algorítmos
* Determinar os recursos necessários para executar um algorítmo
* Como criar algorítmos eficientes?
* Algorítmos diferentes para resolver o mesmo problema não necessáriamente
o fazem com a mesma eficiência
* As diferenças entre os algorítmos podem ser irrelevantes para um pequeno
número de itens processados mas pode crescer exponencialmente com muitos
itens processados


## Custo computacional
* Determina o custo ao se rodar um algorítmo: ```custo = memória + tempo```
* Memória: É o quanto de espaço que o algorítmo vai consumir
* Tempo: É a duração da execução

## Tipos de análise
* Empírica: Avaliação da implementação e da execução
* Matemática: Avaliação da ideia por trás do algoritmo


### Matemática: Contando as instruções
#### Contam como 1 instrução
* Atribuição, incremento, decremento
* Acesso
* Comparação
* Operações aritméticas


## Notação Big O

É uma notação que mede o quão bem um algoritmo escala no seu pior cenário,
de acordo com o aumento da quantidade de dados.

### Análise assintótica
É a análise feita a um algoritmo com a quantidade de itens tendendo
ao infinito. Isso quer dizer que custos fixos ou lineares são
descartados, pois não farão diferença quando a quantidade de itens
for muito grande
