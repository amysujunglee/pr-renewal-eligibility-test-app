const addBtn = document.querySelector('.btn-add');
const departDate = document.querySelector('.depart-date');
const arrivalDate = document.querySelector('.arrival-date');
const showTotalDays = document.querySelector('.show-total-days');
const calculateTotalDays = document.querySelector('.btn-calculate-total-days');

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

    let sumTodalDays = 0;
    document.querySelectorAll('.total-days').forEach(eachDays => {
        let daysToNumber = Number(eachDays.textContent);
        sumTodalDays += daysToNumber;
    });

    console.log(sumTodalDays);
    calculateTotalDays.addEventListener('click', () => {
        showTotalDays.append(`Total days: ${sumTodalDays}`);
    })
});
