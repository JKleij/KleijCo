$(document).ready(function () {
    $('.form-submit').click(function () {
        var name = $('.form-name').val()
        var email = $('.form-email').val()
        var message = $('.form-message').val()
        var statusElm = $('.form-status')
        statusElm.empty()

        if(name.length > 0) {
            if(email.length > 5 && email.includes("@") && email.includes(".")) {
                if(message.length > 0) {
                    statusElm.show()
                    statusElm.append("<p>Thank you for your message!</p>")
                } else {
                    event.preventDefault()
                    statusElm.show()
                    statusElm.append("<p>Please include a message</p>")
                }
            } else {
                event.preventDefault()
                statusElm.show()
                statusElm.append("<p>Please include a valid email address</p>")
            }
        } else {
            event.preventDefault()
            statusElm.show()
            statusElm.append("<p>Please include your name</p>")
        }
    })
})

$(function () {
    $(".field-wrapper .field-placeholder").on("click", function () {
        $(this).closest(".field-wrapper").find("input").focus();
    });

    $(".field-wrapper input").on("keyup", function () {
        var value = $.trim($(this).val());
        if (value) {
            $(this).closest(".field-wrapper").addClass("hasValue");
        } else {
            $(this).closest(".field-wrapper").removeClass("hasValue");
        }
    });
});

$(function () {
    $(".field-wrapper .field-placeholder-text").on("click", function () {
        $(this).closest(".field-wrapper").find("textarea").focus();
    });

    $(".field-wrapper textarea").on("keyup", function () {
        var value = $.trim($(this).val());
        if (value) {
            $(this).closest(".field-wrapper").addClass("hasValue");
        } else {
            $(this).closest(".field-wrapper").removeClass("hasValue");
        }
    });
});