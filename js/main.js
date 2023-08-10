const btnLang = document.getElementById("lang");
const html = document.getElementById("html");
const head = document.getElementById("head");
const body = document.getElementById("body");


btnLang.addEventListener("click" , ()=>{
    if(html.hasAttribute("dir")){
        html.removeAttribute("dir")
        body.classList.remove("rtl")
        btnLang.innerText = "AR";
    }else{
        html.setAttribute("dir" , "rtl")
        body.classList.add("rtl")
        btnLang.innerText = "EN";
    }
})