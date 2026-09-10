import { _ as _export_sfc, o as openBlock, c as createElementBlock, a5 as createStaticVNode } from "./chunks/framework.4ItlIeB-.js";
const __pageData = JSON.parse('{"title":"开始使用","description":"","frontmatter":{},"headers":[],"relativePath":"guide/quick-start.md","filePath":"guide/quick-start.md","lastUpdated":1789049035000}');
const _sfc_main = { name: "guide/quick-start.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, [..._cache[0] || (_cache[0] = [
    createStaticVNode('<h1 id="开始使用" tabindex="-1">开始使用 <a class="header-anchor" href="#开始使用" aria-label="Permalink to “开始使用”">​</a></h1><h2 id="_1-授权游戏目录" tabindex="-1">1. 授权游戏目录 <a class="header-anchor" href="#_1-授权游戏目录" aria-label="Permalink to “1. 授权游戏目录”">​</a></h2><p>打开应用后，通过系统文件选择器选择本地游戏目录，并授予 Tyranor Next 访问权限。建议为同一批游戏使用稳定的目录结构，避免移动目录后导致授权失效。</p><h2 id="_2-扫描游戏库" tabindex="-1">2. 扫描游戏库 <a class="header-anchor" href="#_2-扫描游戏库" aria-label="Permalink to “2. 扫描游戏库”">​</a></h2><p>完成授权后，执行游戏扫描。Tyranor Next 会根据目录内的文件特征识别游戏类型，例如 <code>.xp3</code>、<code>startup.tjs</code>、<code>nscript.dat</code>、<code>index.html</code>、<code>Game.ini</code>、<code>game/script.rpy</code> 等。</p><h2 id="_3-检查引擎状态" tabindex="-1">3. 检查引擎状态 <a class="header-anchor" href="#_3-检查引擎状态" aria-label="Permalink to “3. 检查引擎状态”">​</a></h2><p>进入引擎页，确认内置引擎和外置 APK 模块的可用状态。对于 Ren&#39;Py、RPG Maker RGSS 与 mkxp-z 游戏，需要先安装对应外置模块。</p><h2 id="_4-配置单游戏参数" tabindex="-1">4. 配置单游戏参数 <a class="header-anchor" href="#_4-配置单游戏参数" aria-label="Permalink to “4. 配置单游戏参数”">​</a></h2><p>如果某个游戏需要特殊参数，可以在单游戏设置中覆盖默认引擎配置。实际兼容性取决于游戏使用的引擎版本、封包方式、脚本特性和修改情况。</p><h2 id="_5-启动游戏" tabindex="-1">5. 启动游戏 <a class="header-anchor" href="#_5-启动游戏" aria-label="Permalink to “5. 启动游戏”">​</a></h2><p>在游戏库中选择目标游戏并启动。内置 Web 运行环境会处理 TyranoBuilder、RPG Maker MV/MZ、VN、WebOther 等网页式游戏；原生或外置模块会处理对应引擎类型。</p>', 11)
  ])]);
}
const quickStart = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  quickStart as default
};
