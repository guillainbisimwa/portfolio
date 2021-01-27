
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
        if(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email) == false){
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
