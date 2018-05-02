var tlds = ["ac", "academy", "ad", "ae", "aero", "af", "ag", "agency", "ai",
    "al", "am", "an", "ao", "aq", "ar", "arpa", "as", "asia", "at", "au", "aw",
    "abogado", "accountant", "accountants", "active", "actor", "adult", "airforce",
    "allfinanz", "alsace", "amsterdam", "android", "apartments", "app", "aquarelle",
    "archi", "army", "associates", "attorney", "auction", "audio", "autos", "axa",
    "ax", "az", "ba", "bargains", "bb", "bd", "be", "berlin", "bf", "bg", "bh",
    "bi", "bike", "biz", "bj", "blue", "bm", "bn", "bo", "boutique", "bq", "br", "bs",
    "band", "bank", "bar", "barclays", "barclaycard", "bayern", "beer", "best", "bid",
    "bingo", "bio", "black", "blackfriday", "blog", "bloomberg", "bmw", "bnl", "bnpparibas",
    "boo", "bq", "brussels", "budapest", "business", "bzh", "bt", "build", "builders",
    "buzz", "bv", "bw", "by", "bz", "ca", "cab", "camera", "camp", "cards", "careers",
    "cat", "catering", "cc", "cd", "center", "cal", "caravan", "cat", "cancerresearch",
    "capital", "care", "career", "casa", "cafe", "cash", "casino", "cern", "chrome",
    "channel", "chat", "christmas", "church", "citic", "city", "claims", "click",
    "clinic", "coach", "college", "cologne", "cuisinella", "consulting", "cooking",
    "country", "coupons", "crs", "credit", "creditcard", "cs", "cricket", "cymru",
    "ceo", "cf", "cg", "ch", "cheap", "ci", "ck", "cl", "cleaning", "clothing",
    "club", "cm", "cn", "co", "codes", "coffee", "com", "community", "company",
    "computer", "condos", "construction", "contractors", "cool", "coop", "cr",
    "cruises", "cs", "cu", "cv", "cw", "cx", "cy", "cz", "dance", "dating", "de", "dd",
    "democrat", "diamonds", "directory", "dj", "dk", "dm", "do", "domains",
    "dad", "date", "day", "dd", "deals", "degree", "delivery", "dental", "dentist",
    "desi", "design", "diet", "digital", "direct", "discount", "dnp", "dog", "download", "dvag",
    "dz", "ec", "edu", "education", "ee", "eg", "eh", "email", "enterprises",
    "eat", "eh", "emerck", "energy", "engineer", "engineering", "esq", "everbank", "exchange", "express", "eus",
    "equipment", "er", "es", "estate", "et", "eu", "events", "expert", "exposed",
    "farm", "fi", "fj", "fk", "flights", "florist", "fm", "fo", "foundation",
    "fail", "faith", "fans", "fashion", "feedback", "finance", "financial", "firmdale",
    "fish", "fishing", "fit", "fitness", "flights", "flsmidth", "frogans", "flowers", "fly",
    "foo", "football", "forsale", "frl", "fund", "furniture", "fyi",
    "fr", "futbol", "ga", "gallery", "gb", "gd", "ge", "gf", "gg", "gh", "gi",
    "gift", "gl", "glass", "gm", "gn", "gov", "gp", "gq", "gr", "graphics", "gs",
    "gal", "garden", "gbiz", "gent", "gifts", "gle", "global", "globo", "gmail",
    "gmo", "gmx", "google", "gold", "golf", "gop", "gratis", "green", "gripe", "guide",
    "hamburg", "haus", "healthcare", "health", "here", "hiphop", "hiv", "hockey",
    "homes", "horse", "host", "hosting", "how", "hsbc", "gt", "gu", "guitars", "guru",
    "gw", "gy", "hk", "hm", "hn", "holdings", "holiday", "house", "hr", "ht", "hu",
    "id", "ie", "il", "im", "immobilien", "ibm", "immo", "industries", "ing", "ink", "insure", "investments", "irish", "itda",
    "in", "info", "institute", "int", "international", "io", "iq", "ir", "is",
    "it", "je", "jm", "jo", "jetzt", "jewelry", "job", "juegos", "jobs", "jp", "kaufen", "ke", "kg", "kh", "ki", "kim",
    "kitchen", "kiwi", "km", "kn", "kp", "kr", "koeln", "krd", "kred", "krd", "kw", "ky", "kz", "la", "land",
    "lb", "lc", "li", "lighting", "limo", "link", "lk", "lr", "ls", "lt", "lu",
    "lacaixa", "latrobe", "lawyer", "lds", "lease", "legal", "lgbt", "life",
    "limited", "loan", "loans", "lol", "london", "lotto", "love", "luxe", "lat",
    "luxury", "lv", "ly", "ma", "maison", "management", "mango", "marketing",
    "mc", "md", "me", "menu", "mg", "mh", "mil", "mk", "ml", "mm", "mn", "mo",
    "madrid", "market", "markets", "mba", "media", "meet", "melbourne", "meme", "memorial",
    "men", "miami", "mini", "moscow", "moe", "money", "mortgage", "mormon", "motorcycles", "mov", "movie",
    "mobi", "moda", "monash", "mp", "mq", "mr", "ms", "mt", "mu", "museum", "mv",
    "mw", "mx", "my", "mz", "na", "nagoya", "name", "nc", "ne", "net", "nf", "ng",
    "navy", "network", "neustar", "new", "news", "nexus", "ngo", "nhk", "nra", "nrw", "nyc",
    "ni", "ninja", "nl", "no", "np", "nr", "nu", "nz", "om", "onl", "org",
    "one", "ong", "online", "ooo", "organic", "otsuka", "okinawa", "ovh", "pa",
    "partners", "parts", "pe", "pf", "pg", "ph", "photo", "photography", "photos",
    "pics", "pink", "pk", "pl", "plumbing", "pm", "pn", "post", "pr", "pro",
    "paris", "party", "pharmacy", "physio", "piaget", "pictures", "pizza", "place",
    "plus", "pohl", "poker", "porn", "post", "praxi", "press", "prod", "prof", "property", "pub",
    "productions", "properties", "ps", "pt", "pw", "py", "qa", "qpon", "quebec", "re",
    "racing", "realtor", "rehab", "reise", "reisen", "reit", "ren", "republican", "rest",
    "restaurant", "review", "rip", "rio", "rocks", "rodeo", "rsvp", "run", "ryukyu",
    "recipes", "red", "rentals", "repair", "report", "reviews", "rich", "ro", "rs",
    "ru", "ruhr", "rw", "sa", "sb", "sc", "sd", "se", "sexy", "sg", "sh",
    "shiksha", "shoes", "si", "singles", "sj", "sk", "sl", "sm", "sn", "so",
    "saarland", "sale", "sarl", "sca", "scb", "schmidt", "scot", "school", "schule",
    "services", "sex", "show", "site", "soccer", "software", "sohu", "solar", "solutions",
    "soy", "space", "spiegel", "sr", "ss", "st", "style", "su", "sucks", "supplies", "supply",
    "support", "surf", "surgery", "suzuki", "sydney",
    "social", "solar", "solutions", "sr", "st", "ss", "su", "support", "sv", "sx",
    "sy", "systems", "sz", "surf", "tattoo", "tc", "td", "technology", "tel", "tf", "tg",
    "th", "tienda", "tips", "tj", "tk", "tl", "tm", "tn", "to", "today", "tokyo",
    "taipei", "tatar", "tirol", "tokyo", "tax", "taxi", "team", "tennis", "theater", "tires", "top", "tours", "town", "toys", "trade", "tui",
    "tools", "tp", "tr", "training", "travel", "tt", "tv", "tw", "tz", "ua", "ug", "university", "uol",
    "uk", "uno", "us", "uy", "uz", "va", "vc", "ve", "ventures", "vg", "vi",
    "vacations", "vegas", "versicherung", "vet", "video", "viajes", "vlaanderen", "vodka", "vote", "voto",
    "viajes", "villas", "vision", "vn", "voting", "voyage", "vu", "wang", "watch",
    "wales", "webcam", "website", "wedding", "wein", "whoswho", "wiki", "williamhill", "win", "wme", "work", "world", "wtc", "wtf",
    "wed", "wf", "wien", "works", "ws", "xxx", "ye", "yt", "yu", "xyz", "yandex", "yoga", "yokohama", "youtube", "yu",
    "za", "zm", "zone", "zr", "zuerich", "zw"];

