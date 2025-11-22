
export const m4Member = `
# Operadores de Membresia

Os operadores de membresia ou *membership operators* são operadores que nos permitem saber se um elemento está contido numa sequência. Por exemplo, se um número está contido numa lista de números.

| Operador | Descrição |
| :---: | :--- |
| \`in\` | Retorna \`True\` se o elemento está contido |
| \`not in\` | Retorna \`True\` se o elemento **não** está contido |

## Operador \`in\`

O operador \`in\` permite-nos ver se um elemento está contido dentro de uma sequência, como poderia ser uma lista. No exemplo seguinte vê-se um caso simples onde se verifica se 3 está contido na lista \`[1, 2, 3]\`. Como efetivamente está, o resultado é \`True\`.

\`\`\`python
print(3 in [1, 2, 3])
# True
\`\`\`

Vamos complicar um pouco as coisas e explorar os limites do operador. O que aconteceria se tentássemos fazer algo como o que se vê no exemplo seguinte? Poderia ser lógico pensar que \`3 in 3\` seria \`True\`, porque realmente parece que o 3 está contido no segundo 3. Pois não, o código seguinte daria um erro, dizendo que a classe \`int\` não é iterável. Em outros capítulos exploraremos mais acerca disto. Por agora basta-nos dizer que o elemento à direita do \`in\` deve ser um objeto tipo lista (ou iterável).

\`\`\`python
# print(3 in 3) # Erro! TypeError
\`\`\`

Vamos dar uma última volta ao parafuso. Poderíamos também ver se uma lista está contida noutra lista. Neste caso, a lista da direita do \`in\` é uma lista embebida dentro de outra lista. Como \`[1, 2]\` está dentro da segunda lista, o resultado é \`True\`.

\`\`\`python
print([1, 2] in [4, [1, 2], 7])
# True
\`\`\`

## Operador \`not in\`

Por último, o operador \`not in\` realiza o contrário do operador \`in\`. Verifica que um elemento **não** está contido noutra sequência. No exemplo seguinte pode-se ver como 3 não faz parte da sequência, pelo que o resultado é \`True\`.

\`\`\`python
print(3 not in [1, 2, 4, 5])
# True
\`\`\`

A verdade é que ambos os operadores \`in\` e \`not in\` são muito úteis e poupam-nos muito trabalho. É importante tê-lo em conta, porque noutras linguagens de programação não existem tais operadores, e devemos escrever código extra para obter tal funcionalidade. Uma forma de implementar o nosso operador \`in\` com uma função seria a seguinte. Simplesmente iteramos a lista e se encontramos o elemento que estávamos à procura devolvemos \`True\`, caso contrário \`False\`.

\`\`\`python
a = 3
lista = [1, 2, 3, 4, 5]

# Função que implementa "in"
def estaContido(a, lista):
    for l in lista:
        if a == l:
            return True
    return False

print(estaContido(a, lista))
# True
\`\`\`
`;
