// Notifications sonores partagées — génère des bips via Web Audio API,
// donc pas besoin d'héberger de fichiers audio. Les navigateurs bloquent
// le son tant qu'il n'y a pas eu de clic utilisateur : initSoundButton()
// ajoute un petit bouton "Activer le son" en bas à gauche de l'écran.

let audioCtx = null;
let enabled = false;

export function initSoundButton(){
  const btn = document.createElement('button');
  btn.id = 'soundToggle';
  btn.textContent = '🔔 Activer le son';
  btn.style.cssText = `
    position:fixed;bottom:14px;left:18px;z-index:80;
    background:var(--panel-2,#211809);color:var(--text,#f1e6cf);
    border:1px solid var(--line,#3a2c15);border-radius:20px;
    padding:8px 16px;font-family:'Space Mono',monospace;font-size:12px;cursor:pointer;
  `;
  btn.addEventListener('click', () => {
    if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    audioCtx.resume();
    enabled = true;
    btn.textContent = '🔔 Son activé';
    btn.disabled = true;
    btn.style.opacity = '.5';
  });
  document.body.appendChild(btn);
  return btn;
}

function tone(freq, duration, delay = 0, vol = 0.18){
  if (!enabled || !audioCtx) return;
  setTimeout(() => {
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.frequency.value = freq;
    osc.type = 'sine';
    gain.gain.value = vol;
    osc.connect(gain).connect(audioCtx.destination);
    osc.start();
    osc.stop(audioCtx.currentTime + duration / 1000);
  }, delay);
}

// Deux bips courts et clairs — utilisé pour une annonce normale.
export function beepAnnounce(){ tone(880, 150, 0); tone(880, 150, 220); }

// Trois bips graves et insistants, répétés — utilisé pour une alerte d'urgence.
export function beepEmergency(){
  tone(660, 220, 0); tone(660, 220, 280); tone(660, 220, 560);
}

// Un bip aigu bref — utilisé pour un appel de régie (standby).
export function beepCue(){ tone(1046, 120, 0); }

// Deux bips montants, nets — utilisé pour le TOP (go).
export function beepGo(){ tone(1046, 100, 0); tone(1568, 160, 120); }

// Un bip grave double — utilisé pour un changement de statut (suspendu/annulé/repris).
export function beepStatus(){ tone(523, 160, 0); tone(392, 220, 180); }
