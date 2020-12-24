<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="stylesheet" href="./assets/style.css">
<script src="./assets/script.js"></script>
<div class="contents"></div>

# Git（版本控制）

- [Git（版本控制）](#git-版本控制)
- [简介](#简介)
- [Git 与 SVN 区别](#git-与-svn-区别)
- [Git 的使用](#git-的使用)
  - [配置](#配置)
    - [操作](#操作)
    - [注意](#注意)
  - [初始化 Git 仓库](#初始化-git-仓库)
    - [操作](#操作-1)
    - [注意](#注意-1)
  - [版本管理](#版本管理)
    - [操作](#操作-2)
    - [注意](#注意-2)
  - [分支管理](#分支管理)
    - [常见分支](#常见分支)
    - [操作](#操作-3)
  - [临时存储（git stash）](#临时存储-git-stash)
    - [操作](#操作-4)
    - [注意](#注意-3)
- [Git 版本控制服务器](#git-版本控制服务器)
  - [公共 Git 服务器](#公共-git-服务器)
  - [使用 Git 服务器](#使用-git-服务器)
    - [基本操作](#基本操作)
    - [常用命令](#常用命令)
  - [跨团队协作](#跨团队协作)
    - [主要步骤](#主要步骤)
  - [Git 忽略清单](#git-忽略清单)

# 简介

> https://www.runoob.com/git/git-tutorial.html

- Git 是一个开源的分布式版本控制系统，用于敏捷高效地处理任何或小或大的项目。
- Git 是 Linus Torvalds 为了帮助管理 Linux 内核开发而开发的一个开放源码的版本控制软件。
- Git 与常用的版本控制工具 CVS、Subversion 等不同，它采用了分布式版本库的方式，不必服务器端软件支持。

# Git 与 SVN 区别

- Git 是分布式的，SVN 不是：这是 Git 和其它非分布式的版本控制系统，例如 SVN，CVS 等，最核心的区别。
- Git 把内容按元数据方式存储，而 SVN 是按文件：所有的资源控制系统都是把文件的元信息隐藏在一个类似 .svn、.cvs 等的文件夹里。
- Git 分支和 SVN 的分支不同：分支在 SVN 中一点都不特别，其实它就是版本库中的另外一个目录。
- Git 没有一个全局的版本号，而 SVN 有：目前为止这是跟 SVN 相比 Git 缺少的最大的一个特征。
- Git 的内容完整性要优于 SVN：Git 的内容存储使用的是 SHA-1 哈希算法。这能确保代码内容的完整性，确保在遇到磁盘故障和网络问题时降低对版本库的破坏。

# Git 的使用

## 配置

### 操作

命令                             | 描述
----                             | ----
`git config --list`              | 查看配置列表
`git config --global -e`         | 编辑全局配置文件
`git config --global user.name`  | 配置全局用户名
`git config --global user.email` | 配置全局邮箱

### 注意

- `name` 和 `email` 最好与服务器的相关设置对应。

## 初始化 Git 仓库

### 操作

命令         | 描述
----         | ----
`git init`   | 初始化（空的 Git 库）

### 注意

- 初始化后，文件路径后有默认的分支名，一般为 `master`（主分支）。

## 版本管理

### 操作

命令                           | 描述
----                           | ----
`git status`                   | 查看仓库文件状态
`git add <文件名>`             | 把文件加入版本管理（进入`暂存区`）<br>`git add .` 可添加所有文件
`git commit [-m <备注>]`       | 把暂存区的文件 `提交` 到版本库
`git log`                      | 查看提交记录（https://git-scm.com/docs/git-log）
`git checkout <文件名>`        | 将 `暂存区` 中对应的文件覆盖 `工作区` 中的文件
`git rm <文件名>`              | 将文件从删除 `版本库` 中删除<br>（`工作区` 中的文件也会被删除）
`git rm --cached <文件名>`     | 将文件从删除 `暂存区` 中删除<br>（`仓库` 中的文件也会被删除，`工作区` 的文件保留，停止追踪文件）
`git reset --hard <commit ID>` | 从版本库中 `恢复` 文件，覆盖 `暂存区` 和 `工作区` 的文件

### 注意

- 在提交文件前，不要修改已进入暂存区的文件。
- 可以使用 `git log` 查看 `commit ID`。

## 分支管理

### 常见分支

- `master` 主分支
  - `develop` 开发版本
  - `feature` 功能版本
  - `release` 发布版本

### 操作

命令                                 | 描述
----                                 | ----
`git branch`                         | 列出分支
`git branch <分支名称>`              | 创建分支
`git branch -d <分支名称>`           | 删除分支
`git branch -D <分支名称>`           | 强制删除分支
`git checkout <分支名称>`            | 切换分支
`git merge <需要合并过来的分支名称>` | 合并分支

## 临时存储（git stash）

> 若当前分支上的工作尚未完成，同时有另一项任务需要优先完成，或者出现 BUG 需要立刻修复，
> 就可以通过 stash 把当前改变的功能（未开发完成）临时储存起来（保存工作现场），
> 得到一个干净的环境（提交时不会提交未开发完成的内容），在完成另一项任务后可以恢复继续工作。

### 操作

命令                           | 描述
----                           | ----
`git stash`                    | 暂存
`git stash list`               | 查看 stash 列表
`git stash show`               | 显示 stash 做了哪些改动
`git stash apply`              | 应用某个 stash，但不从 stash 列表中删除
`git stash pop`                | 应用某个 stash，并从 stash 列表中删除
`git stash drop stash@{$序号}` | 丢弃特定序号的 stash，并从 stash 列表中删除
`git stash clear`              | 删除所有的 stash

### 注意

- `show`、`apply`、`pop` 默认指定第一个 `stash`，命令后面加 `stash@{$序号}` 可指定其他 `stash`。

# Git 版本控制服务器

## 公共 Git 服务器

- GitHub
- Gitee

## 使用 Git 服务器

### 基本操作

1. 添加远程仓库地址

   - `git remote add 远程仓库别名 远程仓库地址`
   - 远程仓库别名一般为 `origin`（可自定义）

2. 推送代码到远程仓库

   - `git push 远程仓库地址 分支名称`
   - 分支名称一般为 `master`

### 常用命令

命令                                       | 描述
----                                       | ----
`git remote add 远程仓库别名 远程仓库地址` | 添加远程仓库地址
`git remote rm 远程仓库别名`               | 删除远程仓库地址
`git clone 仓库地址`                       | 克隆远程仓库的数据到本地
`git pull 远程仓库地址 分支名称`           | 从远程仓库拉取代码
`git push 远程仓库地址 分支名称`           | 推送代码到远程仓库<br>添加参数 `-u` 可记录推送地址及分支，下次只需要输入 `git push`

## 跨团队协作

### 主要步骤

1. fork 仓库
2. 将仓库克隆到本地进行修改
3. 推送代码
4. 向原仓库发起 Pull Reqest
5. 原仓库作者 / 管理员审核
6. 原仓库作者 / 管理员合并代码

## Git 忽略清单

- Git 忽略清单文件名称：`.gitignore`
- 可将不需要被 Git 管理的文件名添加到此文件中，在执行 Git 命令时，Git 会忽略这些文件。
