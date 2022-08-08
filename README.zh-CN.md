# Thestral 钱包

简体中文 | [English](./README.md) | [Français](./README.fr-FR.md)

Thestral 是一个开箱即用、用户友好的 [Mugle](https://github.com/mugleproject/mugle) 开源图形界面钱包.

遵循Mugle的命名传统，钱包的名字 **Thestral** 也是来自["哈利波特"](https://harrypotter.fandom.com/wiki/Thestral).

#### 最新版本 V0.7.1

v0.7.1 

Mac/Windows/Linux 版本:
[https://github.com/muglefans/thestral/releases/tag/v0.7.1](https://github.com/muglefans/thestral/releases/tag/v0.7.1)

Thestral钱包 加了 **hedwig** v1 代理服务; 现在，没有公共ip的用户也可以很简单容易地接收mugle了 :)

也就是说，**你现在可以非常容易从各大交易所或矿池 提取mugle到你的本地钱包** 。

[A great video tutorial of how to withdraw mugle from any exchanges using Thestral wallet.](https://www.youtube.com/watch?v=rufKWEv64o8)
[![IMAGE ALT TEXT HERE](https://img.youtube.com/vi/rufKWEv64o8/0.jpg)](https://www.youtube.com/watch?v=rufKWEv64o8)

#### 中国大陆用户快速下载

中国大陆快速下载地址
>Mac:
https://mugle-fans.oss-cn-hangzhou.aliyuncs.com/Thestral-v0.7.1-macos.dmg



>Windows:
https://mugle-fans.oss-cn-hangzhou.aliyuncs.com/Thestral-v0.7.1-win-x64.zip


## 联系

联系我: xiaojay@gmail.com

Telegram group: https://t.me/thestralwallet

<img src="/src/renderer/assets/logo.png" width="256"> Logo 由[@Duoasa](https://weibo.com/u/3197271025)创建.

## 特点

* 用 [官方的Mugle命令行钱包](https://github.com/mugleproject/mugle/releases) 作为后端, 用[elctron-vue](https://github.com/SimulatedGREG/electron-vue) 写了GUI界面

* 会支持多个平台(mac/linux/windows)

* 支持多个语言

## 运行

#### 新建钱包

![create new wallet](https://media.giphy.com/media/VDl8gkDBRjlLBTmE8J/giphy.gif)

#### 发送 mugle

![send mugle](https://media.giphy.com/media/kdo4hVj7G43yeUZKoQ/giphy.gif)

#### 接收 mugle
![receive mugle](https://media.giphy.com/media/j5ztcFxVGRtJncUolz/giphy.gif)


## 构建

*目前最新发布版本的Thestral 构建于分支 [gw5](https://github.com/muglefans/Thestral/tree/gw5)*


``` bash

# git 克隆 
git clone https://github.com/muglefans/thestral.git && cd thestral

# 安装依赖
npm install
cd hedwig
npm install


# 开发者模式
npm run dev

# 打包
npm run build
```

---

## 帮助

pull request 和 bug报告 当然非常欢迎.

~~更具体地说, 希望有mugle社区的设计师帮助设计一个logo :-)~~

我们得到了中国mugle社区的帮助，有了这个特别棒的logo <img src="/src/renderer/assets/logo.png" width="64"> :-).

[@Duoasa](https://weibo.com/u/3197271025) 设计了Logo, and 感谢 [@机械师区块链](https://weibo.com/u/6318956004) 牵线搭桥.

翻译到其他语言也是很需要的. 只要翻译下这个[语言文件夹](https://github.com/muglefans/thestral/tree/master/src/lang)里的文字即可.

感谢  [@yozx](https://github.com/yozx) 翻译俄语版本.

感谢 [@Kinaou](https://github.com/Kinaou) 翻译法语版本.

感谢  [@frankcoderL](https://github.com/frankcoderL) 翻译荷兰语语版本.
