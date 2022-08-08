let mol = document.querySelector(".mol");
let mkl = document.querySelector(".mkl");
let mk=document.querySelectorAll(".mk")
let mn = [
`<img src="./img (1).jpg" id="rcs" alt="">`,
`<img src="./img (2).jpg" id="rcs" alt="">`,
`<img src="./img (3).jpg" id="rcs" alt="">`,
`<img src="./img (4).jpg" id="rcs" alt="">`,
`<img src="./img (5).jpg" id="rcs" alt="">`

]


// let l=0
// let dd=setInterval(() => {
//     mol.innerHTML=mn[l]
//     l++
//     if (l>=mn.length) {
//         l=0
//     }
// }, 3000);


// mol.innerHTML=mn
// mkl.addEventListener("click", () => {
//     mol.innerHTML=mn[l]
//     l++
//     clearInterval(dd)

// if (l>=mn.length) {
//     l=0
// }
// });

// mk.forEach((item ,index) => {
//     item.addEventListener("click",()=>{

//         mol.innerHTML=mn[index]
//         clearInterval(dd)


//     })
// });

let mnu=document.querySelectorAll(".mn li")
let lop=document.querySelectorAll(".lop")



mnu.forEach(elo => {
    elo.addEventListener("click",()=>{
        lop.forEach(nt => {
            nt.style.display="none"
            
        });
        lk=document.querySelectorAll(elo.dataset.sol)
        lk.forEach(ep => {
ep.style.display="block"            
        });
    })
});

let mnoo=document.querySelector(".mnoo")
let nm=document.querySelector(".nm")
let nms=document.querySelectorAll(".nm img")
let u=0
let mno= [
    [
    `<img src="./img (1).jpg" id="rcs" alt="">`,
    `<img src="./img (2).jpg" id="rcs" alt="">`,
    `<img src="./img (3).jpg" id="rcs" alt="">`,
    `<img src="./img (4).jpg" id="rcs" alt="">`,
    ],
    [
        `<img src="./img (1).jpg" id="rcs" alt="">`,
        `<img src="./img (2).jpg" id="rcs" alt="">`,
        `<img src="./img (3).jpg" id="rcs" alt="">`,
        `<img src="./img (4).jpg" id="rcs" alt="">`,
           
    ],
    [
        `<img src="./img (1).jpg" id="rcs" alt="">`,
        `<img src="./img (2).jpg" id="rcs" alt="">`,
        `<img src="./img (3).jpg" id="rcs" alt="">`,
        `<img src="./img (4).jpg" id="rcs" alt="">`,
           
    ],
    [
        `<img src="./img (1).jpg" id="rcs" alt="">${u}`,
        `<img src="./img (2).jpg" id="rcs" alt="">${u}`,
        `<img src="./img (3).jpg" id="rcs" alt="">${u}`,
        `<img src="./img (4).jpg" id="rcs" alt="">${u}`,
           
    ],[
        `<img src="./img (1).jpg" id="rcs" alt="">`,
        `<img src="./img (2).jpg" id="rcs" alt="">`,
        `<img src="./img (3).jpg" id="rcs" alt="">`,
        `<img src="./img (4).jpg" id="rcs" alt="">`,
           
    ],
    ]




mnoo.addEventListener("click",()=>{
    u++
   nm.innerHTML+=`
   <div class="row text-center pt-5 pb-5 nm">

   <div class="col  ">
   ${mno[u]}
</div>
</div>

`+[u]
console.log(u)
if (u>=mno.length-1) {
mnoo.textContent="تم عرض الكل"
}
})

let klo=true

let con=document.querySelector(".con")
con.addEventListener("click",()=>{
for (let i = 0; i < 1000; i++) {
    if (i<2000) {
con.style.marginLeft="100px"
        i++
        
    }
}


})



//     if (klo===true) {
//     con.classList.add("conn")
//     klo=false
// }

// console.log("lklk")
// if (klo===false) {
//     con.classList.add("conn")
//     klo=true
//     console.log(";lllll;;;;;;")
// }