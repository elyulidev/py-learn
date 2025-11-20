export const m2ListComp = `
# List Comprehensions

Uma forma Pythonica e concisa de criar listas. Baseada na notação de construção de conjuntos: $S = \{x^2 | x \in \mathbb{Z}, x > 0\}$.

\`\`\`python
quadrados = [x**2 for x in range(10)]
pares = [x for x in range(20) if x % 2 == 0]
\`\`\`
`;