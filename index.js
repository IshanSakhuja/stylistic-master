console.log("Inside Index.js")
if(localStorage.getItem('count') == null){
    localStorage.setItem('count',0);
}
let arr1 = [];
let count = 1;
while(localStorage.getItem('NFT'+count) != null){
    arr1.push(localStorage.getItem('NFT'+count));
    ++count;
}
console.log(arr1.length);
let arrnew = [];
for(let i=0;i<arr1.length;i++){
        arrnew.push(document.getElementsByClassName(arr1[i]));
}
console.log(arrnew)
for(let i=0;i<arrnew.length;i++){
    let ishan = arrnew[i];
    for(let j=0;j<ishan.length;j++){
        ishan[j].innerHTML = "SOLD";
    }
}
function checkNFT(){
    let nftId = document.getElementById("nftID").value;
    let name = document.getElementById("fullName").value;
    let mail = document.getElementById("mailAddress").value;
    let message = document.getElementById("message").value;
    if(checkmail(mail))
    {
        if(checkNFTID(nftId)){
            let value = localStorage.getItem('count');
            ++value;
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