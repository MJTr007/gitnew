function getData(num){
    return new Promise((resolve,reject)=>setTimeout(()=>resolve(5*num),2000));
}

getData(5).then((data)=>{
    console.log(data);
    return getData(data);
})

.then((data1)=>{
    console.log(data1);
    
})