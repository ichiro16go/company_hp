import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Star } from "lucide-react";

export function ProductsSection() {
  const products = [
    {
      title: "Zoom Phone",
      category: "業務効率化",
      description:
        "高信頼性かつ拡張性のあるクラウドベースの電話システム。新しい方法でビジネスのつながりを維持する Zoom Phone",
      features: ["信頼のおける電話システム", "管理の簡素化", "働き方の最適化"],
      status: "運用中",
      clients: "50+",
      rating: 4.8,
    },
    {
      title: "AIコールセンター",
      category: "業務効率化",
      description: "自動化で業務効率と顧客体験を革新するAIコールセンター。",
      features: [
        "自然でスムーズな会話",
        "柔軟なカスタマイズ",
        "継続的な最適化",
      ],
      status: "運用中",
      clients: "30+",
      rating: 4.9,
    },
    {
      title: "Talk Monitor",
      category: "品質管理",
      description: "営業電話の品質管理を革新するAIソリューション。",
      features: [
        "圧倒的なコストパフォーマンス",
        "高いカスタマイズ性",
        "手厚いサポート",
      ],
      status: "運用中",
      clients: "20+",
      rating: 4.7,
    },
    {
      title: "ScanMate",
      category: "業務効率化",
      description: "業務効率を飛躍させるAI OCRソリューション。",
      features: ["多様なフォーマット対応", "AWSセキュア環境", "簡単操作"],
      status: "ベータ版",
      clients: "10+",
      rating: 4.6,
    },
    {
      title: "RoboWorker",
      category: "業務自動化",
      description:
        "繰り返し作業を自動化し、業務をもっとスムーズにするAIロボット。",
      features: [
        "3つのモードでシナリオ開発",
        "最大5業務が同時実行可能",
        "専用アプリで一元管理",
      ],
      status: "ベータ版",
      clients: "5+",
      rating: 4.5,
    },
  ];

  return (
    <section id="products" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            製品紹介
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            革新的な自社製品で、お客様のビジネスを次のレベルへ押し上げます。
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {products.map((product, index) => (
            <Card
              key={index}
              className="backdrop-blur-sm bg-white/10 border-white/20 hover:bg-white/20 transition-all duration-300"
            >
              <CardHeader>
                <div className="flex justify-between items-start mb-4">
                  <Badge
                    variant="secondary"
                    className="bg-blue-600/20 text-blue-300 border-blue-400/30"
                  >
                    {product.category}
                  </Badge>
                  <Badge
                    variant={
                      product.status === "運用中" ? "default" : "outline"
                    }
                    className={
                      product.status === "運用中"
                        ? "bg-green-600/20 text-green-300 border-green-400/30"
                        : "bg-orange-600/20 text-orange-300 border-orange-400/30"
                    }
                  >
                    {product.status}
                  </Badge>
                </div>
                <CardTitle className="text-2xl text-white mb-2">
                  {product.title}
                </CardTitle>
                <div className="flex items-center space-x-4 text-sm text-gray-400">
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-400 mr-1" />
                    {product.rating}
                  </div>
                  <div>{product.clients} 導入企業</div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-6">{product.description}</p>
                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3">主な機能</h4>
                  <ul className="space-y-2">
                    {product.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="text-sm text-gray-400 flex items-center"
                      >
                        <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex space-x-3">
                  <Button className="flex-1 bg-blue-600 hover:bg-blue-700">
                    詳細資料
                  </Button>
                  <Button
                    variant="outline"
                    className="border-white/30 bg-transparent text-white hover:bg-white/10"
                  >
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
