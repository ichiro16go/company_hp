import { Card, CardContent } from "@/components/ui/card";
import { Users, Target, Lightbulb } from "lucide-react";

export function AboutSection() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            会社情報
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            私たちは革新的なテクノロジーソリューションを通じて、
            企業の成長と社会の発展に貢献しています。
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="backdrop-blur-sm bg-white/10 border-white/20">
            <CardContent className="p-8 text-center">
              <Users className="h-12 w-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-4">チーム</h3>
              <p className="text-gray-300">
                経験豊富なエンジニアとコンサルタントが、
                お客様の課題解決に取り組みます。
              </p>
            </CardContent>
          </Card>

          <Card className="backdrop-blur-sm bg-white/10 border-white/20">
            <CardContent className="p-8 text-center">
              <Target className="h-12 w-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-4">ミッション</h3>
              <p className="text-gray-300">
                テクノロジーの力で企業の可能性を最大化し、
                持続可能な成長を支援します。
              </p>
            </CardContent>
          </Card>

          <Card className="backdrop-blur-sm bg-white/10 border-white/20">
            <CardContent className="p-8 text-center">
              <Lightbulb className="h-12 w-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-4">
                イノベーション
              </h3>
              <p className="text-gray-300">
                最新技術を活用した革新的なソリューションで、
                新たな価値を創造します。
              </p>
            </CardContent>
          </Card>
        </div>

        {/* <div className="backdrop-blur-sm bg-white/10 rounded-2xl p-8 sm:p-12 border border-white/20">
          <h3 className="text-3xl font-bold text-white mb-6 text-center">代表挨拶</h3>
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              デジタル変革が加速する現代において、企業が持続的な成長を遂げるためには、
              革新的なテクノロジーの活用が不可欠です。私たちは、お客様一人ひとりのニーズに寄り添い、
              最適なソリューションを提供することで、共に未来を創造していきたいと考えています。
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              技術の進歩は止まることなく、私たちもまた学び続け、成長し続けることで、
              お客様により良い価値を提供してまいります。
            </p>
            <div className="mt-8">
              <p className="text-white font-semibold text-lg">代表取締役社長</p>
              <p className="text-blue-400 text-xl font-bold">山田 太郎</p>
            </div>
          </div> 
         </div> */}
      </div>
    </section>
  );
}
