"use strict"

function Prefixer(prefix){
    this.prefix=prefix;
}

Prefixer.prototype.PrefixArray=function(arr){
    let that=this;
    return arr.map(function(x){
        console.log(that.prefix+x);
    });
}

let pre=new Prefixer("Hello");
pre.PrefixArray(['Ye Tun Aung','Thura Ye Tun']);
