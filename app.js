const addBtn = document.querySelector('.btn-add');
const departDate = document.querySelector('.depart-date');
const arrivalDate = document.querySelector('.arrival-date');

// const showResult = () => {

// };

addBtn.addEventListener('click', () => {
    let departDateVal = new Date(departDate.value).getTime();
    let arrivalDateVal = new Date(arrivalDate.value).getTime();
    let differenceInTime = arrivalDateVal - departDateVal;
    let differenceInDays = Math.ceil(differenceInTime / (1000 * 60 * 60 * 24));

    const resultContainer = document.querySelector('.show-result');
    const createListContainer = document.createElement('ul');
    createListContainer.innerHTML = `
        
    `;

    // showResult();
});

