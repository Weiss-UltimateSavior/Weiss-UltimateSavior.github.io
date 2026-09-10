# 架构说明

项目按职责划分为三层，依赖方向固定为：

```text
界面 UI 交互层 -> 功能抽象层 -> 底层引擎层
```

## 底层引擎层

底层引擎层位于 `engine/`，负责 KRKR/Kirikiroid、krkrsdl3、ONS、Artemis、Tyrano、SDL/Cocos/IJK、Native/JNI、引擎宿主 Activity、引擎资源与 Native 插件底层加载。

## 功能抽象层

功能抽象层位于 `app/src/main/java/com/tyranor/next/core/`，负责游戏扫描、游戏模型、启动编排、封面抓取、存档管理、在线补丁、应用/引擎/单游戏配置、授权和后台更新。

主要领域包括：

- `core/game`：游戏模型、扫描、启动、存档管理。
- `core/engine`：引擎类型、内置引擎插件启动与安装编排、外置 APK 引擎模块注册与启动协议。
- `core/cover`：封面抓取、来源聚合、批量任务。
- `core/patch`：KRKR 在线补丁。
- `core/settings`：应用级配置、引擎级配置、单游戏配置。
- `core/auth`：Hikarinagi OAuth 授权与 token 管理。
- `core/updater`：后台更新检查与通知。
- `core/unpack`：引擎相关封包解包辅助。

## 界面 UI 交互层

界面层位于 `app/src/main/java/com/tyranor/next/ui/`，负责 Compose 页面、Activity 壳、弹窗、导航、顶部栏、搜索框、用户输入、加载态和错误态。

主要页面域包括 `ui/main`、`ui/home`、`ui/game`、`ui/engine`、`ui/settings`、`ui/cover`、`ui/patch`、`ui/save`、`ui/auth` 与 `ui/common`。
