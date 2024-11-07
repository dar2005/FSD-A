// // sayhello=()=>
// // {
// //     console.log("Hello Function");
// // };
// // console.log("start")
// // setTimeout(sayhello,4000);
// // console.log("End");
// console.log("start");
// setTimeout(()=>{
//     console.log("first task completed");
//     setTimeout(()=>{
//         console.log("second task completed");
//         setTimeout(()=>{
//             console.log("third task completed");
//         },3000);
//     },2000);
// },1000);
// console.log("End");
// const myPromise=new Promise((resolve,reject)=>{
//     let success=true;
//     if(success){
//         resolve("Data send success");
//     }
//     else{
//         reject=("Data failed to send");
//     }
// });
// myPromise
// .then((message)=>console.log(message))
// .catch((error)=>("Error fetching data"+error));
function task(message,delay){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            // console.log(message);
            const data={id:1,roll:23,name:"rahul"};
            // resolve();
            resolve(data);
        },3000);
        // },delay);
    });
}
task("First task completed",1000)
.then(()=>task("Second task is completed",2000))
.then(()=>task("Third task is completed",3000));