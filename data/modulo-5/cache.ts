
export const m5Cache = `
# Caching de Funções

O **cache** é um termo muito usado em informática e refere-se ao armazenamento de resultados prévios para sua posterior reutilização, o que permite reduzir o tempo de resposta. Por exemplo, se chamamos uma função com um determinado parâmetro e logo em seguida realizamos a mesma chamada, seria interessante reutilizar o primeiro resultado para não ter que calculá-lo outra vez. Existem, portanto, duas possibilidades:

1.  **Cache Miss:** Se executamos a função e o resultado não foi calculado anteriormente, ele é calculado e armazenado para o caso de ser útil no futuro.
2.  **Cache Hit:** Se executamos a função e o cache tem armazenado o resultado para essa operação, em vez de calcular a saída outra vez, podemos reutilizá-la. Dado que estamos reutilizando um valor já calculado, geralmente o tempo de resposta será menor.

Por sorte, o Python nos permite adicionar *caching* às nossas funções, mas antes de implementá-lo é conveniente fazer uma análise sobre nosso programa e determinar se vale a pena. Algumas coisas a ter em conta:

*   O caching é especialmente útil quando trabalhamos com funções muito intensivas em cálculo, o que faz com que reutilizar o valor do cache reduza notavelmente o tempo de resposta.
*   É necessário conhecer (a nível estatístico) a distribuição dos argumentos com os quais a função é chamada. Se a função sob estudo é chamada com valores muito díspares e apenas repetidos, o caching pouco ajudará, já que quase não teremos um *cache hit*.
*   O uso de um cache pode melhorar o tempo de resposta, mas frequentemente paga-se com um incremento do uso de memória. Também é necessário decidir o número de valores a armazenar.

A seguir veremos como implementar caching em Python, podendo fazê-lo com dicionários ou utilizando a biblioteca \`functools\`. Para exemplificar, veremos como implementar um cache em nosso código de números primos visto anteriormente, empregando ambas as formas.

\`\`\`python
def eh_primo(num):
    for n in range(2, num):
        if num % n == 0:
            return False
    return True
\`\`\`

## Caching com Dicionários

A primeira forma de realizá-lo é usando um dicionário como cache. Note que este é um exemplo didático e que ignora alguns fatores. Como você pode ver, temos claramente diferenciado o *cache hit* e o *cache miss*. Se o valor não está no cache, calcula-se e devolve-se.

\`\`\`python
def eh_primo_com_cache(num, _cache={}):
    if num not in _cache:
        _cache[num] = True
        for n in range(2, num):
            if num % n == 0:
                _cache[num] = False
                break
    return _cache[num]
\`\`\`

Dado que \`eh_primo\` é bastante intensivo em cálculo, quando usamos números grandes a economia pode ser muito significativa. No código seguinte podemos ver como a primeira vez que executamos a função demoram-se 3.5 segundos, já que o resultado tem que ser calculado. No entanto, a segunda vez que a chamamos com a mesma entrada, temos um *cache hit*, pelo que o valor já não é calculado, mas recuperado do cache, demorando microsegundos.

\`\`\`python
import time
tic = time.time()
eh_primo_com_cache(25565479)
print(time.time() - tic)

tic = time.time()
eh_primo_com_cache(25565479)
print(time.time() - tic)

# Saída aproximada:
# 3.5551438331604004
# 4.0531158447265625e-06
\`\`\`

## Caching com functools e lru_cache

A segunda forma de realizá-lo, e um pouco mais sofisticada, é usando **\`lru_cache\`**, um decorador que vem com a biblioteca padrão \`functools\`. A maior vantagem é que não precisamos modificar a função. Note que \`maxsize\` nos permite indicar o número máximo de valores que queremos armazenar no cache.

\`\`\`python
from functools import lru_cache

@lru_cache(maxsize=32)
def eh_primo_com_cache(num):
    for n in range(2, num):
        if num % n == 0:
            return False
    return True
\`\`\`

Portanto, se agora chamamos nossa função com os mesmos valores, podemos ver como a primeira vez demora 3.9 segundos, mas a segunda apenas demora uns microsegundos.

\`\`\`python
import time
tic = time.time()
eh_primo_com_cache(25565479)
print(time.time() - tic)

tic = time.time()
eh_primo_com_cache(25565479)
print(time.time() - tic)

# Saída aproximada:
# 3.9316678047180176
# 3.0994415283203125e-06
\`\`\`

No caso de querermos limpar o cache de nossa função, podemos realizar o seguinte:

\`\`\`python
eh_primo_com_cache.cache_clear()
\`\`\`
`;
