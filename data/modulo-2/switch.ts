export const m2Switch = `
# Switch (Simulação)

Antes do Python 3.10, Python não tinha \`switch/case\`. Usava-se dicionários ou \`if/elif\` encadeados.

\`\`\`python
def operacao(op, x, y):
    opcoes = {
        'soma': x + y,
        'sub': x - y
    }
    return opcoes.get(op, "Operação inválida")
\`\`\`
`;