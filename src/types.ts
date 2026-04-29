export type Scripture = {
  id: string;
  reference: string;
  text: string;
  theme: string;
  plainMeaning: string;
  reflectionQuestion?: string;
  prayerPrompt?: string;
  translation: 'KJV';
};

export type GospelStep = {
  id: string;
  title: string;
  mainIdea: string;
  verseIds: string[];
  explanation: string;
  reflectionQuestion: string;
  prayerResponse: string;
};

export type SectionPoint = {
  title: string;
  summary: string;
  verseIds: string[];
};

export type ScarletStop = {
  id: string;
  title: string;
  reference: string;
  whatHappened: string;
  promise: string;
  pointsToJesus: string;
  meansForMe: string;
};

export type ClarityCard = {
  title: string;
  summary: string;
  scriptureIds: string[];
};

export type PrayerPrompt = {
  title: string;
  verse: string;
  verseText: string;
  prayer: string;
};

export type NextStep = {
  title: string;
  summary: string;
  verseIds: string[];
};

export type LibraryTheme = {
  theme: string;
  scriptureIds: string[];
};
