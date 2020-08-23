- Desenvolvimento
  - [x] Passar e pegar parâmetros aqui: app.get('/api/tweets', (req, res) => {
  - [x] Criar formulário com parâmetros estabelecidos para filtrar os tweets.
    - [x] Por padrão já pega os tweets retweetados somentes;
    - [x] Campo aberto para inserção de hashtag: "Contém a hashtag:" #IMAGINARIA
    - [x] Campo aberto para inserção de id de usuário: "Retweetado de:" @FULANO
    - [x] Campo de data permitindo inserir um único dia para ficar alinhado com o propósito do app
    - [x] Campo de hora de início e hora de término
    - [x] Campo com número de resultados desejados c/ limite de 100: "Quantidade de resultados (limite de 100 tweets)"
  - [ ] Criar validações
    - [ ] Validação de hashtag e username. Não podem ter espaços
    - [x] Máscara de data
    - [ ] Validação de data
    - [x] Máscara de hora
    - [ ] Validação de hora
    - [x] Validação de somente numeros
  - [ ] Utilizar contextAPI para compartilhar estado entre componentes
  - [x] Estilizar títulos, hr, inputs
    - Ref: 
      https://getbootstrap.com/docs/4.5/examples/checkout/
      https://sorteador.com.br/
      https://dribbble.com/shots/8433785-Account-List-UI-Design/attachments
  - [x] Adicionar botão de Sortear (cantos arredondados estilo Twitter);
  - [ ] Alterar texto do botão para 'Refazer Sorteio' ou 'Sortear novamente' após o primeiro sorteio
  - [x] Estilizar coluna da esquerda como o Twitter;
  - [x] Procurar por `list` ou `table` UIs para exibir os resultados
  - [ ] Placeholder para o local onde aparecem os resultados
  - [x] Toggle button para exibir ou ocultar inputs de horário
    - [ ] Colocar label de ativado/desativado
  - [ ] Testar acessibilidade
  - [ ] Explicar a finalidade do app na seção Jumbotron
  - [ ] UX Writing por Daniele
  - [ ] Spin animation no logo na seção Jumbotron
  - [ ] Google Analytics
  - [?] Dark Theme
  - [?] Manter o botão desabilitado até que os campos obrigatórios sejam preenchidos
  - [?] Selecionar um nome decente

- Pesquisa
  - [] Como vai ser o deploy?
  - [] Como colocar as variáveis de ambiente para o CRA e para o Node?

- Débito técnico
  - [ ] Testes unitários
  - [ ] Substituir o Axios por fetch;
  - [ ] Docker pra subir tudo de uma vez;
  - [ ] Atualizar README.md;
  - [ ] Declarar todas as cores no theme;
  - [ ] Trocar favicon;
  - [ ] Separar input e button de dentro do styled.js do form