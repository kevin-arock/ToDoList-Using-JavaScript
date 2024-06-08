const arr = [];
function add(){
    const name = document.querySelector('.name');
    arr.push(name.value);
    name.value = '';
    display();
    console.log(arr);

}

function display(){
    
        let tr = document.createElement('tr');
        let sno = document.createElement('td');
        let td = document.createElement('td');
        let del = document.createElement('td');
        sno.innerHTML = `${arr.length}`;
        del.innerHTML = `<button>delete</button>`
        td.innerHTML = `${arr[arr.length-1]}`;
        tr.appendChild(sno);
        tr.appendChild(td);
        tr.appendChild(del); 
        document.querySelector('.here').appendChild(tr);
    
}

