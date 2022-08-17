#!/usr/bin/env node
const path = require('path');
const cwd = process.cwd();
const fs = require('fs');

// 判断文件夹是否存在，不存在就创建
const isExist = (path) => {
  if (!fs.existsSync(path)) fs.mkdirSync(path);
};

// 文件复制
const copyProjectFile = (sourcePath, targetPath) => {
  const sourceFile = fs.readdirSync(sourcePath, { withFileTypes: true });
  isExist(targetPath);
  sourceFile.forEach((file) => {
    const newSourcePath = path.resolve(sourcePath, file.name);
    const newTargetPath = path.resolve(targetPath, file.name);
    if (file.isDirectory()) {
      isExist(newTargetPath);
      copyProjectFile(newSourcePath, newTargetPath);
      return;
    }
    fs.copyFileSync(newSourcePath, newTargetPath);
  });
};

// 重设项目名
const resetProjectName = (projectName, targetPath, templatePath) => {
  if (!projectName) return;
  if (projectName.includes('/')) return;
  const pkg = require(path.join(`${templatePath}/`, `package.json`));
  pkg.name = projectName.toLowerCase();
  fs.writeFileSync(path.join(targetPath, 'package.json'), JSON.stringify(pkg, null, 2));
};

// BeginProcess
(() => {
  const [, , projectName] = process.argv;
  const templatePath = path.join(__dirname, '/catii-vue3-front-template/');
  const targetPath = path.join(cwd, `/${projectName ? projectName : ''}`);
  // 复制项目模板文件
  copyProjectFile(templatePath, targetPath);
  // 修改项目名称
  resetProjectName(projectName, targetPath, templatePath);
})();
