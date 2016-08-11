
var uarray=new Array();//array declaration
function hrcompare(){    //function to validate uid,pass
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
function makeobject(uid1,uname1,upass1,uremark1)//function to make object
{ this.uid2=uid1; 
  this.uname2=uname1;
  this.upass2=upass1;
  this.uremark2=uremark1;
}
function save_user()//function to save user details
{
	alert(uarray.length);
var i;
var flag=0;
	document.getElementById('hrlogin').style.visibility="visible";
	document.getElementById('udetails').style.visibility="visible";
	var uid=document.getElementById('uid').value;
	if(uid=="" || uid=="null")
		alert("enter user's id");
	var uname=document.getElementById('uname').value;
	if(uname=="" || uname=="null")
		alert("enter user's name");
	
    var upass=document.getElementById('upass').value;
    if(upass=="" || upass=="null")
		alert("enter user's password");
    var uremark=document.getElementById('uremark').value;
     if(uid=="" || uid=="null")
		alert("enter user's Initial remark, N.A. for not applicable");
    var user=new makeobject(uid,uname,upass,uremark);
   

     for(i=0;i<uarray.length;i++)
    {
    	if(uid==uarray[i].uid2){
    		flag==1;
    	alert("This user already exist");
    	return false;
         
            }	
    }
    if(flag==0)
    {
    	 uarray.push(user);
    var len=uarray.length-1;
	var temp=document.createElement('p');
	var text=document.createTextNode(uarray[len].uname2);
	temp.appendChild(text);
	var element=document.getElementById('udetails');
	element.appendChild(temp);
	document.forms['abc'].reset();
	return false;
    }
}
function empdetails()
{
	alert(uarray.length);
   var eid=document.getElementById('eid').value;
   var epass=document.getElementById('epass').value;
   document.getElementById('emp_input').style.visibility="hidden";
   alert("manish");
   for(var i=0;i<uarray.length;i++)
   {
   	if(eid==uarray[i].uid2 && epass==uarray[i].upass2)
   	{
   		document.getElementById('show').innerHTML="EID: "+uarray[i].uid2+" <br />NAME: "+uarray[i].uname2+"<br />REMARK: "+uarray[i].remark2;


   	}
   }

}