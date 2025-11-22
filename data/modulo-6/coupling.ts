
export const m6Coupling = `
# Acoplamento em Programação

O **acoplamento** em programação (denominado *coupling* em inglês) é um conceito que mede a dependência entre dois módulos distintos de software, como podem ser, por exemplo, as classes. O acoplamento pode ser de dois tipos:

1.  **Acoplamento fraco (ou baixo):** Indica que não existe dependência (ou existe muito pouca) de um módulo com outros. Esta deve ser a meta do nosso software.
2.  **Acoplamento forte (ou alto):** Pelo contrário, indica que um módulo tem muitas dependências internas com outros.

O termo acoplamento está muito relacionado com a **coesão**, já que acoplamento fraco costuma estar ligado a uma coesão forte. Em geral, o que buscamos em nosso código é que tenha **acoplamento fraco e coesão forte**, ou seja, que não tenha dependências com outros módulos e que as tarefas que realiza estejam relacionadas entre si. Um código assim é fácil de ler, de reusar e de manter.

> **Nota:** Costuma-se empregar "alto" e "baixo" para designar forte e fraco, respectivamente. A meta é sempre o **Baixo Acoplamento**.

## Por que evitar o acoplamento forte?

Se ainda não te convencemos do porquê buscamos código fracamente acoplado, vejamos o que aconteceria com um código fortemente acoplado:

1.  **Efeito Borboleta:** Devido às dependências com outros módulos, uma mudança em um módulo alheio ao nosso poderia ter um efeito colateral em nosso código, mesmo sem termos modificado diretamente nosso módulo.
2.  **Baixa Reusabilidade:** Se um módulo tem dependências com outros, reduz-se a reusabilidade, já que para reusá-lo em outro projeto deveríamos copiar também todas as suas dependências.

## Exemplo Prático

Vejamos um exemplo usando classes e objetos em Python. 

Temos uma \`Classe1\` que define um atributo de classe \`x\`. Por outro lado, a \`Classe2\` baseia o comportamento do método \`meu_metodo()\` no valor de \`x\` da \`Classe1\`.

Neste exemplo existe **acoplamento forte**, já que existe uma dependência direta com uma variável de outro módulo (outra classe).

\`\`\`python
class Classe1:
    x = True
    pass

class Classe2:
    def meu_metodo(self, valor):
        # O acoplamento ocorre aqui: Classe2 depende de Classe1
        if Classe1.x:
            self.valor = valor

minha_classe = Classe2()
minha_classe.meu_metodo("Olá")
print(minha_classe.valor)
# Saída: Olá
\`\`\`

Pode parecer um exemplo trivial, mas quando o software vai se complicando, não é nada raro acabar fazendo coisas desse tipo quase sem perceber. Há vezes que dependências externas podem ser justificadas, mas é preciso estar muito seguro do que se faz.

### Dificuldade na Depuração

Este tipo de dependência também pode tornar o código muito difícil de depurar. Imaginemos que nosso código da \`Classe2\` funciona perfeitamente, mas de repente alguém faz uma mudança na \`Classe1\`. Uma mudança tão simples como a seguinte:

\`\`\`python
Classe1.x = False
\`\`\`

Essa mudança estaria modificando o comportamento de nossa \`Classe2\` e nos perguntaríamos: *por que meu código parou de funcionar se não toquei em nada?*

Às vezes atribuímos esses comportamentos à magia ou "radiação cósmica", mas a resposta é muito mais simples: temos um código com **acoplamento forte**. Para corrigir isso, a \`Classe2\` deveria receber suas configurações ou dependências através de parâmetros (Injeção de Dependência) e não acessá-las diretamente de outras classes globais.
`;