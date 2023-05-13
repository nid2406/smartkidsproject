<?php 
session_start(); // Initialize session data

echo "<!DOCTYPE html PUBLIC '-//W3C//DTD XHTML 1.0 Transitional//EN' 'http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd'>
<html xmlns='http://www.w3.org/1999/xhtml'>
<meta http-equiv='Content-Type' content='text/html; charset=iso-8859-1' />";

 if(isset($_SESSION['username']))
 {
	unset ($_SESSION['username']); 
	unset ($_SESSION['password']); 
	unset ($_SESSION['errormsg']); 
 }
?>
<title>RoboAnalyzer</title>
<link href="common/style.css" rel="stylesheet" type="text/css" />
<link href="common/style_formate.css" rel="stylesheet" type="text/css" />
<script src="common/jsScript.js" type="text/javascript"></script>
<script>
function textboxfocusout(box)
{
	if(box.value == "")
	{
		document.getElementById("msg").style.display = "block";
		if(box.id == "username")
		{
			document.getElementById("msg").innerHTML = "Enter user ID";
		}
		if(box.id == "password")
		{
			document.getElementById("msg").innerHTML = "Enter password";
		}
		return false;
	}
	else
	{
		document.getElementById("msg").style.display = "none";
		document.getElementById("msgphp").style.display = "none";
		return true;
	}
}
function validate()
{
	if((document.getElementById("msg").style.display == "block") || (document.getElementById("username").value == "") || (document.getElementById("password").value == ""))
	{
		document.getElementById("msg").style.display = "block";
		return false;
	}
	return true;
}
</script>
<?php 
	if (($_POST['username']) && ($_POST['password'])) 
	{
		$_SESSION['username'] = $_POST['username'];
		$_SESSION['password'] = $_POST['password'];
		$_SESSION['errormsg'] = $_POST['errormsg'];

		if(($_SESSION['username'] == "robo") && ($_SESSION['password'] == "analyzer"))
		{
			$_SESSION['errormsg'] = 2;
			/*echo "<script> window.open('abstractsearch.php','_self');</script>";*/
		}
		else
		{
			$_SESSION['errormsg'] = 1;
			/*echo "<script>document.getElementById('msg').style.display == 'block';validate();</script>";*/
		}
	}
?>
<?php
if($_SESSION['errormsg'] == 2)
{
	echo "<script>window.open('login.php','_self');</script>";
}
?>
<body>
<div id="header">
  <table width="100%" border="0" align="center" cellpadding="0" cellspacing="0">
    <tr>
      <td width="55%" align="left" valign="top" background="images/header-back.jpg" style="padding-left:20px; padding-top:11px; padding-bottom:6px;"><img src="images/logo.jpg" width="265" height="57" border="0" /></td>
      <td width="45%" align="right" valign="top" background="images/header-back.jpg" class="top-button"><a href="http://www.iitd.ac.in/" target="_blank" class="top-button">&nbsp;&nbsp; IIT Delhi &nbsp;&nbsp;</a> | <a href="http://www.fitt-iitd.org/" target="_blank" class="top-button">&nbsp;&nbsp; FITT &nbsp;&nbsp;</a> | <a href="contactus.html" class="top-button">&nbsp;&nbsp; Contact Us &nbsp;&nbsp;</a> </td>
    </tr>
    <tr>
      <td colspan="2"><table width="100%" border="0" align="center" cellpadding="0" cellspacing="0" background="images/manu.jpg">
          <tr>
            <td width="24%" height="28" align="center" valign="middle">&nbsp;</td>
            <td width="1" align="center" valign="middle"><img src="images/menu-line.jpg" width="1" height="28" /></td>
            <td width="15%" align="center" valign="middle" class="main-menu"><input name="home" type="button" class="main_menu_button" value="Home" onClick="window.open('index.html' , '_self');" onMouseOver="set_mouse_pointer(this);" onMouseOut="this.style.color='#000000';"/></td>
            <td width="1" align="center" valign="middle"><img src="images/menu-line.jpg" width="1" height="28" /></td>
            <td width="15%" align="center" valign="middle" class="main-menu"><input name="aboutus" type="button" class="main_menu_button" value="About Us" onClick="window.open('about.html' , '_self');" onMouseOver="set_mouse_pointer(this);" onMouseOut="this.style.color='#000000';"/></td>
            <td width="1" align="center" valign="middle"><img src="images/menu-line.jpg" width="1" height="28" /></td>
            <td width="15%" align="center" valign="middle" class="main-menu"><input name="software" type="button" class="main_menu_button" value="Software" onClick="window.open('software.html' , '_self');" onMouseOver="set_mouse_pointer(this);" onMouseOut="this.style.color='#000000';"/></td>
            <td width="1" align="center" valign="middle"><img src="images/menu-line.jpg" width="1" height="28" /></td>
            <td width="15%" align="center" valign="middle" class="main-menu"><input name="questionnaire" type="button" class="main_menu_button" value="Questionnaire" onClick="window.open('questionnaire.html' , '_self');" onMouseOver="set_mouse_pointer(this);" onMouseOut="this.style.color='#000000';"/></td>
            <td width="1" align="center" valign="middle"><img src="images/menu-line.jpg" width="1" height="28" /></td>
            <td width="15%" align="center" valign="middle" class="main-menu"><input name="newsevents" type="button" class="main_menu_button" value="News/Events" onClick="window.open('newsevents.html' , '_self');" onMouseOver="set_mouse_pointer(this);" onMouseOut="this.style.color='#000000';"/></td>
          </tr>
        </table></td>
    </tr>
  </table>
