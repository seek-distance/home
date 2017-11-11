function add(num){
    var arr=num.toString().split('');
    var start=arr.length-3;
    while(start>0){
        arr.splice(start,0,',');
        start -= 3;
    }
    return arr.join('');
}
add(1000000000)