window.onload = function()
{
	startAllReadOnly();
}
function quesName(id)
{
	if ((id.value == "")  || (!charOnly(id)))
	{
		document.getElementById("error_button_1").style.display = "block";
		return false;
	}
	else
	{
		document.getElementById("error_button_1").style.display = "none";
		 return true;
	}
}
function quesProfession(id)
{
	if (id.value == "")
	{
		document.getElementById("error_button_2").style.display = "block";
		return false;
	}
	else
	{
		document.getElementById("error_button_2").style.display = "none";
		 return true;
	}
}
function quesOrganization(id)
{
	if (id.value == "")
	{
		document.getElementById("error_button_3").style.display = "block";
		return false;
	}
	else
	{
		document.getElementById("error_button_3").style.display = "none";
		 return true;
	}
}
function quesDesignation(id)
{
	if (id.value == "")
	{
		document.getElementById("error_button_4").style.display = "block";
		return false;
	}
	else
	{
		document.getElementById("error_button_4").style.display = "none";
		 return true;
	}
}
function quesPhone(id)
{
	if ((id.value == "") || (!IsNumberOnly(id.value)))
	{
		document.getElementById("error_button_5").style.display = "block";
		return false;
	}
	else
	{
		document.getElementById("error_button_5").style.display = "none";
		 return true;
	}
}
function quesEmail(id)
{
	if ((id.value == "")  || (!validateEmail(id)))
	{
		document.getElementById("error_button_6").style.display = "block";
		return false;
	}
	else
	{
		document.getElementById("error_button_6").style.display = "none";
		 return true;
	}
}
function addforfuture()
{
	if(document.ques_robo.add_for_future.value == "")
	{
		document.ques_robo.add_for_future.value = "Yes";
		document.ques_robo.add_for_future.checked = true ;
	}
	else
	{
		document.ques_robo.add_for_future.value = "";
		document.ques_robo.add_for_future.checked = false ;
	}	
}

function checkDiv(id)
{
	startAllWrite();
	if(id.value == "Yes")
	{
		document.getElementById("robouser").style.display = "block";
		document.getElementById("robononuser").style.display = "none";
	}
	else
	{
		document.getElementById("robouser").style.display = "none";
		document.getElementById("robononuser").style.display = "block";
	}
}


/*QUESTIONNAIRE FOR NON-USER*/
function q1_userRobo(id)
{
	if(id.value == "1 - 3")
	{
		document.ques_robo.q1_user[0].checked = 'true';
	}	
	if(id.value == "4 - 6")
	{
		document.ques_robo.q1_user[1].checked = 'true';
	}	
	if(id.value == "7 - 9")
	{
		document.ques_robo.q1_user[2].checked = 'true';
	}	
	if(id.value == "> 10")
	{
		document.ques_robo.q1_user[3].checked = 'true';
	}	
}
function q5_userRobo(id)
{
	if(id.value == "1 - 5")
	{
		document.ques_robo.q5_user[0].checked = 'true';
	}	
	if(id.value == "6 - 10")
	{
		document.ques_robo.q5_user[1].checked = 'true';
	}	
	if(id.value == "11 - 15")
	{
		document.ques_robo.q5_user[2].checked = 'true';
	}	
	if(id.value == "> 15")
	{
		document.ques_robo.q5_user[3].checked = 'true';
	}	
}
function q6_userRobo(id)
{
	if(id.value == "Yes")
	{
		document.ques_robo.q6_user[0].checked = 'true';
		nondisableReadOnly('q6_user_a');
		enableText('q6ytext');
		enableText('q6atext');
	}	
	else if(id.value == "No")
	{
		document.ques_robo.q6_user[1].checked = 'true';
		disableReadOnly('q6_user_a');
		disableText('q6ytext');
		disableText('q6atext');
	}	
}


