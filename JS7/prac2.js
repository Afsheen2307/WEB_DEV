let id=setInterval(() => {
    console.log("Hello World");
}, 2000);

setTimeout(() => {
    clearInterval(id);
    console.log("CLear INterval ");
}, 10000);