module.exports = {
    apps: [
        {
            name: 'voya-web',
            script: 'server/index.js',
            exec_mode: 'cluster',
            max_memory_restart: '500M',
            env: {
                NODE_ENV: 'production'
            }
        }
    ]
}