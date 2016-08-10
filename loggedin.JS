function hrcompare(){
var hr_mail="hr@cronj.com";
var hr_pass="hrcronj";
	
var id=document.getElementById("name").value;
var pass=document.getElementById("pass").value;
if(id==hr_mail && pass==hr_pass)
{
	document.getElementById('hrlogin').style.display="none";
document.getElementById('ureg').style.visibility="visible";


}
else
alert("user id or password doesn't match");	
}
