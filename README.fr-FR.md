# Thestral Wallet

Français | [English](./README.md) | [简体中文](./README.zh-CN.md)

Thestral est une interface graphique de portefeuille [Mugle](https://github.com/mugleproject/mugle) prête à l'emploi et conviviale.
Le nom 'Thestral' vient de ["harry potter"](https://harrypotter.fandom.com/wiki/Thestral).

### Dernière Version: 0.7.1

v0.7.1

Il utilise la version officielle de [mugle-wallet v5.0.3](https://github.com/mugleproject/mugle-wallet/releases/tag/v5.0.3) avec [mugle v5.0.4](https://github.com/mugleproject/mugle/releases/tag/v5.0.4) pour le backend. 

Mac/Windows/Linux version:[https://github.com/muglefans/thestral/releases/tag/v0.7.1](https://github.com/muglefans/thestral/releases/tag/v0.7.1)

Le portefeuille Thestral dispose de **hedwig v1 relay service**, qui permet à un utilisateur sans IP publique de pouvoir recevoir des Mugle très facilement :)

Autrement dit，**Vous pouvez prélever des Mugle depuis n'importe quel échange ou pool de mineurs sans effort**.

[Un excellent didacticiel vidéo expliquant comment prélever des Mugle depuis n'importe quel échange à l'aide du portefeuille Thestral.](https://www.youtube.com/watch?v=rufKWEv64o8)
[![IMAGE ALT TEXT HERE](https://img.youtube.com/vi/rufKWEv64o8/0.jpg)](https://www.youtube.com/watch?v=rufKWEv64o8)

## Contact

Contactez moi (en anglais) à l'adresse: xiaojay@gmail.com

Group Telegram : https://t.me/thestralwallet


<img src="/src/renderer/assets/logo.png" width="256"> Logo conçu par [@Duoasa](https://weibo.com/u/3197271025)

## Fonctionnalités

* Utilisation des [binaires Mugle officiels](https://github.com/mugleproject/mugle/releases) pour le backend, et [elctron-vue](https://github.com/SimulatedGREG/electron-vue) pour l'IHM.

* Fonctionne sur mac/linux/windows, et supporte différents langages (actuellement Français, English et 简体中文)

## Capture d'écran

#### Création d'un nouveau portefeuille

![Créer un nouveau portefeuille](https://media.giphy.com/media/IeuEOtJvxCLqqiCCyr/giphy.gif)

#### Envoi de Mugle


![Envoi de Mugle](https://media.giphy.com/media/LO2sAR3HmocCdbTwEh/giphy.gif)

#### Réception de Mugle
![Réception de Mugle](https://media.giphy.com/media/iFbSw9rhh5fGVSzyZf/giphy.gif)


## Installation

*La version actuelle est compilée à partir de la branche [gw5](https://github.com/muglefans/Thestral/tree/gw5)*

``` bash
# clonage
git clone https://github.com/muglefans/thestral.git && cd thestral

# installation des dépendances
npm install
cd hedwig
npm install

# lancement du serveur avec rechargement à chaud sur localhost:9080
npm run dev

# compilation de l'application electron pour la production
npm run build
```

---

## Demande d'aide

Les "pull request" de code sont toujours les bienvenus.

~~Plus précisément, si un concepteur de la communauté pouvait faire un **logo** pour Thestral, il serait très apprécié :-)~~

Nous avons actuellement un magnifique logo <img src="/src/renderer/assets/logo.png" width="64"> de la communauté mugle chinoise.

Logo conçu par [@Duoasa](https://weibo.com/u/3197271025), avec des remerciements également pour [@机械师区块链](https://weibo.com/u/6318956004)

La traduction dans d'autres langues est également convoitée. Pour cela récupérez le [dossier lang](https://github.com/muglefans/thestral/tree/master/src/lang).

Merci à [@yozx](https://github.com/yozx) pour la version russe.
