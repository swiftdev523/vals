import { useNavigate } from "react-router-dom";
import PageLayout from "../components/PageLayout";
import ContentCard from "../components/ContentCard";
import AnimatedButton from "../components/AnimatedButton";
import PhotoFrame from "../components/PhotoFrame";

const Forever = () => {
  const navigate = useNavigate();

  return (
    <PageLayout>
      <ContentCard maxWidth="max-w-4xl">
        <h1 className="text-5xl md:text-6xl font-bold text-pink-600 mb-8">
          You + Me Forever 💞
        </h1>

        <PhotoFrame placeholder={true} />

        <div className="bg-gradient-to-br from-pink-100 to-pink-50 p-8 rounded-2xl my-8 shadow-lg">
          <h2 className="text-3xl font-bold text-pink-700 mb-6">
            I love... 💕
          </h2>
          <div className="text-left text-xl text-pink-900 space-y-3">
            <p className="hover:scale-105 transition-transform cursor-default">
              1. Your eyes ✨
            </p>
            <p className="hover:scale-105 transition-transform cursor-default">
              2. Your smile 😊
            </p>
            <p className="hover:scale-105 transition-transform cursor-default">
              3. Your laugh 😄
            </p>
            <p className="hover:scale-105 transition-transform cursor-default">
              4. Your kindness 💝
            </p>
            <p className="hover:scale-105 transition-transform cursor-default">
              5. Your everything! 💯
            </p>
          </div>
        </div>

        <p className="text-3xl font-bold text-pink-600 my-6 animate-pulse-slow">
          XOXO
        </p>

        <div className="flex flex-wrap gap-4 justify-center mt-8">
          <AnimatedButton
            variant="secondary"
            onClick={() => navigate("/welcome")}>
            ← Back
          </AnimatedButton>

          <AnimatedButton
            variant="secondary"
            onClick={() => navigate("/heart2heart")}>
            Read My Letter 💌
          </AnimatedButton>
        </div>
      </ContentCard>
    </PageLayout>
  );
};

export default Forever;
