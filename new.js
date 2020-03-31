var semester = 5;
var plan_prices = new Array();
var services_prices = new Array();
var servicePrice = 0;

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
          declareArrays(); // based on the value of the semester selected, this function uses a switch statement to push those values into the arrays
          break;
    }
  }
  return semester;
}

function declareArrays() {
  switch (semester) {
    case "0": //full-now
      plan_prices.push(188.58); //0 - Guaranteed - Resident
      plan_prices.push(173.65); //1 - Variable - Resident
      plan_prices.push(478.57); //2- Grad - Resident
      services_prices.push(122.53); //0 - Guaranteed
      services_prices.push(122.53); //1 - Variable - Resident
      services_prices.push(148.76); //2 - Grad - Resident
      return;
      //break;
    case "1": //half-now
      plan_prices.push(94.29); //Guaranteed - Resident
      plan_prices.push(198.09); // Variable - Resident
      plan_prices.push(239.28); // Grad - Resident
      services_prices.push(11.265); //0 - Guaranteed
      services_prices.push(11.265); //1 - Variable - Resident
      services_prices.push(24.38); //2 - Grad - Resident
      return;
    case "2": //full-next
      plan_prices.push(9004.29); //Guaranteed - Resident
      plan_prices.push(10098.09); // Variable - Resident
      plan_prices.push(20039.28); // Grad - Resident
      services_prices.push(20022.53); //0 - Guaranteed
      services_prices.push(20022.53); //1 - Variable - Resident
      services_prices.push(20048.76); //2 - Grad - Resident
      return;
    case "3": //half-next
      plan_prices.push(904.29); //Guaranteed - Resident
      plan_prices.push(1098.09); // Variable - Resident
      plan_prices.push(2039.28); // Grad - Resident
      services_prices.push(1011.265); //0 - Guaranteed
      services_prices.push(1011.265); //1 - Variable - Resident
      services_prices.push(1024.38); //2 - Grad - Resident
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
       planPrice = plan_prices[selectedPlan[i].value];
       servicePrice = services_prices[selectedPlan[i].value];
       break;
     }
   }
   return planPrice;
}

function displayHours(){
   var hours = document.getElementById("semesterHours").value;
   var plan = getPlanPrice();
   var cost;
   var servicecost;
   servicecost = hours * servicePrice;
   cost = hours * plan;
   cost = cost + servicecost + 100.00;
   cost = cost.toFixed(0);
   return cost;
}


function calculateTotal() {
  getSemester(); // This functions runs prior so the appropriate semester values are loaded into the array
  var tuitionCost = displayHours();
    //display the result
  var divobj = document.getElementById('totalPrice');
  divobj.style.display = 'block';
  divobj.innerHTML = "Estimated Cost of Tuition: $" + tuitionCost;
}

function hideTotal() {
  var divobj = document.getElementById('totalPrice');
  divobj.style.display = 'none';
}

function resetForm() {
  document.getElementById("tuitionform").reset();
}
