const path=require('path')

module.exports={
    entry:path.j './src/index',
    output:{
        filename:'bundle.js',
        path:path.resolve(__dirname,'dist')
    },
    module:{

    },
    plugins:{

    },
    devServer:{

    }
}