const { resolve } = require('path')
const rootPath = process.cwd()
module.exports = {
  entry: {
    path: resolve(rootPath, './lang'),
    filename: 'zh.json'
  },
  translate: {
    on: true, // 要自动翻译，请设置true
    lang: ['en'],
    secretId: 'secretId', // 请输入你的腾讯翻译api的用户secretId
    secretKey: 'secretKey' // 请输入你的腾讯翻译api的用户secretKey
  }
}
