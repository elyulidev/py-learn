
export const m7Assert = `
# Assert em Python

O uso de **assert** em Python nos permite realizar verificações (asserções) durante o desenvolvimento. Se a expressão contida dentro dele for \`False\`, será lançada uma exceção, concretamente \`AssertionError\`.

Vejamos um exemplo:

\`\`\`python
assert(1==2)
# AssertionError
\`\`\`

Ou seja, se o conteúdo existente dentro do assert for avaliado como falso, a exceção será lançada. Poderíamos conseguir o mesmo resultado fazendo o seguinte, mas o uso de \`assert()\` resulta muito mais cômodo e legível:

\`\`\`python
if condicao:
    raise AssertionError()
\`\`\`

Podemos também adicionar um texto com informação relevante acerca do erro, caso o assert falhe.

\`\`\`python
assert False, "O assert falhou"
\`\`\`

**Muito cuidado**, pois a expressão anterior não é equivalente à seguinte, sendo esta última errônea:

\`\`\`python
# INCORRETO
assert(False, "O assert falhou")
\`\`\`

Isso deve-se ao fato de que, ao usar parênteses com vírgula, na realidade o Python está avaliando a tupla \`(False, "O assert falhou")\`. Como uma tupla não vazia é sempre considerada verdadeira (\`True\`), o código acima **não** lançaria uma exceção, quando realmente se esperaria que o fizesse.

Por outro lado, também se pode fazer uso do \`assert\` sem usar parênteses, que é a forma mais comum em Python:

\`\`\`python
x = "PythonParaMatematicos"
assert x == "PythonParaMatematicos"
\`\`\`

## assert() em Testing

A função \`assert()\` pode ser também muito útil para realizar testes do nosso código, especialmente para testes unitários (*unit tests*).

Imagine que temos uma função \`calcula_media()\` que, como o nome indica, calcula a média aritmética de um conjunto de números.

\`\`\`python
def calcula_media(lista):
    return sum(lista)/len(lista)
\`\`\`

No mundo da programação é muito importante provar ou testar o software para assegurar-se de que está livre de erros (bugs). Graças ao uso de \`assert()\` podemos realizar estas verificações de maneira automática.

\`\`\`python
assert(calcula_media([5, 10, 7.5]) == 7.5)
assert(calcula_media([4, 8]) == 6)
\`\`\`

Se fizermos com que estas verificações sejam parte do nosso script de teste, poderíamos proteger nossa função, assegurando-nos de que ninguém a "quebre" no futuro ao modificar o código.

## assert() em Funções (Programação Defensiva)

Pode resultar útil usar \`assert()\` quando queremos realizar alguma verificação prévia, como poderia ser dentro de uma função, para garantir que os argumentos são válidos (pré-condições).

No seguinte exemplo temos uma função \`soma()\` que foi projetada para somar apenas números inteiros.

\`\`\`python
# Função soma de variáveis inteiras
def soma(a, b):
    assert(type(a) == int)
    assert(type(b) == int)
    return a + b

# Erro, já que as variáveis não são int (AssertionError)
# soma(3.0, 5.0)

# Ok, os argumentos são int
soma(3, 5)
\`\`\`

## assert() com Clases

Outro exemplo poderia ser verificar se um objeto pertence a uma classe determinada usando \`isinstance\`.

\`\`\`python
class MinhaClasse():
    pass

class MinhaOutraClasse():
    pass

meu_objeto = MinhaClasse()
meu_outro_objeto = MinhaOutraClasse()

# Ok
assert(isinstance(meu_objeto, MinhaClasse))

# Ok
assert(isinstance(meu_outro_objeto, MinhaOutraClasse))

# Erro, meu_objeto não pertence a MinhaOutraClasse
# assert(isinstance(meu_objeto, MinhaOutraClasse))
\`\`\`

## Desabilitar assert

A título de curiosidade, é possível executar um script de Python desabilitando as instruções \`assert\`. Isso é útil em ambientes de produção onde queremos otimizar o desempenho e não precisamos das verificações de depuração.

Suponhamos que temos o seguinte código no arquivo \`ejemplo.py\`:

\`\`\`python
assert(1==2)
\`\`\`

Se executarmos nosso script normalmente, ele falhará. Mas se o executarmos com a flag \`-O\` (*Optimize*), os asserts serão ignorados, pelo que não se produzirá nenhuma exceção.

\`\`\`bash
$ python -O ejemplo.py
\`\`\`
`;
