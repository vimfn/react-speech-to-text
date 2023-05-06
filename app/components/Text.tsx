"use client"
//@ts-nocheck
import { FC } from "react";
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'

interface TextProps {}




const Text: FC<TextProps> = ({}) => {


  return (
    <div>
      <h1 className="text-5xl font-bold underline decoration-wavy">
        Speech to text
      </h1>
      <p className=" mt-6 pb-32 mb-4 rounded-md bg-base-100">
        <span className="ml-2 font-bold text-xl">generated text:</span>
      </p>
      <div className="flex gap-3">
        <button className="btn btn-primary">Copy To Clipboard</button>
        <button className="btn btn-primary">Start Recording</button>
        <button className="btn btn-primary">Stop Recording</button>
      </div>
    </div>
  );
};

export default Text;
