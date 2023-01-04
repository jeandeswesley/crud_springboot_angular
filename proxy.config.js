module.exports = {
    devServer: {
      proxy: {
        '/api': {
          target: 'http://localhost:8000/spring-boot-rest-api-sample',
          pathRewrite: {'^/api' : ''}
        }
      }
    }
  }