// eslint-disable-next-line no-undef
module.exports = {
  apps: [
    {
      name: 'twitter',
      script: 'dist/index.js', // Đổi script thành chỉ đường dẫn tới file JS
      interpreter: 'node', // Chỉ định rõ ràng rằng sử dụng Node.js để chạy
      env: {
        NODE_ENV: 'development', // Riêng NODE_ENV thì có thể dùng process.env.NODE_ENV hoặc process.NODE_ENV, còn lại thì chỉ được dùng process.env.TEN_BIEN
        TEN_BIEN: 'Gia tri'
      },
      env_production: {
        NODE_ENV: 'production'
      }
    }
  ]
}
