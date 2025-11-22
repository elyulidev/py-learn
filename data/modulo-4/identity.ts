
export const m4Identity = `
# Operadores de Identidade

O operador de identidade ou *identity operator* \`is\` indica-nos se duas variáveis fazem referência ao mesmo objeto. Isso implica que, se duas variáveis distintas têm o mesmo \`id()\`, o resultado da aplicação do operador \`is\` sobre elas será \`True\`.

| Operador | Descrição |
| :---: | :--- |
| \`is\` | Retorna \`True\` se fazem referência ao mesmo objeto |
| \`is not\` | Retorna \`False\` se fazem referência ao mesmo objeto |

## Operador \`is\`

O operador \`is\` verifica se duas variáveis fazem referência ao mesmo objeto na memória. No exemplo seguinte, podemos ver como ao aplicar-se sobre \`a\` e \`b\`, o resultado é \`True\`.

\`\`\`python
a = 10
b = 10

print(a is b) # True
\`\`\`

Isso deve-se ao fato de o Python reutilizar o mesmo objeto que armazena o valor 10 para ambas as variáveis (um processo conhecido como *interning* para pequenos inteiros). De fato, se usarmos a função \`id()\`, podemos ver que o objeto é o mesmo.

\`\`\`python
print(id(a)) # Ex: 4397849536
print(id(b)) # Ex: 4397849536
\`\`\`

Podemos ver também que ambos os valores são iguais com o operador relacional \`==\`, mas isto é uma mera coincidência neste caso, como veremos a seguir. Que duas variáveis tenham o mesmo conteúdo, não implica necessariamente que façam referência ao mesmo objeto.

\`\`\`python
print(a == b) # True
\`\`\`

No exemplo seguinte, podemos ver como \`a\` e \`b\` armazenam o mesmo valor, pelo que \`==\` nos indica \`True\`.

\`\`\`python
a = [1, 2, 3]
b = [1, 2, 3]

print(a == b) # True
print(a is b) # False
\`\`\`

No entanto, devido à forma como o Python funciona internamente, ele armazena o conteúdo em dois objetos diferentes. Ao tratar-se de objetos diferentes, isso faz com que o operador \`is\` devolva \`False\`.

Ao contrário de antes, podemos ver como a função \`id()\` neste caso nos devolve um valor diferente para cada variável.

\`\`\`python
print(id(a)) # Ex: 4496626880
print(id(b)) # Ex: 4496626816
\`\`\`

Esta diferença pode resultar um pouco confusa no início, pelo que recomendamos que leia mais acerca da mutabilidade em Python (visto no Módulo 3).

> **Para saber mais:** A função \`id()\` retorna a "identidade" do objeto. Na implementação CPython padrão, este é o endereço de memória do objeto.

## Operador \`is not\`

Uma vez definido \`is\`, é trivial definir \`is not\` porque é exatamente o contrário. Devolve \`True\` quando ambas as variáveis **não** fazem referência ao mesmo objeto.

\`\`\`python
# Python cria dois objetos diferentes, um
# para cada lista. As listas são mutáveis.
a = [1, 2, 3]
b = [1, 2, 3]

print(a is not b) # True
\`\`\`

\`\`\`python
# Python reutiliza o objeto que armazena 5
# pelo que ambas as variáveis apontam para o mesmo
a = 5
b = 5

print(a is not b) # False
\`\`\`
`;
