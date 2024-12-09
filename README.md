# AI婚恋契合度预测系统

基于人工智能的多维度情感匹配分析系统，通过科学的数据分析和人工智能算法，结合传统东方文化，为用户提供专业、客观的恋爱与婚姻关系评估及建议。

## 功能特点

- 🤖 AI智能分析
- 📊 多维度评估
- 🎯 精准匹配度计算
- 🏮 传统文化结合
- 📱 移动端适配
- 🌓 暗色模式支持

## 技术栈

- Next.js 15.0.4
- React 19
- TypeScript
- Tailwind CSS
- Framer Motion
- React Hook Form
- Zod

## 快速开始

1. 安装依赖：

```bash
pnpm install
```

2. 启动开发服务器：

```bash
pnpm dev
```

3. 访问 [http://localhost:3000](http://localhost:3000) 查看应用。

## 项目结构

```
app/
  ├── test/                # 测评功能
  │   ├── page.tsx        # 测评页面
  │   ├── questions.ts    # 问题配置
  │   ├── utils.ts        # 工具函数
  │   ├── components/     # 组件
  │   └── results/        # 结果页面
  ├── layout.tsx          # 布局组件
  ├── page.tsx            # 首页
  └── globals.css         # 全局样式
```

## 开发指南

- 使用 `pnpm dev` 启动开发服务器
- 使用 `pnpm build` 构建生产版本
- 使用 `pnpm start` 启动生产服务器
- 使用 `pnpm lint` 运行代码检查

## 部署

项目可以轻松部署到 Vercel 平台：

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/love-predictor)

## 许可证

MIT License
