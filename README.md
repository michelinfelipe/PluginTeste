# PluginTeste
Testando fazer um plugin que, ao usuário selecionar um texto do Chrome e clicar com o botão direito do mouse, uma opção "escanear emoções" apareça, e utilizando do Bert e Transformers, uma análise de sentimentos seja feita com o texto selecionado. 
************************************************************************************************
***************Para ir direto ao código, ir para #Erros encontrados e #Etapa atual**************
************************************************************************************************
## Motivações
A alura deixou de ser produtiva quando meu maior motivo de realiza-la se tornou correr com as aulas,<br> 
e apenas replicando o que era feito não me dava nenhum repositório (até porque não gosto da ideia de colocar coisa em portifólio que é ensinado padrão), <br>
Então decidi de forma meio desesperada de tentar aprender de outro método, pra provar (principalmente pra mim mesmo) que eu era capaz.<br>
Um dos maiores motivos foi ter um projeto para apresentar para a CooTea, mas esse motivo pode ser dividido em motivos menores, rs.<br>
Além de grato pela plataforma da Adapte, senti a ausência das demonstrações de projeto durante o percurso das reuniões.<br>
Em decorrência do início, fiquei num atraso constante e não me sentia confortável em apresentar 1- os mesmos projetos dos quais eram ensinados e 2- projetos atrasados.<br>
Assim, compreendo e agonio-me no que estes silêncios significam: de que eu não estava fazendo nada.<br>
E ver os vídeos apressados da alura não estavam me ajudando a fazer nada, nestas ultimas semanas em que tentei correr atrás.<br>
Então, de última hora em última semana, decidi fazer um plugin do Chrome, algo levemente diferente mas que usava recursos que estávamos vendo,
pra não apenas botar em uma prática levemente diferente do que estávamos vendo (e então eu me sentiria confortável de compartilhar),
mas também pra, novamente, demonstrar que eu sou capaz.<br>
Neste README há então registros do meu processo de fazer o plugin.
# Métodos
Claro que eu não fiz isso sem auxilio e orientação. Até mesmo porque a pedagogia desconstrói bastante o conceito popular de "autodidata". <br>
Primeiro, organizei mentalmente as opções que eu queria executar. Não parecia fácil, mas parecia possível. Conceitualmente, sabia o que precisava fazer, e consequentemente sabia o que precisava aprender a fazer.<br>
Criei uma primeira extensão teste no chrome, utilizando o guia deles, encontrado em aqui: <br>
https://developer.chrome.com/docs/extensions/get-started/tutorial/hello-world?hl=pt-br <br>
Depois disso, usei o temível chatgpt, e por isso preciso esclarecer algumas coisas de antemão: <br>
Nas primeiras horas, ele me sugeriu conceitualmente os caminhos que eu devia tomar, e as ferramentas para tal. Fui pesquisando e fazendo. <br>
Os arquivos e códigos que ele foi sugerindo, nas primeiras horas (eu fiquei 15 horas num dia só conversando com ele e modificando o código no primeiro dia),
eu fui copiando pela digitação - letra por letra, para me acostumar com as sintaxes e entender melhor o que cada linha faz.<br>
Quando não entendia certa função, perguntava pra ele o que ela fazia. As primeiras horas foram bem longas por causa disso.<br>
Muitos erros eram gerados por vírgulas, typos e afins que o coitado chatbot glorificado me corrigiu.<br>
Quando me senti familiar com o código, após umas 6 horas, comecei a utilizar a ferramenta de cópia e cola que ele provém.<br>
Contudo, os erros que passaram a surgir de lá começaram a ficar complexos demais e fugirem um pouco do meu escopo, e as explicações nem sempre eram suficientes.<br>
Algumas dúvidas ainda se mantém no código, como a noção de código assíncrono, que entendo apenas no nível conceitual e não prático.<br>
Pesquisei muito também no stackoverflow, no github, tantos dúvidas de erros como a materialidade dos projetos como o Transformers por exemplo, que testei várias versões.<br>
## Erros encontrados e possivelmente resolvidos
Estes erros estão logados porque, apesar de eu acreditar que foram superados, talvez sejam relevantes.<br>
Os erros mais comuns encontrados foram:<br>
-Incontáveis erros de sintaxe<br>
-Erros que não apareciam no console e em nenhum lugar, onde precisei fazer vários console.log para entende-los melhor.<br>
-A violação do Content Security Policy, que eu nem sabia que existia. Acabou que sumiu eventualmente e não sei como, rs. Acho que estava executando as coisas importadas de forma imprudente.<br>
-Muitos arquivos criados. Exclui uns 4 arquivos que o chatgpt sugeria pra me escrever, e claro, por ele ser apenas um chatbot, depois mudava de ideia e eles continuavam lá. Revisei muito pra isso.<br>
## Erros persistentes:
-Syxtax_Export ou algo assim. Desculpe, não tenho mais ele em mãos, pois alterei levemente o código mas não consegui passar muito por ele. Esse erro surgia na página de trás do plugin, e acontecia na ultima linha do Transformers que não conseguia exportar o resultado de volta para o console, que eu acredito que era o sentiment analysis. Não está aparecendo atualmente, mas creio que ainda seja relevante.<br>
-Console logando apenas até onde o texto é selecionado<br>
-Como o chatgpt usa uma biblioteca meio antiga, o manifest version tá como 2, e o chrome diz que desde recentemente não oferece mais suporte. <br>
Eu tentei usar o 3 mas me pareceu que tava piorando os erros e os métodos, então mantive no 2.
Eu tentei usar o 3 mas me pareceu que tava piorando os erros e os métodos, então mantive no 2. <br>

