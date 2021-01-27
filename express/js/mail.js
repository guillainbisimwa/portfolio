$( document ).ready(function() {

    var Email = { send: function (a) { return new Promise(function (n, e) { a.nocache = Math.floor(1e6 * Math.random() + 1), a.Action = "Send"; var t = JSON.stringify(a); Email.ajaxPost("https://smtpjs.com/v3/smtpjs.aspx?", t, function (e) { n(e) }) }) }, ajaxPost: function (e, n, t) { var a = Email.createCORSRequest("POST", e); a.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), a.onload = function () { var e = a.responseText; null != t && t(e) }, a.send(n) }, ajax: function (e, n) { var t = Email.createCORSRequest("GET", e); t.onload = function () { var e = t.responseText; null != n && n(e) }, t.send() }, createCORSRequest: function (e, n) { var t = new XMLHttpRequest; return "withCredentials" in t ? t.open(e, n, !0) : "undefined" != typeof XDomainRequest ? (t = new XDomainRequest).open(e, n) : t = null, t } };   
    
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

        Email.send({
            SecureToken : "60629796-104b-4824-bf91-366ed67321c7",
            To : 'guillainbisimwam@gmail.com',
            From : "you@isp.com",
            Subject : "This is the subject",
            Body : "And this is the body",
            Attachments : [
            {
                name : "smtpjs.png",
                path : "https://networkprogramming.files.wordpress.com/2017/11/smtpjs.png"
            }]
        }).then(
          message => alert(message)
        );

        // Email.send({
        //     SecureToken : "60629796-104b-4824-bf91-366ed67321c7",
        //     To : "guillainbisimwa@hotmail.fr",
        //     From : "guillainbisimwa@gmail.com",
        //     Subject : "This is the subject",
        //     Body : "And this is the body"
        //     // Attachments : [
        //     // {
        //     //     name : "gbisimwa.png",
        //     //     path : "https://pbs.twimg.com/profile_banners/140816323/1573108571/1500x500"
        //     // }]
        // }).then(
        //   message => alert(message)
        // );
    })

});
