
export const m6Abstract = `
# Abstração em Programação

A **abstração** é um termo que faz referência à ocultação da complexidade intrínseca de uma aplicação para o exterior, focando-se apenas em como ela pode ser usada, o que se conhece como **interface**.

Se você já ouviu falar do enfoque de "caixa preta", é um conceito muito relacionado. Dito de outra forma, a abstração consiste em ocultar toda a complexidade que algo pode ter por dentro, oferecendo-nos funções de alto nível, geralmente simples de usar, que podem ser usadas para interagir com a aplicação sem ter conhecimento do funcionamento interno.

## Analogia do Mundo Real

Uma analogia do mundo real poderia ser a **televisão**. Trata-se de um dispositivo muito complexo onde trabalharam grande quantidade de engenheiros de diversas disciplinas, como telecomunicações ou eletrônica.

Você imagina se para mudar de canal tivéssemos que saber todos os detalhes dos circuitos e sinais? Pois bem, nos é oferecida uma abstração da televisão: um **controle remoto**. O controle nos abstrai por completo da complexidade interna e nos dá uma interface simples que, com poucos botões, podemos usar.

## Abstração em POO

Algo muito parecido acontece na Programação Orientada a Objetos. Se tivéssemos uma classe \`Televisor\`, em seu interior poderia haver linhas e linhas de código super complexas para gerenciar o hardware, mas uma boa abstração seria a que simplesmente oferecesse os métodos públicos \`ligar()\`, \`desligar()\` e \`mudar_canal()\` ao exterior.

\`\`\`python
class Televisor:
    def __init__(self):
        self._is_ligada = False
        self._canal_atual = 0

    # A complexidade interna fica oculta nestes métodos
    def ligar(self):
        print("Inicializando circuitos...")
        self._is_ligada = True

    def mudar_canal(self, numero):
        if self._is_ligada:
            print(f"Sintonizando frequência para canal {numero}...")
            self._canal_atual = numero
        else:
            print("Erro: A TV está desligada")

# O usuário interage apenas com a abstração (a interface pública)
tv = Televisor()
tv.ligar()
tv.mudar_canal(5)
\`\`\`

## Classes e Métodos Abstratos

Um conceito relacionado com a abstração seriam as **classes abstratas** ou, mais especificamente, os **métodos abstratos**.

*   Define-se como **classe abstrata** a que contém métodos abstratos.
*   Define-se como **método abstrato** um método que foi declarado mas não implementado. Ou seja, que não tem código.

Isso permite definir um "contrato" ou modelo que as subclasses devem seguir, sem fornecer a implementação específica na classe pai.
`;
