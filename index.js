// const core = require('@actions/core');
// const github = require('@actions/github');

// try {
//   const nameToGreet = core.getInput('who-to-greet');
//   console.log(`Hello ${nameToGreet}!`);
//   const time = (new Date()).toTimeString();
  
//   core.setOutput("time", time);
//   core.setOutput("name","Ze");
// } catch (error) {
//   core.setFailed(error.message);
// }

import fs from 'fs';
import { join } from 'path';
const core = require('@actions/core');


const readPackageJson = function (path) {
    const packageJson = fs.readFileSync(join(path, 'package.json')).toString();

    return JSON.parse(packageJson);
};

try {
    const path = core.getInput('path');

  
    const packageInfo = readPackageJson(path);

    core.setOutput("name", packageInfo.name);
    core.setOutput("version", packageInfo.version);
    core.setOutput("npmjs-link", `https://www.npmjs.com/package/${packageInfo.name}`);
} catch (error) {
    core.setFailed(error.message);
}
