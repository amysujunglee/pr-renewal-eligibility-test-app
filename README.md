<a name="readme-top"></a>
# PR Renewal Eligibility Test App
A test app to calculate how many days the user was away from Canada and show if the user is eligible to renew the PR card.
<br><br>
In Canada 🇨🇦, every permanent resident should renew his/her PR card every 5 years. To be eligible for a PR card renewal, the person must have been in Canada for at least 730 days during the last five years. Thus, the test app calculates the total days of leaving the country and determines if the person is eligible for a PR card renewal.

## Languages
JavaScript, HTML, CSS

## Development steps
* Create departure and arrival dates fields
* Show each departure, arrival dates and total away days when clicking 'Add' button
* Calculate the sum of the total away days when clicking 'Calculate total days' button
* Show if the person is eligible for a PR card renewal with the total days
* Clear all the dates when clicking 'Clear days' button
* Give the CIC information with the CIC webpage link for more details at the top
* Style the page 👩🏻‍🎨

## Chellenges
- Getting the total away days
  - Changed the date value to time value using `getTime()`
  - Total days: arrival date - departure date (in time)
  - Changed the time value to date value again using `Math.ceil` and `1000 * 60 * 60 * 24`
- Appending the final total days and message
  - Added 'Calculate total days' button and created a function for the button

## Future improvements
- [ ] Add an error message
  - When there is no date inputs or when there is only one date input (departure or arrival date): 'Please select both departure and arrival dates'
- [ ] Store the data (localStorage)
- [ ] Create a React version (for my React.js skill)

## Known issues (Work in progress)
- [ ] When you keep clicking 'Calculate total days' button, it shows the exisitng total days and message over and over.

## Find a bug?
If you found an issue or would like to submit an improvement to this project, please submit an issue using the issues tab above. If you would like to submit a PR with a fix, reference the issue you created! Thank you ❤️

<p align="right">(<a href="#readme-top">back to top</a>)</p>
