import { _ as _export_sfc, o as openBlock, c as createElementBlock, a5 as createStaticVNode } from "./chunks/framework.4ItlIeB-.js";
const __pageData = JSON.parse('{"title":"存档与补丁","description":"","frontmatter":{},"headers":[],"relativePath":"features/saves-and-patches.md","filePath":"features/saves-and-patches.md","lastUpdated":1789049035000}');
const _sfc_main = { name: "features/saves-and-patches.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, [..._cache[0] || (_cache[0] = [
    createStaticVNode('<h1 id="存档与补丁" tabindex="-1">存档与补丁 <a class="header-anchor" href="#存档与补丁" aria-label="Permalink to “存档与补丁”">​</a></h1><h2 id="存档管理" tabindex="-1">存档管理 <a class="header-anchor" href="#存档管理" aria-label="Permalink to “存档管理”">​</a></h2><p>存档管理能力位于 <code>core/game</code> 领域，面向游戏存档镜像、游戏运行目录和应用侧记录进行组织。不同引擎的存档位置和读写方式可能不同，实际行为以对应引擎实现为准。</p><h2 id="krkr-在线补丁" tabindex="-1">KRKR 在线补丁 <a class="header-anchor" href="#krkr-在线补丁" aria-label="Permalink to “KRKR 在线补丁”">​</a></h2><p>KRKR 在线补丁能力位于 <code>core/patch</code> 领域，用于处理 Kirikiri 相关补丁流程。特殊修改版游戏可能需要额外设置或补丁适配。</p><h2 id="兼容性提示" tabindex="-1">兼容性提示 <a class="header-anchor" href="#兼容性提示" aria-label="Permalink to “兼容性提示”">​</a></h2><p>实际兼容性取决于游戏使用的引擎版本、封包或加密方式、脚本特性以及 Android 设备环境。遇到启动失败时，优先检查目录授权、文件路径、引擎模块安装状态和单游戏参数。</p>', 7)
  ])]);
}
const savesAndPatches = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  savesAndPatches as default
};
