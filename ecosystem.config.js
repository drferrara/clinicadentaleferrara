module.exports = {
  apps: [{
    name: 'clinica-dentale-ferrara',
    script: 'python3',
    args: ['-m', 'http.server', '8080'],
    cwd: '/home/user/webapp',
    env: {
      NODE_ENV: 'development'
    }
  }]
};