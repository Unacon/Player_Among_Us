const body = document.body;

/*
body.style.setProperty('--main-color','#ed53ba');
body.style.setProperty('--main-color-darker','#ad2cad');
*/
/* 
red: #bf1701 ; #770a37
blue: #5c53ed ; #2e2cad
pink: #ed53ba ; #ad2cad
green: #237e18 ; #134d28
Brown: #72491e ; #5e2714
*/
var color = ['#5c53ed','#bf1701','#ed53ba','#237e18','#72491e'];
var colordarker = ['#2e2cad','#770a37','#ad2cad','#134d28','#5e2714'];
var index = 0;


document.addEventListener('keydown', (event) =>{
    console.log(event.key);
    addColor(event.key);
})
console.log(color.length);

function addColor(key){
    if(index === color.length-1 && key === 'ArrowRight'){
        index = 0;
    }
    else if(index === 0 && key === 'ArrowLeft'){
        index = color.length-1;        
    }else if(key === 'ArrowRight'){
        index++;
    }else if(key === 'ArrowLeft'){
        index--;        
    }
    console.log(index,color[index]);

    body.style.setProperty('--main-color',color[index]);
    body.style.setProperty('--main-color-darker',colordarker[index]);
}




