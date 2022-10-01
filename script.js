function result(){

		var maths = parseFloat(document.getElementById("maths").value);
		var sst =  parseFloat(document.getElementById("sst").value);
		var science = parseFloat(document.getElementById("science").value);
		var punjabi = parseFloat(document.getElementById("punjabi").value);
		var english = parseFloat(document.getElementById("english").value);
		
		var total = maths + sst + science + punjabi + english;
	
		document.getElementById("marksper").value =  total;

	}
 