</div>
<div id="mid-panel">
<table width="100%" border="0" align="center" cellpadding="0" cellspacing="0">
          <tr>
		  <td>
<table width="100%" border="1" align="center" cellpadding="0" cellspacing="0" bordercolor="#94A707">
          <tr>
            <td width="195" height="262" align="center" valign="top" bgcolor="#CCDF55"><table width="100%" cellpadding="0" cellspacing="0">
              <tr>
                <td style="border-bottom-style:solid; border-bottom-color:#94a707;border-bottom-width: 2px; padding-left:10px; padding-right:10px;"><table width="100%" border="0" cellspacing="0" cellpadding="0">
                  <tr>
                    <td height="23" align="left" valign="bottom" class="left-menu-heading">Already a Member?</td>
                  </tr>
                  <tr>
                    <td align="left" valign="top"><hr align="center" size="1" color="#839403" /></td>
                  </tr>
                  <tr>
                    <td height="25" align="center" valign="middle"><input name="login" type="button" class="left-menu-link" value="Member Login" onclick="window.open('login.php','_self');" onmouseover="set_mouse_pointer_1(this);" onmouseout="this.style.color='#295909';" style="border:none; text-align:center; background:url(images/left-button.jpg); height:24px; width:157px; text-align:left; padding-left:26px;"/></td>
                  </tr>
                  <tr>
                    <td height="23" align="left" valign="bottom" class="left-menu-heading">Requirements</td>
                  </tr>
                  <tr>
                    <td align="left" valign="top"><hr align="center" size="1" color="#839403" /></td>
                  </tr>
                  <tr>
                    <td height="25" align="center" valign="middle"><input name="requirement" type="button" class="left-menu-link" value="Requirement" onclick="window.open('requirement.html','_self');" onmouseover="set_mouse_pointer_1(this);" onmouseout="this.style.color='#295909';" style="border:none; text-align:center; background:url(images/left-button.jpg); height:24px; width:157px; text-align:left; padding-left:26px;"/></td>
                  </tr>
                  <!--<tr>
                <td height="28" align="center" valign="bottom"><input name="req_hardware" type="button" class="left-menu-link" value="Hardware" onclick="window.open('req_hardware.html','_self');" onmouseover="set_mouse_pointer_1(this);" onmouseout="this.style.color='#295909';" style="border:none; text-align:center; background:url(images/left-button.jpg); height:24px; width:157px; text-align:left; padding-left:26px;"/></td>
              </tr>-->
                  <tr>
                    <td height="23" align="left" valign="bottom" class="left-menu-heading">Online Support</td>
                  </tr>
                  <tr>
                    <td align="left" valign="top"><hr align="center" size="1" color="#839403" /></td>
                  </tr>
                  <tr>
                    <td height="28" align="left" valign="middle" background="images/left-button.jpg" style="background-repeat:no-repeat; background-position:center;padding-left:38px;" class="left-menu-link">Tutorial
                        <!--<input name="tutorial" type="button" class="left-menu-link" value="Tutorial" style="border:none; text-align:center; background:url(images/left-button.jpg); height:24px; width:157px; text-align:left; padding-left:26px;"/>--></td>
                  </tr>
                  <tr>
                    <td height="30" align="left" valign="middle" background="images/left-button.jpg" style="background-repeat:no-repeat; background-position:center;padding-left:38px;" class="left-menu-link">Video Tutorial
                        <!--<input name="video_tutorial" type="button" class="left-menu-link" value="Video Tutorial" style="border:none; text-align:center; background:url(images/left-button.jpg); height:24px; width:157px; text-align:left; padding-left:26px;"/>--></td>
                  </tr>
                  <tr>
                    <td height="23" align="left" valign="bottom" class="left-menu-heading">Learn More</td>
                  </tr>
                  <tr>
                    <td align="left" valign="top"><hr align="center" size="1" color="#839403" /></td>
                  </tr>
                  <tr>
                    <td height="33" align="center" valign="top"><input name="feature" type="button" class="left-menu-link" value="Feature Highlights" onclick="window.open('software.html','_self');" onmouseover="set_mouse_pointer_1(this);" onmouseout="this.style.color='#295909';" style="border:none; text-align:center; background:url(images/left-button.jpg); height:24px; width:157px; text-align:left; padding-left:26px;"/></td>
                  </tr>
                </table></td>
              </tr>
              <tr>
                <td style="padding-left:10px; padding-right:10px;"><form name="quickform" id="quickform" method="post">
