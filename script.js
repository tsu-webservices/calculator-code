 var classification_prices = new Array();
  classification_prices["Class5"]=5;
  classification_prices["Class10"]=10;

 var semester_prices = new Array(); //3 active options
  semester_prices["Full-now"]=2;
  semester_prices["Half-now"]=1;
  semester_prices["Full-next"]=8;
  //semester_prices["Half-next"]=4;

 var plan_prices = new Array();
 	plan_prices["Variable"]=30;
 	plan_prices["Guarenteed"]=60;

 var first_semester = new Array();
 	first_semester["Yes"]=20;
 	first_semester["No"]=30;

var hour_prices = new Array();
   hour_prices["None"]=0;
   hour_prices["one"]=1;
   hour_prices["two"]=2;
   hour_prices["three"]=3;
   hour_prices["four"]=4;
   hour_prices["five"]=5;
   hour_prices["six"]=6;
   hour_prices["seven"]=7;
   hour_prices["eight"]=8;
   hour_prices["nine"]=9;
   hour_prices["ten"]=10;
   hour_prices["eleven"]=11;
   hour_prices["twelve"]=12;
   hour_prices["thirteen"]=13;
   hour_prices["fourteen"]=14;
   hour_prices["fifteen"]=15;
   hour_prices["sixteen"]=16;
   hour_prices["seventeen"]=17;
   hour_prices["eightteen"]=18;
   hour_prices["nineteen"]=19;
	 
function getClassificationPrice()
{  
    var classificationPrice=0;
    var theForm = document.forms["tuitionform"];
    //Get a reference to the cake the user Chooses name=selectedCake":
    var selectedClass = theForm.elements["Classification"];
    //Here since there are 4 radio buttons selectedCake.length = 4
    //We loop through each radio buttons
    for(var i = 0; i < selectedClass.length; i++)
    {
        //if the radio button is checked
        if(selectedClass[i].checked)
        {
            //we set classificationPrice to the value of the selected radio button
            //i.e. if the user choose the 8" cake we set it to 25
            //by using the cake_prices array
            //We get the selected Items value
            //For example cake_prices["Round8".value]"
            classificationPrice = classification_prices[selectedClass[i].value];
            //If we get a match then we break out of this loop
            //No reason to continue if we get a match
            break;
        }
    }
    //We return the classificationPrice
    return classificationPrice;
}

function getSemesterPrice()
{
	var semesterPrice=0;
	var theForm = document.forms["tuitionform"];
	var selectedSemester = theForm.elements["Semester"];
	for(var i = 0; i < selectedSemester.length; i++)
	{
		if(selectedSemester[i].checked)
		{
			semesterPrice = semester_prices[selectedSemester[i].value];
			break;
		}
	}
	return semesterPrice;
}

function getHoursPrice()
{
	var hoursPrice=0;
	var theForm = document.forms["tuitionform"];
	var selectedHours = theForm.elements["hours"];
	hoursPrice = hour_prices[selectedHours.value];
	return hoursPrice;
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
			break;
		}
	}
	return planPrice;
}

function getFirstSemester()
{
	var firstSemester = 0;
	var theForm = document.forms["tuitionform"];
	var selectedfirstSemester = theForm.elements["firstSemester"];
	for(var i = 0; i < selectedfirstSemester.length; i++)
	{
		if(selectedfirstSemester[i].checked)
		{
			firstSemester = first_semester[selectedfirstSemester[i].value];
			break;
		}
	}
	return firstSemester;
}
        
function calculateTotal()
{
    //Here we get the total price by calling our function
    //Each function returns a number so by calling them we add the values they return together
    var tuitionCost = getPlanPrice() + getClassificationPrice() + getSemesterPrice() + getHoursPrice() + getFirstSemester();
  
  var divobj = document.getElementById('totalPrice');
    divobj.style.display='block';
   divobj.innerHTML = "Estimated Cost of Tuition: $"+tuitionCost;
   return false;
}

//function hideTotal()
//{
  ////  var divobj = document.getElementById('totalPrice');
    //divobj.style.display='none';
//}
