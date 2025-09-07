const object={
    message:"Hello, World!",

    logMessage(){
        console.log(this.message);
    }
};
console.log(setTimeout(object.logMessage,1000));