// Importa as funções que você precisa dos SDKs que você precisa
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

// Atenção: NÃO comitar credenciais no repositório.
// Melhor prática: injetar valores em runtime (environment variables / servidor / CI secret).
export const firebaseConfig = {
  // Substitua pelas suas credenciais em runtime. NÃO deixar chaves reais neste arquivo em VCS.
  apiKey: "", // ex: process.env.FIREBASE_API_KEY em build system
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
  measurementId: ""
};

// Função de inicialização que apliaca checagens e retorna app + db.
// A aplicação (app.js) deve chamar initFirebase() e tratar erros.
export function initFirebase(config = firebaseConfig) {
  if (!config || !config.apiKey || !config.projectId) {
    throw new Error("Firebase não configurado. Defina firebaseConfig antes de inicializar.");
  }
  const app = initializeApp(config);
  const db = getFirestore(app);
  return { app, db };
}