# 助手目录

Grok Bot 现成提示词。把一则提示词贴进 Grok Bot，它会带你连接工具、问清需求、先出示草稿，确认后再发出并保存。

本仓库是一份中文目录站点，不是 Bot 运行时。提示词写在 `bots/` 下的 Markdown 里。

## 本地运行

需要 Node.js 20+。已安装 pnpm 则用 pnpm，否则用 npm。

```bash
cd zhushou-mulu
npm install
npm run dev
```

浏览器打开默认地址 `http://localhost:4321`。

```bash
npm run build
npm run preview
```

## 页面

| 路径 | 说明 |
| --- | --- |
| `/` | 首页：搜索、分类/集成筛选、按最新或名称排序 |
| `/categories` | 六类：效率、销售、营销、运营、客成、生活 |
| `/integrations` | 飞书、企微、钉钉、Gmail、Slack、GitHub 等 |
| `/bots/[slug]` | 完整提示词与一键复制 |
| `/add` | 如何添加 |
| `/about` | 关于 |
