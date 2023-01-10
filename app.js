const departDate = document.querySelector('.depart-date');
const arrivalDate = document.querySelector('.arrival-date');
const showTotalDays = document.querySelector('.show-total-days');

const addBtn = document.querySelector('.btn-add');
const calculateTotalDaysBtn = document.querySelector('.btn-calculate-total-days');
const clearBtn = document.querySelector('.btn-clear')

addBtn.addEventListener('click', () => {
    let departDateVal = new Date(departDate.value).getTime();
    let arrivalDateVal = new Date(arrivalDate.value).getTime();
    let differenceInTime = arrivalDateVal - departDateVal;
    let differenceInDays = Math.ceil(differenceInTime / (1000 * 60 * 60 * 24));

    const resultContainer = document.querySelector('.show-result');
    const createListContainer = document.createElement('ul');
    createListContainer.innerHTML = `
        <li>Departure date: ${departDate.value}</li>
        <li>Arrival date: ${arrivalDate.value}</li>
        <li>Total days: <span class="total-days">${differenceInDays}</span>days</li>
    `;

    resultContainer.append(createListContainer);
});

calculateTotalDaysBtn.addEventListener('click', () => {
    let sumTotalDays = 0;
    document.querySelectorAll('.total-days').forEach(eachDays => {
        let daysToNumber = Number(eachDays.textContent);
        sumTotalDays += daysToNumber;
    });

    let totalDaysMsg = document.createElement('p');
    totalDaysMsg.classList.add('total-days-msg');
    totalDaysMsg.innerText = `Total days: ${sumTotalDays}days`;

    showTotalDays.append(totalDaysMsg);

    let passMsg = document.createElement('p');
    passMsg.innerHTML = `You left Canada for ${sumTotalDays}days so you are <span class="eligible">eligible</span> to renew your PR card.`
    
    let failMsg = document.createElement('p');
    failMsg.innerHTML = `You left Canada for ${sumTotalDays}days so you are <span class="notEligible">NOT eligible</span> to renew your PR card.`

    if (sumTotalDays > 730) {
        showTotalDays.append(failMsg);
    } else {
        showTotalDays.append(passMsg)
    }
})

clearBtn.addEventListener('click', () => {
    const showResultContainer = document.querySelector('.show-result');
    showResultContainer.innerHTML = '';
    showTotalDays.innerHTML = '';
});

//copyright year
const copyrightDate = document.querySelector("#copyright-date");
copyrightDate.innerHTML = new Date().getFullYear();