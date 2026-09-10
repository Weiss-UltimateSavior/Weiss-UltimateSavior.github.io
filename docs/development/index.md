# 开发概览

Tyranor Next 是一个 Android 项目，主要由 `app` 与 `engine` 两个模块组成。

## 模块职责

| 模块 | 职责 |
| --- | --- |
| `app` | Android 应用壳、Compose UI、功能抽象层、配置、封面、存档、授权和后台更新 |
| `engine` | 底层引擎运行时核心、SDL、Kirikiri TVP、krkrsdl3、ONScripter、Artemis、Tyrano、Native/JNI 与引擎宿主 Activity |

## 技术栈

- Kotlin，部分引擎层包含 Java 桥接代码。
- Jetpack Compose、Material 3 与 Miuix。
- Gradle 9.5.1、AGP 9.2.1、Kotlin 2.x 与 Compose Compiler。
- `compileSdk 37`、`minSdk 26`、`targetSdk 36`。
- SharedPreferences 管理扫描结果、引擎设置、单游戏覆盖和最近记录。
- Storage Access Framework 管理外部游戏目录访问。

## 构建命令

```bash
./gradlew assembleDebug --no-daemon
```

Debug APK 产物位于 `app/build/outputs/apk/debug/`。本地构建需要 Android SDK 与对应平台环境。
