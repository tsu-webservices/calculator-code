function displayRadioValue() { 
    document.getElementById("result").innerHTML = ""; 
    var ele = document.getElementsByTagName('input'); 
      
    for(i = 0; i < ele.length; i++) { 
          
        if(ele[i].type="radio") { 
          
            if(ele[i].checked) 
                document.getElementById("result").innerHTML 
                        += ele[i].name + " Value: " 
                        + ele[i].value + "<br>"; 
        } 
    } 
}