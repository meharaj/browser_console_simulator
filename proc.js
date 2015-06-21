//javascript
$(document).ready(function () {
	$("#display_con").click(function (){
	$("#console").fadeIn('slow');});
	
	$("#input").keypress(function(e){
		if(e.which == 13){
			string=$("#input").val();
			output=$("#output").val();
			
			
			for(i in console)
			{
				console.log(i)
			}
			
			str_out=eval(string);
			if(str_out == undefined)
			{
				$("#output").val(">"+output+string+"\n");
				$("#input").val("");
			}
			else
			{
			
				string=">"+string+"\n"+str_out+"\n";
				$("#output").val(output+string+"\n");
				$("#input").val("");
			}
			//$("#output").scrollTop($("#output").scrollHeight -$("#output").height());
			  $("#output").scrollTop(99999)
      $("#output").scrollTop($("textarea").scrollTop()*12)
			console.log("enter");
		}
		});
});