/*QUESTIONNAIRE FOR NON-USER*/
function q1_nonuserNonRobo(id)
{
	if(id.value == "Yes")
	{
		document.ques_robo.q1_nonuser[0].checked = 'true';
		nondisableReadOnly('q1_nonuser_a_name1');
		nondisableReadOnly('q1_nonuser_a_maker1');
		nondisableReadOnly('q1_nonuser_a_price1');
		nondisableReadOnly('q1_nonuser_a_name2');
		nondisableReadOnly('q1_nonuser_a_maker2');
		nondisableReadOnly('q1_nonuser_a_price2');
		nondisableReadOnly('q1_nonuser_b');
		nondisableReadOnly('q1_nonuser_c');
		enableText('q1ytext');
		enableText('q1atext');
		enableText('q1an1text');
		enableText('q1am1text');
		enableText('q1ap1text');
		enableText('q1an2text');
		enableText('q1am2text');
		enableText('q1ap2text');
		enableText('q1btext');
		enableText('q1ctext');
	}	
	else if(id.value == "No")
	{
		document.ques_robo.q1_nonuser[1].checked = 'true';
		disableReadOnly('q1_nonuser_a_name1');
		disableReadOnly('q1_nonuser_a_maker1');
		disableReadOnly('q1_nonuser_a_price1');
		disableReadOnly('q1_nonuser_a_name2');
		disableReadOnly('q1_nonuser_a_maker2');
		disableReadOnly('q1_nonuser_a_price2');
		disableReadOnly('q1_nonuser_b');
		disableReadOnly('q1_nonuser_c');
		disableText('q1ytext');
		disableText('q1atext');
		disableText('q1an1text');
		disableText('q1am1text');
		disableText('q1ap1text');
		disableText('q1an2text');
		disableText('q1am2text');
		disableText('q1ap2text');
		disableText('q1btext');
		disableText('q1ctext');
	}	
}
function q2_nonuserNonRobo(id)
{
	if(id.value == "Yes")
	{
		document.ques_robo.q2_nonuser[0].checked = 'true';
		for(var i=0; i<2; i++)
		{
			document.ques_robo.q2_nonuser_b[i].disabled = false;
		}
		for(var i=0; i<3; i++)
		{
			document.ques_robo.q2_nonuser_a[i].disabled = false;
			document.ques_robo.q2_nonuser_g[i].disabled = false;
		}
		for(var i=0; i<4; i++)
		{
			document.ques_robo.q2_nonuser_e[i].disabled = false;
			document.ques_robo.q2_nonuser_f[i].disabled = false;
			//document.ques_robo.q2_nonuser_g_1[i].disabled = false;
		}
		nondisableReadOnly('q2_nonuser_a_text1');
		nondisableReadOnly('q2_nonuser_a_text2');
		nondisableReadOnly('q2_nonuser_a_text3');
		nondisableReadOnly('q2_nonuser_b_textY');
		nondisableReadOnly('q2_nonuser_b_textN');
		nondisableReadOnly('q2_nonuser_c');
		nondisableReadOnly('q2_nonuser_d');
		nondisableReadOnly('q2_nonuser_e_text1');
		nondisableReadOnly('q2_nonuser_e_text2');
		nondisableReadOnly('q2_nonuser_e_text3');
		nondisableReadOnly('q2_nonuser_e_text4');
		nondisableReadOnly('q2_nonuser_f_text1');
		nondisableReadOnly('q2_nonuser_f_text2');
		nondisableReadOnly('q2_nonuser_f_text3');
		nondisableReadOnly('q2_nonuser_f_text4');
		nondisableReadOnly('q2_nonuser_g_text1');
		nondisableReadOnly('q2_nonuser_g_text2');
		nondisableReadOnly('q2_nonuser_g_text3');
		enableText('q2ytext');
		enableText('q2atext');
		enableText('q2btext');
		enableText('q2ctext');
		enableText('q2dtext');
		enableText('q2etext');
		enableText('q2ftext');
		enableText('q2gtext');
		document.getElementById("nostyle3").style.color = "#000000";
		document.getElementById("nostyle3").style.fontWeight = "normal";
		document.getElementById("nostyle4").style.color = "#000000";
		document.getElementById("nostyle4").style.fontWeight = "normal";
	}	
	if(id.value == "No")
	{
		document.ques_robo.q2_nonuser[1].checked = 'true';
		for(var i=0; i<2; i++)
		{
			document.ques_robo.q2_nonuser_b[i].disabled = true;
		}
		for(var i=0; i<3; i++)
		{
			document.ques_robo.q2_nonuser_a[i].disabled = true;
			document.ques_robo.q2_nonuser_g[i].disabled = true;
		}
		for(var i=0; i<4; i++)
		{
			document.ques_robo.q2_nonuser_e[i].disabled = true;
			document.ques_robo.q2_nonuser_f[i].disabled = true;
			//document.ques_robo.q2_nonuser_g_1[i].disabled = true;
		}
		disableReadOnly('q2_nonuser_a_text1');
		disableReadOnly('q2_nonuser_a_text2');
		disableReadOnly('q2_nonuser_a_text3');
		disableReadOnly('q2_nonuser_b_textY');
		disableReadOnly('q2_nonuser_b_textN');
		disableReadOnly('q2_nonuser_c');
		disableReadOnly('q2_nonuser_d');
		disableReadOnly('q2_nonuser_e_text1');
		disableReadOnly('q2_nonuser_e_text2');
		disableReadOnly('q2_nonuser_e_text3');
		disableReadOnly('q2_nonuser_e_text4');
		disableReadOnly('q2_nonuser_f_text1');
		disableReadOnly('q2_nonuser_f_text2');
		disableReadOnly('q2_nonuser_f_text3');
		disableReadOnly('q2_nonuser_f_text4');
		disableReadOnly('q2_nonuser_g_text1');
		disableReadOnly('q2_nonuser_g_text2');
		disableReadOnly('q2_nonuser_g_text3');
		disableText('q2ytext');
		disableText('q2atext');
		disableText('q2btext');
		disableText('q2ctext');
		disableText('q2dtext');
		disableText('q2etext');
		disableText('q2ftext');
		disableText('q2gtext');
		document.getElementById("nostyle3").style.color = "#999999";
		document.getElementById("nostyle3").style.fontWeight = "normal";
		document.getElementById("nostyle4").style.color = "#999999";
		document.getElementById("nostyle4").style.fontWeight = "normal";
	}	
}
function q2_nonuser_aNonRobo(id)
{
	if(id.value == "Stand-Alone")
	{
		document.ques_robo.q2_nonuser_a[0].checked = 'true';
		disableText('q2a1text');
		disableReadOnly('q2_nonuser_a_1');
	}	
	else if(id.value == "Add-On")
	{
		document.ques_robo.q2_nonuser_a[1].checked = 'true';
		enableText('q2a1text');
		nondisableReadOnly('q2_nonuser_a_1');
	}	
	else if(id.value == "Doesn't Matter")
	{
		document.ques_robo.q2_nonuser_a[2].checked = 'true';
		disableText('q2a1text');
		disableReadOnly('q2_nonuser_a_1');
	}	
}
function q2_nonuser_bNonRobo(id)
{
	if(id.value == "Yes")
	{
		document.ques_robo.q2_nonuser_b[0].checked = 'true';
	}	
	else if(id.value == "No")
	{
		document.ques_robo.q2_nonuser_b[1].checked = 'true';
	}	
}
function q2_nonuser_eNonRobo(id)
{
	if(id.value == "1 - 10")
	{
		document.ques_robo.q2_nonuser_e[0].checked = 'true';
	}	
	if(id.value == "10 - 50")
	{
		document.ques_robo.q2_nonuser_e[1].checked = 'true';
	}	
	if(id.value == "50 - 100")
	{
		document.ques_robo.q2_nonuser_e[2].checked = 'true';
	}	
	if(id.value == "> 100")
	{
		document.ques_robo.q2_nonuser_e[3].checked = 'true';
	}	
}
function q2_nonuser_fNonRobo(id)
{
	if(id.value == "0 - 1 years")
	{
		document.ques_robo.q2_nonuser_f[0].checked = 'true';
	}	
	if(id.value == "1 - 2 years")
	{
		document.ques_robo.q2_nonuser_f[1].checked = 'true';
	}	
	if(id.value == "2 - 5 years")
	{
		document.ques_robo.q2_nonuser_f[2].checked = 'true';
	}	
	if(id.value == "> 5 years")
	{
		document.ques_robo.q2_nonuser_f[3].checked = 'true';
	}	
}
function q2_nonuser_gNonRobo(id)
{
	if(id.value == "Number of usages")
	{
		document.ques_robo.q2_nonuser_g[0].checked = 'true';
		disableText('q2g1text');
		disableReadOnly('q2_nonuser_g_1_text1');
		disableReadOnly('q2_nonuser_g_1_text2');
		disableReadOnly('q2_nonuser_g_1_text3');
		disableReadOnly('q2_nonuser_g_1_text4');
		for(var i=0; i<4; i++)
		{
			document.ques_robo.q2_nonuser_g_1[i].disabled = true;
		}
		disableText('q2g2text');
		disableReadOnly('q2_nonuser_g_2_text1');
		disableReadOnly('q2_nonuser_g_2_text2');
		disableReadOnly('q2_nonuser_g_2_text3');
		disableReadOnly('q2_nonuser_g_2_text4');
		for(var i=0; i<4; i++)
		{
			document.ques_robo.q2_nonuser_g_2[i].disabled = true;
		}
	}	
	if(id.value == "Annual subscription")
	{
		document.ques_robo.q2_nonuser_g[1].checked = 'true';
		document.getElementById('pricerange1').style.display = "block";
		document.getElementById('pricerange2').style.display = "none";
		enableText('q2g1text');
		nondisableReadOnly('q2_nonuser_g_1_text1');
		nondisableReadOnly('q2_nonuser_g_1_text2');
		nondisableReadOnly('q2_nonuser_g_1_text3');
		nondisableReadOnly('q2_nonuser_g_1_text4');
		for(var i=0; i<4; i++)
		{
			document.ques_robo.q2_nonuser_g_1[i].disabled = false;
		}
		disableText('q2g2text');
		disableReadOnly('q2_nonuser_g_2_text1');
		disableReadOnly('q2_nonuser_g_2_text2');
		disableReadOnly('q2_nonuser_g_2_text3');
		disableReadOnly('q2_nonuser_g_2_text4');
		for(var i=0; i<4; i++)
		{
			document.ques_robo.q2_nonuser_g_2[i].disabled = true;
		}
	}	
	if(id.value == "Lifetime subscription")
	{
		document.ques_robo.q2_nonuser_g[2].checked = 'true';
		document.getElementById('pricerange1').style.display = "none";
		document.getElementById('pricerange2').style.display = "block";
		enableText('q2g2text');
		nondisableReadOnly('q2_nonuser_g_2_text1');
		nondisableReadOnly('q2_nonuser_g_2_text2');
		nondisableReadOnly('q2_nonuser_g_2_text3');
		nondisableReadOnly('q2_nonuser_g_2_text4');
		for(var i=0; i<4; i++)
		{
			document.ques_robo.q2_nonuser_g_2[i].disabled = false;
		}
		disableText('q2g1text');
		disableReadOnly('q2_nonuser_g_1_text1');
		disableReadOnly('q2_nonuser_g_1_text2');
		disableReadOnly('q2_nonuser_g_1_text3');
		disableReadOnly('q2_nonuser_g_1_text4');
		for(var i=0; i<4; i++)
		{
			document.ques_robo.q2_nonuser_g_1[i].disabled = true;
		}
	}	
}
function q2_nonuser_g_1NonRobo(id)
{
	if(id.value == "< 15,000")
	{
		document.ques_robo.q2_nonuser_g_1[0].checked = 'true';
	}	
	if(id.value == "15,000 - 60,000")
	{
		document.ques_robo.q2_nonuser_g_1[1].checked = 'true';
	}	
	if(id.value == "60,000 - 1,50,000")
	{
		document.ques_robo.q2_nonuser_g_1[2].checked = 'true';
	}	
	if(id.value == "> 1,50,000")
	{
		document.ques_robo.q2_nonuser_g_1[3].checked = 'true';
	}	
}
function q2_nonuser_g_2NonRobo(id)
{
	if(id.value == "< 50,000")
	{
		document.ques_robo.q2_nonuser_g_2[0].checked = 'true';
	}	
	if(id.value == "50,000 - 2,00,000")
	{
		document.ques_robo.q2_nonuser_g_2[1].checked = 'true';
	}	
	if(id.value == "2,00,000 - 5,00,000")
	{
		document.ques_robo.q2_nonuser_g_2[2].checked = 'true';
	}	
	if(id.value == "> 5,00,000")
	{
		document.ques_robo.q2_nonuser_g_2[3].checked = 'true';
	}	
}
function q3_nonuserNonRobo(id)
{
	if(id.value == "Yes")
	{
		document.ques_robo.q3_nonuser[0].checked = 'true';
	}	
	else if(id.value == "No")
	{
		document.ques_robo.q3_nonuser[1].checked = 'true';
	}	
}
function q4_nonuserNonRobo(id)
{
	if(id.value == "Yes")
	{
		document.ques_robo.q4_nonuser[0].checked = 'true';
		nondisableReadOnly('q4_nonuser_a');
		enableText('q4ytext');
		enableText('q4atext');
	}	
	else if(id.value == "No")
	{
		document.ques_robo.q4_nonuser[1].checked = 'true';
		disableReadOnly('q4_nonuser_a');
		disableText('q4ytext');
		disableText('q4atext');
	}	
}



