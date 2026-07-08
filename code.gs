/** 
 * Projeto: Sugestão de Compras Inteligente
 * Backend: Google Apps Script
 **/

function doGet(e) {
  // Retorna a interface HTML e permite o uso em iframes (ex: Google Sites)
  return HtmlService
    .createHtmlOutputFromFile('index')
    .setTitle('Sugestão de Compras (Calculado)')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}