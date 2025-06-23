import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <div className="backdrop-blur-sm bg-white/10 rounded-2xl p-8 sm:p-12 border border-white/20">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            ビジネスの未来を,
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              AIでデザインしませんか？
            </span>
          </h1>
          <p className="text-lg sm:text-lg text-gray-200 mb-8 leading-relaxed">
            AIは、企業に変革をもたらす無限の可能性を秘めています。
            私たちMPCは業務改善コンサルティングのプロとして、貴社のビジネスに寄り添い、最適なAI活用をご提案します。
            これまで見えなかった課題の発見、新たなビジネスチャンスの創出など、想像を超える価値を創造します
            <br className="hidden sm:block" />
            AIと貴社のビジネスが織りなす、革新的な未来を、私たちと一緒に描こう。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-indigo-800 text-white px-8 py-4 text-lg"
            >
              サービスを見る
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white/30 text-gray-600 hover:bg-white/10 px-8 py-4 text-lg"
            >
              <Play className="mr-2 h-5 w-5" />
              会社紹介動画
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
