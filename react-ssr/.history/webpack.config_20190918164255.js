const path=require('path')

module.exports={
    entry:path.join(__dirname,"") ,
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