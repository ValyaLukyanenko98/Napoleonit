let table = document.getElementById('table');

let text = 'Advertising companies say advertising is necessary and important. It informs people about new products';

let textArray = text.split(' ');


textArray.forEach((element, index) => {
    let tr = document.createElement('tr');
    let tdNumber = document.createElement('td');
    let td = document.createElement('td');
    td.innerText = element;
    tdNumber.innerText = index+1;
    tr.appendChild(tdNumber);
    tr.appendChild(td);
    table.appendChild(tr);
});