// audio files
import R from "../files/audio/r.mp3";
import H from "../files/audio/h.mp3";
import F from "../files/audio/f.mp3";
import V from "../files/audio/v.mp3";
import B from "../files/audio/b.mp3";
import G from "../files/audio/g.mp3";
import P from "../files/audio/p.mp3";
import K from "../files/audio/k.mp3";
import L from "../files/audio/l.mp3";
import T from "../files/audio/t.mp3";
import S from "../files/audio/s.mp3";
import Z from "../files/audio/z.mp3";
import M from "../files/audio/m.mp3";
import N from "../files/audio/n.mp3";
import NH from "../files/audio/nh.mp3";
import SH from "../files/audio/sh.mp3";
import TSH from "../files/audio/tsh.mp3";
import DJ from "../files/audio/dj.mp3";
import DDJ from "../files/audio/ddj.mp3";
import W from "../files/audio/w.mp3";
import J from "../files/audio/j.mp3";
import TH from "../files/audio/th.mp3";
import THH from "../files/audio/thh.mp3";

export const rusAnalogs = [
  {
    symbol: "[ d ]",
    word: "DOG",
    transcription: "[ dɔːɡ ]",
    rusSimilarly: "[ д ]",
    audio: B
  },
  {
    symbol: "[ b ]",
    word: "BIG",
    transcription: "[ bɪɡ ]",
    rusSimilarly: "[ б ]",
    audio: B
  },
  {
    symbol: "[ f ]",
    word: "FATE",
    rusSimilarly: "[ ф ]",
    transcription: "[ feɪt ]",
    audio: F
  },
  {
    symbol: "[ ʒ ]",
    word: "VISION",
    transcription: "[ ˈvɪʒn ]",
    rusSimilarly: "[ ж ] — мягкий",
    audio: DJ
  },
  {
    symbol: "[ dʒ ]",
    rusSimilarly: "[ дж ] — мягкий",
    word: "JUNE",
    transcription: "[ dʒuːn ]",
    audio: DDJ
  },
  {
    symbol: "[ g ]",
    word: "GREAT",
    rusSimilarly: "[ г ]",
    transcription: "[ ɡreɪt ]",
    audio: G
  },
  {
    symbol: "[ h ]",
    word: "HAT",
    rusSimilarly: "[ х ] — очень мягкий",
    transcription: "[ hæt ]",
    audio: H
  },
  {
    symbol: "[ k ]",
    word: "KITE",
    rusSimilarly: "[ к ] — с придыханием",
    transcription: "[ kaɪt ]",
    audio: K
  },
  {
    symbol: "[ l ]",
    word: "LAMB",
    rusSimilarly: "[ л ]",
    transcription: "[ læm ]",
    audio: L
  },
  {
    symbol: "[ m ]",
    word: "MOON",
    rusSimilarly: "[ м ]",
    transcription: "[ muːn ]",
    audio: M
  },
  {
    symbol: "[ n ]",
    word: "NIGHT",
    rusSimilarly: "[ н ]",
    transcription: "[ naɪt ]",
    audio: N
  },
  {
    symbol: "[ p ]",
    word: "PET",
    rusSimilarly: "[ п ] — с придыханием",
    transcription: "[ pet ]",
    audio: P
  },
  {
    symbol: "[ r ]",
    word: "ROBOT",
    rusSimilarly: "[ р ] — мягкий",
    transcription: "[ ˈroʊ.bɑːt ]",
    audio: R
  },
  {
    symbol: "[ s ]",
    word: "SNAKE",
    rusSimilarly: "[ с ]",
    transcription: "[ sneɪk ]",
    audio: S
  },
  {
    symbol: "[ t ]",
    word: "TABLE",
    rusSimilarly: "[ т ] — с придыханием",
    transcription: "[ ˈteɪbl ]",
    audio: T
  },
  {
    symbol: "[ z ]",
    word: "ZEBRA",
    rusSimilarly: "[ з ]",
    transcription: "[ ˈziː.brə ]",
    audio: Z
  },
  {
    symbol: "[ v ]",
    word: "VET",
    rusSimilarly: "[ в ]",
    transcription: "[ vet ]",
    audio: V
  },
  {
    symbol: "[ ʃ ]",
    word: "SHAKE",
    rusSimilarly: "Средний между [ ш ] и [ щ ]",
    transcription: "[ ʃeɪk ]",
    audio: SH
  },
  {
    symbol: "[ tʃ ]",
    word: "CHEESE",
    rusSimilarly: "[ ч ]",
    transcription: "[ tʃiːz ]",
    audio: TSH
  },
  {
    symbol: "[ j ]",
    word: "YOGURT",
    rusSimilarly: "[ й ]",
    transcription: "[ ˈjoʊ.ɡɚt ]",
    audio: J
  }
];

export const withoutRusAnalogs = [
  {
    symbol: "[ θ ]",
    word: "THING",
    rusSimilarly: "зажмите язык между зубами и попробуйте произнести С",
    transcription: "[ θɪŋ ]",
    audio: THH
  },
  {
    symbol: "[ ð ]",
    word: "THERE",
    rusSimilarly: "зажмите язык между зубами и попробуйте произнести З",
    transcription: "[ ðer ]",
    audio: TH
  },
  {
    symbol: "[ ŋ ]",
    word: "INTERESTING",
    rusSimilarly: "слон говорит букву [ н ]",
    transcription: "[ ˈɪntrəstɪŋ ]",
    audio: NH
  },
  {
    symbol: "[ w ]",
    word: "WATER",
    rusSimilarly: "[ в ]",
    transcription: "[ ˈwɔːtər ]",
    audio: W
  }
];
