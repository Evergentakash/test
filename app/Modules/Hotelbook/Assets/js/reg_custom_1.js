$(function () {
    function ShowProgress() {
        setTimeout(function () {
            var modal = $('<modal />');
            modal.addClass("modal_window");
            $('body').append(modal);
            var loading = $(".loading");
            loading.show();
            var top = $(window).height() / 2 - loading.height() / 2;
            var left = $(window).width() / 2 - loading.width() / 2;
            loading.css({top: top, left: left});
        }, 200);
//        i = 0;
//        text = "Loading";
//        setInterval(function () {
//            $(".load").html(text + Array((++i % 4) + 1).join("."));
//        }, 200);
    }
    if ($(window).width() > 768) {
        $('.parentalControl .pwd').attr('type', 'password');
    } else {
        $('.parentalControl .pwd').attr('type', 'tel');
    }
    $('.radioDiv').hide();
    $('.par_password').hide();
    if ($('.parental_toggle').is(':checked')) {
        $('.radioDiv').show();
    }
    if ($('.radioAge').is(':checked')) {
//        $('.par_password').show();
    }
    $('#offcontrol_btn').hide();
    $('.parental_toggle').on('change', function () {
        if ($(this).is(':checked')) {
            $('.radioDiv').show();
            if ($('#oldParentalControlPin').val().length < 4) {
                $('#offcontrol_btn').hide();
            }
            if($("#pin-txt-boxes").is(":visible")){
                $('#offcontrol_btn').hide();
            }
        } else {
            $('.radioDiv').hide();
            if ($('#oldParentalControlPin').val().length) {
                $('#offcontrol_btn').show();
            } else {
                $('#offcontrol_btn').hide();
            }
        }
    });
    
    //user/device-login.phtml
    $('.remove-icon').one('click',function(){
//        $('.remDev').html('<img src="/assets/images/loading.gif" width="25">');
         $(this).click(function () { return false; });
    });
    
    if ($('#oldParentalControlPin').val() !== undefined) {
        if ($('#oldParentalControlPin').val().length == 4) {
            $('#offcontrol_btn').show();
        }
    }
    $('body').on('change', '.radioAge', function () {
        if ($(this).is(':checked')) {
            if ($('#oldParentalControlPin').val().length < 4) {
                $('.par_password').show();
            }
            if ($('#oldParentalControlPin').val() == '') {
                $("#setcontrol_form").validate({
                    rules: {
                        controlpin: {
                            required: true,
                            digits: true,
                            checkSpace: true,
                            minlength: 4,
                            maxlength: 4
                        },
                        controlpinconfirm: {
                            required: true,
                            equalTo: "#controlpin"
                        }
                    },
                    messages: {
                        controlpin: {
                            required: ctrlPinReq,
                            digits: ctrlPinlen4,
                            checkSpace: chkspace,
                            minlength: ctrlPinlen4
                        },
                        controlpinconfirm: {
                            required: cnfPinReq,
                            equalTo: cnfPineq
                        }
                    }
                });
            } else {
                $("#setcontrol_form").validate({
                    rules: {
                        controlpin: {
                            required: true,
                            digits: true,
                            checkSpace: true,
                            minlength: 4,
                            maxlength: 4
                        },
                        controlpinconfirm: {
                            required: true,
                            equalTo: "#controlpin"
                        }
                    },
                    messages: {
                        controlpin: {
                            required: ctrlPinReq,
                            digits: ctrlPinlen4,
                            checkSpace: chkspace,
                            minlength: ctrlPinlen4
                        },
                        controlpinconfirm: {
                            required: cnfPinReq,
                            equalTo: cnfPineq
                        }
                    }
                });
            }

        } else
            $('.par_password').hide();
    });
    if ($('#oldParentalControlPin').val() == '') {
        $("#setcontrol_form").validate({
            rules: {
                controlpin: {
                    required: true,
                    digits: true,
                    checkSpace: true,
                    minlength: 4,
                    maxlength: 4
                },
                controlpinconfirm: {
                    required: true,
                    equalTo: "#controlpin"
                }
            },
            messages: {
                controlpin: {
                    required: ctrlPinReq,
                    digits: ctrlPinlen4,
                    checkSpace: chkspace,
                    minlength: ctrlPinlen4
                },
                controlpinconfirm: {
                    required: cnfPinReq,
                    equalTo: cnfPineq
                }
            }
        });
    } else {
        $("#setcontrol_form").validate({
            rules: {
                controlpin: {
                    required: true,
                    digits: true,
                    checkSpace: true,
                    minlength: 4,
                    maxlength: 4
                },
                controlpinconfirm: {
                    required: true,
                    equalTo: "#controlpin"
                }
            },
            messages: {
                controlpin: {
                    required: ctrlPinReq,
                    digits: ctrlPinlen4,
                    checkSpace: chkspace,
                    minlength: ctrlPinlen4
                },
                controlpinconfirm: {
                    required: cnfPinReq,
                    equalTo: cnfPineq
                }
            }
        });
    }
    $("#parent_login").validate({
        rules: {
            parentalControlPin: {
                required: true,
                minlength: 4,
                maxlength: 4,
                checkSpace: true
            }
        },
        messages: {
            parentalControlPin: {
                required: ctrlPinReq,
                minlength: ctrlPinlen4,
                checkSpace: chkspace
            }
        }
    });
    $("#operators_form").validate({
        rules: {
            skyaccountnumber: {
                required: true,
                checkSpace: true
            },
            lastnmae: {
                required: true
            },
            operator: {
                required: true
            }
        },
        messages: {
            skyaccountnumber: {
                required: 'Please enter your Sky Account number',
                checkSpace: chkspace
            },
            lastnmae: {
                required: 'Please enter your Last name'
            },
            operator: {
                required: reqmsg
            }
        }
    });

    $(document).ajaxStop(function () {
        $('modal').hide();
    });
    $(document).ajaxStart(function () {
        ShowProgress();
        $('.modal').hide();
    });
    $('form').submit(function () {
        if ($(this).valid()) {
            $(this).find("input[type='submit'],button[type='submit']").prop('disabled', true);
            $(this).find("input[type='submit']").val(Processing + ' ...');
            $(this).find("button[type='submit']").text(Processing + ' ...');
            $('.usercancel,.mobcancel').unbind('click');
            $('.usercancel,.mobcancel').css('cursor', 'not-allowed');
            //  return true;
        } else
            return false;
    });



    $("#forgotpasswd").validate({
        rules: {
            email: {
                required: true,
                email: true
            }
        }, messages: {
            email: {
                required: regReqEmail,
                email: regValEmail
            }
        }
    });

    $("#register_form").validate({
        rules: {
            email: {
                required: true,
                email: true
            },
            c_email: {
                required: true,
                email: true,
                equalTo: "#email"
            },
            nickname: {
                required: true,
                alphaSpecial: true
            },
            password: {
                required: true,
                checkSpace: true,
                minlength: 6,
                maxlength: 25
            },
            confirmpassword: {
                required: true,
                checkSpace: true,
                equalTo: "#password",
                minlength: 6,
                maxlength: 25
            },
            coupon: {
                required: true
            },
            terms: {
                required: true
            }
        },
        messages: {
            email: {
                required: regReqEmail,
                email: regValEmail
            },
            c_email: {
                required: regReqEmail,
                email: regValEmail,
                equalTo: regCMailEq
            },
            nickname: {
                required: regNicReq,
                alphaSpecial: regNicFor
            },
            password: {
                required: regPassreq,
                minlength: ctrlPinlen,
                checkSpace: chkspace
            },
            confirmpassword: {
                required: regCpasReq,
                equalTo: regCpasEq,
                minlength: ctrlPinlen,
                checkSpace: chkspace
            },
            coupon: {
                required: reqcoupon
            },
            terms: {
                required: reqmsg
            }
        },
        errorPlacement: function (error, element) {
            if (element.attr('name') == "terms") {
                error.appendTo('#terms_err');
            } else if (element.attr('name') == "coupon") {
                error.appendTo('#couponmsg');
            } else {
                error.insertAfter(element);
            }
        }
    });

    $("#login_form").validate({
        rules: {
            email: {
                required: true,
                email: true
            },
            password: {
                required: true
            },
            operator: {
                required: true
            }
        },
        messages: {
            email: {
                required: regReqEmail,
                email: regValEmail
            },
            password: {
                required: regPassreq
            },
            operator: {
                required: reqmsg
            }
        }
    });
    $("#resetparent_form").validate({
        rules: {
            controlpin: {
                required: true,
                checkSpace: true,
                minlength: 4,
                maxlength: 4
            },
            controlpinconfirm: {
                required: true,
                minlength: 4,
                maxlength: 4,
                checkSpace: true,
                equalTo: "#controlpin"
            }
        },
        messages: {
            controlpin: {
                required: ctrlPinReq,
                minlength: ctrlPinlen4,
                checkSpace: chkspace
            },
            controlpinconfirm: {
                required: cnfPinReq,
                minlength: ctrlPinlen4,
                equalTo: cnfPineq,
                checkSpace: chkspace
            }
        }
    });
    $("#profile_form").validate({
        rules: {
            email: {
                required: true,
                email: true
            },
            nickname: {
                required: true
            }
        },
        messages: {
            email: {
                required: regReqEmail,
                email: regValEmail
            },
            nickname: {
                required: regNicReq
            }
        }
    });
    $("#resetpwd_form").validate({
        rules: {
            password: {
                required: true,
                checkSpace: true,
                minlength: 6,
                maxlength: 25
            },
            confirmpassword: {
                required: true,
                checkSpace: true,
                equalTo: "#password",
                minlength: 6,
                maxlength: 25
            }
        },
        messages: {
            password: {
                required: regPassreq,
                minlength: ctrlPinlen,
                checkSpace: chkspace
            },
            confirmpassword: {
                required: regCpasReq,
                equalTo: regCpasEq,
                minlength: ctrlPinlen,
                checkSpace: chkspace
            }
        }
    });
    $("#changepwd_form").validate({
        rules: {
            oldpassword: {
                required: true
            },
            password: {
                required: true,
                checkSpace: true,
                minlength: 6,
                maxlength: 25,
                notEqual: '#oldpassword'
            },
            confirmpassword: {
                required: true,
                checkSpace: true,
                equalTo: "#password",
                minlength: 6,
                maxlength: 25
            }
        },
        messages: {
            oldpassword: {
                required: regOldPassreq,
            },
            password: {
                required: regPassreq,
                minlength: ctrlPinlen,
                notEqual: difPasReq,
                checkSpace: chkspace
            },
            confirmpassword: {
                required: regCpasReq,
                equalTo: regCpasEq,
                minlength: ctrlPinlen,
                checkSpace: chkspace
            }
        }
    });
    $("#adddevice_form,#updatedevice_form").validate({
        rules: {
            devicename: {
                required: true
            },
            devicetype: {
                required: true
            },
            serialnumber: {
                required: true
            },
            modelnumber: {
                required: true
            }
        },
        messages: {
            devicename: {
                required: divName
            },
            devicetype: {
                required: divType
            },
            serialnumber: {
                required: divsno
            },
            modelnumber: {
                required: divModel
            }

        }
    });
});
$.validator.addMethod("notEqual", function (value, element, param) {
    return this.optional(element) || value != $(param).val();
});
$.validator.addMethod("checkEmailDomain", function (value) {
    var email = value;
    email = email.replace(/^\s+|\s+$/, '');
    var endofString = email.split('.');
    var ending = endofString.length - 1;
    var tld = (endofString[ending]).toLowerCase();
    if ($.inArray(tld, tlds) > -1) {
        return true;
    } else {
        return false;
    }
});

$.validator.addMethod("checkSpace", function (value) {
    if (value.match(/\s/g)) {
        return false;
    }
    return true;
});
$.validator.addMethod("alphaSpecial", function (value) {
    var regex = new RegExp(/^[ A-Za-z0-9._.-]*$/);
    if (regex.test(value)) {
        return true;
    } else {
        return false;
    }
});
function showpinfunction() {
    $('#pin-txt-boxes').show();
    $('#pin-labl').html(pinlabl);
    $('#pincnf-labl').html(conpinlab);
    //$('#offcontrol_btn').show();
    $('#offcontrol_btn').hide();
}