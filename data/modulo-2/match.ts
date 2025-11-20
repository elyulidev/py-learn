export const m2Match = `
# Match (Python 3.10+)

A nova estrutura de controle estrutural (Structural Pattern Matching).

\`\`\`python
ponto = (0, 10)

match ponto:
    case (0, 0):
        print("Origem")
    case (0, y):
        print(f"Eixo Y, valor {y}")
    case (x, 0):
        print(f"Eixo X, valor {x}")
    case (x, y):
        print(f"Ponto ({x}, {y})")
\`\`\`
`;