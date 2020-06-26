function sumar() {
    var a,b,c;
  

 
    a=document.getElementById("a").value;
    b=document.getElementById("b").value;
    c=document.getElementById("c").value;

    a=parseFloat(a);
    b=parseFloat(b);
    c=parseFloat(c);
 
   
  
    document.getElementById("resultado").innerHTML=(a+b+c)/3;
  

   

}