function startAllReadOnly()
{
	var f = document.getElementById("ques_robo");
	var inputs = f.getElementsByTagName("input");
	for(var i = 0; i < inputs.length; i++)
	{
		if (inputs[i].id != "ques_name")
		if (inputs[i].id != "ques_profession")
		if (inputs[i].id != "ques_organization")
		if (inputs[i].id != "ques_designation")
		if (inputs[i].id != "ques_phone")
		if (inputs[i].id != "ques_email")
		if (inputs[i].id != "add_for_future")
		if (inputs[i].id != "add_for_future_text")
		if (inputs[i].id != "presentlyUsingRobo")
		if (inputs[i].id != "presentlyNotUsingRobo")
		{
			inputs[i].readOnly = true;
			inputs[i].disabled = true;
			if(inputs[i].type == "button")
				disableText(inputs[i].id);
		}
	}

	var inputs = f.getElementsByTagName("textarea");
	for(var i = 0; i < inputs.length; i++)
	{
		inputs[i].readOnly = true;
		inputs[i].disabled = true;
	}
	var labels = f.getElementsByTagName("label");
	for(var i = 0; i < labels.length; i++)
	{
		labels[i].style.color = "#999999";
		labels[i].style.fontWeight = "normal";
	}
}

function startAllWrite()
{
	var f = document.getElementById("ques_robo");
	var inputs = f.getElementsByTagName("input");
	for(var i = 0; i < inputs.length; i++)
	{
		if (inputs[i].id != "ques_name")
		if (inputs[i].id != "ques_profession")
		if (inputs[i].id != "ques_organization")
		if (inputs[i].id != "ques_designation")
		if (inputs[i].id != "ques_phone")
		if (inputs[i].id != "ques_email")
		if (inputs[i].id != "add_for_future")
		if (inputs[i].id != "add_for_future_text")
		if (inputs[i].id != "presentlyUsingRobo")
		if (inputs[i].id != "presentlyNotUsingRobo")
		if (inputs[i].id != "q2_nonuser_a_text1")
		if (inputs[i].id != "q2_nonuser_a_text2")
		if (inputs[i].id != "q2_nonuser_a_text3")
		if (inputs[i].id != "q2_nonuser_b_textY")
		if (inputs[i].id != "q2_nonuser_b_textN")
		if (inputs[i].id != "q2_nonuser_e_text1")
		if (inputs[i].id != "q2_nonuser_e_text2")
		if (inputs[i].id != "q2_nonuser_e_text3")
		if (inputs[i].id != "q2_nonuser_e_text4")
		if (inputs[i].id != "q2_nonuser_f_text1")
		if (inputs[i].id != "q2_nonuser_f_text2")
		if (inputs[i].id != "q2_nonuser_f_text3")
		if (inputs[i].id != "q2_nonuser_f_text4")
		if (inputs[i].id != "q2_nonuser_g_text1")
		if (inputs[i].id != "q2_nonuser_g_text2")
		if (inputs[i].id != "q2_nonuser_g_text3")
		if (inputs[i].id != "q2_nonuser_g_1_text1")
		if (inputs[i].id != "q2_nonuser_g_1_text2")
		if (inputs[i].id != "q2_nonuser_g_1_text3")
		if (inputs[i].id != "q2_nonuser_g_1_text4")
		if (inputs[i].id != "q2_nonuser_g_2_text1")
		if (inputs[i].id != "q2_nonuser_g_2_text2")
		if (inputs[i].id != "q2_nonuser_g_2_text3")
		if (inputs[i].id != "q2_nonuser_g_2_text4")
		if (inputs[i].type != "text")
		{
			inputs[i].readOnly = false;
			inputs[i].disabled = false;
			if(inputs[i].type == "button")
				inputs[i].style.color = "#000000";
		}
		if ((inputs[i].id == "q2_nonuser_a") || (inputs[i].id == "q2_nonuser_b") || (inputs[i].id == "q2_nonuser_e") || (inputs[i].id == "q2_nonuser_f") || (inputs[i].id == "q2_nonuser_g") || (inputs[i].id == "q2_nonuser_g_1") || (inputs[i].id == "q2_nonuser_g_2"))
		{
			inputs[i].readOnly = true;
			inputs[i].disabled = true;
		}
	}

	var textareas = f.getElementsByTagName("textarea");
	for(var i = 0; i < textareas.length; i++)
	{
		if (textareas[i].id != "q6_user_a")
		if (textareas[i].id != "q6_user_a")
		if (textareas[i].id != "q1_nonuser_b")
		if (textareas[i].id != "q1_nonuser_c")
		if (textareas[i].id != "q2_nonuser_c")
		if (textareas[i].id != "q2_nonuser_d")
		if (textareas[i].id != "q4_nonuser_a")
		{
			textareas[i].style.background = "#FFFED8";
			textareas[i].readOnly = false;
			textareas[i].disabled = false;
		}
	}
	var labels = f.getElementsByTagName("label");
	for(var i = 0; i < labels.length; i++)
	{
		if (labels[i].id != "q6ytext")
		if (labels[i].id != "q6atext")
		if (labels[i].id != "q1ytext")
		if (labels[i].id != "q1atext")
		if (labels[i].id != "q1an1text")
		if (labels[i].id != "q1am1text")
		if (labels[i].id != "q1ap1text")
		if (labels[i].id != "q1an2text")
		if (labels[i].id != "q1am2text")
		if (labels[i].id != "q1ap2text")
		if (labels[i].id != "q1btext")
		if (labels[i].id != "q1ctext")
		if (labels[i].id != "q2ytext")
		if (labels[i].id != "q2atext")
		if (labels[i].id != "q2a1text")
		if (labels[i].id != "q2btext")
		if (labels[i].id != "q2ctext")
		if (labels[i].id != "q2dtext")
		if (labels[i].id != "q2etext")
		if (labels[i].id != "q2ftext")
		if (labels[i].id != "q2gtext")
		if (labels[i].id != "q2g1text")
		if (labels[i].id != "q2g2text")
		if (labels[i].id != "q4ytext")
		if (labels[i].id != "q4atext")
		if (labels[i].id != "nostyle1")
		if (labels[i].id != "nostyle2")
		if (labels[i].id != "nostyle3")
		if (labels[i].id != "nostyle4")
		{
			labels[i].style.color = "#000000";
			labels[i].style.fontWeight = "bold";
		}
		if ((labels[i].id == "nostyle1") || (labels[i].id == "nostyle2"))
		{
			labels[i].style.color = "#000000";
			labels[i].style.fontWeight = "normal";
		}
	}
}