var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : sParameterName[1];
        }
    }
};
var dataParam = getUrlParameter('data');


$(function () {
    spanText = '<span class="glyphicon glyphicon-exclamation-sign"></span>';
    $('.checkb').hide();
    $('.glyphicon-ok').hide();
    $('.radiobtn').on('click', function () {
        if ($(this).find('.checkb').is(':checked')) {
            $(this).removeClass('btn-primary');
            $(this).addClass('btn-success');
            $(this).children('.glyphicon-ok').show();
            $(this).find("#yearlyprodid").html(em_js_msg['Selected']);

        } else {
            $(this).removeClass('btn-success');
            $(this).addClass('btn-primary');
            $(this).children('.glyphicon-ok').hide();
            $(this).find("#yearlyprodid").html(em_js_msg['Choose Plan']);
        }
    });
//    $('<i class="fa fa-chevron-down"></i>').appendTo('.footable-loaded.breakpoint .footable-toggle');
//    $('.fa-chevron-down').on('click',function(e){
//        e.preventDefault();
//        return true;
//    });
    $('#dob').datepicker(
            {
                minDate: new Date(1900, 1 - 1, 1), maxDate: '-18Y',
                dateFormat: 'mm/dd/yy',
//      defaultDate: new Date(1970,1-1,1),
                changeMonth: true,
                changeYear: true,
                yearRange: '-110:-18',

//        format: 'mm/dd/yyyy',
//        viewMode: "years",
//        changeMonth: true,
//        changeYear: true,
//        endDate : dt
            }
    );
    $('#load').hide();
    $(document).ajaxStop(function () {
        $('#load').hide();
    });

    $(document).ajaxStart(function () {
        $('#load').show();
    });
});
$(window).load(function () {
    $("#loading").fadeOut("slow");
});
$('#openNav').on('click', function () {
    if ($(window).width() < 768) {
        $('#myNav').addClass('overlay');
//        $('#myNav').show();
        $(this).hide();
    }
});
$('#closeNav').on('click', function () {
    if ($(window).width() < 768) {
        $('#myNav').removeClass('overlay');
//        $('#myNav').hide();
        $('#openNav').show();
    }
});

