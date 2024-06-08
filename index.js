let arr = JSON.parse(localStorage.getItem('arr'));
if(arr === null){
    arr = []
}
display();
function add(){
    const name = document.querySelector('.name');
    const date = document.querySelector('.date');
    if(name.value==='' && date.value==='' ){
        let p = document.querySelector('.base');
        p.innerHTML = "Task and date required";
        p.classList.remove('base');
        p.classList.add('error');
        setTimeout(()=>{
            p.classList.remove('error');
            p.classList.add('base');
        },1200)
        return;
    }
    else if(name.value === '' || date.value === '' ){
        let p = document.querySelector('.base');
        p.innerHTML = `${name.value ? "date required" : "Task required"} `;
        p.classList.remove('base');
        p.classList.add('error');
        setTimeout(()=>{
            p.classList.remove('error');
            p.classList.add('base');
        },1200)
        return;
       
    }
    const n = name.value;
    const d = date.value;
    arr.push({
        name:n,
        date:d
    });
    let p = document.querySelector('.base');
    p.innerHTML = "Task added Successfully.";
    p.classList.remove('base');
    p.classList.add('success');
    setTimeout(()=>{
        p.classList.remove('success');
        p.classList.add('base');
    },1200)
    name.value = '';
    date.value = '';
    display();
    localStorage.setItem('arr',JSON.stringify(arr));
    console.log(arr);

}
function del(){
    let p = document.querySelector('.base');
        p.innerHTML = "Task Deleted Successfully.";
        p.classList.remove('base');
        p.classList.add('delete');
        setTimeout(()=>{
            p.classList.remove('delete');
            p.classList.add('base');
        },1200);
}
function display(){
    let show = ``;
    for(let i = 0;i<arr.length;i++){
        show+=`<div class="container"><p class="pp">${arr[i].name}</p><p class="pp">${arr[i].date}</p><button class="t-btn" onclick="arr.splice(${i},1);localStorage.setItem('arr',JSON.stringify(arr));display();del();">delete</button></div>`;
    }
    if(arr.length === 0){
        document.querySelector('.container-main').innerHTML = `<p class="tsk">No Tasks.</p>`;
        localStorage.removeItem('arr');
        return;    
    }
    document.querySelector('.container-main').innerHTML = show;
    
}

