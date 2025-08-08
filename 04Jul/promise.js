const myPromise=new Promise((resolve, reject)=>{
  const Passed=false;
  setTimeout(()=>{
    if(Passed){
      resolve("Charan Passed M1");
    } 
    else{
      reject("Charan Failed M1");
    }
  },1000);
});

myPromise
  .then(msg=>console.log(msg))
  .catch(msg=>console.log(msg));
