
  $(document).ready(function()
 {
		$("#credit").hide();
		$("#wire_t").hide();

		$("input[name='pay']").change(function(){

		var radioValue = $("input[name='pay']:checked").val();
            if(radioValue == "credit" && radioValue != "wire")
			{
					$("#credit").show();
					$("#wire_t").hide();
			}
			else if(radioValue == "wire" && radioValue != "credit")
			{
					$("#wire_t").show();
					$("#credit").hide();
			}

		});
 });
