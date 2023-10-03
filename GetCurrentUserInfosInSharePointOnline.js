var xhr = new XMLHttpRequest();
xhr.responseType = "document";
xhr.overrideMimeType("text/xml");
xhr.open('GET', _spPageContextInfo.webAbsoluteUrl + "/_api/SP.UserProfiles.PeopleManager/GetMyProperties");
xhr.onload = function() {
if (xhr.readyState === xhr.DONE && xhr.status === 200) {
    	var xml = xhr.responseXML;
	var properties = xml.getElementsByTagName("m:properties")[0];
	var userProperties = (properties.getElementsByTagName("d:UserProfileProperties")[0]).getElementsByTagName("d:element");
	var counter = 0;
	for(var property of userProperties)
	{
		var ValueProperty = (property.getElementsByTagName("d:Key")[0]).childNodes[0].nodeValue;
		if(ValueProperty === "SPS-JobTitle") {
			counter++;
            document.getElementById("jobtitle").innerHTML = (property.getElementsByTagName("d:Value")[0]).childNodes[0].nodeValue;	
		}
		else if(ValueProperty === "SPS-Department")
		{
			counter++;
			document.getElementById("department").innerHTML = (property.getElementsByTagName("d:Value")[0]).childNodes[0].nodeValue;
		}
        else if(ValueProperty === "Office"){
            counter++;
			document.getElementById("office").innerHTML = (property.getElementsByTagName("d:Value")[0]).childNodes[0].nodeValue;
		
        }

		if(counter === 3) break;
	}
	
	
  }
};
xhr.send()
