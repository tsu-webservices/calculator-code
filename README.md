# Tuition Estimator
Gives prospectives, parents and current students the ability to view an estimation of the cost of their tuition.

Built with:

- Vanilla Javascript
- Basic HTML Form

Form includes:

- Student Type
- Semester of Study(3 at a time always on display)
- Tuition Plan
- Credit Hours

Built by the Web Services team

## How to Update:
As every new academic year approach, the estimator must be updated with numbers provided by Business Services.

The following values are to be updated in the HTML/Javascript

- `var campusrec` one time fee
- Tuition Rates & Service fees that are being loaded into `tuition_rate` and `service_fees` in the function `declareValues()`:


| `Case"0"`:              | Fall/Spring/Summer Current Academic Year |
|-------------------------|------------------------------------------|
| `tuition_rate.push(x);` | Guaranteed Rate                          |
| `tuition_rate.push(x);` | Variable Rate - Resident                 |
| `tuition_rate.push(x);` | Variable Rate - Non-Resident             |
| `tuition_rate.push(x);` | Grad Rate - Resident                     |
| `tuition_rate.push(x);` | Grad Rate - Non-Resident                 |
| `service_fees(x);`      | Guaranteed Rate                          |
| `service_fees(x);`      | Variable Rate                            |
| `service_fees(x);`      | Grad Rate                                |

| `Case"1":`              | Fall/Spring/Summer Next Academic Year    |
|-------------------------|------------------------------------------|
| `tuition_rate.push(x);` | Guaranteed Rate                          |
| `tuition_rate.push(x);` | Variable Rate - Resident                 |
| `tuition_rate.push(x);` | Variable Rate - Non-Resident             |
| `tuition_rate.push(x);` | Grad Rate - Resident                     |
| `tuition_rate.push(x);` | Grad Rate - Non-Resident                 |
| `service_fees(x);`      | Guaranteed Rate                          |
| `service_fees(x);`      | Variable Rate                            |
| `service_fees(x);`      | Grad Rate                                |

If updating to include both Current and Next Academic Years, update the `value` of the Semester in the HTML Form I.E.:

`<label class="radiolabel">
<input type="radio" name="Semester" value="0" />Spring 2021</label>`

`<label class="radiolabel"><input type="radio" name="Semester" value="0" />Summer 2021</label>`

`<label class="radiolabel"><input type="radio" name="Semester" value="1" />Fall 2021</label>`
 

## Functionality Breakdown

`caulculateTotal()` - runs when user clicks button [View Estimated Cost] Identifies student type(`getStudent()`) and semester(`getSemester()`), based on student type selected, `calculateUndergrad()` or `calculateGrad()` will run and produce cost tuition+fees. When Graduate student type is selected, Tuition Plan type will disspear as this only applies to Undergraduate students. 

`declareValues()` - runs during `getSemester()`, and based on semester selected will go through a Switch statement and load 5 types of tuition rates, and 3 types Service Fee combinations into 2 arrays(service_fees & tution_rate) that will be used to produce unique cost Semester(case).

`calculateNRUndergrad()` & `calculateNRGrad()` - Calculate the cost Tuition & Fees for Non State Residents. Pulling the Non-Resident rate and fees directly from the arrays unlike `calculateUndergrad()` and `calculateGrad()`. Applicable to only Undergraduate Variable, and Graduate.

`displayCost()` - takes the total produced from `calculateTotal()` and places it in a empty HTML div `id="totalPrice"`, while also running `displayNRCost()`, and displaying the Non State Resident Cost in a div with the `id="totalNRPrice"` too when applicable.

`resetForm()` - resets the form fields and outputs.

[^1]: NR represents Non State Resident