$( document ).ready(function() {
    
    $("#send_msg").click(function(){
        var name =  $("#contactName").val()
        var email =  $("#contactEmail").val()
        var msg =  $("#contactMessage").val()

        if(name.length < 2 || name.length > 15 ){
            $("#contactName").addClass('border-danger')
        }
        else{
            $("#contactName").removeClass('border-danger')         
        }
        if(email.length < 2 || email.length > 20 ){
            $("#contactEmail").addClass('border-danger')
        }
        else {
            $("#contactEmail").removeClass('border-danger')          
        }
        if(msg.length < 5 || msg.length > 100 ){
            $("#contactMessage").addClass('border-danger')
        }
        else{
            $("#contactMessage").removeClass('border-danger')            
        }
        
    })
});
