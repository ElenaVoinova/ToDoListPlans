const inputElement = document.querySelector('.inputElement');
const btn = document.querySelector('.btn');
const toDoContainer = document.querySelector('.toDoContainer');

btn.addEventListener('click', () => {
    const item = document.createElement('li');
    item.innerText = inputElement.value;
    item.classList.add('toDoAdded');
    toDoContainer.appendChild(item);
    inputElement.value = '';

    item.addEventListener('click', () => {
        item.classList.add('toDoCompleted');
    })

    item.addEventListener('dblclick', () => {
        toDoContainer.removeChild(item);
    })
    
})