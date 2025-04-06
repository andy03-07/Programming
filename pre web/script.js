// console.log("hii");
// ame="hi";
// console.log(ame);

// const stu={
//     fullName:"rahul",
//     age:20,
//     cgpa:8,
//     ispass:"pass",


// };

// stu.age=21;

// console.log(stu.age);

// let a= 5;
// let b=6;
// let cond1=b>a;
// let cond2=a!==b;

// console.log("cond1 && cond2",!(cond1 && cond2));


// let mode="dark";
// if(mode==="light"){
//     color="white";
// }

// else color="black";

// console.log(color);

// let r=a>1?"yes":"No";
// console.log(r);

// // let num=prompt("enter a number");
// // if(num%5===0){
// //     console.log(num, "is multiple of 5");
// // }


// for(let i=1;i<10;i++){
//     console.log(i);
// }

// // let str="helo",size=0;

// // for(let i of str){
// //     console.log("i",i);
// //     size++;
// // }

// // console.log(size);

// let stud = {
//     name:"ram",
//     age:20,
// };

// for(let i in stud){
//     console.log("i",i,"value",stud[i])
// }

// // let value=prompt("guess the number")
// // let guess=25;
// // while(value!==guess){
// //     let value=prompt("wrong,guess again")
// // }
// // console.log("correct guess")

// let str ="hii";
// let str2= "hello";
// console.log(str,str2)

// const me={
//     name:"i",
//     age:2,

// }

// console.log(`my name is ${me.name} amd age is ${me.age}`);
// console.log("my age is " ,me.name ,"and age is" ,me.age);

// let str1="hello",str3="hiii";
// console.log(str1.slice(0,3));
// console.log(str1.slice(3));

// let re=str1.concat(str3);
// console.log(re);

// console.log(str1.replace("o","w"))

// console.log(str1.charAt(3))


// // let user=prompt("ener name")
// // console.log("@"+user+user.length);

// let prices=[300,210,340,500,320];
// let marks=[20,30,12,33,15]
// let i=0;
// for(let val of prices){
//     let dis=val-val/10;
//     console.log(`discount is ${dis}`)
// }

// console.log(prices);

// prices.push(200,120)
// console.log(prices);
// prices.pop();
// console.log(prices);
// console.log(prices.toString());
// console.log(prices.concat(marks))
// marks.unshift(10,200)
// console.log(marks.shift())


// console.log(marks.slice(0,3));
// marks.splice(0,3,100)
// console.log(marks);

// let companies=["bloomberg","microsoft","uber","google","ibm","netflix"];
// console.log(companies);
// companies.shift();
// console.log(companies);
// companies.splice(1,1,"ola")
// console.log(companies);
// companies.pop();
// console.log(companies);
// companies.push("amazon");
// console.log(companies);


// function myfun(msg){
//     console.log("hii");
//     console.log(msg)
// }

// myfun("hello");



// marks.forEach((val,idx,arr)=>{
// console.log(val*val,idx,arr);
// });

// let cal=(val,idx,arr)=>{
//     console.log(val*val,idx,arr);
//     };
// marks.forEach(cal);

// let calsq= marks.map((val)=>{
//     return (val*val);
//     });

//     console.log(calsq)

// let even= marks.filter((val)=>{
//     return val%2==0;
//     });

//     console.log(even)
// let marks=[30,20,23]

// let output=marks.reduce((res,curr)=>{
//     return res<curr? res:curr;
// });

// console.log(output);

// let calsq= marks.filter((val)=>{
//     return val>20;
//     });

//     console.log(calsq)

// let n=prompt("enter a number");

// let arr=[];
// for(let i=1;i<=n;i++){
//     arr[i-1]=i;
// }

// // let sum=arr.reduce((res,curr)=>{
// //     return res+curr;
// // });

// // console.log(sum);

// let mul=arr.reduce((res,curr)=>{
//     return res*curr;
// });

// console.log(mul)

// let head=document.querySelector("head");
// console.dir(head.innerText);

// head.innerText=head.innerText+"yes thanks"
// console.log(head)

// let div=document.querySelectorAll("div");
// for(ele of div){
// ele.innerText="unique"
// console.log(ele)
// }
// div[0].innerText="first box"

// getAttribute set
// let para=document.querySelectorAll("p");
// para.style.backgroundColor="green"


// let create=document.createElement("button");
// create.innerText="button";
// console.log(create)

// let parag=document.querySelector("p")
//     parag.append(create)

// let parag=document.querySelector("p")
//     parag.after(create)


// let newp=document.createElement("h5");
// newp.innerText="this is h5 tag";
// console.log(newp);

// let ab=document.querySelector("p");
// ab.append(newp);

// let div=document.querySelector("div")
// div.appendChild[0](newp)

// let para=document.querySelector("p");



// let btn=document.querySelector(".btn");

// btn.onclick=(evt)=>{
//     console.log(evt);
//     console.log(evt.type)
//     console.log("clicked yaa")
//     let a=25;
//     a++;
//     console.log(a);
// }
    
