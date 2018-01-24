$(document).ready(function(){	
//切换中性:1带版权，0为中性
      var a = 0;      
      if (a==1){
      	copyRightSwitch()       
      };    	  
      function copyRightSwitch(){
      	$('#logoBoxC').css("display","block");
       	$('#textCopyRightC').css("display","block");
       	$('#loginBoxC').removeClass("container-inner");
      };
})