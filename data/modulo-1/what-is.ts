export const m1WhatIs = `
# O que é Python?

Vamos começar. Diferente do que muita gente pode pensar, Python é uma linguagem que data dos anos 1990, e sua criação é atribuída ao holandês **Guido van Rossum**. Recebeu este nome em homenagem ao grupo de humoristas *Monty Python*.

Sua última versão é o **Python 3**, e é a que recomendamos usar, já que as anteriores não possuem mais suporte oficial. Neste curso, usaremos sempre esta versão.

## Popularidade e Tendência

De acordo com insights do *StackOverflow*, Python ocupa o pódio há anos em número de perguntas na plataforma. Um estudo de 2017 já colocava Python como uma das linguagens favoritas em países de alta renda como Alemanha, Reino Unido e Estados Unidos.

Existe uma tendência clara e o interesse em Python deve continuar crescendo. Estes são os motivos:

*   **Fácil de aprender:** Sintaxe simples que se assemelha a pseudocódigo. Pouco código faz muito.
*   **Versátil:** Não é ligado a um setor específico (diferente de R que é focado em dados). Serve para Web, Scripts, Ciência, etc.
*   **Comunidade Enorme:** Muitas bibliotecas para fazer literalmente qualquer coisa.
*   **Multiplataforma:** O mesmo código roda em Windows, macOS e Linux sem alterações.
*   **Rapidez:** Desenvolvimento ágil encurta a duração dos projetos.

## Usos de Python

Sendo uma linguagem transversal, é usada em diversas indústrias:

*   **YouTube:** Backend do servidor (junto com Java e Go).
*   **Netflix:** Automação, análise de dados e Machine Learning.
*   **NASA:** Em grande quantidade de programas científicos.
*   **JPMorgan:** Espera-se que seus analistas financeiros dominem Python.

E para fins diversos:

1.  **Desenvolvimento Web:** Frameworks como Django, Flask, Pyramid.
2.  **Ciência e Educação:** Sintaxe simples ideal para ensino. Bibliotecas como SciPy e Pandas para cálculo numérico.
3.  **Interfaces Gráficas (GUI):** Kivy, PyQt.
4.  **Machine Learning:** TensorFlow, PyTorch, Keras, Scikit-learn.
5.  **Visualização de Dados:** Matplotlib, Seaborn, Plotly.
6.  **Finanças e Trading:** QuantLib, qtpylib.

> Atualmente, praticamente qualquer API ou serviço no mundo possui uma versão para Python nativa ou via wrapper.

## Comunidade

A comunidade Python é imensa (cerca de 8.2 milhões em 2019), superando Java. Isso garante suporte rápido e resolução de problemas.

Existem as **PyCon** (convenções anuais internacionais) e a **Python Software Foundation** (organização sem fins lucrativos que protege e promove a linguagem).

## Características do Python

*   **Interpretado:** Não compilado.
*   **Tipagem Dinâmica:** Variáveis podem mudar de tipo.
*   **Fortemente Tipado:** Tipos não mudam "magicamente" em operações sem conversão explícita.
*   **Multiplataforma:** Roda em qualquer OS.

Veja o código abaixo ilustrando essas características e a tipagem dinâmica:

\`\`\`python
def funcao(entrada):
    # A função aceita qualquer entrada, mas espera algo divisível
    return entrada / 2 
    
x = "Olá"       # x é string
x = 7.0         # x agora é float
x = int(x)      # x convertido para int (7)
x = funcao(x)   # x recebe o retorno float (3.5)

print(x)
print(type(x))

# Saída:
# 3.5
# <class 'float'>
\`\`\`

## The Zen of Python (O Zen do Python)

O Zen do Python é uma coleção de 19 princípios que guiam o design da linguagem, descritos na **PEP 20**.

> 1.  Bonito é melhor que feio.
> 2.  Explícito é melhor que implícito.
> 3.  Simples é melhor que complexo.
> 4.  Complexo é melhor que complicado.
> 5.  Plano é melhor que aninhado.
> 6.  Esparso é melhor que denso.
> 7.  A legibilidade conta.
> 8.  Casos especiais não são especiais o bastante para quebrar as regras.
> 9.  Embora a praticidade vença a pureza.
> 10. Erros nunca devem passar silenciosamente.
> 11. A menos que sejam explicitamente silenciados.
> 12. Diante da ambiguidade, recuse a tentação de adivinhar.
> 13. Deve haver um — e preferencialmente apenas um — modo óbvio de fazer algo.
> 14. Embora esse modo possa não ser óbvio à primeira vista a menos que você seja holandês.
> 15. Agora é melhor que nunca.
> 16. Embora nunca frequentemente seja melhor que *exatamente* agora.
> 17. Se a implementação é difícil de explicar, é uma má ideia.
> 18. Se a implementação é fácil de explicar, pode ser uma boa ideia.
> 19. Namespaces são uma grande ideia — vamos fazer mais desses!

O que você acha? Convencido a aprender Python? A seguir veremos como instalar.
`;