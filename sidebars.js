const fs = require('fs');
const path = require('path');

const docsDirectory = path.join(__dirname, 'docs');
const projects = fs.readdirSync(docsDirectory);

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {};

function fileExists(path) {
    try {
        return fs.lstatSync(path).isFile();
    } catch {
        return false;
    }
}

projects.forEach((project) => {
    const docsDir = path.join(docsDirectory, project);
    const realPath = fs.lstatSync(docsDir).isSymbolicLink() ? fs.realpathSync(docsDir) : docsDir;

    if (fs.statSync(realPath).isDirectory()) {
        const categoryFile = path.join(realPath, "_category_.json");
        if (fileExists(categoryFile)) {
            const category = require(categoryFile);
            sidebars[category.label] = [category.customProps.sidebar];
        } else {
            sidebars[project] = [{type: 'autogenerated', dirName: project}];
        }
    }
});

module.exports = sidebars;
