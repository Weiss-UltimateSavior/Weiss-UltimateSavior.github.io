# 引擎支持

## 支持范围

| 游戏类型 | 典型识别特征 | 运行环境 |
| --- | --- | --- |
| Kirikiri / Kirikiri2 | `.xp3`、`startup.tjs` | Kirikiroid2 / krkrsdl3 原生运行时 |
| ONScripter | `nscript.dat`、`.nsa` | ONScripter 原生运行时 |
| Artemis | `system.ini`、`.pfs` | Artemis 原生运行时 |
| TyranoBuilder | `index.html`、`tyrano/` | 内置 Tyrano Web 运行环境 |
| RPG Maker XP | `.rgssad`、`Game.ini` + `Data/*.rxdata` | 外置 RPGM APK 模块 |
| RPG Maker VX | `.rgss2a`、`Game.ini` + `Data/*.rvdata` | 外置 RPGM APK 模块 |
| RPG Maker VX Ace | `.rgss3a`、`Game.ini` + `Data/*.rvdata2` | 外置 RPGM APK 模块 |
| mkxp-z | 用户选择或内部别名 `internal.mkxp-z` | 外置 RPGM APK 模块 |
| RPG Maker MV | `www/`、`js/rpg_core.js` | 内置 Web 运行环境 |
| RPG Maker MZ | `www/`、`js/rmmz_core.js` | 内置 Web 运行环境 |
| VN | `globalData.vndata` | 内置 Web 运行环境 |
| WebOther | 通用 `index.html` 网页游戏 | 内置 Web 运行环境 |
| Ren'Py | `.rpa`、`game/script.rpy`、`game/options.rpy`、`renpy/` + `.rpy/.rpyc` | 外置 Ren'Py APK 模块 |

## Web 运行环境

内置 Web 运行环境支持 TyranoBuilder、RPG Maker MV/MZ、VN、WebOther 等网页式游戏，并支持部分以 `app.asar` 打包的 NW.js 游戏。启动时会根据归档内容进一步识别具体类型。

## 原生插件

`kirikiroid2`、`ons`、`artemis` 等原生插件以 assets 形式随 APK 打包。首次启动时，`NativePluginManager` 会将插件解压安装到应用私有目录。
