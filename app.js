var slider = document.getElementById("range");
var area=document.querySelector(".area");
var mergeSort=document.getElementById("merge");
var quicksort1=document.getElementById("quick1");
var bubblesort=document.getElementById("bubble");
var selectionsort=document.getElementById("selection");
var insertionsort=document.getElementById("insertion");
var len ;
len=slider.value;
console.log(len)
generateArray(len)
slider.oninput = function() {
  len=this.value
  console.log(len)
  generateArray(len)
}
function generateArray(len)
{
    console.log(len)
    let widthOfBar=Math.floor(1280/len);
    console.log(widthOfBar)
    array=[]
    for(let i=0;i<len;i++)
    {
        
        array.push(Math.floor((Math.random() * 40) + 5));
    }
    area.innerHTML='';
    for(let i=0;i<len;i++)
    {   
        let element=document.createElement('div')
        element.setAttribute('class','element');
        element.style.height=(array[i]*10)+"px";
        element.style.width=widthOfBar+"px"
        area.appendChild(element)
    }
    console.log(area)
    console.log(document.querySelector('.area').childElementCount);
}
let run=true;
let stop=false;
let pause=document.getElementById('pause')
let play=document.getElementById('play');
pause.addEventListener('click',()=>{

    if(run===true)
    {
        run=false;
    }
})
play.addEventListener('click',()=>{
    if(run==false)
    {
        run=true;
    }
})
async function pauseAnimation () {
while(run==false)
    await sleep(10);
return;
}
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
 bubblesort.addEventListener('click', async()=>{
    slider.disabled=true;

    mergeSort.disabled=true
    bubblesort.disabled=true
    selectionsort.disabled=true
    insertionsort.disabled=true

    run=true;
    let child=area.childNodes;
    console.log(child[0])
    for(let i=0;i<len;i++)
    {
        for(let j=0;j<len-i-1;j++)
        {
            child[j].style.backgroundColor='yellow';
            let h1=child[j].style.height;
            h1 =h1.substr(0, h1.length - 2);
            h1 = parseInt(h1);
            let h2=child[j+1].style.height;
            h2 = h2.substr(0, h2.length - 2);
            h2 = parseInt(h2);
            child[j+1].style.backgroundColor='red';
            await sleep(10);
            if(h1>h2)
            {
                child[j + 1].parentNode.insertBefore(child[j + 1], child[j]);
            }
            if(run===false)
            await pauseAnimation();
            child[j].style.backgroundColor = "blue";
            child[j + 1].style.backgroundColor = "blue";

        }
    }
    slider.disabled=false;

    mergeSort.disabled=false
    bubblesort.disabled=false
    selectionsort.disabled=false
    insertionsort.disabled=false
  
});
selectionsort.addEventListener('click', async()=>{
    slider.disabled=true;

    mergeSort.disabled=true
    bubblesort.disabled=true
    selectionsort.disabled=true
    insertionsort.disabled=true

    run=true;
    let child=area.childNodes;
    console.log(child[0])
    run=true
    for(let i=0;i<len;i++)
    {
        min_index=i;
        child[min_index].style.backgroundColor='yellow';
        for(let j=i+1;j<len;j++)
        {
            let h1=child[min_index].style.height;
            h1 =h1.substr(0, h1.length - 2);
            h1 = parseInt(h1);
            let h2=child[j].style.height;
            h2 = h2.substr(0, h2.length - 2);
            h2 = parseInt(h2);
            child[j].style.backgroundColor='red';
            await sleep(10);
            if(h1>h2)
            {
                child[min_index].style.backgroundColor='blue';
                min_index=j;
                child[j].style.backgroundColor='yellow'
            }
            else{
                child[j].style.backgroundColor='blue';
            }
            if(run===false)
            await pauseAnimation();
        }
        
        child[min_index].parentNode.insertBefore(child[min_index], child[i]);
        child[min_index].style.backgroundColor = "blue";
        child[i].style.backgroundColor = "blue";
        
    }
    slider.disabled=false;
    quicksort1.disabled=false;

    mergeSort.disabled=false
    bubblesort.disabled=false
    selectionsort.disabled=false
    insertionsort.disabled=false
   
});
mergeSort.addEventListener('click', async ()=>{
    slider.disabled=true;

    mergeSort.disabled=true
    bubblesort.disabled=true
    selectionsort.disabled=true
    insertionsort.disabled=true

    run=true;
    let child=area.childNodes;
    console.log(child[0])
    run=true
    await merge(0,len-1);
    slider.disabled=false;

    mergeSort.disabled=false
    bubblesort.disabled=false
    selectionsort.disabled=false
    insertionsort.disabled=false
       

})

async function merge(l,r){
    if(l<r)
    {
        let child=area.childNodes;
        let mid=Math.floor((r+l)/2);
        await merge(l,mid);
        await merge(mid+1,r);
        await mergesort(l,mid,r);
        await sleep(10);
        if(run===false)
            await pauseAnimation();
    }
    
}
async function mergesort(l,mid,r)
{
    temp_arr=[];
    let child=area.childNodes;
    let i=l
    let j=mid+1;
    while(i<=mid&&j<=r)
    {
        child[i].style.backgroundColor = "yellow";
        child[j].style.backgroundColor = "red";
        if(run===false)
            await pauseAnimation();
        await sleep(10);
        child[i].style.backgroundColor = "blue";
        child[j].style.backgroundColor = "blue";
        if(array[i]<=array[j])
        {
            temp_arr.push(array[i]);
            i++;
        }
        else{
            temp_arr.push(array[j]);

            j++;
        }
    }
    while(i<=mid)
    {
        
        temp_arr.push(array[i]);
        i++;
    }
    while(j<=r)
    {
        
        temp_arr.push(array[j]);
        j++;
    }
    let k=0;
    for(let i=l;i<=r;i++)
    {
        array[i]=temp_arr[k];
        k++;
    }
    if(run===false)
            await pauseAnimation();
    let widthOfBar=Math.floor(1280/len);
    for(let i=l;i<=r;i++)
    {   
        child[i].style.height=(array[i]*10)+"px";
    }
}

insertionsort.addEventListener('click',async ()=>{
    let key;
    slider.disabled=true;
    mergeSort.disabled=true
    bubblesort.disabled=true
    selectionsort.disabled=true
    insertionsort.disabled=true
    run=true;
    run=true;
    let child=area.childNodes;
    for(let i=1;i<array.length;i++)
    {
        let j=i-1;
        key=array[i];
        child[i].style.backgroundColor="yellow";
        while(j>=0&&array[j]>key)
        {
            child[j].style.backgroundColor="red"
            
                array[j+1]=array[j];
                child[j+1].style.height=(array[j]*10)+"px";
            if(run===false)
            {
                await pauseAnimation();
            }
            await sleep(10);
            child[j].style.backgroundColor="blue"
            j--;
            
        }
        child[i].style.backgroundColor="blue";
        child[j+1].style.height=(key*10)+"px"
        array[j+1]=key;
    }

    mergeSort.disabled=false
    bubblesort.disabled=false
    selectionsort.disabled=false
    insertionsort.disabled=false

})

