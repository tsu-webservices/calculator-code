var semester;
var student;
var plan_prices = new Array();
var services_prices = new Array();
var servicePrice = 0;
var gradhours = document.getElementById("gradhours");
var undergradhours = document.getElementById("undergradhours");
gradhours.visibility = "hidden";

function getStudent()//this reads the value of the selected semester
{
  student = 2;
  var theForm = document.forms["tuitionform"];
  var selectedStudent = theForm.elements["Student"];
  for(var i = 0; i < selectedStudent.length; i++)
  {
    if(selectedStudent[i].checked)
    {
      student = selectedStudent[i].value;
          //declareValues(); // based on the value of the semester selected, this function uses a switch statement to push those values into the arrays
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

function declareValues() {
  switch (semester) {
    case "0": //full-now (Fall/Spring 2019-2020)
      plan_prices.push(188.58); //0 - Guaranteed - Resident
      plan_prices.push(173.65); //1 - Variable - Resident
      plan_prices.push(229.81); //2- Grad - Resident
      services_prices.push(122.53); //0 - Guaranteed - Resident
      services_prices.push(122.53); //1 - Variable - Resident
      services_prices.push(148.76); //2 - Grad - Resident
      return;
      //break;
    case "1": //half-now (Summer 2019-2020)
      plan_prices.push(94.29); //Guaranteed - Resident
      plan_prices.push(198.09); // Variable - Resident
      plan_prices.push(114.91); // Grad - Resident
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


function calculateUndergrad(){
  var cost;
  var servicecost;
  var hours = document.getElementById("semesterUndergradHours").value;
  var plan = getPlanPrice();
  servicecost = hours * servicePrice;
  cost = hours * plan;
  cost = cost + servicecost + 100.00; // $100 is the Flat fee for Recreation Center
  cost = cost.toFixed(2); // removes the decimals
   return cost;
}

function calculateGrad(){
  var cost;
  var servicecost;
  var hours = document.getElementById("semesterGradHours").value;
  var plan = plan_prices[2]; //identifies which tuition fee is selected
  servicePrice = services_prices[2]; // identifies which services fee is selected
  servicecost = hours * servicePrice;
  cost = hours * plan;
  cost = cost + servicecost + 100.00; // $100 is the Flat fee for Recreation Center
  cost = cost.toFixed(2); // removes the decimals
   return cost;
}


function calculateTotal() {
  var tuitionCost;
  var tuitionrates = document.getElementById('tuitionRates');
  if (getStudent() == 1 ){
   tuitionrates.style.display = "none";
   undergradhours.style.display = "none";
   gradhours.style.display = "block";
   getSemester();
   tuitionCost = calculateGrad();
  } else {
    tuitionrates.style.display = "block";
    getSemester(); // This functions runs prior so the appropriate semester values are loaded into the estimator
    tuitionCost = calculateUndergrad(); // runs calculations of cost based on number of hours selected
  }
  return tuitionCost;
}

function displayCost(){
  var tuitionCost = calculateTotal();
  var divobj = document.getElementById('totalPrice');
  divobj.style.display = "block";
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
