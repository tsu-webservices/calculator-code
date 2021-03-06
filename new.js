var semester;
var plan_prices = new Array();
var services_prices = new Array();
var servicePrice = 0;


function getStudent() // this reads the value of the selected semester
{
  student;
  var theForm = document.forms["tuitionform"];
  var selectedStudent = theForm.elements["Student"];
  for(var i = 0; i < selectedStudent.length; i++)
  {
    if(selectedStudent[1].checked)
    {
      student = selectedStudent[1].value;
        var tuitionrates = document.getElementById('tuitionRates');
        tuitionrates.style.display = 'none';
          declareArrays(); // based on the value of the semester selected, this function uses a switch statement to push those values into the arrays
          break;
    }
  }
  return student;
}


function getSemester() // this reads the value of the selected semester
{
  semester = 0;
  var theForm = document.forms["tuitionform"];
  var selectedSemester = theForm.elements["Semester"];
  for(var i = 0; i < selectedSemester.length; i++)
  {
    if(selectedSemester[i].checked)
    {
      semester = selectedSemester[i].value;
          declareValues(); // based on the value of the semester selected, this function uses a switch statement to push those values into the arrays
          break;
    }
  }
  return semester;
}

function declareUndergradValues() {
  switch (semester) {
    case "0": //full-now (Fall/Spring 2019-2020)
      plan_prices.push(188.58); //0 - Guaranteed - Resident
      plan_prices.push(173.65); //1 - Variable - Resident
      plan_prices.push(478.57); //2- Grad - Resident
      services_prices.push(122.53); //0 - Guaranteed - Resident
      services_prices.push(122.53); //1 - Variable - Resident
      services_prices.push(148.76); //2 - Grad - Resident
      return;
      //break;
    case "1": //half-now (Summer 2019-2020)
      plan_prices.push(94.29); //Guaranteed - Resident
      plan_prices.push(198.09); // Variable - Resident
      plan_prices.push(239.28); // Grad - Resident
      services_prices.push(61.26); //0 - Guaranteed
      services_prices.push(61.26); //1 - Variable - Resident
      services_prices.push(74.38); //2 - Grad - Resident
      return;
    case "2": //full-next - (Fall/Spring 2020-2021)
      plan_prices.push(235.79); //Guaranteed - Resident
      plan_prices.push(179.04); // Variable - Resident
      plan_prices.push(235.79); // Grad - Resident
      services_prices.push(164.83); //0 - Guaranteed - Resident
      services_prices.push(137.91); //1 - Variable - Resident
      services_prices.push(164.83); //2 - Grad - Resident
      return;
    case "3": //half-next (Summer 2020-2021)
      plan_prices.push(117.89); //Guaranteed - Resident
      plan_prices.push(89.52); // Variable - Resident
      plan_prices.push(117.89); // Grad - Resident
      services_prices.push(82.41); //0 - Guaranteed
      services_prices.push(68.95); //1 - Variable - Resident
      services_prices.push(82.41); //2 - Grad - Resident
      return;
    default:
      semesterSelection = 'no';
      return semesterSelection;
  }
}


function getPlanPrice(){
   var planPrice = 0;
   var theForm = document.forms["tuitionform"];
   var selectedPlan = theForm.elements["tuitionPlan"];
   for(var i = 0; i < selectedPlan.length; i++)
   {
     if(selectedPlan[i].checked)
     {
       planPrice = plan_prices[selectedPlan[i].value]; //identifies which tuition fee is selected
       servicePrice = services_prices[selectedPlan[i].value]; // identifies which services fee is selected
       break;
     }
   }
   return planPrice;
}


function showHours(){ //slider function
var slider = document.getElementById("selectedHours");
var output = document.getElementById("demo");
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
}
}

function displayHours(){
  var cost;
  var servicecost;
  var hours = document.getElementById("semesterHours").value;
  var plan = getPlanPrice();
  servicecost = hours * servicePrice;
  cost = hours * plan;
  cost = cost + servicecost + 100.00; // $100 is the Flat fee for Recreation Center
  cost = cost.toFixed(0); // removes the decimals
   return cost;
}


function calculateTotal() {
  getSemester(); // This functions runs prior so the appropriate semester values are loaded into the estimator
  var tuitionCost = displayHours(); // runs calculations of cost based on number of hours selected
  var divobj = document.getElementById('totalPrice');
  divobj.style.display = 'block';
  divobj.innerHTML = "Estimated Cost of Tuition: $" + tuitionCost; //display the result
}

function hideTotal() {
  var divobj = document.getElementById('totalPrice');
  divobj.style.display = 'none';
}

function resetForm() { //reset form fields
  document.getElementById("tuitionform").reset();
  var cost = document.getElementById('totalPrice');
  cost.style.display = 'none';
}
