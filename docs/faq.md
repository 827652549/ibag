
#### 1.Why are some dependencies not selected but installed?

Some dependent libraries have dependencies, and auxiliary libraries with dependencies will be automatically installed.

#### 2.The project name is Chinese, and an error is reported.

The name attribute of package.json does not support Chinese.

#### 3.A directory containing a string with spaces in the path will fail to run.

This problem has not been resolved, please switch the operating directory to a temporary string to the directory without spaces.

#### 4.yargs failed to start.

Ibag is a cli tool that depends on Yargs. Yargs supports a minimum Node.js version of 12.
