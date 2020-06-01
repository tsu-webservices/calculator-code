var semester;
var student;
var reccenter = 100.00;
var plan_prices = new Array();
var service_fees = new Array();
var servicePrice = 0;
var gradhours = document.getElementById("gradhours");
var undergradhours = document.getElementById("undergradhours");
gradhours.visibility = "hidden"; //default hide grad hours

function calculateTotal() { //form functionality
  var tuitionCost;
  var tuitionrates = document.getElementById('tuitionRates');
  if (getStudent() == 1 ){
   tuitionrates.style.display = "none"; //Grad students do not have differing rate options
   undergradhours.style.display = "none"; // Hide 21 Undergrad hours
   gradhours.style.display = "block"; //Display 15 Grad hours
   getSemester(); // Identifies selected semester and loads appropriate costs
   tuitionCost = calculateGrad(); // Calculation of cost and fees for Grad
  } else {
    tuitionrates.style.display = "block"; //Displays 21 Undergrad hours
    getSemester(); // Identifies selected summer and loads appropriate costs
    tuitionCost = calculateUndergrad(); // Calculation of cost and fees for Undergrad
  }
  return tuitionCost;
}

function displayCost(){ //display the resident result
  var tuitionCost = displayNonResidentCost();
  var divobj = document.getElementById('totalPrice');
  divobj.style.display = "block";
  divobj.innerHTML = "$" + tuitionCost;
}

function displayNonResidentCost(){ //display the non-result
  var tuitionCost = calculateNonResidentUndergrad();
  var divobj = document.getElementById('totalNonResidentPrice');
  divobj.style.display = "block";
  divobj.innerHTML = "$" + tuitionCost;
}

function resetForm() { //reset form fields and output
  document.getElementById("tuitionform").reset();
  var cost = document.getElementById('totalPrice');
  cost.style.display = 'none';
}

function getStudent() // identifies student type
{
  student = 2;
  var theForm = document.forms["tuitionform"];
  var selectedStudent = theForm.elements["Student"];
  for(var i = 0; i < selectedStudent.length; i++)
  {
    if(selectedStudent[i].checked)
    {
      student = selectedStudent[i].value;
          break;
    }
  }
  return student;
}

function getSemester() // Identifies selected semester
{
  semester = 0;
  var theForm = document.forms["tuitionform"];
  var selectedSemester = theForm.elements["Semester"];
  for(var i = 0; i < selectedSemester.length; i++)
  {
    if(selectedSemester[i].checked)
    {
      semester = selectedSemester[i].value;
          declareValues(); // loads appropriate tuition rates based on selected semester
          break;
    }
  }
  return semester;
}

function calculateUndergrad(){ // Calculates the unique cost of a Undergrad Student
  var totalcost;
  var servicecost;
  var hours = document.getElementById("semesterUndergradHours").value; // identifies number of hours selected
  var tuitionplan = getPlanPrice(); //identifies the plan selected
  servicecost = hours * servicePrice;
  totalcost = hours * tuitionplan;
  totalcost = totalcost + servicecost + reccenter; // $100 is the Flat fee for Recreation Center
  totalcost = totalcost.toFixed(2); // fixes decimal display
   return cost;
}
function calculateNonResidentUndergrad(){ // Calculates the unique cost of a Undergrad Student
  var totalcost;
  var servicecost;
  var hours = document.getElementById("semesterUndergradHours").value; // identifies number of hours selected
  var tuitionplan = plan_prices[2]; //identifies the plan selected
  servicecost = hours * servicePrice;
  totalcost = hours * tuitionplan;
  totalcost = totalcost + servicecost + reccenter; // $100 is the Flat fee for Recreation Center
  totalcost = totalcost.toFixed(2); // fixes decimal display
   return cost;
}

function getPlanPrice(){ // Identifies selected Tuition and Services plan
   var planPrice = 0;
   var theForm = document.forms["tuitionform"];
   var selectedPlan = theForm.elements["tuitionPlan"];
   for(var i = 0; i < selectedPlan.length; i++)
   {
     if(selectedPlan[i].checked)
     {
       planPrice = plan_prices[selectedPlan[i].value]; //identifies which tuition fee is selected
       servicePrice = service_fees[selectedPlan[i].value]; // identifies which services fee is selected
       break;
     }
   }
   return planPrice;
}

function calculateGrad(){ // Calculates the unique cost for a Grad Student
  var cost;
  var servicecost;
  var hours = document.getElementById("semesterGradHours").value; //idenfities number of hours selected
  var plan = plan_prices[2]; // default selection of tuition plan rate
  servicePrice = service_fees[2]; // default selection of services fee
  servicecost = hours * servicePrice;
  cost = hours * plan;
  cost = cost + servicecost + reccenter; // $100 is the Flat fee for Recreation Center
  cost = cost.toFixed(2); // fixes decimal display
   return cost;
}

function calculateNonResidentGrad(){ // Calculates the unique cost for a Grad Student
  var cost;
  var servicecost;
  var hours = document.getElementById("semesterGradHours").value; //idenfities number of hours selected
  var plan = plan_prices[4]; // default selection of tuition plan rate
  servicePrice = service_fees[2]; // default selection of services fee
  servicecost = hours * servicePrice;
  cost = hours * plan;
  cost = cost + servicecost + reccenter; // $100 is the Flat fee for Recreation Center
  cost = cost.toFixed(2); // fixes decimal display
   return cost;
}

function declareValues() { // loads tuition rates and service fee prices based on semester selection
  switch (semester) {
    case "0": //full-now (Fall/Spring/Summer 2020-2021)
      plan_prices.push(235.79); //Guaranteed - Resident 0
      plan_prices.push(179.04); // Variable - Resident 1
      plan_prices.push(694.74); // Variable - Non-Resident 2
      plan_prices.push(235.79); // Grad - Resident 3
      plan_prices.push(10.00); // Grad - Non-Resident 4
      service_fees.push(164.83); //0 - Guaranteed - Resident
      service_fees.push(137.91); //1 - Variable - Resident
      service_fees.push(164.83); //2 - Grad - Resident
      return;
    case "1": //full-next - (Fall/Spring 2021-2022)
      plan_prices.push(0); //Guaranteed - Resident
      plan_prices.push(0); // Variable - Resident
      plan_prices.push(0); // Grad - Resident
      service_fees.push(0); //0 - Guaranteed - Resident
      service_fees.push(0); //1 - Variable - Resident
      service_fees.push(0); //2 - Grad - Resident
      return;
    default:
      semesterSelection = 'no';
      return semesterSelection;
  }
}
