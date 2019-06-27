// audio files
import I from "../files/audio/i.mp3";
import II from "../files/audio/ii.mp3";
import U from "../files/audio/u.mp3";
import UU from "../files/audio/uu.mp3";
import E from "../files/audio/e.mp3";
import MOTHER from "../files/audio/mother.mp3";
import O from "../files/audio/o.mp3";
import AE from "../files/audio/ae.mp3";
import A from "../files/audio/a.mp3";
import AA from "../files/audio/aa.mp3";
import OO from "../files/audio/oo.mp3";
import EE from "../files/audio/ee.mp3";
import AI from "../files/audio/ai.mp3";
import EI from "../files/audio/ei.mp3";
import OI from "../files/audio/oi.mp3";
import AU from "../files/audio/au.mp3";
import OU from "../files/audio/au.mp3";

export const rusAnalogs = [
  {
    symbol: "[ Λ ]",
    word: "FUN",
    transcription: "[ fʌn ]",
    rusSimilarly: "[ а ] — короткий",
    audio: A
  },
  {
    symbol: "[ a: ]",
    word: "FAR",
    transcription: "[ fɑːr ]",
    rusSimilarly: "[ а ] — долгий",
    audio: AA
  },

  {
    symbol: "[ i ]",
    word: "PIN",
    rusSimilarly: "[ и ] — короткий",
    transcription: "[ pin ]",
    audio: I
  },
  {
    symbol: "[ i: ]",
    word: "FEEL",
    transcription: "[ fiːl ]",
    rusSimilarly: "[ и ] — долгий",
    audio: II
  },

  {
    symbol: "[ ɔ ] [ ɒ ]",
    rusSimilarly: "[ о ] — короткий",
    word: "POT",
    transcription: "[ pɒt ]",
    audio: O
  },
  {
    symbol: "[ ɔ: ]",
    word: "FORM",
    rusSimilarly: "[ о ] — долгий",
    transcription: "[ fɔːrm ]",
    audio: OO
  },

  {
    symbol: "[ ʊ ]",
    word: "PUT",
    rusSimilarly: "[ у ] — короткий",
    transcription: "[ pʊt ]",
    audio: U
  },
  {
    symbol: "[ u: ]",
    word: "POOR",
    rusSimilarly: "[ у ] — долгий",
    transcription: "[ pɔːr ]",
    audio: UU
  },

  {
    symbol: "[ e ]",
    word: "PEN",
    rusSimilarly: "[ йэ ], как в слове ШЕСТь",
    transcription: "[ pen ]",
    audio: E
  },
  {
    symbol: "[ ɜː ]",
    word: "SURF",
    rusSimilarly: "как буква ё без звука [ й ]. Аналог слово СВЕКЛА.",
    transcription: "[ sɜːf ]",
    audio: EE
  },
  {
    symbol: "[ əʊ ]",
    word: "NOSE",
    rusSimilarly: "[ оу ]",
    transcription: "[ nəʊz ]",
    audio: OU
  },
  {
    symbol: "[ aʊ ]",
    word: "NOW",
    rusSimilarly: "[ ау ]",
    transcription: "[ naʊ ]",
    audio: AU
  },
  {
    symbol: "[ ai ]",
    word: "TIME",
    rusSimilarly: "[ ай ]",
    transcription: "[ taim ]",
    audio: AI
  },
  {
    symbol: "[ ei ]",
    word: "LATE",
    rusSimilarly: "[ эй ]",
    transcription: "[ leit ]",
    audio: EI
  },
  {
    symbol: "[ ɔi ]",
    word: "BOY",
    rusSimilarly: "[ ой ]",
    transcription: "[ bɔɪ ]",
    audio: OI
  }
];

export const withoutRusAnalogs = [
  {
    symbol: "[ æ ]",
    word: "APPLE",
    rusSimilarly: "Открытый звук [ э ], как в слове bad плохой",
    transcription: "[ ˈæp.l̩ ]",
    audio: AE
  },
  {
    symbol: "[ ə ]",
    word: "MOTHER",
    rusSimilarly: "Нейтральный звук, нечто среднее между [ а ] и [ э ]",
    transcription: "[ ˈmʌðə(r) ]",
    audio: MOTHER
  }
];
