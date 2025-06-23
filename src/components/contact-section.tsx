"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Mail, Phone, MapPin, Send } from "lucide-react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    inquiry: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">お問い合わせ</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            ご質問やご相談がございましたら、お気軽にお問い合わせください。 専門スタッフが迅速に対応いたします。
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="backdrop-blur-sm bg-white/10 border-white/20">
              <CardHeader>
                <CardTitle className="text-2xl text-white flex items-center">
                  <Mail className="h-6 w-6 mr-3 text-blue-400" />
                  メールでのお問い合わせ
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">
                  営業時間内（平日9:00-18:00）であれば、通常24時間以内にご返信いたします。
                </p>
                <p className="text-blue-400 font-semibold">info@ここに会社名.com</p>
              </CardContent>
            </Card>

            <Card className="backdrop-blur-sm bg-white/10 border-white/20">
              <CardHeader>
                <CardTitle className="text-2xl text-white flex items-center">
                  <Phone className="h-6 w-6 mr-3 text-green-400" />
                  お電話でのお問い合わせ
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">平日 9:00-18:00（土日祝日を除く）</p>
                <p className="text-green-400 font-semibold text-xl">03-1234-5678</p>
              </CardContent>
            </Card>

            <Card className="backdrop-blur-sm bg-white/10 border-white/20">
              <CardHeader>
                <CardTitle className="text-2xl text-white flex items-center">
                  <MapPin className="h-6 w-6 mr-3 text-purple-400" />
                  オフィス所在地
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-gray-300">
                  <p className="mb-2">〒100-0001</p>
                  <p className="mb-2">東京都千代田区千代田1-1-1</p>
                  <p className="mb-4">テックビル 10F</p>
              
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="backdrop-blur-sm bg-white/10 border-white/20">
            <CardHeader>
              <CardTitle className="text-2xl text-white">お問い合わせフォーム</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-white">
                      お名前 *
                    </Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => handleChange("name", e.target.value)}
                      className="bg-white/10 border-white/30 text-white placeholder:text-gray-400"
                      placeholder="山田 太郎"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-white">
                      メールアドレス *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      className="bg-white/10 border-white/30 text-white placeholder:text-gray-400"
                      placeholder="example@company.com"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company" className="text-white">
                    会社名
                  </Label>
                  <Input
                    id="company"
                    value={formData.company}
                    onChange={(e) => handleChange("company", e.target.value)}
                    className="bg-white/10 border-white/30 text-white placeholder:text-gray-400"
                    placeholder="株式会社サンプル"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="inquiry" className="text-white">
                    お問い合わせ種別 *
                  </Label>
                  <Select onValueChange={(value) => handleChange("inquiry", value)}>
                    <SelectTrigger className="bg-white/10 border-white/30 text-white">
                      <SelectValue placeholder="選択してください" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="service">サービスについて</SelectItem>
                      <SelectItem value="product">製品について</SelectItem>
                      <SelectItem value="partnership">協業について</SelectItem>
                      <SelectItem value="career">採用について</SelectItem>
                      <SelectItem value="other">その他</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-white">
                    お問い合わせ内容 *
                  </Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleChange("message", e.target.value)}
                    className="bg-white/10 border-white/30 text-white placeholder:text-gray-400 min-h-[120px]"
                    placeholder="お問い合わせ内容をご記入ください"
                    required
                  />
                </div>

                <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3">
                  <Send className="mr-2 h-5 w-5" />
                  送信する
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
