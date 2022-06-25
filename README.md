# Atividades Práticas

Referente as aulas de JavaScript da [Digital Innovation One](https://web.dio.me/)

### Atividade 1

- Verifique de duas maneiras diferentes entre si, se uma string é um palíndromo.

(Palíndromo: frase ou palavra que se pode ler, indiferentemente, da esquerda para a direita ou vice-versa - por exemplo: raiar, amo, omo, ovo e radar)

### Atividade 2

## Substituir Números Pares 
(Trabalhando com Array)

- Troque todos os elementos pares e diferentes  de zero de array pelo número 0. Se o array for vazio, retorne -1.

Exemplo: 
Input -> [1,3,4,6,80,33,23,90]
Output -> [1,3,0,0,0,33,23,0]
Input -> []
Output -> -1

Referente as aulas de JavaScript da [Digital Innovation One](https://web.dio.me/)

## Atividade 1 - Funções

- Crie uma função que recebe o array  alunos e um número que irá representar a média final;
-  Percorra o array e popule um novo array auxiliar apenas com os alunos cujas notas são maiores ou igual a média;
-  Utilize a técnica "object destructuring" para manipular as propriedades desejadas de cada aluno.

-  * "Object destructuring"* entre chaves podemos filtrar apenas os dados que nos interessam em um objeto.

# Atividade 2 - This

- Dada a função calcularIdade, utilize os métodos  call e  apply para modificar o valor de [bthis. 
- Crie seus próprios objetos para esta atividade.


# Atividade MAP

- Crie uma função getAdmins que recebe um Map;
- Crie um Map e popule-o com nomes de usuários e seus papéis no sitema (Ex: 'Luiz', 'Admin');
-Dentro do getAdmins, utilize o loop for...of para retornar uma lista com os nomes dos usuários que são administradores.

# Atividade Set

- Dado o Array [30, 30, 40, 5, 223, 2049, 3034, 5], retorne outro array apenas com valores únicos.

# Atividade - MAP

- Pratique a sintaxe de multiplicação de números, uma vez utilizando o parâmetro this de um objeto criado por você, e depois use ele.

# Atividade - Filter

- Filtre e retorne todos os números pares de um array.

# Atividade - Reduce

- Some todos os números de um array;
- Crie uma função que recebe uma lista de preços e um número representando um saldo disponível. Calcule qual será o saldo final após subtrair todos os preços da lista enviado.

# Atividade - Debugging e Error Handling

## Validação de erros por tipo:

O objetivo é que a função receba um Array e retorne ele, caso o seu tamanho corresponda ao número enviado como parâmetro na função. Caso contrário, um erro será lançado.

- Crie uma função que recebe um array e um número;
- Realize as seguintes validações:

- Se os parâmetros não forem enviados, lance um erro do tipo ReferenceError;
- Se o array não for do tipo object, lance um erro do tipo TypeError;
- Se o número não for do tipo number, lance um erro do tipo TypeError;
- Se o tamanho do Array for diferente do número enviado como parâmentro, lance um erro do tipo RangeError;

- Utilize a declaração try...catch;
- Filtre as chamadas de catch porcada tipo de erro utilizando o operador Instaceof.


# Atividade - API - catAPI

Nesta atividade vamos criar uma página que carrega fotos aleatórias de gatinhos sempre que clicarmos no botão.

- Utilize a API https://thatcopy.pw/catapi/rest/ para fazer as chamadas com o método fetch();
- Utilize seus conhecimentos na manipulação do DOM para criar a imagem e ativaro evento de clique de botão.

# Atividade - Orientação a Objetos

## Conta Bancária

Nesta atividade, vamos testar os conceitos de orientação a Objetos, simulando a criação de diversos tipos de contas bancárias e operações.

- Crie a classe ** contaBancaria **, que possui os parâmetros agência, números, tipo e saldo;
- Dentro da contaBancaria, construa o Getter e o Setter de saldo;
- Dentro de contaBancaria, crie os métodos sacar e depositar;
- Crie uma classe-filha chamada ** contaCorrente **, que herda todos esses parâmetros e ainda possua o parâmetro cartaoCredito;
- Ainda em contaCorrente, construa o getter e o setter de cartaoCredito;
- Ainda em contaCorrente, faça com que o tipo seja contaCorrente por padrão;
- Crie uma classe-filha chamada contaPoupanca que herda todos os parâmetros de contaBancaria;
- Crie uma classe-filha chamada contaUniversitaria que herda todos os parâmetros de contaBancaria;
- Faça com que o método de saque de contaUniversitaria apenas seja capaz de sacar valores menores que 500 reais.

# Atividade - Módulos em JavaScript


Esta atividade tem como objetivo que você veja no console do seu navegador como os módulos funcionam.

- Instale a extensão Lever Server no seu Visual Code;
- Crie dois arquivos, .js e .mjs, um chamado funções e o outro chamado de main;

- No aquivo funções:

- Cria uma funcção chamada mostraIdade, que recebe, nome e idade, e retorna a string: A idade de ${nome} é ${idade};
- Siga o mesmo padrão para as outras funções como mostraCidade e mostraHobby.

- Exporte as funções no arquivo main;

- Importe as funções doa rquivo funções;
- Faça a chamada de todas elas;

- Utilizando a extensão Lever Server, abra o seu navegador e veja no console que as informações foram logadas corretamente.