@extends('Dkids::layouts.dkids')
@section('content')

<div class="mainBody">
    <div class="abs_img signin">
        <a href="#">Sign In</a>
    </div>
    <div class="brand">
        <label>Start your free trial</label>
        <p>Create an account to enjoy unlimited access on any device at anytime.</p>
    </div>

    <div class="row">
        <div class="col-xs-5 text-left formContent">
            <form  data-toggle="validator" role="form" id="register_form" name="register_form" method="post" action="registerpost?<?php echo http_build_query($_GET);?>" onkeypress="handleKeyPress(event, this)">
                {{ csrf_field() }}
                <div class="form_content">
                    <div class="login_bg">
                        <?php
                        /*if ($this->status == 'success' && $this->message) {
                            echo '<div class="alert alert-block alert-success fade in"><p>' . $this->message . '</p></div>';
                        } elseif ($this->status == 'fail' && $this->message) {
                            echo '<div class="alert alert-block alert-danger fade in"><p>' . $this->message . '</p></div>';
                        }*/
                        ?>          

                        <div class="row">
                            <div class="form-group col-sm-12">
                                <input  type="text" id="email" name="email" maxlength="50" placeholder="Email" class="form-control">
                            </div>
                        </div>
                        <div class="row">
                            <div class="form-group col-sm-12">
                                <input type="password" id="password" name="passWord" maxlength="25" minlength="4" placeholder="Password" class="form-control" >
                            </div>
                        </div>
                        <span id="frm_terms_err"></span>

                        <br>

                        <div id="reg_btn_div" class="form-group">
                            <input type="submit" class="btn btn-primary btn-block" id="register_btn" value="Sign Up" />
                        </div>
                    </div>

                </div>
            </form>
        </div>
        <div class="col-xs-2 orBreak">or</div>
        <div class="col-xs-5 socialLogin">

            <a class="btn btn-block btn-social btn-facebook btn-block"  href="#">
                <i class="fa fa-facebook"></i>Sign up with Facebook</a>
        </div>
    </div>
    <div class="form-group lastP">
        <p class="text-left lastStep">Just one more step and you're done!</p>
    </div>

</div>
@endsection
