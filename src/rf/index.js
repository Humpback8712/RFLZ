
class RF{
    constructor(options) {
        this.data = options.data
        this.computed = options.computed
        this.watch = options.watch
        this.init()
    }

    init(){
        console.log(this.data)
    }
}

export default RF
