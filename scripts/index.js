const logger = require('hexo-log')();
const path = require('path');
const fs = require('fs');
// 文件拷贝
function copyFile(src, dst) {
    fs.writeFileSync(dst, fs.readFileSync(src));
}
// 检测是否有主题配置文件
logger.info('[Chireiden] Checking theme configurations');
let themeF = hexo.theme_dir.split(path.sep);
themeF = themeF[themeF.length-2];
let sitePC = themeF !== 'hexo-theme-chireiden' ? path.join(hexo.base_dir, `_config.${themeF}.yml`) : path.join(hexo.base_dir, `_config.chireiden.yml`);
if(!fs.existsSync(sitePC)) {
    logger.warn('[Chireiden] Theme configuration not found');
    logger.info('[Chireiden] Generating theme configuration file...');
    const themePC = path.join(hexo.theme_dir, 'source', '_config.yml');
    copyFile(themePC, sitePC);
}