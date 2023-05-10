import Image from "next/image";
import Text from "./components/Text";

export const metadata = {
  title: "Live Speech To text",
  description: "🎙️ > 📝",
};

export default function Home() {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col gap-48 lg:flex-row-reverse">
        <img
          src="https://static.zerochan.net/Hayashida.Airi.full.1626740.jpg"
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <Text />
      </div>
    </div>
  );
}
