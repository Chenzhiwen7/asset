/*
* @Author: Administrator
* @Date:   2017-10-14 09:07:43
* @Last Modified by:   Administrator
* @Last Modified time: 2017-10-30 11:35:21
*/
// document.getElementById("unfoldItem").onclick=function(){
// 	alert(222)
// 	console.log(222)
// }
$(document).ready(function(){
	//左边导航展开
 	$("body").on("click","#unfoldItem",function(){
	 	var bars=$("#bars")
		var listWidth=$("#unfoldList").width();
		var unfoldList=$("#unfoldList");
		var mcontent=$("#mcontent");
		if (listWidth===46) {
			bars.addClass("fa-minus"); 
			bars.removeClass("fa-bars");
			unfoldList.width("100px")
			mcontent.css("margin-left","100px");
		}
		else{
			bars.addClass("fa-bars"); 
			bars.removeClass("fa-minus");
			unfoldList.width("46px")
			mcontent.css("margin-left","46px")
		}
 	});

 	//主题
 	$("body").on('click','.theme-item',function(){  
 		   var unfoldList=$("#unfoldList");
 		   var mnavbar=$("#mnavbar");
           var $this=$(this).css('background-image');
           // document.cookie=($this);
           localStorage.bgi=$this;
           unfoldList.css("background-image",$this)
           mnavbar.css("background-image",$this)
    });
 	//切换子页面主题生效
    window.onload=function(){
    	   var unfoldList=$("#unfoldList");
 		   var mnavbar=$("#mnavbar");
    	   // var bgi = document.cookie;
    	   var bgi = localStorage.bgi;
    	   unfoldList.css("background-image",bgi);
           mnavbar.css("background-image",bgi);        
    };

})
