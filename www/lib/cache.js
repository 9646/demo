var cache = C = (function() {
    var GET_KEY_PREFIX = '_C_';
    /**
     * 缓存从服务端获取的数据
     * @param key
     * @param value
     */
    var save = function(key,value){
        var data = {
            data : value,
            cacheTime : new Date()
        }
        window.localStorage.setItem(GET_KEY_PREFIX+key,JSON.stringify(data));
    }
    /**
     * 获取本地已缓存的数据
     */
    var get = function(key){
        return JSON.parse(window.localStorage.getItem(GET_KEY_PREFIX+key));
    }
    /**
     * 删除某一缓存
     * @param  key
     */
    var empty = function(key){
        window.localStorage.removeItem(GET_KEY_PREFIX+key);
    }

    /**
     * 清空本地缓存
     */
    var clear = function(){
        var storage = window.localStorage;
        for(var key in storage){
            if(key.indexOf(GET_KEY_PREFIX) == 0){
                storage.removeItem(key);
            }
        }
    }
    /**
     * 清空本地缓存
     */
    var clear2 = function(){
        var storage = window.localStorage;
        for(var key in storage){
            storage.removeItem(key);
        }
    }

    return {
        get : get,
        save : save,
        clear : clear,
        clear2 : clear2,
        empty : empty
    }
})()