function enableText(id)
{
	document.getElementById(id).style.color = "#000000";
	document.getElementById(id).style.fontWeight = "bold";
}
function disableText(id)
{
	document.getElementById(id).style.color = "#999999";
	document.getElementById(id).style.fontWeight = "normal";
}
function disableReadOnly(id)
{
	document.getElementById(id).disabled = true;
	document.getElementById(id).readOnly = true;
	if((id == "q2_nonuser_a_text1") || (id == "q2_nonuser_a_text2") || (id == "q2_nonuser_a_text3") || (id == "q2_nonuser_b_textY") || (id == "q2_nonuser_b_textN") || (id == "q2_nonuser_e_text1") || (id == "q2_nonuser_e_text2") || (id == "q2_nonuser_e_text3") || (id == "q2_nonuser_e_text4") || (id == "q2_nonuser_f_text1") || (id == "q2_nonuser_f_text2") || (id == "q2_nonuser_f_text3") || (id == "q2_nonuser_f_text4") || (id == "q2_nonuser_g_text1") || (id == "q2_nonuser_g_text2") || (id == "q2_nonuser_g_text3") || (id == "q2_nonuser_g_1_text1") || (id == "q2_nonuser_g_1_text2") || (id == "q2_nonuser_g_1_text3") || (id == "q2_nonuser_g_1_text4") || (id == "q2_nonuser_g_2_text1") || (id == "q2_nonuser_g_2_text2") || (id == "q2_nonuser_g_2_text3") || (id == "q2_nonuser_g_2_text4"))
	{
		document.getElementById(id).style.background = "";
		disableText(id);
	}
	else
		document.getElementById(id).style.background = "#EBEBEB";
}
function nondisableReadOnly(id)
{
	document.getElementById(id).disabled = false;
	document.getElementById(id).readOnly = false;
	if((id == "q2_nonuser_a_text1") || (id == "q2_nonuser_a_text2") || (id == "q2_nonuser_a_text3") || (id == "q2_nonuser_b_textY") || (id == "q2_nonuser_b_textN") || (id == "q2_nonuser_e_text1") || (id == "q2_nonuser_e_text2") || (id == "q2_nonuser_e_text3") || (id == "q2_nonuser_e_text4") || (id == "q2_nonuser_f_text1") || (id == "q2_nonuser_f_text2") || (id == "q2_nonuser_f_text3") || (id == "q2_nonuser_f_text4") || (id == "q2_nonuser_g_text1") || (id == "q2_nonuser_g_text2") || (id == "q2_nonuser_g_text3") || (id == "q2_nonuser_g_1_text1") || (id == "q2_nonuser_g_1_text2") || (id == "q2_nonuser_g_1_text3") || (id == "q2_nonuser_g_1_text4") || (id == "q2_nonuser_g_2_text1") || (id == "q2_nonuser_g_2_text2") || (id == "q2_nonuser_g_2_text3") || (id == "q2_nonuser_g_2_text4"))
	{
		document.getElementById(id).style.background = "";
		document.getElementById(id).style.color = "#000000";
	}
	else
		document.getElementById(id).style.background = "#FFFED8";
}


