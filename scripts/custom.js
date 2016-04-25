$(function() {
    // Get the form.
    var form = $('#dev_signup');

    // Get the messages div.
    var formMessages = $('#form-messages');

    // Set up an event listener for the contact form.
	$('#dev_signup').submit(function(event) {
	    // Stop the browser from submitting the form.
	    event.preventDefault();

	    // Serialize the form data.
		var formData = $('#dev_signup').serialize();

		// Submit the form using AJAX.
		$.ajax({
		    type: 'POST',
		    url: $('#dev_signup').attr('action'),
		    data: formData
		}).done(function(response) {
    	// Make sure that the formMessages div has the 'success' class.
		    $(formMessages).removeClass('error');
		    $(formMessages).addClass('success');

		    // Set the message text.
		    $(formMessages).text(response);

		    // Clear the form.
		    // $('#name').val('');
		    $('#dev_email').val('');
		    // $('#message').val('');
		}).fail(function(data) {
		    // Make sure that the formMessages div has the 'error' class.
		    $(formMessages).removeClass('success');
		    $(formMessages).addClass('error');

		    // Set the message text.
		    if (data.responseText !== '') {
		        $(formMessages).text(data.responseText);
		    } else {
		        $(formMessages).text('Oops! An error occured and your message could not be sent.');
		    }
		});
	});

});