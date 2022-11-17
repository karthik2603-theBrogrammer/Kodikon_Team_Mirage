const carpentry = document.getElementById('carpentry')
const result = document.getElementById('result');
const para = document.createElement('p');
const elements  = document.getElementsByClassName('voc');
const no = document.createElement("button");
const yes = document.createElement("button");

myInterval = setInterval(function click(){
    for (let i = 0; i < elements.length; i++){
        elements[i].addEventListener('click',()=>{
            para.innerText = "Would you like to go with "+ elements[i].id + "?"
            yes.innerHTML = 'Yes';
            no.innerHTML = 'No';
            clearInterval(myInterval);
        })

      }

},2)

result.appendChild(para);
result.appendChild(yes);
result.appendChild(no);


yes.addEventListener('click',()=>{
    result.removeChild(para);
    para.innerText = "Confirmed!"
    result.appendChild(para);
    result.removeChild(yes);
    result.removeChild(no);
})
no.addEventListener('click',()=>{
    result.removeChild(para);
    result.removeChild(yes);
    result.removeChild(no);

    para.innerText = "Re-enter Your Field";
    result.appendChild(para);
    myInterval = setInterval(function click(){
        for (let i = 0; i < elements.length; i++){
            elements[i].addEventListener('click',()=>{
                para.innerText = "Would you like to go with "+ elements[i].id + "?\n"
                yes.innerHTML = 'Yes';
                no.innerHTML = 'No';
                result.appendChild(yes);
                result.appendChild(no);
                clearInterval(myInterval);
                })
            }
        },2)
        
        
})
// result.appendChild(para);
