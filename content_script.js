try{document.querySelector("#robot").click()}
catch(e){

}
try{document.querySelector("#rtg-snp21").querySelector(".rtg_btn").click()}
catch(e){

}
try{document.querySelector("#rtg").submit()}
catch(e){

}
try{document.querySelector("#rtg-snp2").click()}
catch(e){
    try{
        document.querySelector("#open-continue-btn").click()
        }
        catch(e){
           
        }
}

try{
    document.querySelector("#open-continue-btn").parentElement.click() 
}
catch(e){}

try{
    document.querySelector("#countdown").parentElement.getElementsByTagName("a")[0].click() 
}
catch(e){}

try{document.querySelector("#rtg-snp21").children[0].click()}catch{}
