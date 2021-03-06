'use strict';

const program = require('commander');
const pkg = require('../package.json');
const lookup = require('../commands/lookup');
const util = require('../lib/util');

//  console.log(`pid: [${process.pid}] ppid: [${process.ppid}] argv: [${process.argv}]`);

program
  .version(pkg.version);

program
  .command('users [screen-names]')
  .description('Find users by their screen name')
  .action((names) => lookup
    .users(pkg.name, names)
    .catch(util.handleError)
  );

program
  .command('statuses [ids]')
  .description('Find statuses (tweets) by their ID')
  .action((ids) => lookup
    .statuses(pkg.name, ids)
    .catch(util.handleError)
  );

program
  .parse(process.argv);

if (!process.argv.slice(2).length) {
  program.outputHelp();
}
