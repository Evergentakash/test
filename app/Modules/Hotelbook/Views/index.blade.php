@extends('Otto::layouts.otto')
@section('content')
<section class="login-section py-6 py-md-8 py-lg-9 ">
    <div class="">
        <div class="container-fluid">
            <div class="heading-holder text-center mb-4 mb-md-6">
                <div class="logo mb-3 mb-md-4">
                    <a href="#"><img style="max-width: 180px;" src="{{ asset('images/logo.svg') }}" alt="Otto"></a>
                </div>
                <h2>Welcome Back!</h2>
            </div>

            <div class="login-holder">
                @if(Session::has('message')) <div class="alert alert-success"> {{Session::get('message')}} </div>@endif
                <?php // echo "<pre>";print_R($errors);die; ?>
                @if ($errors->has('error'))
                <div class="alert alert-danger " role="alert">
                    <p class="text-center">{{ implode(',', $errors->get('error')) }}</p>
                </div>
                @endif

                <form class="mb-2 mb-md-4" method="POST" id="loginForm" action="/loginsubmit">
                    {{ csrf_field() }}
                    <fieldset>
                        <div class="form-group mb-3 {{ $errors->has('email') ? ' has-error' : '' }}">
                            <label>
                                <span class="d-block mb-1">Email</span>      
                            </label>
                            <input id="email" type="email" class="form-control save-info-item" name="email" value="{{ old('email') }}" placeholder="Email"  data-required="true" required autofocus>
                            @if ($errors->has('email'))
                            <span class="help-block">
                                <strong>{{ $errors->first('email') }}</strong>
                            </span>
                            @else
                            <div class="form-control-feedback"></div>
                            @endif
                        </div>
                        <div class="form-group mb-3 {{ $errors->has('password') ? ' has-error' : '' }}">
                            <label>
                                <span class="d-block mb-1">Password</span>
                            </label>
                            <input id="password" type="password" min="8" class="form-control save-info-item" name="password" placeholder="Password" data-required="true" required>
                            @if ($errors->has('password'))
                            <div class="has-danger">
                                <span class="form-control-feedback">
                                    {{ $errors->first('password') }}
                                </span>
                            </div>
                            @else
                            <div class="form-control-feedback"></div>
                            @endif
                        </div>                     
                    </fieldset>
                    <!--<div class="g-recaptcha d-flex justify-content-center" id="custom-g-recaptcha" data-callback="myCallback" data-theme="dark" data-sitekey="6Lc0jT4UAAAAANlOljj9Eq48txScLdbCECFtGTSO"></div>-->
                    <div class="form-group text-right">
                        <a class="btn btn-link" href="/forgotpassword">
                            Forgot Your Password?
                        </a>
                    </div>
                    <div class="button-holder text-center mb-3">
                        <button type="submit" class="btn btn-lg btn-primary submitLogin">
                            Login
                        </button>                   
                    </div>
                </form>
            </div>
        </div>
    </div>
</section>
@endsection
