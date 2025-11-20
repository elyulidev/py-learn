export const m2Iterators = `
# Iteradores e Iteráveis

*   **Iterável:** Objeto que pode ser iterado (tem \`__iter__\`). Ex: Lista, String.
*   **Iterador:** Objeto que realiza a iteração, mantendo o estado interno (tem \`__next__\`).

\`\`\`python
lista = [1, 2]
it = iter(lista)
print(next(it)) # 1
print(next(it)) # 2
# next(it) -> Lança StopIteration
\`\`\`
`;