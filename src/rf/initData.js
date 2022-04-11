export default function _initData(instance, data){
    proxyData(instance)
}

// 封装第一层代理
function proxyData(instance){
    let _data = instance.$data
    for (let key in _data){
        Object.defineProperty(instance, key, {
            get(){
                return _data[key]
            },
            set(newVal){
                _data[key] = newVal
            }

        })
    }
}