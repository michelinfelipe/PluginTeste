document.getElementById('scanButton').addEventListener('click', function () {
  // Enviando mensagem para o background script indicando que é hora de realizar a análise de sentimento
  chrome.runtime.sendMessage({ iniciarAnaliseSentimento: true }, function (response) {
    console.log(response);
  });
});
