const path = require('path');
const { util } = require('vortex-api');
const os = require("os");


function findGame() {
  return util.steam.findByName('Derail Valley')
    .then(game => game.gamePath);
}

function main(context) {
  context.registerGame({
    id: 'derailvalley',
    name: 'Derail Valley',
    logo: 'header.jpg',
    mergeMods: true,
    queryPath: findGame,
    queryModPath: () => 'Mods',
    executable: () => 'DerailValley.exe',
    requiredFiles: [
      'DerailValley.exe',
      'winhttp.dll'
    ],
    details: {
      steamAppId: 588030,
    },
  });

  return true;
}

module.exports = {
  default: main,
};
