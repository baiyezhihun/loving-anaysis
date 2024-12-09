'use client';

import { useState } from 'react';
import { TestResult } from '../utils';

interface ShareButtonsProps {
  results: TestResult;
}

export default function ShareButtons({ results }: ShareButtonsProps) {
  const [showCopySuccess, setShowCopySuccess] = useState(false);

  // 生成分享文本
  const getShareText = () => {
    return `我和TA的契合度测试结果：${Math.round(results.compatibility)}%！\n` +
           `性格相容性：${Math.round(results.personality)}%\n` +
           `价值观契合：${Math.round(results.values)}%\n` +
           `生活方式：${Math.round(results.lifestyle)}%\n` +
           `情感表达：${Math.round(results.emotion)}%\n` +
           `快来测测你们的契合度吧！`;
  };

  // 复制链接
  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setShowCopySuccess(true);
      setTimeout(() => setShowCopySuccess(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  // 分享到微信
  const shareToWeChat = () => {
    // 检查是否在微信浏览器中
    const isWechat = /MicroMessenger/i.test(navigator.userAgent);
    if (isWechat) {
      // 调用微信JS-SDK分享接口
      // 需要先引入并配置微信JS-SDK
    } else {
      alert('请在微信中打开进行分享');
    }
  };

  // 分享到微博
  const shareToWeibo = () => {
    const text = encodeURIComponent(getShareText());
    const url = encodeURIComponent(window.location.href);
    window.open(`http://service.weibo.com/share/share.php?url=${url}&title=${text}`);
  };

  // 分享到QQ
  const shareToQQ = () => {
    const text = encodeURIComponent(getShareText());
    const url = encodeURIComponent(window.location.href);
    window.open(`http://connect.qq.com/widget/shareqq/index.html?url=${url}&title=${text}`);
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-center gap-4">
        <button
          onClick={copyLink}
          className="px-6 py-2 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors relative"
        >
          {showCopySuccess ? '已复制' : '复制链接'}
          {showCopySuccess && (
            <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-black text-white text-sm px-2 py-1 rounded">
              复制成功！
            </span>
          )}
        </button>
        <button
          onClick={shareToWeChat}
          className="px-6 py-2 rounded-lg bg-gradient-to-r from-green-500 to-green-600 text-white hover:opacity-90 transition-opacity"
        >
          分享到微信
        </button>
      </div>
      <div className="flex justify-center gap-4">
        <button
          onClick={shareToWeibo}
          className="px-6 py-2 rounded-lg bg-gradient-to-r from-red-500 to-orange-500 text-white hover:opacity-90 transition-opacity"
        >
          分享到微博
        </button>
        <button
          onClick={shareToQQ}
          className="px-6 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 text-white hover:opacity-90 transition-opacity"
        >
          分享到QQ
        </button>
      </div>
    </div>
  );
} 