# Análise de algoritmos
* Determinar os recursos necessários para executar um algoritmo
* Como criar algoritmos eficientes?
* algoritmos diferentes para resolver o mesmo problema não necessáriamente
o fazem com a mesma eficiência
* As diferenças entre os algoritmos podem ser irrelevantes para um pequeno
número de itens processados mas pode crescer exponencialmente com muitos
itens processados


## Custo computacional
* Determina o custo ao se rodar um algoritmo: ```custo = memória + tempo```
* Memória: É o quanto de espaço que o algoritmo vai consumir
* Tempo: É a duração da execução

## Tipos de análise
* Empírica: Avaliação da implementação e da execução
* Matemática: Avaliação da ideia por trás do algoritmo


## Notação Big O
Avaliação matemática que visa medir o quão bem um algoritmo escala
no seu pior cenário de acordo com o aumento da quantidade de dados.

### Exemplo 1:
```
function(array) {
        return 1;
}
```
neste caso a avaliação desse algoritmo é O(1) pois independente da
quantidade de itens que chegar no array a função vai executar sempre
uma instrução de retorno.

### Exemplo 2:
```
function(a, array) {
    if(a==1){
        return 1;
    }
}
```
neste caso a avaliação desse algoritmo é O(2) pois independente da
quantidade de itens que chegar no array no pior cenário o valor de
`a` será igual a 1 e a execução entrará dentro do `if`. desta forma
teremos a instrução de comparação e a de retorno.

### Exemplo 3:
```
function(a, array) {
    var i;
    for(i = 0; i < array.length; i++){
        if(a==1){
            a = 1;
        }
    }
}
```
A definição da variável
`i` conta como uma instrução a atribuição de `i = 0` como mais uma e a
comparação `i < array.length` como a terceira. depois disso Todas as
instruções ligadas ao laço multiplicam como `n`. No pior cenário o
valor da variável `a` será 1 e a comparação do `if` sempre contará
como mais uma instrução dentro do `for`. Após a execução do `if` o
código voltará ao laço para atribuir `i++` e comparar `i < array.length`
que contarão como mais duas instruções diretamente ligadas ao laço.
Totalizando `4n` logo a avaliação desse algoritmo é O(3+4n).

### Exemplo 4:
```
function(a, array) {
    var i;
    var j;
    for(i = 0; i < array.length; i++){
        for(j = 0; j < array.length; j++){
            if(a==1){
                a = 1;
            }
        }
    }
}
```
Este caso é semelhante ao exemplo três porém existe um laço dentro do
outro. Portanto devemos multiplicar `n^2`. Logo O(4+2n+4n^2)



### Análise assintótica
É a análise feita a um algoritmo com a quantidade de itens tendendo
ao infinito. Isso quer dizer que custos fixos ou lineares são
descartados, pois não farão diferença quando a quantidade de itens
for muito grande. Então no exemplo 4 podemos simplificar a notação
retirando `4+2n` e o multiplicador `4` de `n^2`. Representando apenas
como O(n^2).
