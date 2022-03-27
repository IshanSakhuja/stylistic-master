function checkNFT(){
    if(localStorage.getItem('count') == null){
        localStorage.setItem('count',0);
    }
    console.log("Inside CheckNFT function");
    let nftId = document.getElementById("nftID").value;
    let name = document.getElementById("fullName").value;
    let mail = document.getElementById("mailAddress").value;
    let message = document.getElementById("message").value;
    console.log(nftId);
    if(checkmail(mail))
    {
        if(checkNFTID(nftId)){
            let value = localStorage.getItem('count');
            value = value + 1;
            localStorage.setItem('count',0);
            localStorage.setItem('count',value);
            localStorage.setItem('NFT'+value,nftId);
        }else{
            alert("NFT ID is not valid");
        }
    }else{
        alert("Your mail address is not valid");
    }
}
function checkmail(mail){
    console.log("Inside Check Mail");
    if(mail.includes("@"))
        return true;
    else
        return false;
}
function checkNFTID(nftID){
    let arr = [40,195,185,420,428,499,480,820,620,920,220];
    for(let i=0;i<arr.length;i++)
    {
        if(arr[i] == nftID)
            return true;
    }
    return false;
}