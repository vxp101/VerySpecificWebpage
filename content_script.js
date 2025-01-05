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
