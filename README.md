# Zhilun Hu · Academic Pages 预览

在线预览：https://169884902hzl.github.io/hzlink-academicpages/

此版本使用真实模板，展示个人简介、研究项目与论文。CASE 标注为已接收，VR-Loop 标注为审稿中；在研项目单独说明状态。现有 `hzlink.uk` 网站不受此预览影响。

## 后续主要修改哪些文件

| 内容 | 文件 |
| --- | --- |
| 姓名、站点地址和基础设置 | `_config.yml` |
| 个人简介 | `_pages/about.md` |
| 论文 | `_publications/` |
| 项目 | `_portfolio/` |
| 简历 | `_pages/cv.md` |
| Google Scholar | _config.yml → author.googlescholar（完整链接） |

`content-templates/` 中提供不会发布到网站的论文条目样例。复制前请替换全部字段，包括示例年份。可以参考现有项目页面添加新项目，并核对作者、研究状态和材料公开范围。

在 GitHub 打开相应文件，点击铅笔编辑，再提交修改；`Actions → Build and deploy site` 会自动重新发布。头像、学术邮箱、Scholar 链接和完整教育经历仍可后续补充。发布失败时先查看该工作流的错误日志。

Google Scholar：使用个人 Google 账号打开 https://scholar.google.com/citations ，填写身份信息，添加你自己的论文，验证学校邮箱，然后设为公开。主页字段可以填写 `https://hzlink.uk/`。把公开资料链接中的 ID 或完整链接填入上表对应位置。

## 两版对比

- Academic Pages：https://169884902hzl.github.io/hzlink-academicpages/
- al-folio：https://169884902hzl.github.io/hzlink-al-folio/

这两个预览使用独立项目地址，均未绑定自定义域名。选定版本后再将 `hzlink.uk` 绑定到所选站点。需要停止预览时，可在仓库 `Settings → Pages` 取消发布；恢复内容可使用 Git 提交历史。

## 模板来源

上游版本与许可见 `TEMPLATE-SOURCE.md` 和 `LICENSE`。保留原模板运行时，没有加入自定义布局或样式覆盖。
