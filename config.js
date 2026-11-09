// Config Firebase — partagée par toutes les pages (display, loges, public, control)
// Modifie uniquement ici si tu changes de projet Firebase.
export const firebaseConfig = {
  apiKey: "AIzaSyDSG5LDhOSR2ls5tBD-MbFpslt_-7VSKNc",
  authDomain: "concert-53cb5.firebaseapp.com",
  databaseURL: "https://concert-53cb5-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "concert-53cb5",
  storageBucket: "concert-53cb5.firebasestorage.app",
  messagingSenderId: "772965746022",
  appId: "1:772965746022:web:30cc339b970257f9fb34a7",
  measurementId: "G-W6KX5BNJY6"
};

// Chemin dans la Realtime Database utilisé par toutes les pages.
export const DB_PATH = "concertScreen";

// Code d'accès simple pour l'écran de contrôle (control.html).
// Ce n'est PAS une vraie sécurité (le code est visible dans le fichier),
// juste un frein pour éviter qu'un lien égaré ne permette à n'importe qui
// de piloter l'écran. Change-le librement.
export const CONTROL_PIN = "PUYDUFOU";

// Chemin où sont stockées les fiches spectacles (dropdown dans control.html).
export const SHOWS_PATH = "shows";

// Coordonnées du lieu, utilisées par technique.html pour récupérer
// automatiquement le vent (important pour la sécurité pyro) via l'API
// gratuite Open-Meteo (aucune clé requise). Par défaut : Le Puy du Fou,
// Les Epesses (85). Change ces valeurs pour ton propre lieu si besoin.
export const SHOW_LATITUDE = 46.9469;
export const SHOW_LONGITUDE = -0.8195;
