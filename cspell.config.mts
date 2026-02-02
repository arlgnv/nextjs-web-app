import { defineConfig } from 'cspell';

const config = defineConfig({
  useGitignore: true,
  dictionaries: ['project-words'],
  dictionaryDefinitions: [
    {
      name: 'project-words',
      path: 'project-words.txt',
      addWords: true,
    },
  ],
});

export default config;
