let img=document.getElementById('image');
let increaseBtn= document.getElementById('increaseBtn');
let decreaseBtn= document.getElementById('decreaseBtn');

increaseBtn.addEventListener ('click', () =>{
    img.width += 30;
});
decreaseBtn.addEventListener ('click', () =>{
    if(img.width > 30){
        img.width -= 30;
    }
});

// 2. ტექსტის ფერის ცვლილება
let text=document.getElementById('text');
let colors = ['Red','Green','Blue','Yellow','Orange'];
let index=0;
document.getElementById('colorBtn').addEventListener('click',()=> {
    text.style.color=colors[index];
    text.textContent = `ფერი: ${colors[index]}`;
    index=(index+1) %colors.length;
});

// 3. კონტენტის ჩვენება/დამალვა
let content= document.getElementById('content');
document.getElementById('toggleBtn').addEventListener('click', ()=>{
    content.style.display=content.style.display==='none'? 'block' : 'none';
});


