<html>
    <head>
        <title>Login Page</title>
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
        <script src="https://code.jquery.com/jquery-1.11.1.min.js"></script>
        <script src="https://cdn.jsdelivr.net/jquery.validation/1.16.0/jquery.validate.min.js"></script>
        <script src="https://cdn.jsdelivr.net/jquery.validation/1.16.0/additional-methods.min.js"></script>

    </head>
    <body>

        <form action="/searchcity" method="post">
            <input type="hidden" name="_token" id="_token" value="{{ csrf_token() }}" />  
            SEARCH CITY: <input type="text" name="cname" id="cname"/><br> 
        </form>

        @if (isset($message) && $message != '')
        <div class="alert alert-success" role="alert">
            <p>{{ $message }}</p>
        </div>
        @endif


      <div id="CinemaID" height="5%" width="100%" style="background-color:lightblue"></div> 
      

       <script type="text/javascript">
        $(document).ready(function () {
            $("#cname").blur(function () {
                var checkString = $("#cname").val();
                var data = 'user=' + checkString;
                if (checkString) {
                    $.ajaxSetup({
                        headers: {
                            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                        }
                    });
                    $.ajax({
                        type: "GET",
                        url: "/check",
                        data: data,
                        success: function (html) {
                    $('#CinemaID').html(html);
                        }
                    });
                }
                
            });
        });
        </script>
    </body>
</html>
