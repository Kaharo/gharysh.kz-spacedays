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


// $(function(){
//     $("#speechTitle").toggleClass('hidden');
//     // $("#speech-title").removeClass('hidden');
// //   $("#myId").addClass('hidden');
// });