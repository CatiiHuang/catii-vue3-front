const path = require('path');
const fs = require('fs');

// 判断文件夹是否存在，不存在就创建
const isExist = (path) => {
  if (!fs.existsSync(path)) fs.mkdirSync(path);
};

// 文件复制
const copyFile = (sourcePath, targetPath) => {
  const sourceFile = fs.readdirSync(sourcePath, { withFileTypes: true });
  isExist(targetPath);
  sourceFile.forEach((file) => {
    const newSourcePath = path.resolve(sourcePath, file.name);
    const newTargetPath = path.resolve(targetPath, file.name);
    if (file.isDirectory()) {
      isExist(newTargetPath);
      copyFile(newSourcePath, newTargetPath);
      return;
    }
    fs.copyFileSync(newSourcePath, newTargetPath);
  });
};

(() => {
  const [, , projectName] = process.argv;
  const templatePath = path.resolve('./', 'catii-vue3-front-template/');
  const targetPath = path.resolve('./', `${projectName ? projectName : ''}`);

  copyFile(templatePath, targetPath);
})();