function ques_user_submit(id)
{
	if((document.getElementById("ques_name").value == "") || (document.getElementById("error_button_1").style.display=="block"))
	{
		document.getElementById("ques_name").focus();
		quesError(document.getElementById("ques_name"));
		return false;
	}
	else if((document.getElementById("ques_profession").value == "") || (document.getElementById("error_button_2").style.display=="block"))
	{
		document.getElementById("ques_profession").focus();
		quesError(document.getElementById("ques_profession"));
		return false;
	}
	else if((document.getElementById("ques_organization").value == "") || (document.getElementById("error_button_3").style.display=="block"))
	{
		document.getElementById("ques_organization").focus();
		quesError(document.getElementById("ques_organization"));
		return false;
	}
	else if((document.getElementById("ques_designation").value == "") || (document.getElementById("error_button_4").style.display=="block"))
	{
		document.getElementById("ques_designation").focus();
		quesError(document.getElementById("ques_designation"));
		return false;
	}
	else if((document.getElementById("ques_phone").value == "") || (document.getElementById("error_button_5").style.display=="block"))
	{
		document.getElementById("ques_phone").focus();
		quesError(document.getElementById("ques_phone"));
		return false;
	}
	else if((document.getElementById("ques_email").value == "") || (document.getElementById("error_button_6").style.display=="block"))
	{
		document.getElementById("ques_email").focus();
		quesError(document.getElementById("ques_email"));
		return false;
	}
	else
	{
		document.getElementById("ques_robo").action="ques_robouser_process.php";
	 	return true;
	}
}

