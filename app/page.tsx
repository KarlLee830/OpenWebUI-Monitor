"use client";

import Link from "next/link";
import { FiDatabase, FiUsers, FiBarChart2, FiGithub } from "react-icons/fi";

export default function HomePage() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-gray-50 via-gray-100 to-white pt-16">
      {/* 背景装饰 */}
      <div className="absolute top-0 left-0 w-[45rem] h-[45rem] bg-blue-50/40 rounded-full blur-3xl -z-10 animate-float" />
      <div className="absolute bottom-0 right-0 w-[50rem] h-[50rem] bg-purple-50/30 rounded-full blur-3xl -z-10 animate-float-delay" />

      {/* 主要内容区域 */}
      <div className="min-h-[calc(100vh-4rem)] flex flex-col justify-between">
        <div className="flex-1 flex items-center justify-center py-8">
          <div className="w-full max-w-sm md:max-w-4xl mx-auto px-4 sm:px-6">
            {/* 标题区域 */}
            <div className="w-full space-y-6 sm:space-y-8 mb-8 sm:mb-12">
              <div className="text-center space-y-2">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-indigo-800 to-gray-900 bg-clip-text text-transparent mb-2 sm:mb-3 tracking-tight">
                  OpenWebUI Monitor
                </h1>
                <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto font-light">
                  专为 OpenWebUI 设计的用量监控和用户余额管理平台
                </p>
              </div>
            </div>

            {/* 功能卡片区域 */}
            <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4 mb-8 sm:mb-12">
              {/* Models 卡片 */}
              <Link
                href="/models"
                className="group relative overflow-hidden rounded-2xl transition-all duration-500 hover:scale-[1.02] hover:shadow-xl"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-white backdrop-blur-sm opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative p-4 sm:p-6 h-full border border-gray-100 rounded-2xl bg-white/40">
                  <div className="flex items-center mb-2 sm:mb-3">
                    <div
                      className="p-2.5 sm:p-3 bg-blue-50 rounded-xl mr-3 sm:mr-4 
                                  group-hover:bg-blue-100 transition-all duration-500"
                    >
                      <FiDatabase className="text-lg sm:text-xl text-blue-600" />
                    </div>
                    <h2 className="text-base sm:text-lg font-medium text-gray-900">
                      模型管理
                    </h2>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-600">
                    OpenWebUI 提供模型的价格管理
                  </p>
                </div>
              </Link>

              {/* Users 卡片 - 应用相同的紧凑样式 */}
              <Link
                href="/users"
                className="group relative overflow-hidden rounded-2xl transition-all duration-500 hover:scale-[1.02] hover:shadow-xl"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 to-white backdrop-blur-sm opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative p-4 sm:p-6 h-full border border-gray-100 rounded-2xl bg-white/40">
                  <div className="flex items-center mb-2 sm:mb-3">
                    <div
                      className="p-2.5 sm:p-3 bg-purple-50 rounded-xl mr-3 sm:mr-4 
                                  group-hover:bg-purple-100 transition-all duration-500"
                    >
                      <FiUsers className="text-lg sm:text-xl text-purple-600" />
                    </div>
                    <h2 className="text-base sm:text-lg font-medium text-gray-900">
                      用户管理
                    </h2>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-600">
                    用户信息查询和余额管理
                  </p>
                </div>
              </Link>

              {/* Panel 卡片 - 应用相同的紧凑样式 */}
              <Link
                href="/panel"
                className="group relative overflow-hidden rounded-2xl transition-all duration-500 hover:scale-[1.02] hover:shadow-xl"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-green-50/50 to-white backdrop-blur-sm opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative p-4 sm:p-6 h-full border border-gray-100 rounded-2xl bg-white/40">
                  <div className="flex items-center mb-2 sm:mb-3">
                    <div
                      className="p-2.5 sm:p-3 bg-green-50 rounded-xl mr-3 sm:mr-4 
                                  group-hover:bg-green-100 transition-all duration-500"
                    >
                      <FiBarChart2 className="text-lg sm:text-xl text-green-600" />
                    </div>
                    <h2 className="text-base sm:text-lg font-medium text-gray-900">
                      使用统计
                    </h2>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-600">
                    使用统计数据和可视化
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>

        {/* GitHub 页脚 */}
        <div className="w-full flex justify-center py-4">
          <a
            href="https://github.com/VariantConst/OpenWebUI-Monitor"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-400 hover:text-gray-600 transition-all duration-300
                     p-2 rounded-xl hover:bg-gray-50"
          >
            <FiGithub className="text-lg" />
          </a>
        </div>
      </div>
    </main>
  );
}
