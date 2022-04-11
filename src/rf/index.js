import _initData from "./initData";

class RF{
    constructor(options) {
        this.data = options.data
        this.$data = this.data()
        this.computed = options.computed
        this.watch = options.watch
        this.init()
    }

    init(){
        this.initData(this.data)
    }

    initData(data){
        _initData(this, data)
    }
}

export default RF
