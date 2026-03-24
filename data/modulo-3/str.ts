export const m3Str = `# Strings

Strings em Python são um tipo imutável que permite armazenar sequências de caracteres. Para criar uma, é necessário incluir o texto entre aspas duplas \`\"\`. Você pode obter mais ajuda com o comando \`help(str)\`.

\`\`\`python
s = \"Isso é uma string\"
print(s)       #Isso é uma string
print(type(s)) #<class 'str'>
\`\`\`

Também é válido declarar strings com aspas simples \`\'\`.

\`\`\`python
s = \'Isso é outra string\'
print(s)        #Isso é outra string
print(type(s))  #<class 'str'>
\`\`\`

As strings não têm limite de tamanho, portanto o único limite é a memória do seu computador. Uma string também pode estar vazia.

\`\`\`python
s = ''
\`\`\`

Uma situação que muitas vezes pode ocorrer é quando queremos introduzir uma aspa, seja simples \`\'\` ou dupla \`\"\` dentro de uma string. Se fizermos da seguinte forma, teríamos um erro, já que o Python não sabe bem onde começa e termina.

\`\`\`python
#s = \"Isso é uma aspa dupla \" de exemplo\" # Erro!
\`\`\`

Para resolver este problema, devemos recorrer às sequências de escape. No Python existem várias, mas vamos analisá-las com mais detalhes em outro capítulo. Por enquanto, a mais importante é \`\\\"\`, que nos permite embutir aspas dentro de uma string.

\`\`\`python
s = \"Isso é uma aspa dupla \\\" de exemplo\"
print(s) #Isso é uma aspa dupla \" de exemplo
\`\`\`

Também podemos incluir uma quebra de linha dentro de uma string, o que significa que o que estiver depois da quebra será impresso em uma nova linha.

\`\`\`python
s = \"Primeira linha\\nSegunda linha\"
print(s)
#Primeira linha
#Segunda linha
\`\`\`

Também podemos usar \`\\\` acompanhado de um número, o que imprimirá o caractere associado. Neste caso, imprimimos o caractere 110 (octal) que corresponde ao H.

\`\`\`python
print(\"\\110\\110\") #HH
\`\`\`

> **Para saber mais:** Recomendamos que você procure informações sobre **ASCII** e **Unicode**. Ambos são conceitos muito úteis para entender as strings.

Pode-se definir uma string que ocupe várias linhas usando aspas triplas \`\"\"\"\`. Isso pode ser muito útil se tivermos textos longos que não queremos manter em uma só linha.

\`\`\`python
print(\"\"\"A seguinte
string ocupa
várias linhas\"\"\")
\`\`\`

Existe também outra forma de declarar strings chamada **raw strings**. Usando o prefixo \`r\`, a string ignora todas as sequências de escape, portanto a saída é diferente da anterior.

\`\`\`python
print(r\"\\110\\110\") #\\110\\110
\`\`\`

## Formatação de strings

Talvez queiramos declarar uma string que contenha variáveis dentro dela, como números ou até outras strings. Uma forma de fazer isso seria concatenando a string que queremos com outra usando o operador \`+\`. Observe que \`str()\` converte em string o que é passado como parâmetro.

\`\`\`python
x = 5
s = \"O número é: \" + str(x)
print(s) #O número é: 5
\`\`\`

Outra forma é usando \`%\`. Por um lado, temos \`%s\` que indica o tipo que queremos imprimir (ou \`%d\` para inteiros, \`%f\` para casas decimais) e, por outro lado, à direita de \`%\` temos a variável a ser impressa.

\`\`\`python
x = 5
s = \"O número é: %d\" % x
print(s) #O número é: 5
\`\`\`

Se tivermos mais de uma variável, também é possível passar os parâmetros dentro de \`()\`. Se você vem de linguagens como C, essa forma será muito familiar. No entanto, esta não é a forma preferencial em versões novas do Python.

\`\`\`python
s = \"Os números são %d e %d.\" % (5, 10)
print(s) #Os números são 5 e 10.
\`\`\`

Uma forma um pouco mais moderna de fazer o mesmo é usando \`format()\`.

\`\`\`python
s = \"Os números são {} e {}\".format(5, 10)
print(s) #Os números são 5 e 10
\`\`\`

Também é possível dar nome a cada elemento e o \`format()\` se encarregará de substituir tudo.

\`\`\`python
s = \"Os números são {a} e {b}\".format(a=5, b=10)
print(s) #Os números são 5 e 10
\`\`\`

Finalmente, existe a forma mais versátil introduzida na versão 3.6 do Python: as **f-strings** (cadenas literales). Elas permitem embutir expressões diretamente.

\`\`\`python
a = 5; b = 10
s = f\"Os números são {a} e {b}\"
print(s) #Os números são 5 e 10
\`\`\`

Você pode até fazer operações e chamar funções dentro da criação da string.

\`\`\`python
a = 5; b = 10
s = f\"a + b = {a+b}\"
print(s) #a + b = 15

def funcion():
    return 20
s = f\"O resultado da função é {funcion()}\"
print(s) #O resultado da função é 20
\`\`\`

## Operações com strings

Para entender melhor a classe string, vejamos alguns exemplos de como elas se comportam:

**Concatenação e Multiplicação:**
\`\`\`python
s1 = \"Parte 1\"
s2 = \"Parte 2\"
print(s1 + \" \" + s2) #Parte 1 Parte 2

s = \"Olá \"
print(s*3) #Olá Olá Olá
\`\`\`

**Pertencimento (\`in\`):**
\`\`\`python
print(\"mola\" in \"Python mola\") #True
\`\`\`

**Conversão de caracteres (\`chr\` e \`ord\`):**
\`\`\`python
print(chr(8364)) #€
print(ord(\"€\"))  #8364
\`\`\`

**Comprimento (\`len\`):**
\`\`\`python
print(len(\"Esta é a minha string\")) #21
\`\`\`

**Indexação e Slicing:**
Podemos acessar caracteres pelo seu índice ou criar substrings (slicing).

\`\`\`python
x = \"abcde\"
print(x[0])  #a (primeiro elemento)
print(x[-1]) #e (último elemento)

# Substrings [início:final-1]
print(x[0:2]) #ab
print(x[2:])  #cde (até o final)

# Com saltos [início:final-1:passo]
print(x[0:5:2]) #ace
\`\`\`

## Métodos da classe string

Abaixo, alguns dos métodos mais comuns:

- **\`capitalize()\`**: Retorna a string com a primeira letra em maiúscula.
- **\`lower()\`**: Converte todos os caracteres para minúsculo.
- **\`upper()\`**: Converte todos os caracteres para maiúsculo.
- **\`swapcase()\`**: Inverte maiúsculas por minúsculas e vice-versa.
- **\`count(sub)\`**: Conta as vezes que uma substring aparece.
- **\`isalnum()\`**: \`True\` se for alfanumérica.
- **\`isalpha()\`**: \`True\` se todos os caracteres forem alfabéticos.
- **\`strip()\`**: Remove espaços ou caracteres à esquerda e à direita.
- **\`zfill(width)\`**: Preenche com zeros à esquerda.
- **\`join(iterable)\`**: Une elementos de um iterável usando a string como separador.
- **\`split(sep)\`**: Divide uma string em uma lista de substrings.

\`\`\`python
s = \"Python,Java,C\"
print(s.split(\",\")) #['Python', 'Java', 'C']

s = \" e \".join([\"1\", \"2\", \"3\"])
print(s) #1 e 2 e 3
\`\`\`
`;
