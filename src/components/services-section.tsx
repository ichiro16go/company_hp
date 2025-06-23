import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Code, Database, Cloud, Smartphone,} from "lucide-react"

export function ServicesSection() {
  const services = [
    {
      icon: Code,
      title: "業務コンサルティング",
      description: "AIを活用した業務改善の提案と実行支援を行います。",
      features: ["業務プロセスの可視化", "AI導入戦略の策定", "業務効率化のためのシステム設計"],
    },
    {
      icon: Database,
      title: "業務ツール開発",
      description: "業務に特化したカスタムツールの開発を行います。",
      features: ["業務フローに最適化されたツール開発", "データベース設計と実装", "ユーザビリティを重視したUI/UX設計"],
    },
    {
      icon: Cloud,
      title: "リスキング研修",
      description: "AI技術の理解と活用方法を学ぶ研修プログラムを提供します。",
      features: ["AI基礎知識の習得", "実践的なAI活用事例の紹介", "業務へのAI導入方法の学習"],
    },
    {
      icon: Smartphone,
      title: "介護業務自動化",
      description: "介護業務の効率化と自動化を支援するソリューションを提供します。",
      features: ["介護記録の自動化", "AIによるケアプランの最適化", "介護業務の負担軽減ツール"],
    },
  ]

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">事業内容</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            最新のテクノロジーを活用した包括的なソリューションで、 お客様のビジネス課題を解決します。
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="backdrop-blur-sm bg-white/10 border-white/20 hover:bg-white/20 transition-all duration-300"
            >
              <CardHeader>
                <service.icon className="h-12 w-12 text-blue-400 mb-4" />
                <CardTitle className="text-2xl text-white">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-6">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="text-sm text-gray-400 flex items-center">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button variant="outline" className="w-full border-white/30 text-gray-900 hover:bg-white/10">
                  詳細を見る
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
