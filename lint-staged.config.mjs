import { relative } from 'path';

const buildEslintCommand = (filenames) =>
  `next lint --fix --file ${filenames
    .map((f) => relative(process.cwd(), f))
    .join(' --file ')}`;

const lintStagedConfig = {
  '*.{js,jsx,ts,tsx}': ['prettier --write', buildEslintCommand],
  '*.{css,html,json,md}': 'prettier --write',
};

export default lintStagedConfig;
