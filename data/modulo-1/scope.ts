export const m1Scope = `
# Escopo de Variáveis

O escopo define onde uma variável é visível.

*   **Global:** Definida no corpo principal do script.
*   **Local:** Definida dentro de uma função.

\`\`\`python
x = 10 # Global

def funcao():
    y = 5 # Local
    print(x + y) # Acessa global e local

funcao()
# print(y) # Erro: y não existe fora da função
\`\`\`
`;