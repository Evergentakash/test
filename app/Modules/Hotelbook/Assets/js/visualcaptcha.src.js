/**
 * visualCaptchaHTML class by emotionLoop - 2013.03.28
 *
 * This file handles the JS for the main visualCaptcha class.
 *
 * This license applies to this file and others without reference to any other license.
 *
 * @author emotionLoop | http://emotionloop.com
 * @link http://visualcaptcha.net
 * @package visualCaptcha
 * @license GNU GPL v3
 * @version 4.0.3
 */
$(function () {
    var isMobile = false;
    var isRetina = false;
    var supportsAudio = false;

    var uAgent = navigator.userAgent.toLowerCase();

    // Check if the user agent is a mobile one
    if (uAgent.indexOf('iphone') !== -1 || uAgent.indexOf('ipad') !== -1 || uAgent.indexOf('ipod') !== -1 ||
            uAgent.indexOf('android') !== -1 ||
            uAgent.indexOf('windows phone') !== -1 || uAgent.indexOf('windows ce') !== -1 ||
            uAgent.indexOf('bada') !== -1 ||
            uAgent.indexOf('meego') !== -1 ||
            uAgent.indexOf('palm') !== -1 ||
            uAgent.indexOf('blackberry') !== -1 ||
            uAgent.indexOf('nokia') !== -1 || uAgent.indexOf('symbian') !== -1 ||
            uAgent.indexOf('pocketpc') !== -1 ||
            uAgent.indexOf('smartphone') !== -1 ||
            uAgent.indexOf('mobile') !== -1) {
        isMobile = true;
    }

    // Check if the device is retina-like
    if (window.devicePixelRatio && window.devicePixelRatio > 1) {
        isRetina = true;
    }

    // Check if the device supports audio, for accessibility
    try {
        var audioElement = document.createElement('audio');
        if (audioElement.canPlayType) {
            supportsAudio = true;
        }
    } catch (e) {
    }

    // If the device is retina-like, update the img src's and the dropzone class
    if (isRetina) {
        $('div.eL-captcha img').each(function (index, element) {
            if (!$(element).attr('src'))
                return;

            var newImageSRC = $(element).attr('src').replace(/(.+)(\.\w{3,4})$/, "$1@2x$2");
            $.ajax({
                url: newImageSRC,
                type: "HEAD",
                success: function () {
                    $(element).attr('src', newImageSRC);
                }
            });
        });

        $('div.eL-captcha  div.eL-where2go').addClass('retina');
    }

    /*if ( ! supportsAudio ) {
     $('div.eL-captcha > .eL-accessibility').hide();
     } else {
     $('div.eL-captcha > p.eL-accessibility a').on('click touchstart', function(event) {
     event.preventDefault();
     
     if ( ! $('div.eL-captcha > div.eL-accessibility').is(':visible') ) {
     $('div.eL-captcha > div.eL-accessibility > audio').each(function() {
     this.load();
     this.play();
     });
     
     if ( ! $('#' + window.vCVals.a).length ) {
     var validAccessibleElement = '<input type="text" name="' + window.vCVals.a + '" id="' + window.vCVals.a + '" value="">';
     $('div.eL-captcha > div.eL-accessibility > p').after(validAccessibleElement);
     }
     }
     
     $('div.eL-captcha > p.eL-explanation').stop().slideToggle('fast');
     $('div.eL-captcha > div.eL-possibilities').stop().slideToggle('fast');
     $('div.eL-captcha > div.eL-where2go').stop().slideToggle('fast');
     $('div.eL-captcha > div.eL-accessibility').stop().slideToggle('fast');
     });
     }*/

    //if ( ! isMobile ) {
    // If it's not mobile, load normal drag/drop behavior
//    $('div.eL-captcha > div.eL-possibilities > img').draggable({opacity: 0.6, revert: 'invalid'});
//    $('div.eL-captcha > div.eL-possibilities').droppable({
//        drop: function (event, ui) {
//            $('.' + window.vCVals.n).each(function (index) {
//                if ($('#' + window.vCVals.n).val() == $(ui.draggable).data('value')) {
//                    $('#' + window.vCVals.n).remove();
//                }
//            });
////				if ( $('#' + window.vCVals.n).val() == $(ui.draggable).data('value') ) {
////					$('#' + window.vCVals.n).remove();
////				}
//            $('div.eL-captcha  div.eL-where2go').droppable('enable');
//            if (!$('#eL-where2go').is(':disabled')) {
//                $(".appendEl").eq(0).remove();
//                $('#eL-where2go').removeAttr('aria-disabled');
//                $('#eL-where2go').removeClass('ui-droppable-disabled ui-state-disabled');
//            }
//            if (!$('#eL-where2go1').is(':disabled')) {
//                $(".appendEl").eq(1).remove();
//                $('#eL-where2go1').removeAttr('aria-disabled');
//                $('#eL-where2go1').removeClass('ui-droppable-disabled ui-state-disabled');
//            }
//            if (!$('#eL-where2go2').is(':disabled')) {
//                $(".appendEl").eq(2).remove();
//                $('#eL-where2go2').removeAttr('aria-disabled');
//                $('#eL-where2go2').removeClass('ui-droppable-disabled ui-state-disabled');
//            }
//            if (!$('#eL-where2go3').is(':disabled')) {
//                $(".appendEl").eq(3).remove();
//                $('#eL-where2go3').removeAttr('aria-disabled');
//                $('#eL-where2go3').removeClass('ui-droppable-disabled ui-state-disabled');
//            }
//        },
//        accept: 'div.eL-captcha > div.eL-possibilities > img'
//    });
//
//    $('div.eL-captcha div.eL-where2go').droppable({
//        drop: function (event, ui) {
//            if ($('#' + window.vCVals.n).val() == $(ui.draggable).data('value')) {
//                $('#' + window.vCVals.n).remove();
//            }
//            var validElement = '<input type="hidden" class="appendEl" name="' + window.vCVals.n + '[]" id="' + window.vCVals.n + '" readonly="readonly" value="' + $(ui.draggable).data('value') + '">';
//            $('#' + window.vCVals.f).append(validElement);
//            $(this).droppable('disable');
//            //$(ui.draggable).draggable('disable')
//
//        },
//        accept: 'div.eL-captcha > div.eL-possibilities > img'
//    });
    $(".eL-possibilities .imgDiv").draggable({
        revert: "invalid",
        refreshPositions: true,
        drag: function (event, ui) {
            ui.helper.addClass("draggable");
        },
        stop: function (event, ui) {
            ui.helper.removeClass("draggable");
            var thisImg = $(this).find('img').attr('src');
//            alert(thisImg)
            var image = thisImg.split("/")[thisImg.split("/").length - 1];
            if ($.ui.ddmanager.drop(ui.helper.data("draggable"), event)) {
                alert(image + " dropped.");
            } else {
                alert(image + " not dropped.");
            }
        }
    });
    $(".eL-where2go").each(function () {
        $(this).droppable({
            drop: function (event, ui) {
                if ($(this).find('.imgDiv').length == 0) {
                    $(this).html("");
                    $(this).append('<input type="hidden" class="appendEl" id="' + window.vCVals.n + '[]" id="' + window.vCVals.n + '" name="' + window.vCVals.n + '[]" id="' + window.vCVals.n + '" readonly="readonly" value="' + $(ui.draggable).find('img').data('value') + '">')
                }
                ui.draggable.addClass("dropped");
                $(this).append(ui.draggable);
            }
        });
    });
    //    $(".captcha-fields").sortable();
    $('.captcha-fields .imgDiv').sortable({
        connectWith: '.eL-possibilities,.eL-where2go',
        placeholder: 'placeholder',
    });
    $(".eL-where2go").sortable({
        connectWith: ".eL-possibilities,.eL-where2go",
//        placeholder: 'placeholder'
    });
    $(".eL-possibilities").sortable({
        connectWith: ".eL-possibilities,.eL-where2go",
//        placeholder: 'placeholder'
        update: function (event, ui) {
//            alert($(this).attr('class'))
            if (!$(this).parents('.captcha-fields').find('.imgDiv').length) {
                $(this).find('input').remove();
//                alert($(this).parents('.captcha-fields').find('input').attr('id'));
            }

        }});

    $(".captcha-fields .eL-where2go img").sortable({
        connectWith: ".eL-possibilities,.eL-where2go",
        placeholder: 'placeholder',
        dropOnEmpty: false
    });

    $(".captcha-fields, .eL-where2go").disableSelection();
//    $(".captcha-fields img").draggable();
    //} 
});