/*
 * Change Navbar color while scrolling
*/

$(window).scroll(function(){
	handleTopNavAnimation();
});

$(window).load(function(){
	handleTopNavAnimation();
});

function handleTopNavAnimation() {
	var top=$(window).scrollTop();

	if(top>10){
		$('#site-nav').addClass('navbar-solid'); 
	}
	else{
		$('#site-nav').removeClass('navbar-solid'); 
	}
}

/*
 * COunter
*/
// set the date we're counting down to
var target_date = new Date('Jul, 21, 2017').getTime();
 
// variables for time units
var days, hours, minutes, seconds;
 
// get tag element
var countdown = document.getElementById('countdown');
 
// update the tag with id "countdown" every 1 second
setInterval(function () {
 
    // find the amount of "seconds" between now and target
    var current_date = new Date().getTime();
    var seconds_left = (target_date - current_date) / 1000;
 
    // do some time calculations
    days = parseInt(seconds_left / 86400);
    seconds_left = seconds_left % 86400;
     
    hours = parseInt(seconds_left / 3600);
    seconds_left = seconds_left % 3600;
     
    minutes = parseInt(seconds_left / 60);
    seconds = parseInt(seconds_left % 60);
     
    // format countdown string + set tag value
    // countdown.innerHTML = '<span class="days">' + days +  'days </span> <span class="hours">' + hours + 'hours</span><span class="minutes">'
    // + minutes + 'min</span><span class="seconds">' + seconds + ' sec</span>';  
    
    var outLang =  "";
    switch (document.getElementById('countdown').getAttribute("lang")) {
        case 'kz':
            outLang='күн';
            break;
        case 'en':
            outLang='days';
            break;
        default:
            outLang='дней';
            break;
    }
    countdown.innerHTML = '<h1 class="time" style="font-weight:lighter;">' + days + " " + outLang + " "  + ((hours<=9)?"0"+ hours: hours) + ':' +  ((minutes<=9)?"0"+ minutes: minutes)  + ':' + ((seconds<=9)?"0"+ seconds: seconds) + '</h1>';  
 
}, 1000);

/*
 * Registration Form
*/

$('#registration-form').submit(function(e){
    e.preventDefault();
    
    var postForm = { //Fetch form data
            'fname'         : $('#registration-form #fname').val(),
            'lname'         : $('#registration-form #lname').val(),
            'mname'         : $('#registration-form #mname').val(),
            'email'         : $('#registration-form #email').val(),
            'cell'          : $('#registration-form #cell').val(),
            'country'       : $('#registration-form #country').val(),
            'organization'  : $('#registration-form #organization').val(),
            'occupation'    : $('#registration-form #occupation').val(),
            'additional'    : $('#registration-form #additional').val(),
            'speechTitle'   : $('#registration-form #speechTitle').val()
    };

    $.ajax({
            type      : 'POST',
            url       : './assets/php/contact.php',
            data      : postForm,
            dataType  : 'json',
            success   : function(data) {
                            if (data.success) {
                                alert("Registration was successfull");
                                $('#registration-msg .alert').html("Registration Successful");
                                $('#registration-msg .alert').removeClass("alert-danger");
                                $('#registration-msg .alert').addClass("alert-success");
                                $('#registration-msg').show();
                            }
                            else
                            {
                                $('#registration-msg .alert').html("Registration Failed");
                                $('#registration-msg .alert').removeClass("alert-success");
                                $('#registration-msg .alert').addClass("alert-danger");
                                $('#registration-msg').show();
                            }
                        }
        });
});


/*
 * SmoothScroll
*/

smoothScroll.init();

$(document).ready(function(){
    $('input[type="checkbox"]').click(function(){
        if($(this).attr("value")=="show-div"){
            $("#speechTitle").toggle();
        }
    });
});

$(document).ready(function() {
  $('#media').carousel({
    pause: true,
    interval: false,
  });
});


// $(function(){
//     $("#speechTitle").toggleClass('hidden');
//     // $("#speech-title").removeClass('hidden');
// //   $("#myId").addClass('hidden');
// });