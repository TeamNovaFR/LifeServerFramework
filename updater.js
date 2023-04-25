const AutoGitUpdate = require('auto-git-update');

const config = {
    repository: 'https://github.com/TeamNovaFR/LifeServerFramework',
    fromReleases: true,
    tempLocation: 'lsf_temp',
    ignoreFiles: ['config.json'],
    executeOnComplete: 'checkUpdate.bat',
    exitOnComplete: true
}

const updater = new AutoGitUpdate(config);

updater.autoUpdate();