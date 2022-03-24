const fs = require('fs');
const path = require('path');

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
  const pkg = require(path.join(`${templatePath}/`, `package.json`));
  pkg.name = projectName;
  fs.writeFileSync(
    path.join(targetPath, 'package.json'),
    JSON.stringify(pkg, null, 2)
  );
};

module.exports = {
  resetProjectName,
  copyProjectFile,
};
