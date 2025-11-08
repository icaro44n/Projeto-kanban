// Módulo ESM seguro para inicializar o Firebase em runtime.
// NÃO deixe credenciais no repositório. Forneça config em runtime
// (ex: definir window.__FIREBASE_CONFIG__ no HTML ou injetar via build).
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

let _app = null;
let _db = null;

/**
 * Inicializa Firebase com a configuração passada.
 * Exemplo: initFirebase(window.__FIREBASE_CONFIG__);
 */
export function initFirebase(config = (typeof window !== 'undefined' ? window.__FIREBASE_CONFIG__ : undefined)) {
  if (!config || !config.apiKey || !config.projectId) {
    throw new Error('Configuração do Firebase ausente. Chame initFirebase(config) com as credenciais em runtime.');
  }
  if (_app) return { app: _app, db: _db };
  _app = initializeApp(config);
  _db = getFirestore(_app);
  return { app: _app, db: _db };
}

export function getDb() {
  if (!_db) throw new Error('Firebase não inicializado. Chame initFirebase(config) primeiro.');
  return _db;
}

/*
Documentação de uso:
No HTML (antes de importar app.js):
<script>
  window.__FIREBASE_CONFIG__ = { apiKey: "...", projectId: "...", authDomain: "...", ... };
</script>
Em src/js/app.js:
import { initFirebase } from './firebase-config.js';
initFirebase(window.__FIREBASE_CONFIG__);
*/









