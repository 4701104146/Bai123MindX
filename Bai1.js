const numA=document.getElementById("numA");
parseInt(numA)
const numB=document.getElementById("numB");
parseInt(numB)
const Btn=document.getElementById("Btn");
let test=0;
Btn.addEventListener("click",function(){
    if(numA.value==""||numB.value==""){
        alert("Vui lòng nhập số")
    }
    for(i=numA.value;i<=numB.value;i++){
        
        
        if(test*test<=i){
            if(test*test==i){
                let newNum=document.createElement('p');
                newNum.innerText=i;
                newNum.style.marginLeft="10px";
                document.querySelector(".listNum").appendChild(newNum);
            }
            test++;
        }
        
    }
})