function ques_non_submit()
{
	if((document.getElementById("ques_name").value == "") || (document.getElementById("error_button_1").style.display=="block"))
	{
		document.getElementById("ques_name").focus();
		quesError(document.getElementById("ques_name"));
		return false;
	}
	else if((document.getElementById("ques_profession").value == "") || (document.getElementById("error_button_2").style.display=="block"))
	{
		document.getElementById("ques_profession").focus();
		quesError(document.getElementById("ques_profession"));
		return false;
	}
	else if((document.getElementById("ques_organization").value == "") || (document.getElementById("error_button_3").style.display=="block"))
	{
		document.getElementById("ques_organization").focus();
		quesError(document.getElementById("ques_organization"));
		return false;
	}
	else if((document.getElementById("ques_designation").value == "") || (document.getElementById("error_button_4").style.display=="block"))
	{
		document.getElementById("ques_designation").focus();
		quesError(document.getElementById("ques_designation"));
		return false;
	}
	else if((document.getElementById("ques_phone").value == "") || (document.getElementById("error_button_5").style.display=="block"))
	{
		document.getElementById("ques_phone").focus();
		quesError(document.getElementById("ques_phone"));
		return false;
	}
	else if((document.getElementById("ques_email").value == "") || (document.getElementById("error_button_6").style.display=="block"))
	{
		document.getElementById("ques_email").focus();
		quesError(document.getElementById("ques_email"));
		return false;
	}
	else
	{
		document.getElementById("ques_error").style.display = "none";
		document.getElementById("ques_robo").action="ques_nonrobouser_process.php";
		return true;
	}
}
function quesError(fieldid)
{
	document.getElementById("ques_error").style.display = "block";
	quesName(document.getElementById("ques_name"));
	quesProfession(document.getElementById("ques_profession"));
	quesOrganization(document.getElementById("ques_organization"));
	quesDesignation(document.getElementById("ques_designation"));
	quesPhone(document.getElementById("ques_phone"));
	quesEmail(document.getElementById("ques_email"));
}
/*QUICK FORM*/
var flag=1;

