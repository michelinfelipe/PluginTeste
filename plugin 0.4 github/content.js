console.log('Script content.js carregado com sucesso!');

// Variável de controle para evitar loop infinito
let analiseComecou = false;

// Ouvindo mensagens do background script
chrome.runtime.onMessage.addListener(async function (mensagem) {
  console.log('Mensagem recebida do background script:', mensagem);

  // Análise de sentimento começar
  if (mensagem.iniciarAnaliseSentimento && !analiseComecou) {
    console.log('Iniciando a análise de sentimento...');
    analiseComecou = true; 

    await performSentimentAnalysis();
    console.log('Análise de sentimento concluída.');
  }
});

// Função assíncrona para realizar a análise de sentimento
async function performSentimentAnalysis() {
  try {
    // Texto de exemplo para análise de sentimento
    const text = 'Eu estou muito feliz com o resultado!';

    // Aguardando a biblioteca ser carregada no contexto da página
    await new Promise(resolve => {
      const checkLibrary = () => {
        if (window.transformers && window.transformers.pipeline) {
          resolve();
        } else {
          setTimeout(checkLibrary, 100);
        }
      };
      checkLibrary();
    });

    // Criando o pipeline para análise de sentimento
    const pipe = await window.transformers.pipeline('sentiment-analysis', 'https://huggingface.co/bert-base-uncased/resolve/main/config.json');

    // Realizando a análise de sentimento
    const result = await pipe(text);

    // Exibindo o resultado no console. 
    //NÃO EXIBE************************************************************
    console.log('Análise de Sentimento:', result);
  } catch (error) {
    // Caso dê erro
    console.error('Erro ao realizar a análise de sentimento:', error);
  }
}
