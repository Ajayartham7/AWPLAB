function callBack(){
    console.log("Charan")
}

function greet(cb){
    console.log("Hello ")
    cb()
}

greet(callBack)