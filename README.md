# 中文学习网

面向中文初学者的响应式学习网站，同时接收各国文字的公开中文解释请求。网站通过 GitHub Issues 收集内容，由管理员在仓库中人工补充中文解释。

## 功能

- 四条循序渐进的学习路径
- 每日一句与普通话语音朗读
- 三题互动知识测验
- 十二个高频词汇，支持搜索、分类和掌握标记
- 多语言文字解释表单，自动预填 GitHub Issue
- 公开显示维护者 GitHub 主页作为联系方式
- 使用 `localStorage` 保存课程、词汇和每日一句进度
- 适配桌面端、平板与手机
- 无框架、无构建依赖

## 本地预览

直接打开 `index.html`，或在项目目录启动任意静态文件服务器：

```bash
python -m http.server 8000
```

然后访问 `http://localhost:8000`。

## 文字解释流程

1. 用户在网站填写原文和可选说明。
2. 网站打开预填内容的新 GitHub Issue 页面。
3. 用户登录 GitHub，确认后公开提交。
4. 管理员添加“待解释”标签，并在 Issue 评论中用中文回复。
5. 完成后移除“待解释”标签并添加“已解释”标签。

Issue 和中文回复均为公开内容。网站不会在浏览器中保存 GitHub 令牌，也不会向 GitHub API 直接写入数据。

## 项目结构

```text
.
├── .github/ISSUE_TEMPLATE/submission.yml
├── index.html
├── styles.css
├── app.js
└── README.md
```

## 部署

仓库使用 GitHub Pages 部署，网站地址为：

`https://lianchuzhong.github.io/cn/`
