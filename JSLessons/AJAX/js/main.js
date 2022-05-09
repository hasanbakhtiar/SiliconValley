"use strict";
// https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_map3
$(function(){
    $('button').click(function() {
        $('p').load('data/mydata.txt',function(responseTxt, statusTxt, xhr){
            if(statusTxt == "success")
              alert("Melumat ugurla yuklendi");
            if(statusTxt == "error")
              alert("Error: " + xhr.status + ": " + xhr.statusText);
          });
    })
})