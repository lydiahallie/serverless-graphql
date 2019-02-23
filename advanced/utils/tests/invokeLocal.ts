const promisify = require('util').promisify;
const fs = require('fs');
const exec = promisify(require('child_process').exec);
require('dotenv').config();

import { catchErrors } from '../error';
import { event } from './eventSource';
import { AWS_CONFIG } from './command';

const init = process.env.CI !== undefined ? AWS_CONFIG : '';

function formatData(res) {
  return JSON.parse(
    res
      .split('Serverless: ')
      .find(x => x.includes('statusCode'))
      .split('Typescript compiled.')[1]
  );
}

async function writeEvent(body, token) {
  const req = event(body, token);
  return await fs.writeFile('event.json', JSON.stringify(req), 'utf8', err => {
    if (err) throw err;
  });
}

export const slsInvoke = catchErrors(async (body, token = '') => {
  await writeEvent(body, token);

  const { stdout, stderr } = await exec(
    `${init} serverless invoke local -f graphql --path event.json`
  );
  if (stdout) {
    return formatData(stdout);
  } else {
    return stderr;
  }
});
