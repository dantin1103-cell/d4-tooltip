/* Build-Daten für den Tooltip-Leser.
   Quelle: Mekunas Lodernder Schrei auf InfinityBuilds, Stand 15.09.2026.
   Diese Datei allein austauschen, wenn sich Builds ändern — index.html bleibt unberührt. */
/* ===================== Builds ===================== */
/* Zielwerte aus Mekunas Lodernder Schrei (InfinityBuilds), Stand 15.09.2026.
   want = die vier Affixe, auf die es ankommt. item = das benannte Teil, falls der Slot eins verlangt. */
const BUILDS = [
{ id:"lvl", name:"Leveling 1–70", slots:{
  helm:   { item:null, want:["Willenskraft","Maximales Leben","Rüstung","Alle Widerstände"], temper:"Maximales Leben", sockets:2 },
  chest:  { item:null, want:["Willenskraft","Maximales Leben","Rüstung","Alle Widerstände"], temper:"Maximales Leben", sockets:2 },
  gloves: { item:null, want:["Willenskraft","Maximales Leben","Angriffsgeschwindigkeit","Feuerschaden"], temper:"Dämonologie-Schaden", sockets:0 },
  pants:  { item:null, want:["Willenskraft","Maximales Leben","Rüstung","Alle Widerstände"], temper:"Maximales Leben", sockets:2 },
  boots:  { item:null, want:["Willenskraft","Maximales Leben","Rüstung","Bewegungstempo"], temper:"Bewegungstempo", sockets:0 },
  weapon: { item:null, want:["Willenskraft","Maximales Leben","Schaden","Angriffsgeschwindigkeit"], temper:"Angriffstempo / Krit", sockets:2 },
  offhand:{ item:null, want:["Willenskraft","Maximales Leben","Schaden","Angriffsgeschwindigkeit"], temper:"Angriffstempo / Krit", sockets:1 },
  amulet: { item:null, want:["Willenskraft","Maximales Leben","Angriffsgeschwindigkeit","Feuerschaden"], temper:"Dämonologie-Schaden", sockets:1 },
  ring:   { item:null, want:["Willenskraft","Maximales Leben","Angriffsgeschwindigkeit","Schaden"], temper:"Dämonologie-Schaden", sockets:1 }
}},
{ id:"prog", name:"T1–T12 Fortschritt", slots:{
  helm:   { item:null, want:["Willenskraft","Maximales Leben","Rüstung","Ressourcenkostenreduzierung"], temper:"Maximales Leben", sockets:2 },
  chest:  { item:null, want:["Willenskraft","Maximales Leben","Rüstung","Ressourcenkostenreduzierung"], temper:"Maximales Leben", sockets:2 },
  gloves: { item:"Hand der Vergötterung", want:["Willenskraft","Maximales Leben","Kritischer Trefferschaden","Schaden gegen verwundbare Gegner"], temper:"Kritischer Trefferschaden", sockets:0 },
  pants:  { item:"Verwegenheit", want:["Willenskraft","Maximales Leben","Rüstung","Zorn pro Sekunde"], temper:"Maximales Leben", sockets:2 },
  boots:  { item:null, want:["Willenskraft","Maximales Leben","Bewegungstempo","Zorn pro Sekunde"], temper:"Bewegungstempo", sockets:0 },
  weapon: { item:"Elegie", want:["Waffenschaden","Maximales Leben","Kritischer Trefferschaden","Ränge von Sengender Schrei"], temper:"Kritische Trefferchance", sockets:1 },
  offhand:{ item:"Infernaler Homunkulus", want:["Waffenschaden","Maximales Leben","Kritischer Trefferschaden","Ränge von Dämonologie-Fertigkeiten"], temper:"Kritische Trefferchance", sockets:1 },
  amulet: { item:"Pulsierende Flamme des Molochs", want:["Willenskraft","Kritischer Trefferschaden","Kritische Trefferchance","Ränge von Höllenfeuer-Fertigkeiten"], temper:"Ressource", sockets:1 },
  ring:   { item:"Der Götze der acht Gesichter", want:["Willenskraft","Kritischer Trefferschaden","Kritische Trefferchance","Ränge von Siegel der Unterwanderung"], temper:"Ressourcenkostenreduzierung", sockets:1 }
}},
{ id:"end", name:"Endgame", slots:{
  helm:   { item:"Leorics Krone", want:["Willenskraft","Angriffsgeschwindigkeit","Maximales Leben","Ressourcenkostenreduzierung"], temper:"Maximales Leben", sockets:2 },
  chest:  { item:"Krümelchens Bluse", want:["Willenskraft","Goldfund","Maximales Leben","Rüstung"], temper:"Maximales Leben", sockets:2 },
  gloves: { item:"Hand der Vergötterung", want:["Willenskraft","Maximales Leben","Kritischer Trefferschaden","Schaden gegen verwundbare Gegner"], temper:"Kritischer Trefferschaden", sockets:0 },
  pants:  { item:"Verwegenheit", want:["Willenskraft","Maximales Leben","Rüstung","Zorn pro Sekunde"], temper:"Maximales Leben", sockets:2 },
  boots:  { item:null, want:["Willenskraft","Maximales Leben","Bewegungstempo","Zorn pro Sekunde"], temper:"Bewegungstempo", sockets:0 },
  weapon: { item:"Elegie", want:["Waffenschaden","Maximales Leben","Kritischer Trefferschaden","Ränge von Sengender Schrei"], temper:"Kritische Trefferchance", sockets:1 },
  offhand:{ item:"Infernaler Homunkulus", want:["Waffenschaden","Maximales Leben","Kritischer Trefferschaden","Ränge von Dämonologie-Fertigkeiten"], temper:"Kritischer Trefferschaden", sockets:1 },
  amulet: { item:"Pulsierende Flamme des Molochs", want:["Willenskraft","Ränge von Höllenfeuer-Fertigkeiten","Schaden gegen verwundbare Gegner","Kritischer Trefferschaden"], temper:"Ressource", sockets:1 },
  ring:   { item:"Der Götze der acht Gesichter", want:["Willenskraft","Kritischer Trefferschaden","Schaden gegen verwundbare Gegner","Maximales Leben"], temper:"Ressourcenkostenreduzierung", sockets:1 }
}},
{ id:"speed", name:"Speedfarm", slots:{
  helm:   { item:"Leorics Krone", want:["Willenskraft","Angriffsgeschwindigkeit","Maximales Leben","Rüstung"], temper:"Maximales Leben", sockets:2 },
  chest:  { item:null, want:["Willenskraft","Maximales Leben","Rüstung","Ressourcenkostenreduzierung"], temper:"Maximales Leben", sockets:2 },
  gloves: { item:"Hand der Vergötterung", want:["Willenskraft","Maximales Leben","Kritischer Trefferschaden","Schaden gegen verwundbare Gegner"], temper:"Kritischer Trefferschaden", sockets:0 },
  pants:  { item:"Verwegenheit", want:["Willenskraft","Maximales Leben","Rüstung","Erhaltene Heilung"], temper:"Maximales Leben", sockets:2 },
  boots:  { item:"Sabatons des Höllenhundes", want:["Willenskraft","Bewegungstempo","Maximales Leben","Ränge von Höllenfeuer-Fertigkeiten"], temper:"Bewegungstempo", sockets:0 },
  weapon: { item:"In-geom", want:["Waffenschaden","Abklingzeitreduzierung","Maximales Leben","Kritischer Trefferschaden"], temper:"Kritische Trefferchance", sockets:1 },
  offhand:{ item:null, want:["Waffenschaden","Kritischer Trefferschaden","Maximales Leben","Willenskraft"], temper:"Kritischer Trefferschaden", sockets:1 },
  amulet: { item:"Pulsierende Flamme des Molochs", want:["Willenskraft","Ränge von Höllenfeuer-Fertigkeiten","Schaden gegen verwundbare Gegner","Kritischer Trefferschaden"], temper:"Ressource", sockets:1 },
  ring:   { item:"Wendigo-Mal", want:["Willenskraft","Maximales Leben","Kritischer Trefferschaden","Schaden gegen verwundbare Gegner"], temper:"Ressourcenkostenreduzierung", sockets:1 }
}}
];

