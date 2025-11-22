
export const m5Pass = `
# Passagem por Valor e Referência

Em muitas linguagens de programação existem os conceitos de **passagem por valor** e **passagem por referência**, que definem como uma função trata os parâmetros que recebe como entrada. O comportamento geral costuma ser:

1.  **Passagem por valor:** Cria-se uma cópia local da variável. Qualquer modificação sobre ela dentro da função **não** terá efeito sobre a variável original.
2.  **Passagem por referência:** Atua-se diretamente sobre o endereço de memória da variável. As modificações dentro da função **afetam** a variável original.

Em Python as coisas são um pouco diferentes. O comportamento é definido pelo **tipo de dado** da variável com a qual estamos lidando (se é mutável ou imutável). Tecnicamente, Python utiliza um modelo chamado *"Call by Object Reference"* (Chamada por Referência de Objeto).

## Tipos Imutáveis (Comportamento de Valor)

Vejamos um exemplo com um inteiro (\`int\`), que é um tipo imutável.

\`\`\`python
x = 10
def funcao(entrada):
    entrada = 0 # Tentamos modificar o valor

funcion(x)
print(x) # 10
\`\`\`

Iniciamos \`x\` com 10 e passamos para a função. Dentro dela, atribuímos 0 à variável \`entrada\`. Dado que os inteiros são imutáveis, o Python cria um novo objeto \`0\` e faz a variável local \`entrada\` apontar para ele. A variável original \`x\` permanece apontando para \`10\`. Portanto, a original não é modificada.

## Tipos Mutáveis (Comportamento de Referência)

Não acontece o mesmo se, por exemplo, \`x\` for uma lista (tipo mutável). Neste caso, o Python passa a referência do objeto.

\`\`\`python
x = [10, 20, 30]

def funcao(entrada):
    entrada.append(40) # Modificamos o objeto in-place

funcion(x)
print(x) # [10, 20, 30, 40]
\`\`\`

Como a lista é mutável e usamos um método (\`.append()\`) que altera o objeto *in-place* (no próprio lugar), a variável original \`x\` reflete essa mudança.

## A armadilha da Reatribuição

O exemplo anterior poderia nos levar a pensar que se fizéssemos \`entrada = []\` dentro da função, estaríamos apagando a lista original. No entanto, **isso não é verdade**.

\`\`\`python
x = [10, 20, 30]

def funcao(entrada):
    entrada = [] # Reatribuição cria uma nova referência local

funcion(x)
print(x)
# [10, 20, 30]
\`\`\`

Ao usar o operador de atribuição \`=\`, estamos dizendo ao Python para fazer a variável local \`entrada\` apontar para um **novo objeto** (uma lista vazia). A conexão com a lista original \`x\` é quebrada dentro do escopo da função, preservando o valor original.

## Verificando com \`id()\`

Uma forma muito útil de saber o que acontece "por baixo dos panos" no Python é fazendo uso da função \`id()\`. Esta função nos devolve um identificador único para cada objeto (geralmente seu endereço de memória).

Voltando ao primeiro exemplo (inteiros), podemos ver como os objetos para os quais \`x\` e \`entrada\` apontam acabam sendo distintos após a atribuição.

\`\`\`python
x = 10
print(id(x)) # Ex: 4349704528

def funcao(entrada):
    entrada = 0
    print(id(entrada)) # Ex: 4349704208 (ID Diferente)

funcion(x)
\`\`\`

No entanto, se fizermos o mesmo quando a variável de entrada é uma lista e a modificamos com \`append\`, podemos ver que o objeto com o qual se trabalha dentro da função é **o mesmo** que temos fora (mesmo ID).

\`\`\`python
x = [10, 20, 30]
print(id(x)) # Ex: 4422423560

def funcao(entrada):
    entrada.append(40)
    print(id(entrada)) # 4422423560 (O mesmo ID)

funcion(x)
\`\`\`
`;
