'use strict';

/*
const CredentialManager = require('../lib/credential-manager');

async function main() {
  const creds = new CredentialManager('twine');
  const [key, secret] = await creds.getKeyAndSecret();

  console.log(`key: ${key} | secret: ${secret}`);
}

main().catch(console.error);
*/

const program = require('commander');
const pkg = require('../package.json');

//  console.log(`pid: [${process.pid}] ppid: [${process.ppid}] argv: [${process.argv}]`);

program
  .version(pkg.version)
  .command('configure', 'configure Twitter related credentials')
  .command('lookup', 'lookup think in Twitter')
  .parse(process.argv);

//  end