/* Benannte Teile, die ein späterer Build braucht — die dürfen nie ins Verwerten wandern. */
const KEEPERS = [
  { name:"Hand der Vergötterung",           slot:"gloves",  builds:["prog","end","speed"] },
  { name:"Verwegenheit",                    slot:"pants",   builds:["prog","end","speed"] },
  { name:"Pulsierende Flamme des Molochs",  slot:"amulet",  builds:["prog","end","speed"] },
  { name:"Der Götze der acht Gesichter",    slot:"ring",    builds:["prog","end","speed"] },
  { name:"Elegie",                          slot:"weapon",  builds:["prog","end"] },
  { name:"Infernaler Homunkulus",           slot:"offhand", builds:["prog","end"] },
  { name:"Leorics Krone",                   slot:"helm",    builds:["end","speed"] },
  { name:"Krümelchens Bluse",               slot:"chest",   builds:["end"] },
  { name:"Sabatons des Höllenhundes",       slot:"boots",   builds:["speed"] },
  { name:"In-geom",                         slot:"weapon",  builds:["speed"] },
  { name:"Wendigo-Mal",                     slot:"ring",    builds:["speed"] }
];

const TYPE_HINTS = [
  ["helm",   ["helm","kopfschutz","kappe","haube","krone"]],
  ["chest",  ["brustrüstung","brustpanzer","robe","harnisch","wams","bluse"]],
  ["gloves", ["handschuhe","fäustlinge","stulpen"]],
  ["pants",  ["hose","beinschutz","beinlinge"]],
  ["boots",  ["stiefel","schuhe","sabatons","treter"]],
  ["amulet", ["amulett","halskette"]],
  ["ring",   ["ring","siegelring"]],
  ["offhand",["fokus","totem","schild"]],
  ["weapon", ["zweihandschwert","schwert","axt","streitkolben","stab","zauberstab","dolch","speer","hellebarde","kriegshammer","bogen","armbrust","sense"]]
];

