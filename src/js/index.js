import RF from "../rf"

let rf = new RF({
    data(){
        return {
            wtf:"hahahah"
        }
    },
    computed:{},
    watch:{}
})

rf.wtf = 1
console.log(rf.wtf)