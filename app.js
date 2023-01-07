const addBtn = document.querySelector('.btn-add');
const departDate = document.querySelector('.depart-date');
const arrivalDate = document.querySelector('.arrival-date');

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

    const showTotalDays = document.querySelector('.show-total-days');
    if (differenceInDays) {
        let array = [];
        document.querySelector('.total-days').map(days => {
            array.push(days);
        })
        showTotalDays.append(Number(differenceInDays));

        console.log(array);

        console.log(showTotalDays.innerText)
        totalDaysList = showTotalDays.innerText;

    } else {
        console.log('error!');
    }

    // let array = [];
    // array.push(...differenceInDays)
    // console.log(array);

});
