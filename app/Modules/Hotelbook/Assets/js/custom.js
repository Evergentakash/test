/* AngularJS Code start*/
var mainApp = angular.module('mainApp', ['ngMessages']);

// Define the `socialloginController` controller on the `foxApp` module
mainApp.controller('main', ['$scope', function main($scope) {
        $('.form-control:first').focus();
        $scope.mainflow = function(){
            window.location = "evflow.html";
        }
    }]);

//$(function () {
//    $('#login_form').validate({
//        rules: {
//            email: {
//                required: true,
//                email: true             
//            },
//            password: {
//                required: true
//            }
//        },
//        messages: {
//            email: {
//                required: 'Please enter email address',
//                email:'Please enter valid email address'
//            },
//            password: {
//                required: 'Please enter password'
//            }
//        }
//    });
//    $('#login_form').submit(function(){
//    if($('#login_form').valid()){
//        window.location.href = "evflow.html";
//    }
//});
//});