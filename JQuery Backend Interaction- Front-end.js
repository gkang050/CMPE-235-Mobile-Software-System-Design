
<!doctype html>
<html>
<head>
    <title>jQuery Mobile with Backend Lab</title>
     <link rel="stylesheet" href="http://code.jquery.com/mobile/1.4.2/jquery.mobile-1.4.2.min.css" />
	<script src="http://code.jquery.com/jquery-1.9.1.min.js"></script>
	<script src="http://code.jquery.com/mobile/1.4.2/jquery.mobile-1.4.2.min.js"></script>
 
</head>
<body>
	<section data-role="page" id="first">
		<header data-role="header">
			<h1>CMPE 235 LAB: JQuery Mobile with backend Interaction</h1>
		</header>
		<article data-role="content">
            <form name="form1" method="post" action="JQUERY.php">  
              <label><br>
              <br>
              First Name
              <input type="text" name="firstname" id="firstname">
              </label>
              
              <p>
                <label>Middle Name
                <input type="text" name="middlename" id="middlename">
                </label>
              </p>
              
              <p>
                <label>Last Name
                <input type="text" name="lastname" id="lastname">
                </label>
              </p>
              
              <p>
                <label>Home Phone Number
                <input type="number" name="homephonenumber" id="homephonenumber">
                </label>
              </p>
              
              <p>
                <label>Cell Phone Number
                <input type="number" name="cellphonenumber" id="cellphonenumber">
                </label>
              </p>
              
              <p>
                <label>Permanent Address
                <input type="text" name="address" id="address">
                </label>
              </p>
              
              
             
              
            <p>
                <label for="select-choice-a" class="select">Your Gender</label>
                    <select name="select-choice-a" id="select-choice-a" data-native-menu="false">
                        <option>Choose your gender from drop-down</option>
                        <option id="male" value="male">male</option>
                        <option id="female" value="female">female</option>
                        <option id="neither" value="neither">neither</option>
                    </select>
                
              </p>
              <p>
                <label>Kindly give your valuable suggestion
                <textarea name="suggestion" id="suggestion" cols="45" rows="5"></textarea>
                </label>
              </p>
              
              <label>
              <input type="checkbox" name="agree" id="agree">
                I agree</label> 
              
             Thank you for providing your information and suggestions!! We highly appreciate.
              
              <p>&nbsp;</p>
              <p>&nbsp;</p>
              
              <input type="submit" value="Submit">  
            </form>
		</article>
	<footer data-role="footer"><h1>Form Demo Footer</h1></footer>
	</section>
</body>
</html>