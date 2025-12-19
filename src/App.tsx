import { useState } from "react";
import type { Scene, Choice } from "./data/types";
import { scenes } from "./data/Act1";

export default function App() {
  const [currentSceneId, setCurrentSceneId] = useState("start");
  const [ending, setEnding] = useState<string | null>(null);
  const [notepadClues, setNotepadClues] = useState<string[]>([]);

  const currentScene: Scene = scenes[currentSceneId];

  if (!currentScene) return <div>Scene not found</div>;

  const handleChoice = (choice: Choice) => {
    if (choice.notesUpdate && !notepadClues.includes(choice.notesUpdate)) {
      setNotepadClues((prev) =>
        prev.includes(choice.notesUpdate!)
          ? prev
          : [...prev, choice.notesUpdate!]
      );
    }

    if (choice.triggersEndingId) {
      setEnding(choice.triggersEndingId);
    } else if (choice.nextSceneId) {
      setCurrentSceneId(choice.nextSceneId);
    }
  };

  if (ending) {
    const endingScene = scenes[ending];
    return (
      <div>
        {endingScene.lines.map((line, i) => (
          <p key={i}>
            {line.speaker && <strong>{line.speaker}: </strong>}
            {line.text || line.action}
          </p>
        ))}
      </div>
    );
  }

  return (
    <div>
      {currentScene.lines.map((line, i) => (
        <p key={i}>
          {line.speaker && <strong>{line.speaker}: </strong>}
          {line.text || line.action}
        </p>
      ))}

      {currentScene.choices?.map((choice) => (
        <button key={choice.id} onClick={() => handleChoice(choice)}>
          {choice.text}
        </button>
      ))}

      <div>
        <h3>Notepad / Clues:</h3>
        <ul>
          {notepadClues.map((clue, i) => (
            <li key={i}>{clue}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
