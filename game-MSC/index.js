const path = require('path');
const { util } = require('vortex-api');
const os = require("os");


function findGame() {
  return util.steam.findByName('My Summer Car')
    .then(game => game.gamePath);
}

function findModPath() {
  return os.homedir() + '/Documents/MySummerCar/Mods';
}

function main(context) {
  context.registerGame({
    id: 'mysummercar',
    name: 'My Summer Car',
    logo: 'header.jpg',
    mergeMods: true,
    queryPath: findGame,
    queryModPath: () => './Mods',
    executable: () => 'mysummercar.exe',
    requiredFiles: [
      'mysummercar.exe',
      'MSCLoader.dll'
    ],
    details: {
      steamAppId: 516750,
    },
  });

  return true;
}

module.exports = {
  default: main,
};
