// PM2 process manager konfigürasyonu
// Kullanım (VPS'te): pm2 start ecosystem.config.js && pm2 save
module.exports = {
  apps: [
    {
      name: "3dtabela",
      // next standalone yerine klasik "next start" kullanıyoruz
      script: "node_modules/next/dist/bin/next",
      args: "start -p 3000",
      cwd: "/var/www/3dtabela",
      instances: 1,
      exec_mode: "fork",
      autorestart: true,
      max_memory_restart: "512M",
      env: {
        NODE_ENV: "production",
        PORT: "3000",
      },
    },
  ],
};
