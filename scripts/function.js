function myfunction(){
    radius = document.getElementById("radius").value;
    
    circumference = (2*Math.PI*parseInt(radius));
    document.getElementById("result").innerHTML = circumference;
   

}