# Thestral Wallet

English | [简体中文](./README.zh-CN.md) | [Français](./README.fr-FR.md)

Thestral is a out-of-the box user-friendly gui [Mugle](https://github.com/mugleproject/mugle) wallet.
The name 'Thestral' comes from ["harry potter"](https://harrypotter.fandom.com/wiki/Thestral).

* It's using the [official Mugle binaries](https://github.com/mugleproject/mugle/releases) as back-end.

* It's using [electron-vue](https://github.com/SimulatedGREG/electron-vue) to build the Thestral Wallet gui front-end.

* It works on mac/linux/windows, and supports multiple languages.

<img src="/src/renderer/assets/logo.png" width="256"> Logo made by [@Duoasa](https://weibo.com/u/3197271025)

## Table of Contents
 - [Development resources](#development-resources)
 - [Vulnerability response](#vulnerability-response)
 - [License](#license)
 - [Translations](#translations)
 - [Contributing](#contributing)
 - [Latest Version](#latest-version)
 - [Video tutorial](#video-tutorial)
 - [Usage](#usage)
 - [Compiling from source](#compiling-from-source)
    - [Dependencies](#dependencies) 
    - [Build instructions](#build-instructions)
 - [Credits](#credits)

## Development resources
- GitHub: [https://github.com/muglefans/Thestral](https://github.com/muglefans/Thestral)
- Mail:  [xiaojay@gmail.com](mailto:xiaojay@gmail.com)   
- Telegram: https://t.me/thestralwallet

## Vulnerability response
- [GitHub Thestral issues](https://github.com/muglefans/Thestral/issues)

## License

Apache-2.0 License, see [LICENSE](LICENSE).

## Translations
The Thestral wallet is available in different languages.
English, 简体中文, French, Russian, Dutch.

Translation to other languages is welcome. Please check our [lang folder](https://github.com/muglefans/Thestral/tree/gw5/src/lang).
If you want to help translate it, then translate the next text file [en.js](https://github.com/muglefans/Thestral/blob/gw5/src/lang/en.js) to your local language.
Or better, send a github pull request similar like [this](https://github.com/muglefans/Thestral/pull/66/files).

## Contributing

Code pull requests are always welcome. If you want to help out, please send [pull requests](https://github.com/muglefans/Thestral/pulls).


### Latest Version

v0.7.1 support Mugle5

Thestral Wallet uses the official [mugle-wallet v5.0.3](https://github.com/mugleproject/mugle-wallet/releases/tag/v5.0.3) and [mugle v5.0.4](https://github.com/mugleproject/mugle/releases/tag/v5.0.4) as backend. 

Mac/Windows/Linux version:[https://github.com/muglefans/thestral/releases/tag/v0.7.1](https://github.com/muglefans/thestral/releases/tag/v0.7.1)

Thestral wallet has a **hedwig v1 relay service**, which enable users without public ip receive mugle really easy :)

In other words，**You could withdraw mugle from any exchanges and miner pool effortlessly**.


## Video tutorial

[A great video tutorial of how to withdraw mugle from any exchanges using Thestral wallet.](https://www.youtube.com/watch?v=rufKWEv64o8)
[![IMAGE ALT TEXT HERE](https://img.youtube.com/vi/rufKWEv64o8/0.jpg)](https://www.youtube.com/watch?v=rufKWEv64o8)



## Usage

#### Create new wallet
![create new wallet](https://media.giphy.com/media/IeuEOtJvxCLqqiCCyr/giphy.gif)

Important! Be sure to backup your recovery seed phrase to restore your wallet later.

#### Send mugle
![send mugle](https://media.giphy.com/media/LO2sAR3HmocCdbTwEh/giphy.gif)

#### Receive mugle
![receive mugle](https://media.giphy.com/media/iFbSw9rhh5fGVSzyZf/giphy.gif)



## Compiling from source

### Dependencies
The following table summarizes the tools required to build. A few tools are included in this repository (marked as "Vendored").

| Dep          | Min. version  | Vendored | Debian/Ubuntu pkg    | name                                 | Optional | Purpose                |
| ------------ | ------------- | -------- | -------------------- | -------------------------------------| -------- | ---------------------- |
| npm          | ?             | NO       | `npm`                | javascript package manager           | NO       | compiler               |
| mugle         | current       | YES      |                      | mugle node executable                 | NO       | mugle node back-end     |
| mugle-wallet  | current       | YES      |                      | mugle-wallet executable               | NO       | mugle-wallet back-end   |
| hedwig       | 1.0.0         | YES      |                      | public IP address relay service      | NO       | https relay service    |


*The current release is built on branch [gw5](https://github.com/muglefans/Thestral/tree/gw5)*


### Build instructions

Thestral Wallet uses the [npm build system](https://github.com/npm).

#### Linux
Install build dependencies on Debian/Ubuntu:

```bash
$ sudo apt update && sudo apt install npm
```


Cloning the repository
```bash
$ git clone https://github.com/muglefans/thestral.git && cd thestral
```


download and install dependencies with npm in the repository

```bash
npm install
cd hedwig
npm install
cd ..
```

Serve with hot reload at localhost:9080
```bash
npm run dev
```

Build electron application for production
```bash
npm run build
```

#### Installation directories 

##### Linux
/opt/Thestral

~/.thestral

~/.mugle

##### Windows
c:\Program Files\Thestral

c:\user\username\\.thestral

c:\user\username\\.mugle




## Credits 

We now have a wonderful logo <img src="/src/renderer/assets/logo.png" width="64"> from chinese mugle community.

Logo made by [@Duoasa](https://weibo.com/u/3197271025), and also thanks [@机械师区块链](https://weibo.com/u/6318956004)

Thanks to  [@yozx](https://github.com/yozx) for Russian version.

Thanks to  [@Kinaou](https://github.com/Kinaou) for French version.

Thanks to  [@frankcoderL](https://github.com/frankcoderL) for Nederlands version.
