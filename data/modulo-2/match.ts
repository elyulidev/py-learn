
export const m2Match = `
# Match Case (Python 3.10+)

O Python 3.10 introduziu finalmente uma estrutura de controle similar ao \`switch\` de outras linguagens, chamada **match**. No entanto, ela é muito mais poderosa que um switch comum: trata-se de **Structural Pattern Matching** (Correspondência de Padrões Estruturais).

## Sintaxe Básica

Cada \`case\` define um caminho possível. O \`_\` (underscore) funciona como a opção padrão (\`default\`), executada se a entrada não coincidir com nenhum caso anterior.

\`\`\`python
hora = 8
match hora:
    case 8:
        print("Café da manhã")
    case 14:
        print("Almoço")
    case 21:
        print("Jantar")
    case _:
        print("Não é hora de comer")

# Saída: Café da manhã
\`\`\`

O \`match\` nos permite realizar o mesmo que múltiplos \`if/elif\`, mas com uma sintaxe mais limpa e otimizada.

## Múltiplas Condições

Podemos agrupar várias condições em um único caso usando a barra vertical \`|\` (que funciona como um **OU**).

\`\`\`python
mes = 4
match mes:
    case 12 | 1 | 2: 
        print("Inverno (Hemisfério Norte)")
    case 3 | 4 | 5: 
        print("Primavera")
    case 6 | 7 | 8: 
        print("Verão")
    case 9 | 10 | 11: 
        print("Outono")
    case _: 
        print("Mês inválido")

# Saída: Primavera
\`\`\`

## Padrões Estruturais (O verdadeiro poder)

O \`match\` não verifica apenas igualdade de valores, ele verifica a **estrutura** e a **forma** dos dados. Podemos fazer correspondência com tuplas e listas, desempacotando valores automaticamente.

Imagine que temos uma coordenada $(x, y)$:

\`\`\`python
coordenada = (0, 1)

match coordenada:
    case (0, 0):
        print("Ponto na Origem")
    case (x, 0):
        # Captura o valor de x e verifica se y é 0
        print(f"Ponto no eixo X, valor: {x}")
    case (0, y):
        # Captura o valor de y e verifica se x é 0
        print(f"Ponto no eixo Y, valor: {y}")
    case (x, y):
        # Captura ambos os valores
        print(f"Ponto genérico em: {x}, {y}")
    case _:
        print("Não é uma coordenada 2D válida")

# Saída: Ponto no eixo Y, valor: 1
\`\`\`

Esta capacidade de verificar tipos e extrair variáveis simultaneamente torna o \`match\` uma ferramenta incrível para processar estruturas de dados complexas, árvores sintáticas ou JSONs.
`;
