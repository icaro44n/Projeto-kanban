// Módulo ESM seguro para inicializar o Firebase em runtime.
// NÃO deixe credenciais no repositório. Forneça config em runtime (ex: build env,
// window.__FIREBASE_CONFIG__ ou injeção no servidor).
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

let _app = null;
let _db = null;

/**
 * Inicializa Firebase com a configuração passada.
 * - config: objeto com apiKey, projectId, etc.
 * - não altera o DOM durante a importação do módulo.
 */
export function initFirebase(config = (typeof window !== 'undefined' ? window.__FIREBASE_CONFIG__ : undefined)) {
  if (!config || !config.apiKey || !config.projectId) {
    throw new Error('Configuração do Firebase ausente. Chame initFirebase(config) com as credenciais em runtime.');
  }
  if (_app) {
    // já inicializado
    return { app: _app, db: _db };
  }
  _app = initializeApp(config);
  _db = getFirestore(_app);
  return { app: _app, db: _db };
}

/**
 * Retorna a instância do Firestore após initFirebase()
 */
export function getDb() {
  if (!_db) throw new Error('Firebase não inicializado. Chame initFirebase(config) primeiro.');
  return _db;
}

// Exemplo (documentação): no HTML ou no bootstrap do app você pode definir:
// <script>window.__FIREBASE_CONFIG__ = { apiKey: "...", projectId: "...", ... };</script>
// e em app.js: import { initFirebase, getDb } from './firebase-config.js'; initFirebase();








