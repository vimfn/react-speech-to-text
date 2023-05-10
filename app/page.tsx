import Image from "next/image";
import Text from "./components/Text";

export const metadata = {
  title: "Live Speech To text",
  description: "🎙️ > 📝",
};

export default function Home() {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:gap-48 gap-5 lg:flex-row-reverse">
        <img
          src="https://static.zerochan.net/Hayashida.Airi.full.1626740.jpg"
          className="h-96 rounded-lg lg:shadow-2xl w-64"
        />
        <Text />
      </div>
    </div>
  );
}
