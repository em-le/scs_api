module.exports = {
  apps: [
    {
      name: 'fc-api',
      script: 'node ./dist/main.js',
      time: true,
      exec_mode: 'fork',
      instances: 1,
      autorestart: true,
      watch: true,
      ignore_watch: ['[/\\]./', 'node_modules', 'dist'],
      max_memory_restart: '1G',
    },
  ],
};
