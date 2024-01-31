// form submit aavunna tymil validation nadakkanam.. 
$(document).ready(function(){
    $("#signup-form").validate({/*write some validation rules*/
        rules:{
            fname:{
                required:true,
                minlength:4 /*aa input type il onnum ezhudhadhe namak proceed cheyan patila.*/
            },
            sname:{
                required:true,
                minlength:4
            },
            emailAddress:{
                required:true,
                email:true
            },
            password:{
                minlength:6
            },
            day:{
                required:true
            },
            gender:{
                required:true
            }
        }
    })
})