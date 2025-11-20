
export const m1Scope = `
# Escopo de Variáveis em Python

Python classifica os escopos de acordo com o modelo **LEGB**, que determina a ordem em que as variáveis são buscadas. A sigla LEGB corresponde a:

## Local (L)

Variáveis definidas dentro de uma função ou bloco, acessíveis unicamente dentro desse contexto. Elas são criadas no início da execução da função e desaparecem quando esta termina.

\`\`\`python
def saudacao():
    mensagem = "Olá, mundo!"  # Variável local
    print(mensagem)

saudacao()
# print(mensagem)  # Isto gerará um erro porque 'mensagem' é local à função.
\`\`\`

Neste caso, a variável \`mensagem\` é definida e utilizada dentro da função \`saudacao\`. Fora desta função, a variável não existe e não pode ser acessada.

## Enclosing (E) - Envolvente

Refere-se às variáveis definidas em uma função externa que encapsula outra função. Estas variáveis não são locais para a função mais interna, mas também não são globais.

\`\`\`python
def funcao_exterior():
    mensagem = "Olá da função exterior"  # Variável no escopo 'enclosing'

    def funcao_interior():
        print(mensagem)  # A função interior acessa a variável da exterior

    funcao_interior()

funcao_exterior()
# Saída: Olá da função exterior
\`\`\`

Neste caso, \`mensagem\` não é nem local para \`funcao_interior\` nem global, mas pertence ao escopo de \`funcao_exterior\`. Este é um exemplo de uma variável com escopo *enclosing*.

## Global (G)

Variáveis definidas no nível superior do script ou programa, fora de qualquer função. São acessíveis em todo o arquivo, mas podem ser modificadas dentro de uma função apenas se for usada a palavra-chave \`global\`.

\`\`\`python
mensagem = "Olá do escopo global"  # Variável global

def imprimir_mensagem():
    print(mensagem)  # Acessando a variável global

imprimir_mensagem()

print(mensagem)  # Também acessível fora das funções

# Saída: 
# Olá do escopo global 
# Olá do escopo global
\`\`\`

Neste caso, \`mensagem\` é definida fora de qualquer função, por isso é global e pode ser utilizada tanto dentro como fora das funções.

## Built-in (B) - Embutido

Variáveis e funções predefinidas do Python que estão disponíveis em qualquer parte do código, como \`len()\`, \`range()\` e \`print()\`.

\`\`\`python
from math import sqrt  # 'sqrt' é uma função do módulo 'math'

numero = 16
raiz_quadrada = sqrt(numero)  # Usamos a função para calcular a raiz quadrada
print(f"A raiz quadrada de {numero} é {raiz_quadrada}")
# Saída: A raiz quadrada de 16 é 4.0
\`\`\`

Neste caso, utilizamos uma função do módulo padrão \`math\`, que amplia as funcionalidades predefinidas do Python.
`;
