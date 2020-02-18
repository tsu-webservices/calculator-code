function displayStudentValue() { 
    var ele = document.getElementsByName('Stype'); 
      
    for(i = 0; i < ele.length; i++) { 
        if(ele[i].checked) 
        document.getElementById("resultS").innerHTML
                = "Student Type: "+ele[i].value; 
    }
} 

function displayRadioValue() { 
    var ele = document.getElementsByName('plan'); 
      
    for(i = 0; i < ele.length; i++) { 
        if(ele[i].checked) 
        document.getElementById("result").innerHTML
                = "Plan: "+ele[i].value; 
    }
}