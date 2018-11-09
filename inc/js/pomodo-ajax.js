jQuery(document).ready(function($) {
    $("#pomodo-button").click(function(e) {
    	// var kiml = pomo_do_object.guten_nerd;
    	// alert('gutijax-butt '+kiml);
        e.preventDefault();
        // We'll pass this variable to the PHP function example_ajax_request
        var fruit = 'Banana';
    	// alert('fruit');

        // // This does the ajax request
        $.ajax({
            type: "POST",
            url: pomo_do_object.pomo_do_ajaxurl,
            // url: ajaxurl, // or example_ajax_obj.ajaxurl if using on frontend
            data: {
                'action': 'pomo_do_action',
                'fruit' : fruit,
                'something_imp': $('#pomodo-form').serialize(),
                'task': $('#pomodo-input').val(),
                'pomo_do_ajaxurl' : pomo_do_object.pomo_do_ajaxurl,
                'pomo_do_nonce' : pomo_do_object.pomo_do_nonce,
            },
            success:function(data) {
                $( '#pomodo-response' ).html(data);
                // This outputs the result of the ajax request
                console.log(data);
            },
            error: function(jqXHR, textStatus, errorThrown){
                console.log(errorThrown);
            }
        });  
    });      
});
