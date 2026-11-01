# 你是甄嬛传里的谁？—— 后宫性格测试

一个用 Vue 3 + Vite 做的单页性格测试：20 道宫廷情境题，按 5 个维度打分，最后匹配到 23 个角色里最接近的一个。

## 玩法

1. 进入开始页，点击开始测试；
2. 依次回答 20 道情境题，每题选择更符合自己的选项；
3. 系统累计 P/E/A/W/D 五个维度分数；
4. 用「用户向量」和每个角色的向量算曼哈顿距离，取距离最近的角色作为结果；
5. 结果页展示角色称号、判词、性格描述、相似角色和一句「生存指南」。

## 技术栈

- Vue 3（`<script setup>`）
- Vite
- Tailwind CSS
- 数据在 `src/data/questions.js`（20 题）和 `src/data/characters.js`（23 个角色）

## 运行

```bash
npm install
npm run dev
```

构建：

```bash
npm run build
```

`dist/` 里已经有一份构建产物；因为 `dist/index.html` 引用的是 `/assets/...` 绝对路径，直接双击打开可能白屏，建议用静态服务器：

```bash
npx serve dist
```

## 目录

- `src/components/`：开始页、答题页、结果页、进度条
- `src/data/questions.js`：题库
- `src/data/characters.js`：角色库和五维向量
- `src/utils/matching.js`：打分和最近邻匹配
- `dist/`：构建产物

## 说明

这个项目没有接大模型，是纯前端规则产品；它体现的是「用 AI 辅助快速做出一个完整可玩的产品」——从题库、角色数据、匹配逻辑到页面交互。
