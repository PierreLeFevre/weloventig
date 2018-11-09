//WE LOVE NTIG - A project by Pierre Le Fèvre, NTI-Gymnasiet Södertörn - pierre.lefevre@elev.ntig.se

$(window).on('load', function(){

	//selecting tabs for later

	staff = $('body').find('.tab_staff');
	students = $('body').find('.tab_students');


	//week number & date finder

	Date.prototype.getWeek = function(){
	        var onejan = new Date(this.getFullYear(), 0, 1);
	        return Math.ceil((((this - onejan) / 86400000) + onejan.getDay() + 1) / 7);
	    }

	    var weekNumber = (new Date()).getWeek();

	    var dayNames = ['Söndag', 'Måndag', 'Tisdag', 'Onsdag', 'Torsdag', 'Fredag', 'Lördag'];
	    var now = new Date();


	//cookie handling functions

	function createCookie(name,value,days){
		if (days) {
			var date = new Date();
			date.setTime(date.getTime()+(days*24*60*60*1000));
			var expires = "; expires="+date.toGMTString();
		}
		else var expires = "";
		document.cookie = name+"="+value+expires+"; path=/";
	};

	function readCookie(name){
		var nameEQ = name + "=";
		var ca = document.cookie.split(';');
		for(var i=0;i < ca.length;i++) {
			var c = ca[i];
			while (c.charAt(0)==' ') c = c.substring(1,c.length);
			if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
		}
		return null;
	};

	function eraseCookie(name){
		createCookie(name,"",-1);
	};


	//tab opener function

	function openTab(tab){
		switch (tab){
			case "staff":
				staff.removeClass('neutral').removeClass('stowed').addClass('maximized').find('.boxHeader').addClass('bigBoxHeaderText').next().addClass('showLinks');
				students.removeClass('neutral').removeClass('maximized').addClass('stowed').find('.boxHeader').removeClass('bigBoxHeaderText').next().removeClass('showLinks');
			break;

			case "students":
				students.removeClass('neutral').removeClass('stowed').addClass('maximized').find('.boxHeader').addClass('bigBoxHeaderText').next().addClass('showLinks');
				staff.removeClass('neutral').removeClass('maximized').addClass('stowed').find('.boxHeader').removeClass('bigBoxHeaderText').next().removeClass('showLinks');
			break;
		}
	};


	// setting weekday and week number to news header

	$('.newsHeader').text((dayNames[now.getDay()] + " (v. " + weekNumber + ") | Nyheter"));


	//checking if footer should be hidden

	if (readCookie("removeFooter") == "removed"){
		$('.cookieClose').parent().hide();
	};


	//show page

	$('body').fadeIn();


	//check and show previously displayed page

	if (readCookie("userType") == "staff"){
		openTab("staff");
	} else if (readCookie("userType") == "student"){
		openTab("students");
	};

	
	//tab switchers

	$('.megaBox').on('click', function(){
		if($(this).hasClass('tab_staff')){
			createCookie("userType", "staff", 360);
			openTab("staff");
		} else {
			createCookie("userType", "student", 360);
			openTab("students");
		};
	});


	//save cookie preferences

	$('.cookieClose').on('click', function(){
		$(this).parent().slideToggle("fast");
		createCookie("removeFooter", "removed", 360);
	});
});


