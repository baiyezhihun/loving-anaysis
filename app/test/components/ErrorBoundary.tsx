'use client';

import { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export default class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">出错了</h1>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              {this.state.error?.message || '发生了一些错误'}
            </p>
            <button
              onClick={() => window.location.reload()}
              className="px-6 py-2 rounded-lg bg-gradient-to-r from-pink-500 to-purple-500 text-white hover:opacity-90 transition-opacity"
            >
              重新加载
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
} 