## Etapa atual

Atualmente, o console loga o texto selecionado, e apenas isso. Exemplo:<br>
Script content.js carregado com sucesso!<br>
content.js:8 Mensagem recebida do background script: {iniciarAnaliseSentimento: true}<br>
content.js:12 Iniciando a análise de sentimento...<br>
Pelo meu entendimento, ainda há um problema na comunicação, talvez entre o bert e o transformers, pois não há o resultado da análise de sentimento.<br>
O erro de export em *erros persistentes* poderia indicar que o problema era no transformers, mas agora não sei mais. <br>
<br>
Estou enviando neste github porque eu achei que era a melhor solução, pois todos os métodos que eu pensei não pareceram que avançaram, apenas circulando entre os erros.<br>
É o terceiro dia e umas 30 horas (30 horas mesmo, sem enrolar) já foram usadas pra isso, e destas apenas umas 10 foram realmente produtivas, e eu sentia que estava avançando no processo.<br>
Os últimos 2 dias foram muito frustrantes e então estou publicando aqui para pedir ajuda nos erros citados acima. <br>
-O maior erro parece ser com o Bert, que utiliza a PLN e se comunica pelo Transformers. O código atual parece que não consegue fazer a análise de sentimento e apenas recebe o texto e manda pra eles.<br>
## Próximas etapas:

Acredito que depois disso resolvido, apenas gostaria de mudar para que o sentiment analysis fosse exibido no chrome da pessoa, sem que ela precisasse ir direto pro console.<br>
#Inicialmente, eu queria indicativos de ironia ou sarcasmo no texto, para encaixar melhor com o tema de autismo. <br>
Inicialmente, eu queria indicativos de ironia ou sarcasmo no texto, para encaixar melhor com o tema de autismo. <br>
Essa ideia não saiu fora da mesa mas me parece que o programa não seria capaz de executar isso bem, devido a complexidade destas duas aplicações linguísticas que podem ser muito complexas.<br>
Isso foi reforçado que pareceu difícil encontrar alguma plataforma que fizesse isso em português, por isso utilizei o Bert, que aparenta fazer isso em inglês. <br>
Então, larguei mão (pelo menos por enquanto) de uma real praticidade dele. Mas deve servir como aprendizado de possíveis projetos futuros.<br>