const DEFAULT_DICT = [
  "Willenskraft","Stärke","Geschicklichkeit","Intelligenz",
  "Maximales Leben","Rüstung","Alle Widerstände","Waffenschaden",
  "Angriffsgeschwindigkeit","Bewegungstempo","Schaden","Feuerschaden","Kälteschaden","Blitzschaden","Schattenschaden","Giftschaden",
  "Kritischer Trefferschaden","Kritische Trefferchance","Verstärkter Schaden","Glückstrefferchance",
  "Schaden gegen Elitegegner","Schaden gegen verwundbare Gegner","Schaden gegen verletzte Gegner","Schaden gegen nahe Gegner","Schaden gegen entfernte Gegner",
  "Kernfertigkeitsschaden","Grundfertigkeitsschaden","Schadensreduzierung","Abklingzeitreduzierung",
  "Ressourcenkostenreduzierung","Ressourcenerzeugung","Zorn pro Sekunde","Erhaltene Heilung","Lebensregeneration","Goldfund",
  "Dämonologie-Schaden","Ränge von Sengender Schrei","Ränge von Dämonologie-Fertigkeiten",
  "Ränge von Höllenfeuer-Fertigkeiten","Ränge von Siegel der Unterwanderung",
  "Widerstand gegen Feuer","Widerstand gegen Kälte","Widerstand gegen Blitz","Widerstand gegen Schatten","Widerstand gegen Gift",
  "Überwältigungsschaden","Verlangsamungsdauer","Rüstungsdurchdringung"
];

const SLOT_DE = { helm:"Helm", chest:"Brustpanzer", gloves:"Handschuhe", pants:"Hose", boots:"Stiefel",
  weapon:"Waffe", offhand:"Nebenhand", amulet:"Amulett", ring:"Ring" };
