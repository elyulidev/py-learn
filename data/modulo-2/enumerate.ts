export const m2Enumerate = `
# Iterar com enumerate

Retorna o índice (posição) e o valor ao mesmo tempo.

\`\`\`python
coeficientes = [2, -5, 4]
# Polinômio: 2x^0 - 5x^1 + 4x^2
for grau, coef in enumerate(coeficientes):
    print(f"{coef} * x^{grau}")
\`\`\`
`;