function validateTextBox()
{
	if(document.getElementById("userName").value == "")
	{
		document.getElementById("errorMsg").style.display="block";
  		document.getElementById("errorMsg").innerHTML="<img src='images/bullet.jpg' width='5' height='5'> Name required";
		flag = 0;
		return false;
	}
	else if(!charOnly(document.getElementById("userName")))
	{
		document.getElementById("errorMsg").style.display="block";
  		document.getElementById("errorMsg").innerHTML="<img src='images/bullet.jpg' width='5' height='5'> Invalid Name";
		flag = 0;
		return false;
	}
	else if(document.getElementById("userEmailId").value == "")
	{
		document.getElementById("errorMsg").style.display="block";
  		document.getElementById("errorMsg").innerHTML="<img src='images/bullet.jpg' width='5' height='5'> Email required";
		flag = 0;
		return false;
	}
	else if(!validateEmail(document.getElementById("userEmailId")))
	{
		document.getElementById("errorMsg").style.display="block";
  		document.getElementById("errorMsg").innerHTML="<img src='images/bullet.jpg' width='5' height='5'> Invalid Email";
		flag = 0;
		return false;
	}
	else if(document.getElementById("userQuery").value == "")
	{
		document.getElementById("errorMsg").style.display="block";
  		document.getElementById("errorMsg").innerHTML="<img src='images/bullet.jpg' width='5' height='5'> Query required";
		flag = 0;
		return false;
	}
	else
	{
		document.getElementById("errorMsg").style.display="none";
		return true;
	}
}

