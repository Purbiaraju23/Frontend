import { fileURLToPath } from 'url';
import chalk from 'chalk';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);

const __dirname = dirname(__filename);

console.log(chalk.red(`Project Directory Path: ${__dirname}`));