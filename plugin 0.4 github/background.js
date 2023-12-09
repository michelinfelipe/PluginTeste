// Função assíncrona, ou seja, que não bloqueia a execução do programa, para realizar a análise de sentimento
async function performSentimentAnalysis() {
  try {
    //Incluíndo o transformers via CDN - Content Delivery Network  
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/@xenova/transformers@2.10.1';
    script.async = true;
    document.head.appendChild(script);

    // Enviar mensagem para content.js indicando que o script foi carregado
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      const tabId = tabs[0].id;
      chrome.tabs.sendMessage(tabId, { scriptLoaded: true });
    });
  } catch (error) {
    // Caso dê erro no script
    console.error('Erro ao carregar o script:', error);
  }
}

// Evento disparado quando a extensão é instalada ou atualizada
chrome.runtime.onInstalled.addListener(async function () {
  try {
    // Menu básico:
    chrome.contextMenus.create({
      "id": "scanEmotions",
      "title": "Escanear Emoção",
      "contexts": ["selection"]
    });
  } catch (error) {
    console.error('Erro ao inicializar a extensão:', error);
  }
});

// Evento disparado quando um item do menu de contexto é clicado
chrome.contextMenus.onClicked.addListener(function (info, tab) {
  if (info.menuItemId === "scanEmotions") {
    const textoSelecionado = info.selectionText;
    processarTextoSelecionado(tab.id, textoSelecionado);
  }
});

// Função que processa o texto selecionado
async function processarTextoSelecionado(tabId, textoSelecionado) {
  console.log("Texto selecionado:", textoSelecionado);
  console.log("Antes de carregar o modelo");

  try {
    // Executando o script na guia ativa e enviando uma mensagem para o content script
    chrome.tabs.executeScript(tabId, { file: 'content.js' }, () => {
      chrome.tabs.sendMessage(tabId, { iniciarAnaliseSentimento: true });
    });
  } catch (error) {
    // Caso dê problema
    console.error('Erro ao carregar o modelo ou fazer inferência', error);
    if (error instanceof Error && error.stack) {
      console.error('Stack trace:', error.stack);
    }
  }
}

// Adicionando um listener (observer do minecraft) para a extensão ser acionada ao clicar com o botão direito e selecionar o texto
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.contextMenuClicked) {
    performSentimentAnalysis();
  }
});
