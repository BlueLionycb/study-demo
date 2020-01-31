const path=require('path')

module.exports={
    entry:path.join(__dirname,"demo/src/clien/index.js") ,
    output:{
        filename:'bundle.js',
        path:path.resolve(__dirname,'dist')
    },
    module:{

    }
}