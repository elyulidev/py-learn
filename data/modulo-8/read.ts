
export const m8Read = `
# Ler Arquivos em Python

Assim como em outras linguagens de programação, em Python é possível abrir arquivos (*ficheros*) e ler seu conteúdo. Os arquivos podem ser dos mais variados tipos, desde um simples texto até conteúdo binário. Para simplificar, focaremos na leitura de arquivos de texto.

Imagine que você tem um arquivo de texto com alguns dados, como um \`.txt\` ou um \`.csv\`, e quer ler seu conteúdo para realizar algum tipo de processamento. Nosso arquivo \`exemplo.txt\` poderia ser o seguinte:

\`\`\`text
Conteúdo da primeira linha
Conteúdo da segunda linha
Conteúdo da terceira linha
Conteúdo da quarta linha
\`\`\`

Podemos abrir o arquivo com a função **\`open()\`** passando como argumento o nome (ou caminho) do arquivo que queremos abrir.

\`\`\`python
arquivo = open('exemplo.txt')
\`\`\`

## Método \`read()\`

Com \`open()\`, teremos na variável \`arquivo\` o objeto pronto para uso. Podemos obter todo o seu conteúdo como uma única string usando **\`read()\`**.

\`\`\`python
print(arquivo.read())

# Saída:
# Conteúdo da primeira linha
# Conteúdo da segunda linha
# Conteúdo da terceira linha
# Conteúdo da quarta linha
\`\`\`

## Método \`readline()\`

É possível também ler um número determinado de linhas e não todo o arquivo de uma vez (o que é útil para arquivos gigantes que não cabem na memória RAM). Para isso fazemos uso da função **\`readline()\`**. Cada vez que se chama a função, lê-se uma linha e o cursor avança.

\`\`\`python
arquivo = open('exemplo.txt')
print(arquivo.readline())
print(arquivo.readline())

# Saída:
# Conteúdo da primeira linha
# Conteúdo da segunda linha
\`\`\`

É muito importante saber que, uma vez lidas todas as linhas do arquivo, a função retornará uma **string vazia** \`''\`, indicando que se chegou ao final (EOF - End Of File).

Outra forma de usar \`readline()\` é passando como argumento um número inteiro. Este número indica quantos caracteres devem ser lidos.

\`\`\`python
arquivo = open('exemplo.txt')
caracter = arquivo.readline(1)
while caracter != "":
    # print(caracter)
    caracter = arquivo.readline(1)
\`\`\`

## Método \`readlines()\`

Existe outro método chamado **\`readlines()\`** (no plural), que devolve uma **lista** onde cada elemento é uma linha do arquivo.

\`\`\`python
arquivo = open('exemplo.txt')
linhas = arquivo.readlines()
print(linhas)

# Saída:
# ['Conteúdo da primeira linha\\n', 'Conteúdo da segunda linha\\n',
#  'Conteúdo da terceira linha\\n', 'Conteúdo da quarta linha']
\`\`\`

De maneira muito simples, podemos iterar a lista e imprimir as linhas na tela.

\`\`\`python
arquivo = open('exemplo.txt')
linhas = arquivo.readlines()
for linha in linhas:
    print(linha)
\`\`\`

## Argumentos de \`open()\`

Até agora vimos a função \`open()\` com apenas um argumento de entrada, o nome do arquivo. No entanto, existe um segundo argumento muito importante: o **modo de abertura**.

*   **\`'r'\`**: (*Read*) Por padrão. Abre para leitura. Lança erro se o arquivo não existir.
*   **\`'w'\`**: (*Write*) Para escrever. **Sobrescreve** o arquivo se ele existir, ou cria um novo.
*   **\`'x'\`**: (*Exclusive creation*) Para criação exclusiva, falhando se o arquivo já existir.
*   **\`'a'\`**: (*Append*) Para adicionar conteúdo ao final de um arquivo existente, sem apagar o conteúdo anterior.
*   **\`'b'\`**: (*Binary*) Para abrir em modo binário (ex: imagens, áudio).

Portanto, o estritamente correto se queremos ler o arquivo seria fazer o seguinte. Embora o modo \`'r'\` seja o padrão, é uma **boa prática** indicá-lo para deixar claro a quem lê o código que nossa intenção é apenas ler, e não modificar.

\`\`\`python
arquivo = open('exemplo.txt', 'r')
\`\`\`

## Fechando o arquivo (\`close\`)

Outra coisa que devemos fazer sempre que trabalhamos com arquivos é fechá-los uma vez que tenhamos terminado. Embora o Python (CPython) geralmente feche arquivos automaticamente quando o objeto é destruído pelo Garbage Collector, não é garantido que isso aconteça imediatamente.

Manter arquivos abertos consome descritores de arquivo do sistema operacional e pode impedir que outros programas acessem o arquivo (especialmente no Windows).

\`\`\`python
arquivo = open('exemplo.txt', 'r')
# ... Usar o arquivo ...
arquivo.close()
\`\`\`

### Garantindo o fechamento com \`try...finally\`

Se ocorrer um erro durante a leitura, o código pode nunca chegar na linha \`arquivo.close()\`. Para evitar isso, usa-se blocos \`try/finally\`.

\`\`\`python
arquivo = open('exemplo.txt')
try:
    # Processar arquivo
    pass
finally:
    # Esta seção é sempre executada, mesmo com erro
    arquivo.close()
\`\`\`

## O jeito "Pythônico": Context Managers (\`with\`)

Existe uma forma muito mais elegante e segura de lidar com arquivos: o bloco **\`with\`**.

Ao usar \`with\`, o Python se encarrega de abrir o arquivo e, o mais importante, **fechá-lo automaticamente** assim que o bloco de código terminar, aconteça o que acontecer (sucesso ou erro).

\`\`\`python
with open('exemplo.txt', 'r') as arquivo:
    # Usar o arquivo. 
    conteudo = arquivo.read()
    
# Aqui o arquivo já está fechado automaticamente.
\`\`\`

## Iterando arquivos eficientemente

Vimos que \`readlines()\` lê todas as linhas para a memória numa lista. Isso é ruim se o arquivo tiver 10GB.

A melhor maneira de ler um arquivo linha a linha em Python é iterar diretamente sobre o objeto arquivo. O objeto arquivo é um **iterável** que fornece uma linha de cada vez (lazy loading), sendo extremamente eficiente em memória.

\`\`\`python
with open('exemplo.txt', 'r') as arquivo:
    for linha in arquivo:
        # end='' evita duplicar a quebra de linha, 
        # já que 'linha' já traz o \\n do arquivo e o print coloca outro.
        print(linha, end='')

# Saída:
# Conteúdo da primeira linha
# Conteúdo da segunda linha
# Conteúdo da terceira linha
# Conteúdo da quarta linha
\`\`\`
`;
