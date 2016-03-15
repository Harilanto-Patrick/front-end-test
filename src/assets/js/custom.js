function demo(){
  var bool = document.getElementById("demo_hid").value;
  var txt = "";
  if(bool==1){
    txt += "<div style='background:url(../assets/img/logo.png) no-repeat center;background-color:rgba(255,255,255,0.4);position:fixed; width:100%; height:100%; top:0;left:0;'";
    txt += "onclick='demo()'> ";
    txt += "</div>";
    bool=0;
  }
  else{
    bool=1;
    txt = " ";
  }
  document.getElementById("demo_hid").value=bool;
  document.getElementById("demo_js").innerHTML=txt;
}
