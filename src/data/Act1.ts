import type { Scene } from "./types";

export const scenes: Record<string, Scene> = {
  start: {
    id: "start",
    type: "dialogue",
    lines: [
      {
        action:
          "[Phone rings. The detective wakes up by the loud ringing noise]",
      },
      { speaker: "Player", text: "Hello, who is this?" },
      {
        speaker: "Detective Ram",
        text: "I’m Detective Ram. We just got a call from dispatch about two deaths in an apartment.",
      },
      { speaker: "Player", text: "Have you got any additional information?" },
      {
        speaker: "Detective Ram",
        text: "Not much information as they are waiting for us at the crime scene. One of the neighbours reported unusual activity in one of the empty apartments. We need you on the scene.",
      },
    ],
    choices: [
      {
        id: "choice1",
        text: "Ok, coming as soon as I can",
        nextSceneId: "ramInfo",
        notesUpdate: "Address for the crime scene",
      },
      {
        id: "choice2",
        text: "Can you give me more details first?",
        notesUpdate: "Address for the crime scene",
        nextSceneId: "GotNoMoreInfo",
      },
      {
        id: "choice3",
        text: "Got another case to solve",
        triggersEndingId: "ignoreCaseEnding",
      },
    ],
  },

  ramInfo: {
    id: "ramInfo",
    type: "dialogue",
    lines: [
      {
        speaker: "Detective Ram",
        text: "By the way, I’ll fill you in more when you arrive. Watch out for anything unusual. This one feels… off.",
      },
      { action: "[Phone call ends]" },
    ],
    autoNextSceneId: "crimeScene",
  },

  GotNoMoreInfo: {
    id: "GotNoMoreInfo",
    type: "dialogue",
    lines: [
      {
        speaker: "Detective Ram",
        text: "Not really. Dispatch didn’t give much. Just get here quickly. Here's the address.",
      },
      { action: "[Phone call ends]" },
    ],
    autoNextSceneId: "crimeScene",
  },

  ignoreCaseEnding: {
    id: "ignoreCaseEnding",
    type: "ending",
    lines: [
      {
        action:
          "Newspaper: “Detective Ram found dead under mysterious circumstances. We hope she rests well.",
      },
    ],
  },

  crimeScene: {
    id: "crimeScene",
    type: "investigation",
    lines: [
      {
        action:
          "[You arrive at the apartment building. The air feels heavy and quiet.]",
      },
      {
        speaker: "Detective Ram",
        text: "Alright, let’s take a look around carefully.",
      },
    ],
  },
};
