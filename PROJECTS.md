# 添加与维护研究项目 (Project Management Guide)

首页（`_layouts/research-home.html`）会自动读取 `_portfolio/` 目录下的所有 Markdown 文件，无需手动修改 HTML、CSS 或 JavaScript。

## 1. 如何新增一个研究项目

在 `_portfolio/` 目录下新建一个 `.md` 文件（例如 `new-manipulation-project.md`），填入以下 Frontmatter 模板：

```yaml
---
title: "项目完整名称"
short_title: "简短名称"
collection: portfolio
permalink: /portfolio/new-manipulation-project/
order: 5
area: "Dual-arm manipulation"
status: "Ongoing research"
badge_type: "ongoing" # 可选: accepted (绿) | review (蓝) | ongoing (紫)
featured: false       # 设为 true 则同时进入 Selected Publications 代表作区
role: "First author"  # 可选: 作者排序或角色徽章
paper_title: "如果进入精选论文区，填写完整论文题目"
authors: "Zhilun Hu, Coauthor Name, Weiming Shen"
venue: "IEEE Transactions / Conference Name, 2026"
image: /images/projects/new-manipulation-project.svg
image_alt: "项目架构图或实验图说明"
media_caption: "显示在精选区图片下方的简短图注。"
# video: /assets/videos/new-manipulation-project.mp4
home_description: "在精选区展示的 2-3 句核心问题与技术方法摘要。"
summary: "在研究项目列表中展示的一句话定位。"
contribution: "核心方法公式或模块组合说明。"
bibtex: |
  @inproceedings{hu2026example,
    title     = {Paper Title},
    author    = {Hu, Zhilun and Shen, Weiming},
    booktitle = {Conference},
    year      = {2026}
  }
links:
  - label: "Paper"
    url: "https://example.com/paper.pdf"
  - label: "Code"
    url: "https://github.com/169884902hzl"
header:
  teaser: projects/new-manipulation-project.svg
---

这里撰写项目详情页正文（支持 Markdown、公式与大图）。
```

## 2. 自动化能力说明

- **自动高亮本人署名**：`authors` 字段中的 `Zhilun Hu` 会在首页自动渲染为加粗带下划线样式。
- **自动生成筛选器**：`area` 字段中的任何新研究方向都会自动出现在研究项目区的胶囊筛选栏中。
- **多项目视图切换**：首页自带 **Media View（图文卡片）** 与 **Compact List（紧凑列表）** 切换按钮，当未来项目增长至 10–20+ 项时依然保持极佳的浏览体验。
- **替换真实照片或实验视频**：
  - **个人肖像照**：默认展示高定矢量学术徽章（`images/projects/portrait-emblem.svg`）。若需替换为个人实拍照片，将照片保存为 `images/portrait.jpg`，并在 `_pages/about.md` 中取消 `portrait: /images/portrait.jpg` 的注释即可。
  - **项目实验视频**：将 MP4 视频放入 `assets/videos/`，在对应项目 Markdown 中取消 `video: /assets/videos/xxx.mp4` 的注释，首页将自动切换为带封面的原生视频播放器。
