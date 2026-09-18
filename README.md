# Zhilun Hu · Academic Pages 预览

在线预览：https://169884902hzl.github.io/hzlink-academicpages/

此版本使用真实模板和明确占位内容。姓名与 GitHub 链接来自已核对的公开 GitHub 账号；简介、学历、论文、项目与获奖情况需要你自行填写。现有 `hzlink.uk` 网站不受此预览影响。

## 后续主要修改哪些文件

| 内容 | 文件 |
| --- | --- |
| 姓名、站点地址和基础设置 | `_config.yml` |
| 个人简介 | `_pages/about.md` |
| 论文 | `_publications/` |
| 项目 | `_portfolio/` |
| 简历 | `_pages/cv.md` |
| Google Scholar | _config.yml → author.googlescholar（完整链接） |

`content-templates/` 中提供不会发布到网站的论文条目样例。复制前请替换全部字段，包括示例年份。保留目录中的占位项目，填入你的内容即可；也可以复制它添加更多项目。

在 GitHub 打开相应文件，点击铅笔编辑，再提交修改；`Actions → Build and deploy site` 会自动重新发布。首次填充完成后，删除页面中的 placeholder 提示。发布失败时先查看该工作流的错误日志。

Google Scholar：使用个人 Google 账号打开 https://scholar.google.com/citations ，填写身份信息，添加你自己的论文，验证学校邮箱，然后设为公开。主页字段可以填写 `https://hzlink.uk/`。把公开资料链接中的 ID 或完整链接填入上表对应位置。

## 两版对比

- Academic Pages：https://169884902hzl.github.io/hzlink-academicpages/
- al-folio：https://169884902hzl.github.io/hzlink-al-folio/

这两个预览使用独立项目地址，均未绑定自定义域名。选定版本后再将 `hzlink.uk` 绑定到所选站点。需要停止预览时，可在仓库 `Settings → Pages` 取消发布；恢复内容可使用 Git 提交历史。

## 模板来源

上游版本与许可见 `TEMPLATE-SOURCE.md` 和 `LICENSE`。保留原模板运行时，没有加入自定义布局或样式覆盖。
