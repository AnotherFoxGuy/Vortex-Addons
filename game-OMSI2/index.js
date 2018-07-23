const path = require('path');
const { util } = require('vortex-api');

function findGame() {
  return util.steam.findByName('OMSI 2')
    .then(game => game.gamePath);
}

function main(context) {
  context.registerGame({
    id: 'OMSI2',
    name: 'OMSI 2',
    logo: 'header.jpg',
    mergeMods: true,
    queryPath: findGame,
    queryModPath: () => '.',
    executable: () => 'Omsi.exe',
    requiredFiles: [
      'Omsi.exe',
    ],
    details: {
      steamAppId: 252530,
    },
  });

  return true;
}

module.exports = {
  default: main,
};