<table width="100%" border="0" cellpadding="0" cellspacing="0">
              <tr>
                <td height="23" colspan="2" align="left" valign="bottom" class="left-menu-heading">Quick Contact</td>
                </tr>
              <tr>
                <td align="left" valign="top" colspan="2" height="1"><hr align="center" size="1" color="#839403" /></td>
                </tr>
              <tr>
                <td width="36%" height="26" align="center" valign="middle" class="left-menu-link">Name</td>
                <td width="64%" align="left" valign="middle"><input name="userName" id="userName" type="text" size="16" onblur="validateTextBox()"/></td>
              </tr>
              <tr>
                <td height="26" align="center" valign="middle" class="left-menu-link">Email</td>
                <td height="30"><input name="userEmailId" id="userEmailId" type="text" size="16" onblur="validateTextBox()"/></td>
              </tr>
              <tr>
                <td height="26" align="center" valign="middle" class="left-menu-link">Query</td>
                <td height="30"><input name="userQuery" id="userQuery" type="text" size="16" onblur="validateTextBox()"/></td>
              </tr>
              <tr>
                <td height="24" align="center" valign="top">&nbsp;</td>
                <td height="24" align="left" valign="top"><input name="Submit" type="submit" class="send-button" value="Send" style="border:none; text-align:center; background:url(images/send-button.jpg); height:20px; width:50px;" onclick="return validateAll();"/>&nbsp;&nbsp;<input name="Reset" type="reset" class="send-button" value="Clear" style="border:none; text-align:center; background:url(images/send-button.jpg); height:20px; width:50px;" onclick="return clearAll();"/></td>
              </tr>
              <tr>
                <td height="15" colspan="2" align="right" valign="top" style="padding-right:10px;">
				<div class="error_msg" id="errorMsg" style="display:none;"><img src='images/bullet.jpg' width='5' height='5'> Error Message</div></td>
              </tr>
            </table>
			</form></td>
              </tr>
            </table>
              </td>
            <td align="left" valign="top" bgcolor="#FFFFFF" style="padding-left:30px; padding-right:30px;"><table width="100%" border="0" cellpadding="0" cellspacing="0">
              <tr>
                <td height="50" colspan="2" align="center" valign="middle" class="heading"></td>
                </tr>
              <tr>
                <td height="404" align="center" valign="middle"><form name="form1" id="form1" method="post">
                <table width="70%" border="1" align="center" cellpadding="0" cellspacing="0" bordercolor="#000000">
                  <tr>
				  <td>
                <table width="100%" border="0" align="center" cellpadding="10" cellspacing="0">
                  <tr>
                    <td colspan="2" align="center" valign="middle" background="images/login-head.png" style="background-repeat:repeat-x;" class="heading"><div align="center">Login Page</div></td>
                  </tr>
                  <tr>
                    <td height="20" colspan="2" align="center" valign="top"></td>
                  </tr>
                  <tr>
                    <td width="45%" align="center" valign="middle" class="main-text"><div align="right">User Name</div></td>
                    <td width="55%" align="left" valign="middle" class="main-text"><input name="username" type="text" class="main-text" id="username" onBlur="textboxfocusout(this)" value="<?php echo $_SESSION['username']; ?>" size="20"></td>
                  </tr>
                  <tr>
                    <td align="right" valign="middle" class="main-text"><div align="right">Password</div></td>
                    <td align="left" valign="middle" class="main-text"><input name="password" type="password" class="main-text" id="password"  onBlur="textboxfocusout(this)" value="" size="20">
                    </td>
                  </tr>
                  <?php
if($_SESSION['errormsg'] != 1)
{
echo "          <tr>
                    <td height='15' colspan='2' align='center' valign='middle' class='error_msg'>
                  <div align='center'><div id='msg' style='display:none'>Please Check User ID/Password</div></div></td>
                </tr>";
}
?>
                  <?php
if($_SESSION['errormsg'] == 1)
{
echo "          <tr>
                    <td height='15' colspan='2' align='center' valign='middle' class='error_msg'>
                  <div align='center'><div id='msgphp' style='display:block'>Please Check User ID/Password</div></div></td>
                </tr>";
}
?>
                  <tr>
                    <td height="43" colspan="2" align="center" valign="bottom"><input type="hidden" id="errormsg" name="errormsg"><input name="submit" type="submit" class="send-button" id="submit" onClick="return validate();" value="Login" style="border:none; text-align:center; background:url(images/send-button.jpg); height:20px; width:50px;"></td>
                  </tr>
                  <tr>
                    <td height="10" colspan="2" align="center" valign="top"></td>
                  </tr>
                </table>
				</td>
				</tr>
				</table>
            </form></td>
              </tr>
            </table></td>
          </tr>
        </table>
		</td>
		</tr>
		<tr>
        <td height="25" align="center" valign="middle" class="footer">Privacy Policy &nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp; Disclaimer &nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp; Terms of Use &nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp; FAQ &nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp; Contact Us</td>
      </tr>
    </table></div>
</body>
</html>