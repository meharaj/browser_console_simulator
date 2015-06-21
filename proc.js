//javascript
function Console() {}
Console.prototype.log=function(par){
	return par;
}
clear=function()
{
	return "clr";
	
}
Console.prototype.clear=clear;
Console.prototype.error=function(par){
	return "Error : "+par;
}
Console.prototype.warn=function(par){
	return "Warning ! "+par;
}
Console.prototype.assert=function(par1,par2){
	if(!par1)
	{
		return "Assertion failed : "+par2
	}
	return "undefined"
}
function len(arg)
{
	return arg.length;
}
$(document).ready(function () {
	console = new Console();
	cmds=[];
	cmds2=[];
	var flag=1;
	$("#display_con").click(function (){
	if(flag){
	$("#console").slideDown('fast').focus();
	//$("#console").focus();
	flag=0;}
	else
	{
	$("#console").slideUp('slow');
	flag=1;
	}});
	
	$("#input").on("keyup",function(e){
	
		
		index=len(cmds);
		up=index-1;
		if(e.which == 38)//up arrow
		{		
			cmd=cmds.pop();
			//alert(cmd);
			cmds2.push(cmd)
			$("#input").val(cmd);
						
		}
		if(e.which == 40)
		{
			cmd=cmds2.pop()
			cmds.push(cmd)
			$("#input").val(cmd);
		}
		
		
		
		
		
		if(e.which == 13){ //enter key
			string=$("#input").val();
			output=$("#output").val();
			
			cmds.push(string);
			console.log(cmds);
			
		/*	for(i in console)
			{
				console.log(i)
			}
			*/
			try
			{
				str_out=eval(string);
				if(str_out == undefined)
				{
					$("#output").val(">"+output+string+"\n");
					$("#input").val("");
				}
				else if(str_out == "clr")
				{
					$("#output").val("");
					$("#input").val("");
				}
				/*else if(str_out=="red")
				{
					$("#output").style.color="red";
					$("#output").val(">"+output+string+"\n");
					$("#input").val("");
					
				}*/
				else
				{
				
					string=">"+string+"\n"+str_out+"\n";
					$("#output").val(output+string+"\n");
					$("#input").val("");
				}
			}
			catch(err)
			{
				$("#output").val(">"+output+string+"\n"+err.message+"\n");
				
					$("#input").val("");
			}
			//$("#output").scrollTop($("#output").scrollHeight -$("#output").height());
			  $("#output").scrollTop(99999)
      $("#output").scrollTop($("textarea").scrollTop()*12)
			console.log("enter");
		}
		});
});

