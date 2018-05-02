<!DOCTYPE html>
<?php $currentBuildVersion = env('ASSET_VERSION');?>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <!-- CSRF Token -->
        
        <title>{{ env('APP_NAME') }}</title>
        <!-- Styles -->
<!--        <link rel="icon" href="{{ asset('images/dkidsfavicon.jpg') }}" type="image/x-icon" />-->
        <link href="{{ asset('dkids/css/bootstrap.min.css?build='.$currentBuildVersion) }}" rel="stylesheet">
    
        
        <link href="{{ asset('dkids/css/font-awesome.min.css?build='.$currentBuildVersion) }}" rel="stylesheet">
        <link href="{{ asset('dkids/css/jquery-ui.min.css?build='.$currentBuildVersion) }}" rel="stylesheet">
        <link href="{{ asset('dkids/css/footable.min.css?build='.$currentBuildVersion) }}" rel="stylesheet">
        <link href="{{ asset('dkids/css/main.min.css?build='.$currentBuildVersion) }}" rel="stylesheet">
        
       
    </head>
    <body ng-controller="main">
        <div id="loading"></div>
        
           
            <div  class="container"> 
       <div class="form-signin" > 
                @yield('content')
       </div>
           
            </div>
        
        <!-- Scripts -->
        <!--<script src="{{asset('otto/js/jquery.min.js')}}"></script>-->
        <script src="{{asset('dkids/js/jquery.min.js?build='.$currentBuildVersion)}}"></script>
        <script src="{{asset('dkids/js/jquery-ui.min.js?build='.$currentBuildVersion)}}"></script>
        <script src="{{asset('dkids/js/angular.min.js?build='.$currentBuildVersion)}}"></script>
        <script src="{{asset('dkids/js/custom.js?build='.$currentBuildVersion)}}" defer></script> 
        <script src="{{asset('dkids/js/bootstrap.min.js?build='.$currentBuildVersion)}}"></script>
        <script src="{{asset('dkids/js/jquery.validate.min.js?build='.$currentBuildVersion)}}"></script>
        <script src="{{asset('dkids/js/custom_validations.js?build='.$currentBuildVersion)}}"></script>
        <script src="{{asset('dkids/js/appgrid.js?build='.$currentBuildVersion)}}" ></script>
          
        <script type="text/javascript">
    $("#contentpage").css({"display": "block"});
    var projectName = {{ env('APP_NAME') }};
    $('.footable').footable();
    $(function () {
        $('.button-checkbox').each(function () {

            // Settings
            var $widget = $(this),
                    $button = $widget.find('button'),
                    $checkbox = $widget.find('input:checkbox'),
                    color = $button.data('color'),
                    settings = {
                        on: {
                            icon: 'glyphicon glyphicon-check'
                        },
                        off: {
                            icon: 'glyphicon glyphicon-unchecked'
                        }
                    };

            // Event Handlers
            $button.on('click', function () {
                $checkbox.prop('checked', !$checkbox.is(':checked'));
                $checkbox.triggerHandler('change');
                updateDisplay();
            });
            $checkbox.on('change', function () {
                updateDisplay();
            });

            // Actions
            function updateDisplay() {
                var isChecked = $checkbox.is(':checked');

                // Set the button's state
                $button.data('state', (isChecked) ? "on" : "off");

                // Set the button's icon
                $button.find('.state-icon')
                        .removeClass()
                        .addClass('state-icon ' + settings[$button.data('state')].icon);

                // Update the button's color
                if (isChecked) {
                    $button
                            .removeClass('btn-default')
                            .addClass('btn-' + color + ' active');
                } else {
                    $button
                            .removeClass('btn-' + color + ' active')
                            .addClass('btn-default');
                }
            }

            // Initialization
            function init() {

                updateDisplay();

                // Inject the icon if applicable
                if ($button.find('.state-icon').length === 0) {
                    $button.prepend('<i class="state-icon ' + settings[$button.data('state')].icon + '"></i> ');
                }
            }
            init();
        });
    });
    var new_checkbox_button = function (name, id) {
        return "<li><span class='button-checkbox'><button type='button' class='btn btn-sm btn-primary active' data-color='primary'><i class='state-icon glyphicon glyphicon-check'></i>&nbsp;" + name + "</button><input type='checkbox' class='hidden' checked=''></span></li>";
    };
    $("#add").click(function () {
        $("#selected_targets").append(new_checkbox_button("lallalala", "1111"));
    });
</script>
    </body>
</html>
