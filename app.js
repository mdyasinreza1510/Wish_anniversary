let btn2=document.querySelector("#scndbtn");
let main_msg=document.querySelector(".main-msg");
let currmode="cake"
let sngbtn=document.querySelector("#plmusic");
let  music=document.querySelector("#song");
btn2.addEventListener("click",() =>{
    // main_msg.classList.toggle("cake");
    // main_msg.classList.toggle("cutcake");
   if(currmode=="cake"){
    currmode="cutcake";
    main_msg.classList.add("cutcake");
    main_msg.classList.remove("cake");
    btn2.innerText="Y0u can cut again baby";
   
    
   }
   else{
    currmode="cake";
        main_msg.classList.add("cake");
        main_msg.classList.remove("cutcake");
        btn2.innerText="cut the cake darling❤️";

   }

})
let mode="pause";
sngbtn.addEventListener("click",() => {
    
    if (mode=="pause"){
        song.play();
        mode="play";
        sngbtn.innerText="pause❤️"

    }else{
        song.pause();
        mode="pause";
                sngbtn.innerText="play❤️";
        
    }
   

})
