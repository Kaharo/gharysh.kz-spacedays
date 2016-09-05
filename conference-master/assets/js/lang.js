$(document).ready(function(){
        var kazImgLink = "../conference-master/assets/images/flags/Kazakhstan.gif";
        var rusImgLink = "../conference-master/assets/images/flags/Russia.gif";
    	var engImgLink = "../conference-master/assets/images/flags/GreatBritain.gif";
		

		var imgBtnSel = $('#imgBtnSel');
		var imgBtnKaz = $('#imgBtnKaz');
		var imgBtnEng = $('#imgBtnEng');
		var imgBtnRus = $('#imgBtnRus');

		var imgNavSel = $('#imgNavSel');
		var imgNavKaz = $('#imgNavKaz');
		var imgNavEng = $('#imgNavEng');
		var imgNavRus = $('#imgNavRus');

		var spanNavSel = $('#lanNavSel');
		var spanBtnSel = $('#lanBtnSel');

		imgBtnSel.attr("src",engImgLink);
		imgBtnKaz.attr("src",kazImgLink);
		imgBtnEng.attr("src",engImgLink);
		imgBtnRus.attr("src",kazImgLink);

		imgNavSel.attr("src",engImgLink);
		imgNavKaz.attr("src",kazImgLink);
		imgNavEng.attr("src",engImgLink);
		imgNavRus.attr("src",rusImgLink);
		

		$( ".language" ).on( "click", function( event ) {
			var currentId = $(this).attr('id');

			if(currentId == "navKaz") {
				imgNavSel.attr("src",kazImgLink);
				spanNavSel.text("KAZ");
			} else if (currentId == "navEng") {
				imgNavSel.attr("src",engImgLink);
				spanNavSel.text("ENG");
			} else if (currentId == "navRus") {
				imgNavSel.attr("src",rusImgLink);
				spanNavSel.text("RUS");
			}

			if(currentId == "btnKaz") {
				imgBtnSel.attr("src",kazImgLink);
				spanBtnSel.text("KAZ");
			} else if (currentId == "btnEng") {
				imgBtnSel.attr("src",engImgLink);
				spanBtnSel.text("ENG");
			} else if (currentId == "btnRus") {
				imgBtnSel.attr("src",rusImgLink);
				spanBtnSel.text("RUS");
			} 
			
		});
});