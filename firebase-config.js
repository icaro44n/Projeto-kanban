// Importa as funções que você precisa dos SDKs que você precisa
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

// TODO: Adicione a configuração do seu projeto Firebase aqui
// Para mais informações: https://firebase.google.com/docs/web/setup#available-libraries
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyByV5NRKi9YfoODzsc7do5gzrx-HFqtuIo",
  authDomain: "robotic-heaven-467715-r5.firebaseapp.com",
  projectId: "robotic-heaven-467715-r5",
  storageBucket: "robotic-heaven-467715-r5.appspot.com",
  messagingSenderId: "640118381311",
  appId: "1:640118381311:web:b57207051dc19b4b6a4aca",
  measurementId: "G-565JEP2TK9"
};

if (firebaseConfig.apiKey === "SUA_API_KEY" || firebaseConfig.projectId === "SEU_PROJECT_ID") {
  // Exibe uma mensagem mais informativa no console em vez de um alerta bloqueante.
  console.error("Firebase não configurado. Por favor, copie suas credenciais do console do Firebase para o arquivo 'firebase-config.js'.");
  // Desabilita a funcionalidade principal se o Firebase não estiver configurado.
  document.body.innerHTML = `<div style="padding: 20px; text-align: center; font-family: sans-serif;">
    <h1>Configuração do Firebase Incompleta</h1>
    <p>Por favor, adicione suas credenciais do Firebase no arquivo <code>firebase-config.js</code> para que o aplicativo funcione.</p>
  </div>`;
} else {
  // Inicializa o Firebase e exporta o serviço do Firestore
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  // Exporta o serviço do Firestore para ser usado em outros arquivos
  // eslint-disable-next-line import/prefer-default-export
  exports.db = db;
}