# UmiJS + shadcn/ui + Tailwind CSS 4 Monorepo 模板

这是一个现代化的前端项目模板，集成了 UmiJS 4、shadcn/ui 组件库和 Tailwind CSS 4，采用 Monorepo 架构，使用 pnpm workspace 和 Turbo 进行构建和任务管理。

## ✨ 特性

- 🚀 **UmiJS 4** - 企业级前端应用框架
- 🎨 **shadcn/ui** - 高质量、可定制的 React 组件库
- 💅 **Tailwind CSS 4** - 最新版本的实用优先 CSS 框架
- 📦 **Monorepo** - 使用 pnpm workspace 管理多包项目
- ⚡ **Turbo** - 高性能构建系统，支持增量构建和缓存
- 🔧 **TypeScript** - 完整的类型支持
- 🎯 **共享配置** - 统一的 ESLint 和 TypeScript 配置

## 📋 前置要求

- Node.js >= 20
- pnpm >= 10.4.1

## 🏗️ 项目结构

```
.
├── apps/
│   └── web/              # UmiJS 应用
│       ├── src/
│       │   ├── app.ts    # UmiJS 应用配置
│       │   ├── pages/    # 页面文件
│       │   └── layouts/  # 布局组件
│       └── package.json
├── packages/
│   ├── ui/               # shadcn/ui 组件库
│   │   ├── src/
│   │   │   ├── components/  # UI 组件
│   │   │   ├── lib/        # 工具函数
│   │   │   └── styles/     # 全局样式
│   │   └── components.json # shadcn/ui 配置
│   ├── eslint-config/    # 共享 ESLint 配置
│   └── typescript-config/ # 共享 TypeScript 配置
├── pnpm-workspace.yaml   # pnpm workspace 配置
├── turbo.json            # Turbo 配置
└── package.json          # 根 package.json
```

## 🚀 快速开始

### 安装依赖

```bash
pnpm install
```

### 启动开发服务器

```bash
pnpm dev
```

开发服务器将在 `http://localhost:8000` 启动（UmiJS 默认端口）。

### 构建项目

```bash
pnpm build
```

### 代码检查

```bash
pnpm lint
```

### 代码格式化

```bash
pnpm format
```

## 📦 工作区包说明

### `apps/web`

UmiJS 4 应用，主应用入口。

**主要依赖：**
- `umi` - UmiJS 框架
- `tailwindcss` - Tailwind CSS 4
- `@workspace/ui` - 共享 UI 组件库

**脚本：**
- `pnpm dev` - 启动开发服务器
- `pnpm build` - 构建生产版本
- `pnpm setup` - 运行 UmiJS 设置

### `packages/ui`

shadcn/ui 组件库，包含可复用的 React 组件。

**主要依赖：**
- `@radix-ui/*` - Radix UI 基础组件
- `class-variance-authority` - 组件变体管理
- `tailwind-merge` - Tailwind 类名合并
- `lucide-react` - 图标库

**导出：**
- `@workspace/ui/components/*` - UI 组件
- `@workspace/ui/lib/*` - 工具函数
- `@workspace/ui/styles/globals.css` - 全局样式

### `packages/eslint-config`

共享的 ESLint 配置，确保代码风格一致。

### `packages/typescript-config`

共享的 TypeScript 配置，统一类型检查规则。

## 🎨 使用 shadcn/ui 组件

### 添加新组件

1. 进入 `packages/ui` 目录
2. 使用 shadcn CLI 添加组件（如果已安装全局 CLI）：
   ```bash
   cd packages/ui
   npx shadcn@latest add [component-name]
   ```

   或者手动创建组件文件在 `packages/ui/src/components/` 目录下。

### 在应用中使用组件

```tsx
import { Button } from '@workspace/ui/components/button';

export default function Page() {
  return (
    <div>
      <Button variant="default">点击我</Button>
    </div>
  );
}
```

### 组件别名配置

在 `packages/ui/components.json` 中已配置了路径别名：

- `@workspace/ui/components` → `ui` 或 `components`
- `@workspace/ui/lib/utils` → `utils`
- `@workspace/ui/hooks` → `hooks`

## 🎯 Tailwind CSS 配置

项目使用 Tailwind CSS 4，配置文件位于 `packages/ui/src/styles/globals.css`。

### 主题定制

可以在 `globals.css` 中修改 CSS 变量来定制主题：

```css
:root {
  --background: 0 0% 100%;
  --foreground: 0 0% 3.9%;
  /* ... 更多变量 */
}
```

## 🔧 开发指南

### 添加新的工作区包

1. 在 `apps/` 或 `packages/` 目录下创建新目录
2. 创建 `package.json` 文件
3. 在根目录运行 `pnpm install` 以链接工作区

### 类型检查

项目使用 TypeScript，确保所有文件都有正确的类型定义。

### 代码规范

- 使用 ESLint 进行代码检查
- 使用 Prettier 进行代码格式化
- 遵循项目中的 TypeScript 配置

## 📝 脚本说明

### 根目录脚本

- `pnpm dev` - 启动所有应用的开发服务器（通过 Turbo）
- `pnpm build` - 构建所有包（通过 Turbo）
- `pnpm lint` - 检查所有包的代码（通过 Turbo）
- `pnpm format` - 格式化所有代码文件

### Turbo 任务

Turbo 配置在 `turbo.json` 中：
- `build` - 构建任务，支持依赖构建和缓存
- `dev` - 开发任务，持久运行，不使用缓存
- `lint` - 代码检查任务

## 🚢 部署

### 构建生产版本

```bash
pnpm build
```

构建产物将输出到各包的 `dist` 目录。

### 环境变量

在 `apps/web` 目录下创建 `.env` 文件来配置环境变量。

## 📚 相关文档

- [UmiJS 文档](https://umijs.org/)
- [shadcn/ui 文档](https://ui.shadcn.com/)
- [Tailwind CSS 文档](https://tailwindcss.com/)
- [Turbo 文档](https://turbo.build/repo/docs)
- [pnpm 文档](https://pnpm.io/)

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

## 📄 许可证

MIT