$.validator.setDefaults({
    invalidHandler: function (event, validator) {
        var errors = validator.numberOfInvalids();
        if (errors) {
            if (validator.errorList.length > 0) {
                validator.errorList[0].element.focus();
            }
        }
    },
    errorPlacement: function (error, element) {
        if (element.attr('name') == 'form_exp_month') {
            error.appendTo('#exp_month');
        }
        if (element.attr('name') == 'terms_conditions' || element.attr('name') == 'terms_conditions_cc') {
            error.appendTo('#frm_terms_err');
        } else if (element.attr('name') == 'terms_conditions_kl') {
            error.appendTo('#frm_terms_err_kl');
        } else {
            error.insertAfter(element);
        }
        // error.insertAfter(element);
        $(element).closest('.form-group').removeClass('success').addClass('has-error');
    },
    highlight: function (element) {
        $(element).closest('.form-group').removeClass('success').addClass('has-error');
    },
    unhighlight: function (element) {
        $(element).closest('.form-group').removeClass('has-error').addClass('success');
    }
});
$('#popoverimg').popover({
    trigger: 'manual',
    html: true
}).click(function () {
    if ($(this).hasClass('pop')) {
        $(this)
                .popover('hide')
                .removeClass('pop');
    } else {
        var response = '<img class="img-responsive" src="/presales/ev/web/images/cvv.gif" />';
        $(this)
                .attr('data-content', response)
                .popover('show')
                .addClass('pop');
    }
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

$.validator.addMethod("monthlylimit", function (value) {
    var monthlyval = Math.ceil($('#monthlylimit').val());
    if (monthlyval > 1000) {
        return false;
    }
    return true;
});

function validateLoginForm() {
    $("#login_form").validate({
        rules: {
            username: {
                required: true,
                email: true,
                checkEmailDomain: "#username"
            },
            password: {
                required: true,
                checkSpace: true,
                minlength: 4,
                maxlength: 25
            }
        },
        messages: {
            username: {
                required: 'Username is required',
                email: 'Please enter a valid Email address',
                checkEmailDomain: 'Please enter a valid Email address'
            },
            password: {
                required: 'evw00303',
                checkSpace: 'evw00508',
                minlength: 'evw00304',
                maxlength: 'evw00305'
            }
        },
        invalidHandler: function (event, validator) {
            var errors = validator.numberOfInvalids();
            if (errors) {
                if (validator.errorList.length > 0) {
                    for (x = 0; x < validator.errorList.length; x++) {
                        var errorStr = validator.errorList[x].message;
//                        ga('send', 'event', em_js_msg[errorStr][0], em_js_msg[errorStr][1], em_js_msg[errorStr][2], 1);
                    }
                }
            }
        },
        showErrors: function (errorMap, errorList) {
            var errors = this.numberOfInvalids();
            if (errors) {
                if (errorList.length > 0) {
                    for (x = 0; x < errorList.length; x++) {
                        var errorStr = errorList[x].message;
                        errorList[x].message = em_js_msg[errorStr][2];
                    }
                }
            }
            this.defaultShowErrors();
        }
    });
    if ($("#login_form").valid()) {
        $("#login_form").submit();
        $("#login_btn").attr("disabled", "disabled");
        $("#login_btn").attr("onClick", "#");
        $("#login_btn").attr("style", "cursor:default;");
        return true;
    } else {
        return false;
    }
}

function handleKeyPress(e, obj) {
    var formid = $(obj).attr('id');
    var key = e.keyCode || e.which;
    var targetEle = (e.target || e.srcElement).id;
    if (key == 13) {
        if (formid === 'register_form') {
            if ($("#register_btn").is(":enabled")) {
                validateRegistrationForm();
            }
        } else if (formid === 'login_form') {
            if ($("#login_btn").is(":enabled")) {
                validateLoginForm();
            }
        } else if (formid === 'addcontact_form') {
            if ($("#submitBtn").is(":enabled")) {
                addprofilecontact();
            } else {
                e.preventDefault();
            }
        } else if (formid === 'adddevice_form') {
            if ($("#submitBtn").is(":enabled")) {
                addDevice();
            } else {
                e.preventDefault();
            }
        } else if (formid === 'updatedevice_form') {
            if ($("#submitBtn").is(":enabled")) {
                updateDevice();
            } else {
                e.preventDefault();
            }
        } else if (formid === 'forgotpassword_form') {
            if ($("#changepass_btn").is(":enabled")) {
                validateforgotpasswordForm();
            } else {
                e.preventDefault();
            }
        } else if (formid === 'email_form') {
            if ($("#confirm_btn").is(":enabled")) {
                validateConfEmailForm();
            } else {
                e.preventDefault();
            }
        } else if (formid === 'editpassword_form') {
            if ($("#changepass_btn").is(":enabled")) {
                validatechangepwd();
            } else {
                e.preventDefault();
            }
        } else if (formid == 'contact_form') {
            updatecontact();
        }

    }
}

function validateRegistrationForm() {
    $("#register_form").validate({
        ignore: ':hidden',
        rules: {
            
            email: {
                required: true,
                email: true,
                checkEmailDomain: "#email"
            },
            passWord: {
                required: true,
                checkSpace: true,
                minlength: 4,
                maxlength: 25
            },
            
           
        },
        messages: {
            
            email: {
                required: 'evw00102',
                email: 'evw00103',
                checkEmailDomain: 'Please enter a valid Email address'
            },
            passWord: {
                required: 'evw00104',
                checkSpace: 'evw00508',
                minlength: 'evw00105',
                maxlength: 'evw00120'
            },
            
        },
        invalidHandler: function (event, validator) {
            var errors = validator.numberOfInvalids();
            if (errors) {
                if (validator.errorList.length > 0) {
                    for (x = 0; x < validator.errorList.length; x++) {
                        var errorStr = validator.errorList[x].message;
//                        ga('send', 'event', em_js_msg[errorStr][0], em_js_msg[errorStr][1], em_js_msg[errorStr][2], 1);
                    }
                }
            }
        },
        showErrors: function (errorMap, errorList) {
            var errors = this.numberOfInvalids();
            if (errors) {
                if (errorList.length > 0) {
                    for (x = 0; x < errorList.length; x++) {
                        var errorStr = errorList[x].message;
                        errorList[x].message = em_js_msg[errorStr][2];
                    }
                }
            }
            this.defaultShowErrors();
        },
        errorPlacement: function (error, element) {
            
                error.insertAfter(element);
            
        },
        highlight: function (element, errorClass, validClass) {
            return false;  // ensure this function stops
        }
    });
    //diableServerSideStatus();
    // var validat = $("#register_form").valid();
    $("#register_form").valid();
    if ($("#register_form").valid()) {
        $("#register_form").submit();
        $("#register_btn").attr("disabled", "disabled");
        $("#register_btn").attr("onClick", "#");
        $("#register_btn").attr("style", "cursor:default;");
        return true;
    } else {
        return false;
    }
}

            

function diableServerSideStatus() {
    $(".successMessage").hide();
    $(".fail").hide();
}

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

$.validator.addMethod("alphanumaric", function (value) {
    if (value.match(/^[0-9a-zA-Z]+$/)) {
        return true;
    }
    return false;
});

$.validator.addMethod("equalToIgnoreCase", function (value, element, param) {
    return this.optional(element) ||
            (value.toLowerCase() == $(param).val().toLowerCase());
});

$.validator.addMethod("emailChar", function (value, element) {
    //     var regex = /[?+*&%]/;
    //   // var regex = new RegExp("^[a-zA-Z0-9@._]+$");
    //    var key = value;
    //    if (regex.test(key)) {
    //        return false;
    //    }
    return true;
});

$.validator.addMethod("disallowedChar", function (value, element) {
    var regex = /[0-9!@#$%^&*]/;
    var key = value;
    if (regex.test(key)) {
        return false;
    }
    return true;
});

$.validator.addMethod("validemail", function (value) {
    var regex = new RegExp("^[a-zA-Z0-9@._-]+$");
    if (value.match(regex)) {
        return true;
    } else {
        return false;
    }
});




function validateDateIsNotInPast(e, f) {
    var d = new Date();
    var a = new Date(d.getFullYear(), d.getMonth(), 1);
    var b = new Date(parseFloat(f), parseFloat(e) - 1, 1);
    var c = b.getTime() - a.getTime();
    if (c < 0) {
        return false;
    } else {
        return true
    }
}

 
function validateSubForm() {
    var val = 0;
    if ($('input[type=checkbox]:checked').length == 0) {
        val = 1;
        $('#products_arr').show();
        $('#products_arr').text(em_js_msg['Please select at least one product']);

    }
    diableServerSideStatus();
    $("#product_form").valid();

    if (val === 0) {
        $("#product_form").attr("action", "/user/creditcard");
        $("#product_form").submit();
        $("#product_form").attr("disabled", "disabled");
        $("#product_form").attr("onClick", "#");
        $("#product_form").attr("style", "cursor:default;");
        return true;
    } else {
        return false;
    }
}
function validateSubForm_my() {
    var val = 0;
    if ($('input[type=checkbox]:checked').length == 0) {
        val = 1;
        $('#products_arr').show();
        $('#products_arr').text(em_js_msg['Please select at least one product']);

    }
    diableServerSideStatus();
    $("#my_product_form").valid();

    if (val === 0) {
        // $("#product_form").attr("action", "/myaccount/gotopayment");
        $("#my_product_form").submit();
        $("#my_product_form").attr("disabled", "disabled");
        $("#my_product_form").attr("onClick", "#");
        $("#my_product_form").attr("style", "cursor:default;");
        return true;
    } else {
        return false;
    }
}
function cansubdialogclose()
{
    $("label.error").remove();
    $('#myModal2').modal('hide');
    $('.modal-backdrop').remove();
}
function cansubsteptwo() {
    $('#myModal').modal('hide');
    $('#myModal2').modal('show');
}

function validateConfEmailForm() {
    $("#email_form").validate({
        rules: {
            email: {
                required: true,
                email: true,
                validemail: true,
                checkEmailDomain: "#email",
                emailChar: true
            }
        },
        messages: {
            email: {
                required: em_js_msg['Enter your new email address'],
                validemail: em_js_msg['Please enter a valid Email address'],
                email: em_js_msg['An email must contain a "@"'],
                checkEmailDomain: em_js_msg['Please enter a valid Email address'],
                emailChar: em_js_msg['Please enter a valid Email address']
            }
        }
    });
    $("#email_form").valid();
    if ($("#email_form").valid()) {
        //$("#email_form").attr("action", "/myaccount/updatecontact");
        $("#email_form").submit();
        $("#confirm_btn").attr("disabled", "disabled");
        $("#confirm_btn").attr("onClick", "#");
        $("#confirm_btn").attr("style", "cursor:default;");

        return true;
    } else {
        return false;
    }
}


function validateDateIsNotInPast(e, f) {
    var d = new Date();
    var a = new Date(d.getFullYear(), d.getMonth(), 1);
    var b = new Date(parseFloat(f), parseFloat(e) - 1, 1);
    var c = b.getTime() - a.getTime();
    if (c < 0) {
        return false
    } else {
        return true
    }
}



function toggle() {
    var ele = document.getElementById("voucher");
    var text = document.getElementById("vouchercode");
    if (ele.style.display == "block") {
        var imgsrc = "../ev/web/images/down-arrow.png";
        $("#voucher_img").attr("src", imgsrc);
        ele.style.display = "none";
    } else {
        var imgsrc = "../ev/web/images/up-arrow.png";
        $("#voucher_img").attr("src", imgsrc);
        ele.style.display = "block";
    }
}

function validateUpdateName() {
    $("#editname_form").validate({
        rules: {
            firstname: {
                required: true,
                disallowedChar: true
            },
            lastname: {
                required: true,
                disallowedChar: true
            }
        },
        messages: {
            firstname: {
                required: em_js_msg['Please enter your First Name'],
                disallowedChar: em_js_msg['Special Characters & Numbers are not allowed']
            },
            lastname: {
                required: em_js_msg['Please enter your Last Name'],
                disallowedChar: em_js_msg['Special Characters & Numbers are not allowed']
            }
        }
    });
    $("#editname_form").valid();
    if ($("#editname_form").valid()) {
        $("#editname_form").attr("action", "/account/updatecontact?data="+dataParam);
        $("#editname_form").submit();
        $("#update_btn").attr("disabled", "disabled");
        $("#update_btn").attr("onClick", "#");
        $("#update_btn").attr("style", "cursor:default;");
        return true;
    } else {
        return false;
    }
}


$(function () {
//$("select").uniform();
//$(":checkbox").uniform({checkboxClass: 'checker'});
    $('#form_exp_month,#form_exp_year').each(function () {
        if ($(this).find('option:selected').val() == "") {
            $(this).parent().find("span").css('color', '#38083b');
        }
    });
//    $("select").uniform();
    $('#form_exp_month,#form_exp_year').each(function () {
        if ($(this).find('option:selected').val() == "") {
            $(this).parent().find("span").css('color', '#38083b');
        }
    });
    showpin();
    
    showSubscriptions();
    //   $('input.cc-num').payment('formatCardNumber');
    if (/iPad/.test(navigator.userAgent)) {
        $("#footer_display_tab").show();
        $("#footer_display").hide();

    } else {
        $("#footer_display_tab").hide();
        $("#footer_display").show();
    }
    var string = $("#ph_no").text();
    var phone = [string.slice(0, 4), "-", string.slice(4, 7), " ", string.slice(7, 9), " ", string.slice(9)].join('');
    $("#ph_no").html(phone);
});

function postMsg() {
    var msg = $("#post_msg").val();
    if (msg.length > 0) {
        parent.postMessage(msg, '*');
    }
}
function showcardwithspaces(cardnumber) {
    var card = $.trim(cardnumber);
    var cardnum = [card.slice(0, 4), " ", card.slice(4, 8), " ", card.slice(8, 12), " ", card.slice(12, 16), " ", card.slice(16)].join('');
    $("#card_no").html(cardnum.toUpperCase());
}

function showpin() {
    var rno = $("#rno").val();
    var err = $("#klarna_error").val();
    if (err !== '' || (err === '' && rno > 0)) {
        $("#collapseOne").removeClass('in');
        $('#collapseTwo').addClass('in');
        $("#klarna_lock").attr('style', 'display:block');
        $("#card_lock").attr('style', 'display:none');
        $("#collapseKlarna").addClass("glyphicon-menu-down").removeClass('glyphicon-menu-right');
        $("#collapseCC").addClass("glyphicon-menu-right").removeClass('glyphicon-menu-down');
        if (rno > 0) {
            $("#confirmpin").attr("style", "display:block");
            $("#pin_btn").attr('disabled', 'disabled');
        }
    } else {
        $("#collapseTwo").removeClass('in');
        $('#collapseOne').addClass('in');
        $("#confirmpin").attr("style", "display:none");
    }
}


                

function checkLuhn(input)
{
    var sum = 0;
    var numdigits = input.length;
    var parity = numdigits % 2;
    for (var i = 0; i < numdigits; i++) {
        var digit = parseInt(input.charAt(i))
        if (i % 2 == parity)
            digit *= 2;
        if (digit > 9)
            digit -= 9;
        sum += digit;
    }
    return (sum % 10) == 0;
}
$.validator.setDefaults({
    ignore: ":hidden:not('select')",
    errorPlacement: function (error, element) {
        if (element.attr("name") == "form_exp_month") {
            error.insertAfter('#exp_month');
        } else if (element.attr("name") == "form_exp_year") {
            error.insertAfter('#exp_year');
        } else {
            error.insertAfter(element);
        }
    }
});






function showNameEdit() {
    $("#accinfo").hide();
    $("#editname").show();

}
function showEmailEdit() {
    $("#accinfo").hide();
    $("#editemail").show();

}
function showpasswdUpdate() {
    $("#accinfo").hide();
    $("#updatepaswd").show();

}
function validatechangepwd() {
    $("#editpassword_form").validate({
        rules: {
            contactPassword: {
                required: true,
                checkSpace: true
//                alphanumaric: true,
                // minlength: 8,
                // maxlength: 25
            },
            newContactPassword: {
                required: true,
                checkSpace: true,
                alphanumaric: true,
                //notEqualTo: "#oldpassword",
                minlength: 6,
                //maxlength: 25
            },
            confirmNewContactPassword: {
                required: true,
                equalTo: "#newpassword",
                alphanumaric: true,
                minlength: 6,
                //maxlength: 25

            }
        },
        messages: {
            contactPassword: {
                required: 'Please enter old Password',
                checkSpace: 'Spaces are not allowed'
//                alphanumaric: em_js_msg['Please enter alphanumaric only'],
                // minlength:  em_js_msg['Please enter old Password that is 8 characters or longer'],
                //maxlength:  em_js_msg['Please enter old Password that is 25 characters or smaller'] 
            },
            newContactPassword: {
                required: em_js_msg['Please enter a New Password'],
                checkSpace: em_js_msg['Spaces are not allowed'],
                alphanumaric: em_js_msg['Please enter alphanumaric only'],
                notEqual: em_js_msg['The Current Password and New Password should not be same'],
                minlength: em_js_msg['Please enter a New Password that is 6 characters or longer'],
                //  maxlength:  em_js_msg['Please enter a Password that is 25 characters or smaller'] 
            },
            confirmNewContactPassword: {
                required: em_js_msg['Please enter a Confirm New Password'],
                equalTo: em_js_msg['The New Password and Confirm New Password fields do not match'],
                alphanumaric: em_js_msg['Please enter alphanumaric only'],
                minlength: em_js_msg['The New Password and Confirm New Password fields do not match'],
                // maxlength: em_js_msg['Please enter a Password that is 25 characters or smaller'] 
            }
        }
    });
    $("#editpassword_form").valid();
    if ($("#editpassword_form").valid()) {
        $("#editpassword_form").submit();
        $("#changepass_btn").attr("disabled", "disabled");
        $("#changepass_btn").attr("onClick", "#");
        $("#changepass_btn").attr("style", "cursor:default;");
        return true;
    } else {
        return false;
    }
}

function validateUpdateContactPwdForm() {
    $("#reset_pwd_form").validate({
        rules: {
            old_password: {
                required: true,
                checkSpace: true,
                alphanumaric: true,
                // minlength: 8,
                // maxlength: 25
            },
            new_password: {
                required: true,
                checkSpace: true,
                alphanumaric: true,
                //notEqualTo: "#oldpassword",
                minlength: 8,
                //maxlength: 25
            },
            new_conf_password: {
                required: true,
                equalTo: "#new_password",
                alphanumaric: true,
                minlength: 8,
                //maxlength: 25

            }
        },
        messages: {
            old_password: {
                required: em_js_msg['Please enter old Password'],
                checkSpace: em_js_msg['Spaces are not allowed'],
                alphanumaric: em_js_msg['Please enter alphanumaric only'],
                // minlength:  em_js_msg['Please enter old Password that is 8 characters or longer'],
                //maxlength:  em_js_msg['Please enter old Password that is 25 characters or smaller'] 
            },
            new_password: {
                required: em_js_msg['Please enter a New Password'],
                checkSpace: em_js_msg['Spaces are not allowed'],
                alphanumaric: em_js_msg['Please enter alphanumaric only'],
                notEqual: em_js_msg['The Current Password and New Password should not be same'],
                minlength: em_js_msg['Please enter a New Password that is 8 characters or longer'],
                //  maxlength:  em_js_msg['Please enter a Password that is 25 characters or smaller'] 
            },
            new_conf_password: {
                required: em_js_msg['Please enter a Confirm New Password'],
                equalTo: em_js_msg['The New Password and Confirm New Password fields do not match'],
                alphanumaric: em_js_msg['Please enter alphanumaric only'],
                minlength: em_js_msg['The New Password and Confirm New Password fields do not match'],
                // maxlength: em_js_msg['Please enter a Password that is 25 characters or smaller'] 
            }
        }
    });
    $("#reset_pwd_form").valid();
    if ($("#reset_pwd_form").valid()) {
        $("#reset_pwd_form").attr("action", "/account/resetpwdstatus?data="+dataParam);
        $("#reset_pwd_form").submit();
        $("#reset_pwd_btn").attr("disabled", "disabled");
        $("#reset_pwd_btn").attr("onClick", "#");
        $("#reset_pwd_btn").attr("style", "cursor:default;");
        return true;
    } else {
        return false;
    }
}




function divToShow() {
    var divToShow = $('#divToShow').val();
    if (divToShow === "name") {
        $("#accinfo").hide();
        $("#editname").show();
        $("#updatepaswd").hide();
        $("#editemail").hide();
    } else if (divToShow === "email") {
        $("#accinfo").hide();
        $("#editname").hide();
        $("#updatepaswd").hide();
        $("#editemail").show();
    } else if (divToShow === "password") {
        $("#accinfo").hide();
        $("#editname").hide();
        $("#updatepaswd").show();
        $("#editemail").hide();
    } else {
        $("#accinfo").show();
        $("#editname").hide();
        $("#updatepaswd").hide();
        $("#editemail").hide();
    }
}

function showAccInfo(formName) {
    $("#accinfo").show();
    $("#editname").hide();
    $("#updatepaswd").hide();
    $("#editemail").hide();
    $(".fail").hide();
    $("#email").val("");
    $("#repeatemail").val("");
    $("#lastname").val($("#lastname_hide").val());
    $("#firstname").val($("#firstname_hide").val());
    closePopup();


}


function visaListToggle() {
    var ele = document.getElementById("visa_list");
    var text = $("#visa_id").text();
    if (ele.style.display == "block") {
        var imgsrc = "../ev/web/images/down-arrow.png";
        $("#visa_list_img").attr("src", imgsrc);
        $('#visa_id').html($('#visa_id').html().replace('StÃƒÂ¤ng listan', 'Mer om '));
        $('#prod_name').show();
        ele.style.display = "none";
    } else {
        var imgsrc = ".../ev/web/images/up-arrow.png";
        $("#visa_list_img").attr("src", imgsrc);
        $('#visa_id').html($('#visa_id').html().replace(text, 'StÃƒÂ¤ng listan'));
        $('#prod_name').hide();
        ele.style.display = "block";
    }
}
function validateConfirmCCForm() {
    $("#confirmCC_form").validate({
        rules: {
            password: {
                required: true,
                checkSpace: true,
                minlength: 4,
                maxlength: 25
            }
        },
        messages: {
            password: {
                required: em_js_msg['Please enter a Password'],
                checkSpace: em_js_msg['Spaces are not allowed'],
                minlength: em_js_msg['Please enter a Password that is 8 characters or longer'],
                maxlength: em_js_msg['Please enter a Password that is 25 characters or smaller']
            }
        }
    });
    diableServerSideStatus();
    $("#editpassword_form").valid();
    if ($("#confirmCC_form").valid()) {
        $("#confirmCC_form").submit();
        $("#confirmCC_btn").attr("disabled", "disabled");
        $("#confirmCC_btn").attr("onClick", "#");
        $("#confirmCC_btn").attr("style", "cursor:default;");
        return true;
    } else {
        return false;
    }
}
function conformation() {
    $("#comfirmToremoveSubscriptiondialog").modal('show');

}
function addchild() {
    var count = $("#noofchildren option:selected").val();
    $.ajax({
        type: "GET",
        url: "/account/addchild",
        data: "count=" + count,
        success: function (res) {
            $("#childdetails").html(res);
            $("#addchildtable").footable();
        },
        error: function () {
        }
    });
}
function validateContactsForm() {
    $("#contacts_form").validate({
        rules: {
            'age[]': {
                required: true
            },
            'gender[]': {
                required: true
            },
            'email[]': {
                required: true,
                email: true,
                checkEmailDomain: "#email"
            },
            'password[]': {
                required: true,
                checkSpace: true,
                minlength: 4,
                maxlength: 25
            },
            
        },
        messages: {
            'age[]': {
                required: 'evw00203'
            },
            'gender[]': {
                required: 'evw00204'
            },
            'email[]': {
                required: 'evw00102',
                email: 'evw00103',
                checkEmailDomain: 'evw00402'
            },
            'password[]': {
                required: 'evw00104',
                checkSpace: 'evw00508',
                minlength: 'evw00105',
                maxlength: 'evw00120'
            },
            
        },
        invalidHandler: function (event, validator) {
            var errors = validator.numberOfInvalids();
            if (errors) {
                if (validator.errorList.length > 0) {
                    for (x = 0; x < validator.errorList.length; x++) {
                        var errorStr = validator.errorList[x].message;
//                        ga('send', 'event', em_js_msg[errorStr][0], em_js_msg[errorStr][1], em_js_msg[errorStr][2], 1);
                    }
                }
            }
        },
        showErrors: function (errorMap, errorList) {
            var errors = this.numberOfInvalids();
            if (errors) {
                if (errorList.length > 0) {
                    for (x = 0; x < errorList.length; x++) {
                        var errorStr = errorList[x].message;
                        errorList[x].message = em_js_msg[errorStr][2];
                    }
                }
            }
            this.defaultShowErrors();
        }
    });
    if ($("#contacts_form").valid()) {
        $("#contacts_form").submit();
        $("#contacts_btn").attr("disabled", "disabled");
        $("#contacts_btn").attr("onClick", "#");
        $("#contacts_btn").attr("style", "cursor:default;");
        return true;
    } else {
        return false;
    }
}

function conformationToChangeSubscription(cahngeId) {
    if (cahngeId === '2548') {
        $("#changepp").show();
        $("#changeps").hide();
    }
    if (cahngeId === '2549') {
        $("#changeps").show();
        $("#changepp").hide();
    }
    $("#changeProdId").val(cahngeId);
    $("#comfirmToChangeSubscriptiondialog").modal('show');

}

function conformationToStartSubscription(productID) {

    if (productID === '2548') {
        $("#ispp").show();
        $("#isps").hide();
    } else if (productID === '2549') {
        $("#isps").show();
        $("#ispp").hide();
    }
    $("#productID").val(productID);
    $("#comfirmToStartSubscriptiondialog").modal('show');

}


function showSubscriptions() {
    var label = $('#label').val();
    var expStatus = $('#exp_pp_status').val();
    $("#card_subs").show();
    $("#appstore_subs").hide();
    if (label !== '') {
        if (label == "App Store Billing") {
            if (expStatus) {
                $("#appstore_subs").hide();
                $("#card_subs").show();
            } else {
                $("#appstore_subs").show();
                $("#card_subs").hide();
            }
        } else {
            $("#card_subs").show();
            $("#appstore_subs").hide();
        }
    }
}





function submitConfirmPin() {
    $("#pin_err").hide();
    if ($(this).parent().find(".fail").length && $(".fail").is(":visible")) {
        $('.fail').hide();
        $('.form-group').removeClass('has-error').addClass('success');
    }
    $("#klarna_form").validate({
        rules: {
            pin_no: {
                required: true
            }
        },
        messages: {
            pin_no: {
                required: em_js_msg['Please enter Pin Number']

            }
        }
    });
    $("#klarna_form").valid();
    if ($("#klarna_form").valid()) {
        $("#klarna_form").attr("action", "/user/activatereservation");
        $("#klarna_form").submit();
        $("#conf_btn").attr("disabled", "disabled");
        return true;
    } else {
        return false;
    }
}

function submit_Myaccount_ConfirmPin() {
    $("#pin_err").hide();
    if ($(this).parent().find(".fail").length && $(".fail").is(":visible")) {
        $('.fail').hide();
        $('.form-group').removeClass('has-error').addClass('success');
    }
    $("#my_klarna_form").validate({
        rules: {
            pin_no: {
                required: true
            },
            terms_conditions_kl: {
                required: true
            }
        },
        messages: {
            pin_no: {
                required: em_js_msg['Please enter Pin Number']

            },
            terms_conditions_kl: {
                required: em_js_msg['Please agree by checking the box above']
            }
        }
    });
    $("#my_klarna_form").valid();
    if ($("#my_klarna_form").valid()) {
        $("#my_klarna_form").attr("action", "/myaccount/activatereservation?data="+dataParam);
        $("#my_klarna_form").submit();
        $("#conf_btn").attr("disabled", "disabled");
        return true;
    } else {
        return false;
    }
}







function passwordvalidation(event) {
    $("#change_err").hide();
    if ($(this).parent().find(".fail").length && $(".fail").is(":visible")) {
        $('.fail').hide();
        $('.form-group').removeClass('has-error').addClass('success');
    }
    $("#chng_subs_form").validate({
        rules: {
            password: {
                required: true,
                checkSpace: true,
                alphanumaric: true,
                //minlength: 8,
            }
        },
        messages: {
            password: {
                required: em_js_msg['Confirm with your password'],
                checkSpace: em_js_msg['Spaces are not allowed'],
                alphanumaric: em_js_msg['Please enter alphanumaric only'],
                // minlength: em_js_msg['Please enter a Password that is 8 characters or longer'],
            }
        }
    });
    $("#chng_subs_form").valid();
    if ($("#chng_subs_form").valid()) {
        $("#chng_subs_form").attr("action", "/myaccount/changesubscription?data="+dataParam);
        if (event.type == 'click' || (event.type == 'keypress' && event.which == '13')) {
            $("#chng_subs_form").submit();
        }
        $("#sub_conf_dtn").attr("disabled", "disabled");
        $("#sub_conf_dtn").attr("onClick", "#");
        $("#sub_conf_dtn").attr("style", "cursor:default;");

//        $('#comfirmToChangeSubscriptiondialog').modal('hide');
        return true;
    } else {
//        $('#comfirmToChangeSubscriptiondialog').modal('show');
        return false;
    }
}
function passwordvalidationStartsub(event) {
    $("#start_err").hide();
    if ($(this).parent().find(".fail").length && $(".fail").is(":visible")) {
        $('.fail').hide();
        $('.form-group').removeClass('has-error').addClass('success');
    }
    $("#chng_startsubs_form").validate({
        rules: {
            password: {
                required: true,
                checkSpace: true,
                alphanumaric: true,
                //minlength: 8,
            }
        },
        messages: {
            password: {
                required: em_js_msg['Confirm with your password'],
                checkSpace: em_js_msg['Spaces are not allowed'],
                alphanumaric: em_js_msg['Please enter alphanumaric only'],
                // minlength: em_js_msg['Please enter a Password that is 8 characters or longer'],
            }
        }
    });
    $("#chng_startsubs_form").valid();
    if ($("#chng_startsubs_form").valid()) {
        $("#chng_startsubs_form").attr("action", "/myaccount/reactivatesubscription?data="+dataParam);
        if (event.type == 'click' || (event.type == 'keypress' && event.which == '13')) {
            $("#chng_startsubs_form").submit();
        }
        $("#sub_conf_reactive_btn").attr("disabled", "disabled");
        $("#sub_conf_reactive_btn").attr("onClick", "#");
        $("#sub_conf_reactive_btn").attr("style", "cursor:default;");
        return true;

    } else {
        return false;
    }
}

function adderror() {
    var a = $("#flash_error").val();
    if (a.length) {
        $('.fail').closest('.form-group').removeClass('success').addClass('has-error');
    } else {
        if ($(this).parent().find(".fail").length && $(".fail").is(":visible")) {
            $('.fail').hide();
            $('.form-group').removeClass('has-error').addClass('success');
        }
    }
}



function closePopup() {
    $('.fail').hide();
    $('.form-group').removeClass('has-error').addClass('success');
    $('.error').hide();
}

function phnochange(ephno)
{
    var phno = $('#pno').val();

    if (phno.substr(0, 2) === '46')
    {
        phno = phno.replace('46', '0');
    }
    if (ephno !== phno)
    {
        $("#pin_btn").removeAttr('disabled');
    } else
    {
        $("#pin_btn").prop("disabled", true);
    }
}
$(document).ready(function () {

    $('#form_exp_year,#form_exp_month').each(function () {
        if ($(this).find('option:disabled').val() === "") {
            $(this).parent().find("span").css('color', '#999');
        }
    });
    $('#form_exp_year').change(function () {
        $('#form_exp_year').each(function () {
            if ($(this).find('option:disabled').val() === "") {
                $(this).parent().find("span").css('color', '#000000');
            }
        });
    });
    $('#form_exp_month').change(function () {
        $('#form_exp_month').each(function () {
            if ($(this).find('option:disabled').val() === "") {
                $(this).parent().find("span").css('color', '#000000');
            }
        });
    });
});


$.validator.addMethod("validateDateFormat", function (b, a) {
    var date_regex = /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/;
    if ($("#dob").val().length > 0) {
        if (!(date_regex.test(b))) {
            return false;
        }
    }
    return true;
});





function validateforgotpasswordForm() {
    $("#forgotpassword_form").validate({
        rules: {
            password: {
                required: true,
                checkSpace: true,
                alphanumaric: true,
                //notEqualTo: "#oldpassword",
                minlength: 8,
                //maxlength: 25
            },
            conf_password: {
                required: true,
                equalTo: "#password",
                alphanumaric: true,
                minlength: 8,
                //maxlength: 25

            }
        },
        messages: {
            password: {
                required: em_js_msg['Please enter a New Password'],
                checkSpace: em_js_msg['Spaces are not allowed'],
                alphanumaric: em_js_msg['Please enter alphanumaric only'],
                notEqual: em_js_msg['The Current Password and New Password should not be same'],
                minlength: em_js_msg['Please enter a New Password that is 8 characters or longer'],
                //  maxlength:  em_js_msg['Please enter a Password that is 25 characters or smaller'] 
            },
            conf_password: {
                required: em_js_msg['Please enter a Confirm New Password'],
                equalTo: em_js_msg['The New Password and Confirm New Password fields do not match'],
                alphanumaric: em_js_msg['Please enter alphanumaric only'],
                minlength: em_js_msg['The New Password and Confirm New Password fields do not match'],
                // maxlength: em_js_msg['Please enter a Password that is 25 characters or smaller'] 
            }
        }
    });

    $("#forgotpassword_form").valid();
    if ($("#forgotpassword_form").valid()) {
        $("#forgotpassword_form").submit();
        $("#forgotpassword_form").attr("disabled", "disabled");
        $("#forgotpassword_form").attr("onClick", "#");
        $("#forgotpassword_form").attr("style", "cursor:default;");
        return true;
    } else {
        return false;
    }
}


function updatecontact() {
    $("#contact_form").validate({
        rules: {
            firstName: {
                required: true
            },
            lastName: {
                required: true
            },
            gender: {
                required: true
            },
            cellPhone: {
                required: true,
                digits: true,
                minlength:10,
                maxlength: 10
            },
            email: {
                required: true,
                email: true,
                checkEmailDomain: "#email"
            },
            dateOfBirth: {
                validateDateFormat: true
            },
            
            
        },
        messages: {
            firstName: {
                required: 'evw00601'
            },
            lastName: {
                required: 'evw00602'
            },
            gender: {
                required: 'evw00619'
            },
            cellPhone: {
                required: 'evw00620',
                digits :'evw00621',
                minlength: 'evw00622',
                maxlength: 'evw00623'
            },
            email: {
                required: 'evw00608',
                email: 'evw00603',
                checkEmailDomain: 'evw00402'
            },
            dateOfBirth: {
                validateDateFormat: 'evw00615'
            },
            
            
        },
        invalidHandler: function (event, validator) {
            var errors = validator.numberOfInvalids();
            if (errors) {
                if (validator.errorList.length > 0) {
                    for (x = 0; x < validator.errorList.length; x++) {
                        var errorStr = validator.errorList[x].message;
//                        ga('send', 'event', em_js_msg[errorStr][0], em_js_msg[errorStr][1], em_js_msg[errorStr][2], 1);
                    }
                }
            }
        },
        showErrors: function (errorMap, errorList) {
            var errors = this.numberOfInvalids();
            if (errors) {
                if (errorList.length > 0) {
                    for (x = 0; x < errorList.length; x++) {
                        var errorStr = errorList[x].message;
                        errorList[x].message = em_js_msg[errorStr][2];
                    }
                }
            }
            this.defaultShowErrors();
        }
    });
    if ($("#contact_form").valid()) {
        $("#submitBtn").attr("disabled", "disabled");
        $("#contact_form").submit();
        $("#submitBtn").attr("disabled", "disabled");
        $("#submitBtn").attr("onClick", "#");
        $("#submitBtn").attr("style", "cursor:default;");
        return true;
    } else {
        return false;
    }
}
function addDevice() {
    $("#adddevice_form").validate({
        rules: {
            serialNo: {
                required: true,
                minlength:4,
                maxlength: 25
            },
            modelNumber: {
                required: true,
                minlength:4,
                maxlength: 25
            },
            deviceName: {
                required: true,
            }
        },
        messages: {
            serialNo: {
                required: 'evw011001',
                minlength:'evw011004',
                maxlength:'evw011005'
            },
            modelNumber: {
                required: 'evw011002',
                minlength:'evw011004',
                maxlength:'evw011005'
            },
            deviceName: {
                required: 'evw011003',
            }
        },
        invalidHandler: function (event, validator) {
            var errors = validator.numberOfInvalids();
            if (errors) {
                if (validator.errorList.length > 0) {
                    for (x = 0; x < validator.errorList.length; x++) {
                        var errorStr = validator.errorList[x].message;
//                       ga('send', 'event', em_js_msg[errorStr][0], em_js_msg[errorStr][1], em_js_msg[errorStr][2], 1);
                    }
                }
            }
        },
        showErrors: function (errorMap, errorList) {
            var errors = this.numberOfInvalids();
            if (errors) {
                if (errorList.length > 0) {
                    for (x = 0; x < errorList.length; x++) {console.log(errorList[x].message);
                        var errorStr = errorList[x].message;
                        errorList[x].message = em_js_msg[errorStr][2];
                    }
                }
            }
            this.defaultShowErrors();
        }
    });
    if ($("#adddevice_form").valid()) {
        $("#submitBtn").attr("disabled", "disabled");
        $("#adddevice_form").submit();
        $("#submitBtn").attr("disabled", "disabled");
        $("#submitBtn").attr("onClick", "#");
        $("#submitBtn").attr("style", "cursor:default;");
        return true;
    } else {
        return false;
    }
}

function updateDevice() {
    $("#updatedevice_form").validate({
        rules: {
            serialNo: {
                required: true,
                minlength:4,
                maxlength:25
            },
            modelNumber: {
                required: true,
                minlength:4,
                maxlength:25
            },
            deviceName: {
                required: true,
            }
        },
        messages: {
            serialNo: {
                required: 'evw011001',
                minlength:'evw011004',
                maxlength:'evw011005'
            },
            modelNumber: {
                required: 'evw011002',
                minlength:'evw011004',
                maxlength:'evw011005'
            },
            deviceName: {
                required: 'evw011003',
            }
        },
        invalidHandler: function (event, validator) {
            var errors = validator.numberOfInvalids();
            if (errors) {
                if (validator.errorList.length > 0) {
                    for (x = 0; x < validator.errorList.length; x++) {
                        var errorStr = validator.errorList[x].message;
//                       ga('send', 'event', em_js_msg[errorStr][0], em_js_msg[errorStr][1], em_js_msg[errorStr][2], 1);
                    }
                }
            }
        },
        showErrors: function (errorMap, errorList) {
            var errors = this.numberOfInvalids();
            if (errors) {
                if (errorList.length > 0) {
                    for (x = 0; x < errorList.length; x++) {
                        var errorStr = errorList[x].message;
                        errorList[x].message = em_js_msg[errorStr][2];
                    }
                }
            }
            this.defaultShowErrors();
        }
    });
    if ($("#updatedevice_form").valid()) {
        $("#submitBtn").attr("disabled", "disabled");
        $("#updatedevice_form").submit();
        $("#submitBtn").attr("disabled", "disabled");
        $("#submitBtn").attr("onClick", "#");
        $("#submitBtn").attr("style", "cursor:default;");
        return true;
    } else {
        return false;
    }
}

function addprofilecontact() {
    $("#addcontact_form").validate({
        rules: {
            firstName: {
                required: true
            },
            lastName: {
                required: true
            },
            gender: {
                required: true
            },
            cellPhone: {
                required: true,
                digits: true,
                minlength: 10,
                maxlength: 10
            },
            email: {
                required: true,
                email: true,
                checkEmailDomain: "#email"
            },
            dateOfBirth: {
                validateDateFormat: function () {
                    return ($("#dob").val().length > 0);
                }
            },
           
            password: {
                required: true,
                checkSpace: true,
                minlength: 6,
                maxlength: 25
            },
            new_conf_password: {
                required: true,
                checkSpace: true,
                minlength: 6,
                maxlength: 25,
                equalTo: "#password"
            }

        },
        messages: {
            firstName: {
                required: 'evw00601'
            },
            lastName: {
                required: 'evw00602'
            },
            gender: {
                required: 'evw00619'
            },
            
            cellPhone: {
                required: 'evw00620',
                digits:'evw00621',
                minlength: 'evw00622',
                maxlength: 'evw00623'
            },
            email: {
                required: 'evw00608',
                email: 'evw00603',
                checkEmailDomain: 'evw00402'
            },
            dateOfBirth: {
                validateDateFormat: 'evw00615'
            },
            
            password: {
                required: 'evw00617',
                checkSpace: 'evw00508',
                minlength: 'evw00604',
                maxlength: 'evw00610'

            }, new_conf_password: {
                required: 'evw00613',
                checkSpace: 'evw00508',
                minlength: 'evw00606',
                maxlength: 'evw00614',
                equalTo: 'evw00607'
            }
        },
        invalidHandler: function (event, validator) {
            var errors = validator.numberOfInvalids();
            if (errors) {
                if (validator.errorList.length > 0) {
                    for (x = 0; x < validator.errorList.length; x++) {
                        var errorStr = validator.errorList[x].message;
//                       ga('send', 'event', em_js_msg[errorStr][0], em_js_msg[errorStr][1], em_js_msg[errorStr][2], 1);
                    }
                }
            }
        },
        showErrors: function (errorMap, errorList) {
            var errors = this.numberOfInvalids();
            if (errors) {
                if (errorList.length > 0) {
                    for (x = 0; x < errorList.length; x++) {
                        var errorStr = errorList[x].message;
                        errorList[x].message = em_js_msg[errorStr][2];
                    }
                }
            }
            this.defaultShowErrors();
        }
    });
    if ($("#addcontact_form").valid()) {
        $("#submitBtn").attr("disabled", "disabled");
        $("#addcontact_form").submit();
        $("#submitBtn").attr("disabled", "disabled");
        $("#submitBtn").attr("onClick", "#");
        $("#submitBtn").attr("style", "cursor:default;");
        return true;
    } else {
        return false;
    }
}

function changeToSelectedText(element) {
    if (element == 'yearlyprodid') {
        $('#yearlyprodid').html('Selected');
        $('#monthlyprodid').html('Choose Plan');
    } else {
        $('#monthlyprodid').html('Selected');
        $('#yearlyprodid').html('Choose Plan');
    }
}




function validateForgetPasswordForm() {
    $("#forgetpwd_form").validate({
        rules: {
            email: {
                required: true,
                email: true,
                checkEmailDomain: "#email"
            },
        },
        messages: {
            email: {
                required: em_js_msg['Please enter a Email address'],
                email: em_js_msg['Please enter a valid Email address'],
                checkEmailDomain: em_js_msg['Please enter a valid Email address']
            },
        }
    });
    $("#forgetpwd_form").valid();
    if ($("#forgetpwd_form").valid()) {

        $("#forgetpwd_form").submit();
        $("#continue_btn").attr("disabled", "disabled");
        $("#continue_btn").attr("onClick", "#");
        $("#continue_btn").attr("style", "cursor:default;");
        return true;
    } else {
        return false;
    }
}


function validateResetPasswordForm() {
    $("#reset_pwd_form").validate({
        rules: {

            new_password: {
                required: true,
                checkSpace: true,
                alphanumaric: true,
                minlength: 6,
                //maxlength: 25
            },
            new_conf_password: {
                required: true,
                equalTo: "#new_password",
                alphanumaric: true,
                minlength: 6,
                //maxlength: 25

            }
        },
        messages: {

            new_password: {
                required: em_js_msg['Please enter a New Password'],
                checkSpace: em_js_msg['Spaces are not allowed'],
                alphanumaric: em_js_msg['Please enter alphanumaric only'],
                minlength: em_js_msg['Please enter a New Password that is 6 characters or longer'],
                //  maxlength:  em_js_msg['Please enter a Password that is 25 characters or smaller'] 
            },
            new_conf_password: {
                required: em_js_msg['Please enter a Confirm New Password'],
                equalTo: em_js_msg['The New Password and Confirm New Password fields do not match'],
                alphanumaric: em_js_msg['Please enter alphanumaric only'],
                minlength: em_js_msg['The New Password and Confirm New Password fields do not match'],
                // maxlength: em_js_msg['Please enter a Password that is 25 characters or smaller'] 
            }
        }
    });
    $("#reset_pwd_form").valid();
    if ($("#reset_pwd_form").valid()) {

        $("#reset_pwd_form").submit();
        $("#reset_pwd_btn").attr("disabled", "disabled");
        $("#reset_pwd_btn").attr("onClick", "#");
        $("#reset_pwd_btn").attr("style", "cursor:default;");
        return true;
    } else {
        return false;
    }
}
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
            if ($("#pin-txt-boxes").is(":visible")) {
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
    $('.remove-icon').one('click', function () {
//        $('.remDev').html('<img src="/assets/images/loading.gif" width="25">');
        $(this).click(function () {
            return false;
        });
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


$("#login_form").validate({
        rules: {
            username: {
                required: true,
                email: true,
                checkEmailDomain: "#username"
            },
            password: {
                required: true,
                checkSpace: true,
                minlength: 4,
                maxlength: 25
            }
        },
        messages: {
            username: {
                required: 'Username is required',
                email: 'Please enter a valid Email address',
                checkEmailDomain: 'Please enter a valid Email address'
            },
            password: {
                required: 'Password is required',
                checkSpace: 'Please enter a valid Password',
                minlength: 'Please enter a Password that is 4 characters or longer',
                maxlength: 'Please enter a Password that is 25 characters or smaller'
            }
        }
        
    });
    $("#register_form").validate({
        rules: {
            email: {
                required: true,
                email: true
            },
           
            passWord: {
                required: true,
                checkSpace: true,
                minlength: 6,
                maxlength: 25
            },
            
        },
        messages: {
            email: {
                required: regReqEmail,
                email: regValEmail
            },
            
            passWord: {
                required: regPassreq,
                minlength: ctrlPinlen,
                checkSpace: chkspace
            },
            
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
    /*$("#adddevice_form,#updatedevice_form").validate({
        rules: {
            deviceName: {
                required: true
            },
            deviceType: {
                required: true
            },
            serialNo: {
                required: true,
                minLength:4,
                maxlength:25
            },
            modelNumber: {
                required: true,
                minLength:4,
                maxlength:25
            }
        },
        messages: {
            deviceName: {
                required: divName
            },
            deviceType: {
                required: divType
            },
            serialNo: {
                required: divsno,
                minlength:'Please Enter Minimum 4 digits',
                maxlength:'Please Enter Maximum 25 digits'
            },
            modelNumber: {
                required: divModel,
                minlength:'Please Enter Minimum 4 digits',
                maxlength:'Please Enter Maximum 25 digits'
            }

        }
    });*/
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

$('#unlink').on('click',function(e){
    e.stopImmediatePropagation();
    var type=$(this).attr('sociallogintype');
    $('#sociallogintype').val(type);
    $('#contact_form').submit();
    });
    
    
