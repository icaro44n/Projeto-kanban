// Importa as funções que você precisa dos SDKs que você precisa
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

// TODO: Adicione a configuração do seu projeto Firebase aqui
// Para mais informações: https://firebase.google.com/docs/web/setup#available-libraries
const firebaseConfig = {
  apiKey: "SUA_API_KEY",
  authDomain: "SEU_AUTH_DOMAIN",
  projectId: "SEU_PROJECT_ID",
  storageBucket: "SEU_STORAGE_BUCKET",
  messagingSenderId: "SEU_MESSAGING_SENDER_ID",
  appId: "SEU_APP_ID"
};

// Verifica se as credenciais do Firebase foram alteradas
if (firebaseConfig.apiKey === "SUA_API_KEY") {
  alert("Por favor, configure suas credenciais do Firebase no arquivo firebase-config.js");
let app;
let db;

if (firebaseConfig.apiKey === "SUA_API_KEY" || firebaseConfig.projectId === "SEU_PROJECT_ID") {
  // Exibe uma mensagem mais informativa no console em vez de um alerta bloqueante.
  console.error("Firebase não configurado. Por favor, copie suas credenciais do console do Firebase para o arquivo 'firebase-config.js'.");
  // Desabilita a funcionalidade principal se o Firebase não estiver configurado.
  document.body.innerHTML = `<div style="padding: 20px; text-align: center; font-family: sans-serif;">
    <h1>Configuração do Firebase Incompleta</h1>
    <p>Por favor, adicione suas credenciais do Firebase no arquivo <code>firebase-config.js</code> para que o aplicativo funcione.</p>
  </div>`;
} else {
  // Inicializa o Firebase
  app = initializeApp(firebaseConfig);
  // Exporta o serviço do Firestore para ser usado em outros arquivos
  db = getFirestore(app);
}

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);
// Exporta o serviço do Firestore para ser usado em outros arquivos
export const db = getFirestore(app);
export { db };