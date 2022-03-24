const path = require('path');

const { resetProjectName, copyProjectFile } = require('./util.js');

const templatePath = path.resolve('./', 'catii-vue3-front-template/');

(() => {
  const [, , projectName] = process.argv;
  const targetPath = path.resolve('./', `${projectName ? projectName : ''}`);
  // 复制项目模板文件
  copyProjectFile(templatePath, targetPath);
  // 修改项目名称
  resetProjectName(projectName, targetPath, templatePath);
})();
