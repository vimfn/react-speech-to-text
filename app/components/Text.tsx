//@ts-nocheck
"use client";
import { FC } from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

interface TextProps {}

const Text: FC<TextProps> = ({}) => {
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser does not support speech recognition.</span>;
  }

  return (
    <div>
      <h1 className="text-5xl font-bold underline decoration-wavy">
        Speech to text
      </h1>
      <p className=" mt-6 pb-32 mb-4 rounded-md bg-base-100 w-96 h-48">
        <span className="ml-2 font-bold text-xl">generated text:</span>
        {transcript}
      </p>
        <p className="mb-2 text-xl font-bold">Microphone: {listening ? 'Listing to your voice..' : 'off'}</p>
      <div className="flex gap-3">
        <button className="btn btn-primary btn-sm" onClick={SpeechRecognition.startListening}>Start</button>
        <button className="btn btn-secondary btn-sm" onClick={SpeechRecognition.stopListening}>Stop</button>
        <button className="btn btn-accent btn-sm" onClick={resetTranscript}>Reset</button>
      </div>
    </div>
  );
};

export default Text;
