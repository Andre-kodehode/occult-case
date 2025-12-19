export type SceneLine = {
  speaker?: string; // Who speaks
  text?: string; // The line
  action?: string; // Descriptions example:  "[Phone rings]"
};

export type Choice = {
  id: string;
  text: string;
  nextSceneId?: string;
  triggersEndingId?: string;
  notesUpdate?: string;
};

export type SceneType = "dialogue" | "investigation" | "ending";

export type Scene = {
  id: string;
  type: SceneType;
  lines: SceneLine[]; // Multiple lines per scene
  choices?: Choice[];
  autoNextSceneId?: string; // Optional: automatically continue to next scene
};
