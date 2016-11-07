
<html>
<head>
<script type="text/javascript">
function validNumber(nmbr)
{
var phonenumber = /4081234567/;  
  if(nmbr.value.match(phonenumber))  
        {  
      return true;  
        }  
      else  
        {  
        alert("Please enter a valid phone number");  
        return false;  
        }  
}  

</script>
</head>
<body>
<h2> Phone Number Validity</h2>
<form name="myForm" action="form.php" onsubmit="return validNumber(document.myForm.number)" method="post">
Please enter your number:<input type= "text" name="number"  id="number" /><br/>
<input type="submit" name="Submit">
</form>
</body>
</html>
