
export const m8Write = `
# Escrever Arquivos em Python

A seguir explicamos como escrever dados em um arquivo usando Python. Imagine que você tem dados que gostaria de salvar em um arquivo para análise posterior. Explicamos como salvá-los em um arquivo, por exemplo, \`.txt\`.

O primeiro passo é criar um objeto para o arquivo, com o nome que quisermos. Assim como vimos no post de ler arquivos, além do nome, pode-se passar um segundo parâmetro que indica o modo como o arquivo será tratado. Os mais relevantes neste caso são:

*   **\`'w'\`**: (*Write*) Apaga o arquivo se já existir e cria um novo com o nome indicado.
*   **\`'a'\`**: (*Append*) Adiciona o conteúdo ao final do arquivo se ele já existir.
*   **\`'x'\`**: (*Exclusive*) Se o arquivo já existir, retorna um erro.

Portanto, com a seguinte linha estamos criando um arquivo com o nome \`dados_salvos.txt\`.

\`\`\`python
# Abre um novo arquivo (sobrescreve se existir)
arquivo = open("dados_salvos.txt", 'w')
\`\`\`

Se, pelo contrário, quisermos adicionar o conteúdo ao já existente em um arquivo anterior, podemos fazê-lo no modo *append* como indicamos.

\`\`\`python
# Abre e adiciona o conteúdo ao final
arquivo = open("dados_salvos.txt", 'a')
\`\`\`

## Método \`write()\`

Já vimos como criar o arquivo. Vejamos agora como podemos adicionar conteúdo. Comecemos escrevendo um texto simples.

\`\`\`python
arquivo = open("dados_salvos.txt", 'w')
arquivo.write("Conteúdo a escrever")
arquivo.close()
\`\`\`

Se agora abrirmos o arquivo \`dados_salvos.txt\`, veremos que ele contém uma linha com "Conteúdo a escrever". Fácil, não?

É muito importante o uso de **\`close()\`** porque se deixarmos o arquivo aberto, poderíamos ter um comportamento inesperado (como dados não serem salvos no disco). Portanto, sempre que se abre um arquivo é necessário fechá-lo quando terminarmos.

Vamos complicar um pouco mais. Agora vamos salvar uma lista de elementos no arquivo, onde cada elemento da lista será armazenado em uma linha diferente.

\`\`\`python
# Abrimos o arquivo
arquivo = open("dados_salvos.txt", 'w')

# Temos uns dados que queremos salvar
lista = ["Maçã", "Pera", "Banana"]

# Guardamos a lista no arquivo
for linha in lista:
    arquivo.write(linha + "\\n")

# Fechamos o arquivo
arquivo.close()
\`\`\`

Note que estamos armazenando a linha mais **\`\\n\`**. É importante adicionar a quebra de linha explicitamente porque o método \`write\` **não a adiciona por padrão**, e se quisermos que cada elemento fique em uma linha distinta, será necessário seu uso.

## Método \`writelines()\`

Também podemos usar o método **\`writelines()\`** e passar uma lista. Este método se encarregará de salvar todos os elementos da lista no arquivo.

\`\`\`python
arquivo = open("dados_salvos.txt", 'w')
lista = ["Maçã", "Pera", "Banana"]

arquivo.writelines(lista)
arquivo.close()

# O que é salvo:
# MaçãPeraBanana
\`\`\`

Talvez você tenha percebido que na realidade o que se salva é "MaçãPeraBanana", tudo junto. O \`writelines\` não adiciona separadores. Se quisermos que cada elemento seja armazenado em uma linha diferente, devemos adicionar a quebra de linha em cada elemento da lista como mostrado abaixo.

\`\`\`python
arquivo = open("dados_salvos.txt", 'w')
lista = ["Maçã\\n", "Pera\\n", "Banana\\n"]

arquivo.writelines(lista)
arquivo.close()

# O que é salvo:
# Maçã
# Pera
# Banana
\`\`\`

## Uso do \`with\`

Podemos economizar uma linha de código e garantir segurança se fizermos uso do gerenciador de contexto \`with\`. Neste caso, não precisamos chamar o \`close()\`, já que ele é executado automaticamente ao sair do bloco.

\`\`\`python
lista = ["Maçã\\n", "Pera\\n", "Banana\\n"]

with open("dados_salvos.txt", 'w') as arquivo:
     arquivo.writelines(lista)
\`\`\`

## Exemplos: Escrever arquivos em Python

### Erro com modo 'x'
O uso de \`'x'\` faz com que, se o arquivo já existir, seja retornado um erro (\`FileExistsError\`). No código a seguir criamos um arquivo e imediatamente depois tentamos criar um arquivo com o mesmo nome com a opção \`'x'\`.

\`\`\`python
f = open("meu_arquivo.txt", "w")
f.close() # É boa prática fechar antes de tentar abrir de novo, embora o erro ocorra na abertura.

# f = open("meu_arquivo.txt", "x")
# Erro! FileExistsError: [Errno 17] File exists: 'meu_arquivo.txt'
\`\`\`

### Comunicação entre funções via arquivo
Neste outro exemplo, vamos usar um arquivo para estabelecer uma comunicação entre duas funções. Para fins práticos pode não ser a forma mais eficiente (melhor passar variáveis), mas é um bom exemplo didático para mostrar leitura e escrita.

Temos uma função \`escreve_arquivo()\` que recebe uma mensagem e a escreve em um arquivo determinado. E por outro lado temos uma função \`le_arquivo()\` que devolve a mensagem que está escrita no arquivo.

\`\`\`python
# Escreve uma mensagem em um arquivo
def escreve_arquivo(mensagem):
    with open('arquivo_comunicacao.txt', 'w') as arquivo:
        arquivo.write(mensagem)

# Ler a mensagem do arquivo        
def le_arquivo():
    mensagem = ""
    # Lê o conteúdo
    with open('arquivo_comunicacao.txt', 'r') as arquivo:
        mensagem = arquivo.read()
        
    # Apaga o conteúdo do arquivo para deixá-lo vazio (abrindo como 'w' e fechando)
    f = open('arquivo_comunicacao.txt', 'w')
    f.close()
    
    return mensagem

escreve_arquivo("Isto é uma mensagem")
print(le_arquivo())
# Saída: Isto é uma mensagem
\`\`\`
`;