// btn.addEventListener("click",()=>{
//     console.log("button clicked");
// });

// btn.addEventListener("click",()=>{
//     console.log("button clicked-2");
// });

// const remover=()=>{
//     console.log("removed");
// }

// btn.addEventListener("click",remover)
// btn.addEventListener("click",()=>{
//     console.log("button clicked-3");
// });

// btn.removeEventListener("click",remover)

// let tog=document.querySelector(".tog")
// let body=document.querySelector("body")
// let currmode="light";

// tog.addEventListener("click",()=>{
//     if(currmode==="light"){
//     currmode="dark"
//     body.classList.add("dark");
//     body.classList.remove("light")
//     }else{
//          currmode="light"
//          body.classList.add("light")
//          body.classList.remove("dark")

//     }
//     console.log(currmode)

//     });

// const student={
//     name:"andy",
//     number:20,
//     print:function(){
//         console.log("age",age)
//     }
// }

// const boy={
//     name:"krish",
// }

// boy.__proto__=student;


// class toyota{
//     constructor(brand,name){
//         console.log("hii")
//         this.brand=brand
//         this.name=name
//     }
//     start(){
//         console.log("start");
//     }
//     stop(){
//             console.log("stop");

//     }


// }

// class toy extends toyota {

//     constructor(branch,name){
//         super(name);
//         this.branch=branch;
//     }
//         s(){
//         super.start()
//         }
    
// }

// let fortuner = new toyota("fortunerrr")
// console.log(fortuner)

// let leg = new toy("it","andy")


// let x=1
// let y=20

// console.log(a+b)
// try{
//     console.log(a+c)
// }catch(err){
//     console.log(err)
// }

// console.log("a")
// setTimeout(()=>{
//     console.log("b")
        
// }),2000;
// console.log("c");

// let sum=(a,b)=>{
//     console.log( a+b)
// }

// function cal(a,b,sum){
//     sum(a,b)

// }

// cal(10,20,sum)


// function getdata(data1,data2){
//     setTimeout(()=>{
//         console.log(data1)
//        if(data2){
//         data2();
//        }
//     },2000);
// }
    

// getdata(1,()=>{
//     getdata(2,()=>{
//         getdata(3,()=>{
//             getdata(4)
//         })
//     });
// })

// let promise= new Promise((resolve,reject) => {
//   console.log("i am a promise");
//   resolve(123);
// });

// function getdata(data1,data2){
//     return new Promise((resolve,reject) => {
      
//     setTimeout(()=>{
//         // console.log(data1)
//         // resolve("success")
//         reject("errer")
//        if(data2){
//         data2();
//        }
//     },5000);
// })
// }



const getpromise=()=>{
    return new Promise ((resolve,reject)=>{
        setTimeout(()=>{
            console.log("fun1")
            resolve("solved")
        },2000)
   
});
}
// console.log("fetching 1")
// let promise=getpromise();
// promise.then((res)=>{
//     console.log("promise resolved1",res)
//     console.log("fetching2")
//     let promise2=getpromise();
//     promise2.then((res)=>{
//         console.log("promise resolved2",res)
//     });
// });

// console.log("fetching 1")
// getpromise().then((res)=>{
//     console.log("promise resolved1",res)
//     console.log("fetching2")
// getpromise().then((res)=>{
//         console.log("promise resolved2",res)
//     });
// });

// console.log("fetching 1")
// getpromise().then((res)=>{
//     console.log("promise resolved1",res)
//     console.log("fetching2")
// return getpromise()}).then((res)=>{
//     console.log("promise resolved2",res)
//     console.log("fetching3")
//     return getpromise()}).then((res)=>{
//         console.log("promise resolved3",res)
//     });


// function api() {
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("weather data");
//             resolve("success")
//         },2000);
//     });
// }

// async function getdata() {
//     await api();
//     await api();
// }

// async function getall() {
//     console.log("getting 1")
//  await getpromise();  
//  console.log("getting 2")
//  await getpromise();  
//  console.log("getting 3")
//  await getpromise();  
//  console.log("getting 4")
//  await getpromise();  
//  console.log("getting 5")
//  await getpromise();  
//  console.log("getting 6")
//  await getpromise();  
//  console.log("getting 7")
//  await getpromise();  
// }

// (async function () {
//     console.log("getting 1")
//  await getpromise();  
//  console.log("getting 2")
//  await getpromise();  
//  console.log("getting 3")
//  await getpromise();  
//  console.log("getting 4")
//  await getpromise();  
//  console.log("getting 5")
//  await getpromise();  
//  console.log("getting 6")
//  await getpromise();  
//  console.log("getting 7")
//  await getpromise();  
// })();



const URL="https://example-api.p.rapidapi.com/endpoint";

const getdata=async()=>{
    console.log("getting data...")
    let response=await fetch(URL);
    console.log(response.status)
};