// "Vita": training, films and plays. Newest first. Only year, title and place are required.
//   tag   'feature' | 'short' | 'inDevelopment'      (translated automatically)
//   part  'lead' | 'supporting' | 'episodeLead'      (translated automatically)
//   image { file: 'poster.webp', copyright: '…' }     (file in public/photos/vita/)
//   url   adds a "More info" link
// All fields are listed in types.ts (VitaEntry).
import type { VitaEntry } from './types'

const tourGuide = { de: 'Reiseleiterin', en: 'Tour guide', es: 'Guía turística' }

export const vita: Record<'training' | 'film' | 'theater', VitaEntry[]> = {
  training: [
    {
      year: 2023,
      title: {
        de: 'Acting for Film – Weiterbildung',
        en: 'Acting for Film – further training',
        es: 'Acting for Film – formación continua',
      },
      place: 'Theater Werkmünchen',
    },
    {
      year: 2021,
      title: {
        de: 'Schauspiel und Vocal Coaching – Weiterbildung',
        en: 'Acting and vocal coaching – further training',
        es: 'Interpretación y coaching vocal – formación continua',
      },
      place: 'Theater Werkmünchen',
    },
    {
      year: '2009 – 2013',
      title: { de: 'Schauspielstudium', en: 'Acting degree', es: 'Carrera de Arte Dramático' },
      place: 'Universidad Central – Escuela Teatro Libre de Bogotá',
    },
  ],

  film: [
    {
      year: 2025,
      title: 'Die Poesie des Scheiterns',
      tag: 'feature',
      role: { de: 'Assistenzärztin', en: 'Resident doctor', es: 'Médica residente' },
      part: 'supporting',
      director: 'Holger Borggrefe',
      production: 'Basti Schwarz',
      place: 'Werkmünchen',
      image: { file: 'die-poesie-des-scheiterns.webp', copyright: 'Holger Borggrefe' },
    },
    {
      year: 2023,
      title: 'Katastrophe',
      tag: 'short',
      role: 'Tine',
      director: 'Oliver Mohr, Julian Schwandner, Alexander Flatau, Wouter Wirth, Katharina Rabl',
      place: 'Werkmünchen',
      image: { file: 'katastrophe.webp', copyright: 'Marija Grauba' },
    },
    {
      year: 2012,
      title: 'Calma Chicha',
      tag: 'short',
      author: {
        de: 'nach Haruki Murakamis Roman „Die Chroniken des Aufziehvogels“',
        en: 'based on Haruki Murakami’s novel “The Wind-Up Bird Chronicle”',
        es: 'basado en la novela «Crónica del pájaro que da cuerda al mundo» de Haruki Murakami',
      },
      part: 'supporting',
      director: 'Alejandro Torrijos',
      place: '¿Para qué? Producciones',
      image: { file: 'calma-chicha.webp', copyright: 'Alejandro Torrijos' },
    },
  ],

  theater: [
    {
      year: 2026,
      title: 'Die zweite Natur',
      tag: 'inDevelopment',
      part: 'supporting',
      director: 'Eos Schopohl',
      place: 'Theater dasvinzenz',
      image: { file: 'die-zweite-natur.webp', copyright: 'dasvinzenz' },
    },
    {
      year: 2026,
      title: 'Eine Odyssee oder Backen ohne Mehl',
      tag: 'inDevelopment',
      role: tourGuide,
      part: 'lead',
      director: 'Paulina Platzer / Eos Schopohl',
      place: 'Theater dasvinzenz',
      image: { file: 'eine-odyssee-oder-backen-ohne-mehl.webp', copyright: 'Holger Borggrefe' },
    },
    {
      year: 2025,
      title: 'Ich will keinen Trost von Niemandem – De algún tiempo a esta parte',
      role: 'Emma',
      part: 'lead',
      director: 'Eos Schopohl',
      place: 'Theater dasvinzenz',
      image: { file: 'ich-will-keinen-trost-von-niemandem.webp', copyright: 'dasvinzenz' },
    },
    {
      year: 2025,
      title: 'In Between | Në mes | dazwischen',
      role: tourGuide,
      part: 'lead',
      director: 'Paulina Platzer / Eos Schopohl',
      place: 'Theater dasvinzenz',
      image: { file: 'in-between.webp', copyright: 'dasvinzenz' },
    },
    {
      year: 2022,
      title: 'PPP die Performance',
      author: 'Pier Paolo Pasolini',
      role: {
        de: 'Adler, Frau, der Heilige Franziskus',
        en: 'Eagle, Woman, Saint Francis',
        es: 'Águila, Mujer, San Francisco',
      },
      part: 'supporting',
      director: 'Eos Schopohl, Robert Spitz',
      place: 'Theater dasvinzenz',
      image: { file: 'ppp-die-performance.webp', copyright: 'Elina Fernandez' },
    },
    {
      year: 2021,
      title: 'Die Schlacht',
      author: 'Heiner Müller',
      role: {
        de: 'Die Frau, ein Soldat (mehrere Rollen)',
        en: 'The Woman, a Soldier (several roles)',
        es: 'La Mujer, un soldado (varios papeles)',
      },
      part: 'episodeLead',
      director: 'Eos Schopohl, Robert Spitz',
      place: 'Theater dasvinzenz',
      image: { file: 'die-schlacht.webp', copyright: 'Nina Strukamp' },
    },
    {
      year: 2017,
      title: { de: 'Vor dem Frühstück', en: 'Before Breakfast', es: 'Antes del desayuno' },
      author: "Eugene O'Neill",
      role: { de: 'Frau Rowland', en: 'Mrs Rowland', es: 'Señora Rowland' },
      part: 'lead',
      director: 'Helmer Erazo España',
      place: 'Barro Colorado Teatro',
      image: { file: 'vor-dem-fruehstueck.webp', copyright: 'Helmer Erazo España' },
    },
    {
      year: 2015,
      title: 'La Colección',
      author: { de: 'Harold Pinter (Adaption)', en: 'Harold Pinter (adaptation)', es: 'Harold Pinter (adaptación)' },
      role: 'Valeria',
      part: 'episodeLead',
      director: 'Juan Alonso',
      place: 'L.P Los Productores',
      image: { file: 'la-coleccion.webp', copyright: 'L.P Los Productores' },
    },
    {
      year: 2014,
      title: 'Persona a persona',
      author: {
        de: 'Ingmar Bergman – Theateradaption des Films „Persona“',
        en: 'Ingmar Bergman – stage adaptation of the film “Persona”',
        es: 'Ingmar Bergman – adaptación teatral de la película «Persona»',
      },
      role: 'Elisabet Vogler',
      part: 'lead',
      director: 'Rodrigo Rodríguez',
      place: 'Ditirambo Teatro',
      image: { file: 'persona-a-persona.webp', copyright: 'John Camacho' },
    },
    {
      year: 2012,
      title: {
        de: 'Yoshitsune, der junge Samurai',
        en: 'Yoshitsune, the Young Samurai',
        es: 'Yoshitsune, el joven samurái',
      },
      author: 'Kanze Nobumitsu',
      role: 'Yoshitsune',
      part: 'lead',
      place: 'Teatro Libre – Universidad Central',
      image: { file: 'yoshitsune.webp', copyright: 'Teatro Libre' },
    },
    {
      year: 2012,
      title: 'Small Craft Warnings',
      author: 'Tennessee Williams',
      role: 'Violet',
      part: 'supporting',
      director: 'Nelson Celis',
      place: 'Teatro Libre – Universidad Central',
      image: { file: 'small-craft-warnings.webp', copyright: 'Teatro Libre' },
    },
    {
      year: '2010 – 2011',
      title: 'The Pillowman',
      author: {
        de: 'Martin McDonagh – mit Andrés Parra in der Hauptrolle',
        en: 'Martin McDonagh – starring Andrés Parra',
        es: 'Martin McDonagh – protagonizada por Andrés Parra',
      },
      role: 'The Jesus Girl',
      part: 'episodeLead',
      director: 'Pedro Salazar',
      place: 'La Compañía Estable',
      image: { file: 'the-pillowman.webp', copyright: 'La Compañía Estable' },
    },
  ],
}
