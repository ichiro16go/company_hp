import Link from "next/link"
import { MapPin } from "lucide-react"
// import { Mail, Phone,  Twitter, Linkedin, Github } from "lucide-react"

export function Footer() {
  return (
    <footer className="backdrop-blur-sm bg-black/20 border-t border-white/20 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-2 md:col-span-1">
            <h3 className="text-2xl font-bold text-white mb-4">ここに会社名</h3>
           
            <div className="flex space-x-4">
              {/* <Link href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </Link> */}
              {/* <Link href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Linkedin className="h-5 w-5" />
              </Link> */}
              {/* <Link href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Github className="h-5 w-5" />
              </Link> */}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">サービス</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                  業務コンサルティング
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                  業務ツール開発
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                  リスキリング研修
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                  介護業務自動化
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">会社情報</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#about" className="text-gray-300 hover:text-white transition-colors">
                  会社概要
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                  代表挨拶
                </Link>
              </li>
              <li>
                <Link href="#careers" className="text-gray-300 hover:text-white transition-colors">
                  採用情報
                </Link>
              </li>
              <li>
                <Link href="#news" className="text-gray-300 hover:text-white transition-colors">
                  ニュース
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">お問い合わせ</h4>
            <div className="space-y-3">
              {/* <div className="flex items-center text-gray-300">
                <Mail className="h-4 w-4 mr-3 text-blue-400" />
                <span className="text-sm">info@ここに会社名.com</span>
              </div> */}
              <div className="flex items-start text-gray-300">
                <MapPin className="h-4 w-4 mr-3 text-purple-400 mt-0.5" />
                <span className="text-sm">〒100-0001<br/>東京都千代田区千代田1-1-1<br/>テックビル 10F</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">© ここに会社名. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                プライバシーポリシー
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                利用規約
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                サイトマップ
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
