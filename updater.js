const AutoGitUpdate = require('auto-git-update');

const config = {
    repository: 'https://github.com/TeamNovaFR/LifeServerFramework',
    fromReleases: true,
    tempLocation: `${__dirname}/lsf_temp`,
    ignoreFiles: ['config.json'],
    executeOnComplete: `${__dirname}/start.bat`,
    exitOnComplete: true
}

const updater = new AutoGitUpdate(config);

updater.autoUpdate();