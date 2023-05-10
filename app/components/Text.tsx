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
        <p>Microphone: {listening ? 'on' : 'off'}</p>
      </h1>
      <p className=" mt-6 pb-32 mb-4 rounded-md bg-base-100">
        <span className="ml-2 font-bold text-xl">generated text:</span>
        {transcript}
      </p>
      <div className="flex gap-3">
        <button onClick={SpeechRecognition.startListening}>Start</button>
        <button onClick={SpeechRecognition.stopListening}>Stop</button>
        <button onClick={resetTranscript}>Reset</button>
      </div>
    </div>
  );
};

export default Text;
