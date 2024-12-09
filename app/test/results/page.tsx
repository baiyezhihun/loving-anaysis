'use client';

import React from 'react';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import type { TestResult } from '../utils';
import ShareButtons from '../components/ShareButtons';

// 修复 motion 组件的类型
const MotionDiv = motion.div as React.ComponentType<HTMLMotionProps<"div">>;

// 结果解释文案
const resultDescriptions = {
  high: {
    personality: '你们的性格特征非常互补，能够很好地理解和包容对方的个性特点。',
    values: '你们的价值观高度一致，对未来有着相似的期待和规划。',
    lifestyle: '你们的生活方式非常协调，能够很好地适应对方的生活节奏。',
    emotion: '你们在情感表达方面非常默契，善于理解和回应对方的情感需求。'
  },
  medium: {
    personality: '你们的性格有一定差异，但这些差异是可以互相包容和调和的。',
    values: '你们的价值观存在一些分歧，需要通过沟通来增进理解。',
    lifestyle: '你们的生活方式有所不同，需要相互调整来达到平衡。',
    emotion: '你们在情感表达方面略有差异，需要多一些耐心和理解。'
  },
  low: {
    personality: '你们的性格差异较大，需要更多的包容和理解。',
    values: '你们的价值观差异明显，建议多沟通以增进理解。',
    lifestyle: '你们的生活方式差异较大，需要更多的磨合和适应。',
    emotion: '你们在情感表达方面存在较大差异，需要学习对方的表达方式。'
  }
};

export default function ResultsPage() {
  const searchParams = useSearchParams();
  const [results, setResults] = useState<TestResult | null>(null);

  useEffect(() => {
    if (!searchParams) return;
    const resultsParam = searchParams.get('id');
    if (resultsParam) {
      try {
        setResults(JSON.parse(decodeURIComponent(resultsParam)));
      } catch (e) {
        console.error('Failed to parse results:', e);
      }
    }
  }, [searchParams]);

  // 获取维度评价等级
  const getDimensionLevel = (score: number) => {
    if (score >= 80) return 'high';
    if (score >= 60) return 'medium';
    return 'low';
  };

  if (!results) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-purple-500 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <h1 className="text-2xl font-bold mb-4">加载中...</h1>
          <p className="text-gray-600 dark:text-gray-400">正在获取你的测评结果</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 via-white to-purple-50 dark:from-gray-900 dark:via-purple-900/10 dark:to-gray-800">
      <main className="container mx-auto px-4 py-12">
        <MotionDiv 
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl sm:text-4xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-pink-600 to-purple-600 dark:from-pink-400 dark:to-purple-400">
            你们的契合度分析报告
          </h1>
          
          {/* 总体匹配度 */}
          <motion.div 
            className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-2xl p-8 mb-8 text-center shadow-lg"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <div className="relative inline-block">
              <svg className="w-48 h-48" viewBox="0 0 100 100">
                <circle
                  cx="50"
                  cy="50"
                  r="45"
                  fill="none"
                  stroke="#f3f4f6"
                  strokeWidth="10"
                />
                <circle
                  cx="50"
                  cy="50"
                  r="45"
                  fill="none"
                  stroke="url(#gradient)"
                  strokeWidth="10"
                  strokeDasharray={`${results.compatibility * 2.827}, 282.7`}
                  strokeLinecap="round"
                  transform="rotate(-90 50 50)"
                />
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#ec4899" />
                    <stop offset="100%" stopColor="#8b5cf6" />
                  </linearGradient>
                </defs>
              </svg>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="text-6xl sm:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-500">
                  {Math.round(results.compatibility)}%
                </div>
              </div>
            </div>
            <p className="text-lg text-gray-600 dark:text-gray-400 mt-4">总体契合度</p>
          </motion.div>

          {/* 维度分析 */}
          <div className="grid gap-6 md:grid-cols-2">
            {[
              { key: 'personality', label: '性格相容性', icon: '👥', color: 'from-pink-500 to-red-500' },
              { key: 'values', label: '价值观契合', icon: '🎯', color: 'from-purple-500 to-blue-500' },
              { key: 'lifestyle', label: '生活方式', icon: '🏠', color: 'from-blue-500 to-green-500' },
              { key: 'emotion', label: '情感表达', icon: '❤️', color: 'from-green-500 to-yellow-500' }
            ].map(({ key, label, icon, color }, index) => (
              <motion.div 
                key={key}
                className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl">{icon}</span>
                  <span className="font-medium text-lg">{label}</span>
                </div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-2xl font-semibold">
                    {Math.round(results[key as keyof TestResult])}%
                  </span>
                </div>
                <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden mb-4">
                  <motion.div 
                    className={`h-full bg-gradient-to-r ${color}`}
                    initial={{ width: 0 }}
                    animate={{ width: `${results[key as keyof TestResult]}%` }}
                    transition={{ duration: 1, delay: 0.6 + index * 0.1 }}
                  />
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {resultDescriptions[getDimensionLevel(results[key as keyof TestResult])][key as keyof typeof resultDescriptions.high]}
                </p>
              </motion.div>
            ))}
          </div>

          {/* 生肖和年龄匹配 */}
          <motion.div 
            className="grid gap-6 md:grid-cols-2 mt-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-xl p-6 shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">🐲</span>
                <span className="font-medium text-lg">生肖契合</span>
              </div>
              <div className="text-2xl font-semibold mb-2">
                {Math.round(results.chineseZodiac)}%
              </div>
            </div>
            <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-xl p-6 shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">⏳</span>
                <span className="font-medium text-lg">年龄相配</span>
              </div>
              <div className="text-2xl font-semibold mb-2">
                {Math.round(results.ageCompatibility)}%
              </div>
            </div>
          </motion.div>

          {/* 分享按钮 */}
          <motion.div 
            className="mt-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <ShareButtons results={results} />
          </motion.div>
        </MotionDiv>
      </main>
    </div>
  );
} 