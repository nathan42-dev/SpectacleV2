// Logique partagée entre tous les écrans (display, loges, public, technique) :
// métadonnées de statut (y compris spectacle suspendu / annulé), formatage
// du minuteur, et palette des couleurs d'annonce. Un seul endroit à modifier
// si un statut change de libellé ou de couleur.

export const statusMeta = {
  before:       { label: "AVANT SPECTACLE", sub: "Portes fermées",            icon:"🏰", tone:"before" },
  doors:        { label: "PORTES OUVERTES", sub: "Public en entrée",          icon:"🚪", tone:"doors" },
  live:         { label: "EN COURS",        sub: "Spectacle en direct",       icon:"🔥", tone:"live" },
  intermission: { label: "ENTRACTE",        sub: "Pause",                     icon:"⏸", tone:"intermission" },
  encore:       { label: "RAPPEL",          sub: "Rappel en cours",           icon:"⚔", tone:"encore" },
  end:          { label: "TERMINÉ",         sub: "Fin de spectacle",          icon:"🏁", tone:"end" },
  suspended:    { label: "SPECTACLE SUSPENDU", sub: "En pause — restez en place", icon:"⏸", tone:"suspended" },
  cancelled:    { label: "SPECTACLE ANNULÉ",   sub: "Consignes en régie",        icon:"✕", tone:"cancelled" },
};

// Libellés adaptés pour l'écran public (langage accueillant, sans jargon régie).
export const publicStatusMeta = {
  before:       { label: "AVANT SPECTACLE",     sub: "Merci de patienter, les portes ouvriront bientôt", icon:"🏰", tone:"before" },
  doors:        { label: "PORTES OUVERTES",     sub: "Installez-vous, le spectacle va bientôt commencer", icon:"🚪", tone:"doors" },
  live:         { label: "SPECTACLE EN COURS",  sub: "Merci de rester silencieux pendant la représentation", icon:"🔥", tone:"live" },
  intermission: { label: "ENTRACTE",            sub: "Le spectacle reprend dans quelques instants", icon:"⏸", tone:"intermission" },
  encore:       { label: "RAPPEL",              sub: "", icon:"⚔", tone:"encore" },
  end:          { label: "MERCI DE VOTRE VISITE", sub: "À très bientôt !", icon:"🏁", tone:"end" },
  suspended:    { label: "INTERRUPTION MOMENTANÉE", sub: "Merci de patienter, le spectacle va reprendre", icon:"⏸", tone:"suspended" },
  cancelled:    { label: "SPECTACLE ANNULÉ",    sub: "Merci de votre compréhension — rendez-vous à l'accueil", icon:"✕", tone:"cancelled" },
};

export const announceColorMap = {
  gold:"var(--gold-bright)", crimson:"var(--crimson)", forest:"var(--forest)", steel:"var(--steel)"
};

export function fmtDuration(ms){
  const neg = ms < 0;
  const abs = Math.abs(ms);
  const totalSec = Math.floor(abs/1000);
  const h = Math.floor(totalSec/3600);
  const m = Math.floor((totalSec%3600)/60);
  const s = totalSec%60;
  const pad = n => String(n).padStart(2,'0');
  const core = h>0 ? `${pad(h)}:${pad(m)}:${pad(s)}` : `${pad(m)}:${pad(s)}`;
  return (neg ? "+" : "") + core;
}
