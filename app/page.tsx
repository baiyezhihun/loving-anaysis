import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-pink-50 via-white to-purple-50 dark:from-gray-900 dark:via-purple-900/10 dark:to-gray-800">
      {/* Hero Section */}
      <main className="flex-1 container mx-auto px-4 py-16 sm:py-24">
        <div className="max-w-3xl mx-auto text-center relative">
          {/* 装饰性背景元素 */}
          <div className="absolute -top-10 -left-10 w-32 h-32 bg-pink-500/10 rounded-full blur-2xl animate-pulse" />
          <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl animate-pulse" />
          
          <h1 className="text-4xl sm:text-6xl font-bold mb-8 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent relative z-10">
            AI智能情感分析
          </h1>
          <p className="text-lg sm:text-xl mb-12 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            基于深度学习模型的多维度智能算法，为您提供专业的感情契合度分析
          </p>
          <Link 
            href="/test"
            className="inline-block bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 px-10 py-4 rounded-full text-lg font-medium text-white hover:opacity-90 transition-all duration-300 hover:scale-105 hover:shadow-xl shadow-lg relative z-10"
          >
            开始测试
          </Link>
        </div>

        {/* 使用流程 */}
        <div className="mt-24">
          <h2 className="text-2xl sm:text-4xl font-bold text-center mb-16">
            简单三步 开启分析
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: "填写信息",
                desc: "完成简短个性测评问卷",
                icon: "📝"
              },
              {
                title: "AI分析",
                desc: "深度学习模型即时计算",
                icon: "🤖"
              },
              {
                title: "查看报告",
                desc: "获取专业详细分析报告",
                icon: "📊"
              }
            ].map((step, i) => (
              <div key={i} className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg text-center">
                <div className="text-4xl mb-4">{step.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Example Results Preview */}
        <div className="mt-24">
          <h2 className="text-2xl sm:text-4xl font-bold text-center mb-16">
            智能分析维度
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* 性格相容度卡片 */}
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="text-center mb-6 relative">
                <div className="relative inline-block">
                  <span className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-600">
                    92%
                  </span>
                  <div className="absolute -inset-2 bg-green-400/20 blur-2xl rounded-full" />
                </div>
                <h3 className="text-2xl font-semibold mt-4">性格相容指数</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 text-lg">
                基于大数据AI模型，分析双方性格特征的匹配程度
              </p>
            </div>

            {/* 八字契合度卡片 */}
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="text-center mb-6 relative">
                <div className="relative inline-block">
                  <span className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
                    85%
                  </span>
                  <div className="absolute -inset-2 bg-blue-400/20 blur-2xl rounded-full" />
                </div>
                <h3 className="text-2xl font-semibold mt-4">命理契合指数</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 text-lg">
                结合传统文化，运用算法分析生辰八字的匹配度
              </p>
            </div>
          </div>
        </div>

        {/* 隐私保护说明 */}
        <div className="mt-24 text-center">
          <div className="inline-block bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm px-8 py-6 rounded-2xl shadow-lg">
            <h2 className="text-xl font-semibold mb-2 flex items-center justify-center">
              <span className="text-2xl mr-2">🔒</span>
              隐私保护承诺
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              您的所有信息都经过加密处理，仅用于分析计算，绝不对外泄露
            </p>
          </div>
        </div>

        {/* 添加测试入口 */}
        <div className="mt-8 text-center">
          <Link 
            href="/test"
            className="inline-block px-6 py-3 rounded-lg bg-gradient-to-r from-pink-500 to-purple-500 text-white hover:opacity-90 transition-opacity"
          >
            开始测试
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-8 border-t border-gray-200 dark:border-gray-800 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 text-center text-sm text-gray-600 dark:text-gray-400">
          <p>AI婚恋契合度预测系统 © 2024</p>
        </div>
      </footer>
    </div>
  );
}
