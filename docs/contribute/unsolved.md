1. Failed to run on Linux, the problem has not been located yet.
2. In the Windows, if the Windows account name contains spaces, the C drive directory structure will also contain strings with spaces, so __dirname will also contain spaces. Substituting it into children_process.execSync() will result in an error. .
3. Chinese or emoji garbled characters in some terminals on the win system.