function validateEmail(fieldId)
{
	var name=fieldId.value;
	var iChars = "!#$%^&*()+=-[]\\\';,/{}|\":<>?~"; 
	for (var i = 0; i < name.length; i++)
	{
		if (iChars.indexOf(name.charAt(i)) != -1 || name.indexOf ('@', 1) == -1 || fieldId.value.indexOf ('.', 3) == -1)
		{
			flag=0;
			i=name.length;
		}
		else
		{
			flag=1;
		}
	}
	if (flag==0)
	{
		return false;
	}
	else
	{
		return true;
	}
}

function charOnly(fieldId)
{
	var flag=1;
	var iChars = "!@#$%^&*()+=-[]\\\';,/{}|\":<>?~_1234567890"; 
	for (var i = 0; i < fieldId.value.length; i++)
		{
			if (iChars.indexOf(fieldId.value.charAt(i)) != -1)
			{
				flag=0;
				i=fieldId.value.length;
			}
			else
			{
				flag=1;
			}
		}
		if (flag==0)
		{
  			return false;
  		}
		else
		{
  			return true;
		}
}
function IsNumberOnly(strInput)
{
	var numbers = "+- 0123456789";
	for(var i=0; i<strInput.length; i++)
	{
		for(var j=0; j<numbers.length; j++)
		{
			if(numbers.indexOf(strInput.charAt(i)) == -1)
			{
				return false;
			}
		}
	}
	return true;
}

function validateAll()
{
	if((document.getElementById("errorMsg").style.display=="block") || (validateTextBox() == false))
	{
		return false;
	}
	else
	{
		 document.getElementById("quickform").action="quick_process.php";
		 return true;
	}
}

function clearAll()
{
	document.getElementById("errorMsg").style.display="none";
	document.getElementById("userName").value = "";
	document.getElementById("userEmailId").value = "";
	document.getElementById("userQuery").value = "";
	return true;
}
function set_mouse_pointer(obj)
{
obj.style.cursor='pointer';
obj.style.color = '#ffffff';
}
function set_mouse_pointer_1(obj)
{
obj.style.cursor='pointer';
obj.style.color = '#000000';
}