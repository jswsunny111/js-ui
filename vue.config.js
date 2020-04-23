/* 
vue重新配置文件
优先级比webpack配置高，把需要更改的webpack 配置再进行。会对webpack进行覆盖 
*/

module.exports = {
  devServer: {
    // 自动打开
    open: true,
    // 改端口
    port:8888
  },
  // 转换rem配置
  css: {
    loaderOptions: {
      css:{},
      postcss: {
        plugins: [
          require('postcss-px2rem')({
            // font-size的字根 设计图/10 
            // remUnit:75
            // 但是考虑到设计图的原因 两倍图 在除以2
            remUnit:37.5
          })
        ]
      }
    }
  }
}
