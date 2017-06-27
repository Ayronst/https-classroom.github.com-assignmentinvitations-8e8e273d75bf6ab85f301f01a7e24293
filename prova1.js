         // Ayron Strensk RGA 201511640009
		 
		 function trocar()
         {
            document.getElementById("rod_img").src="imagens/capsula1.jpg";
         }
		 var vendo=0;
		 var vendo1=0; 
		 function texto_esc1()
		 {	
		 	if (vendo1 == 1)
			{
				document.getElementById("tex_esc2").style.display="none";
				vendo1=0;
			}
			if (vendo == 0)
			{
				document.getElementById("tex_esc1").style.display="block";
				vendo = 1;
			}
			else
			{
				document.getElementById("tex_esc1").style.display="none";
				vendo = 0;	
			}
		 } 
		 function texto_esc2()
		 {
			 if (vendo == 1)
			{
				document.getElementById("tex_esc1").style.display="none";
				vendo=0;
			}
			if (vendo1 == 0)
			{
				document.getElementById("tex_esc2").style.display="block";
				vendo1 = 1;
			}
			else
			{
				document.getElementById("tex_esc2").style.display="none";
				vendo1 = 0;	
			}
		 }
		 function mudarmenu(menu)
		 {
			document.getElementById(menu).style.background = "white";
			document.getElementById(menu).style.color = "blue";
			document.getElementById(menu).style.fontFamily = "aladin";
		 }
		 function voltarmenu(menu)
		 {
			 document.getElementById(menu).style.background = "none";
			 document.getElementById(menu).style.color = "white";
			 document.getElementById(menu).style.fontFamily = "Arial";
		 }