$(function () {
    
    // The url is to get sessionkey attribute from different appkey
    var appkeysession2 = httpGet('https://appgrid-api.cloud.accedo.tv/session?appKey=56a85440e4b0e8b7bda4aa6b&uuid=Ericsson');
    var jsonappkeysession2 = JSON.parse(appkeysession2);
    var jsonappsessionkey2 = jsonappkeysession2.sessionKey;
    
    // The below url is to get logo path attribute
    var res2 = httpGet('https://appgrid-api.cloud.accedo.tv/asset?sessionKey=' + jsonappsessionkey2);
    var jsonres2 = JSON.parse(res2);
//    alert('https://appgrid-api.cloud.accedo.tv/asset?sessionKey='+jsonappsessionkey2);
    // The url is to get defaulttextcolor,popoverButtonColor,popoverButtonBackground,popoverBackground attributes
    var metadata = httpGet('https://appgrid-api.cloud.accedo.tv/metadata/cfg_color_web?sessionKey=' + jsonappsessionkey2);
//    alert('https://appgrid-api.cloud.accedo.tv/metadata/cfg_color_web?sessionKey=' + jsonappsessionkey2);
    var metadatares = JSON.parse(metadata);
    
    var value123 = jsonres2.asset_img_logo_small;//logo value in value123
    var defaultObj = metadatares.cfg_color_web;
    var defaulttextcolor = defaultObj.baseColor05;//defaulttextcolor
    var popoverButtonColor = defaultObj.baseColor09;//popoverButtonColor
    var popoverButtonBackground = defaultObj.baseColor01;//popoverButtonBackground
    var popoverBackground = defaultObj.baseColor06;//popoverButtonBackground
    
//    $(".brand_account").css({'background':'url('+value123+')','background-size':'100% 100%'});//setting the logo
//    $(".parentbody").css("backgroundColor","rgb(" + defaultObj.background + ")");
    $(".parentbody").css("background-image","url(" + defaultObj.backgroundImage + ")");
    $(".parentbody").css("color","rgb(" + defaulttextcolor + ")");
//    $(".login_bg input[type='text']").css("color","rgb(" + defaulttextcolor + ")");
//    $("input[type='password']").css("color","rgb(" + defaulttextcolor + ")");
//    $("select").css("color","rgb(" + defaulttextcolor + ")");
    $('.nav-tabs ').css('backgroundColor',"rgb(" + defaulttextcolor + ")");
    $(".btn-primary,.btn-info").css("color","rgb(" + popoverButtonColor + ")");
    $(".myaccount_bg").css("color","rgb(" + popoverButtonColor + ")");
   $(".myaccount_bg").css("backgroundColor","rgb(" + popoverButtonBackground + ")");
    $(".btn-primary,.btn-info").css("backgroundColor","rgb(" + popoverButtonBackground + ")");
    $(".btn-primary,.btn-info").css("borderColor","rgb(" + popoverButtonBackground + ")");
    $(".alink").css("color","rgb(" + popoverBackground + ")");
    $(".alink").css("borderBottomColor","rgb(" + popoverBackground + ")");
    $(".linkval").hover(function(){
        $(this).css("color", "rgb(" + popoverBackground + ")");
        }, function(){
        $(this).css("color", "rgb(" + defaulttextcolor + ")");
        $(".alink").css("color","rgb(" + popoverBackground + ")");
    });
    //alert('https://appgrid-api.cloud.accedo.tv/metadata?sessionKey=' + sessionkey);
});
function httpGet(theUrl)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", theUrl, false);
    xmlHttp.send(null);
    return xmlHttp.responseText;
} 