const AutoGitUpdate = require('auto-git-update');

const config = {
    repository: 'https://github.com/TeamNovaFR/LifeServerFramework',
    fromReleases: true,
    tempLocation: `${__dirname}/lsf_temp`,
    ignoreFiles: ['config.json'],
    executeOnComplete: 'start.bat',
    exitOnComplete: true
}

const updater = new AutoGitUpdate(config);

updater.autoUpdate();