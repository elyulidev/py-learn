
export const m7Define = `
# Definindo Exceções

Antes de ver como se define uma exceção, é recomendável ter em mente os conceitos de **Programação Orientada a Objetos** e **Herança**.

Apesar de o Python definir um conjunto extenso de exceções por padrão (como \`ValueError\`, \`TypeError\`), elas podem não ser suficientes para a lógica de domínio do nosso programa. Nesse caso, devemos definir nossa própria exceção.

Para criar uma exceção customizada, basta criar uma classe que herde da classe base **\`Exception\`**.

\`\`\`python
# Criamos uma exceção personalizada
class MinhaExcecaoPersonalizada(Exception):
    pass
\`\`\`

E já poderíamos lançá-la com \`raise\` quando quiséssemos.

\`\`\`python
raise MinhaExcecaoPersonalizada("Ocorreu um erro genérico")
\`\`\`

## Passando Parâmetros

Também é possível passar parâmetros de entrada ao lançar a exceção. Isto é muito útil para fornecer informações de contexto sobre o erro.

Para isso, podemos modificar o método construtor \`__init__()\`.

\`\`\`python
class MinhaExcecao(Exception):
    def __init__(self, codigo, mensagem):
        self.codigo = codigo
        self.mensagem = mensagem
        # É uma boa prática chamar o init da classe pai para que a mensagem padrão funcione
        super().__init__(mensagem)
\`\`\`

Uma vez criada nossa exceção, podemos lançá-la e, ao capturá-la, acessar esses atributos personalizados.

\`\`\`python
try:
    raise MinhaExcecao(404, "Recurso não encontrado")
except MinhaExcecao as ex:
    print(f"Erro capturado: {type(ex)}")
    print(f"Código: {ex.codigo}")
    print(f"Mensagem: {ex.mensagem}")

# Saída:
# Erro capturado: <class '__main__.MinhaExcecao'>
# Código: 404
# Mensagem: Recurso não encontrado
\`\`\`

## Passando Dicionários (Informação Estruturada)

Há um padrão interessante que nos permite passar um dicionário como argumento para a exceção, permitindo estruturar dados complexos de erro sem definir múltiplos atributos no \`__init__\`.

\`\`\`python
# Definimos uma exceção simples
class ErroDeValidacao(Exception):
    pass

# Lançamos passando um dicionário
try:
    info_erro = {
        "campo": "email", 
        "erro": "Formato inválido", 
        "valor_recebido": "teste@"
    }
    raise ErroDeValidacao(info_erro)

except ErroDeValidacao as e:
    # Acessamos o primeiro argumento passado (o dicionário) através de .args
    detalhes = e.args[0]
    
    print("Campo:", detalhes["campo"])
    print("Erro:", detalhes["erro"])

# Saída:
# Campo: email
# Erro: Formato inválido
\`\`\`

Como se pode ver, os parâmetros são acessíveis via \`e.args[0]\`, já que se trata do primeiro argumento passado para a exceção.

## Alternativa Orientada a Objetos

Uma forma talvez mais limpa e robusta de fazer o mesmo seria definir os campos explicitamente na classe, tornando o código mais legível e permitindo autocompletar em IDEs.

\`\`\`python
class ErroDeConexao(Exception):
    def __init__(self, host, porta):
        self.host = host
        self.porta = porta
    
    # O método __str__ define o que é impresso quando fazemos print(e)
    def __str__(self):
        return f"Não foi possível conectar a {self.host}:{self.porta}"

try:
    raise ErroDeConexao("localhost", 8080)
except ErroDeConexao as e:
    print(e)          # Usa o __str__ definido acima
    print(e.host)     # Acesso direto ao atributo
    print(e.porta)

# Saída:
# Não foi possível conectar a localhost:8080
# localhost
# 8080
\`\`\`
`;