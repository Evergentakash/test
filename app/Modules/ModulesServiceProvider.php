<?php

namespace App\Modules;

class ModulesServiceProvider extends \Illuminate\Support\ServiceProvider {

    /**
     * Will make sure that the required modules have been fully loaded
     * @return void
     */
    public function boot() {
        // For each of the registered modules, include their routes and Views
        $modules = config("module.modules");
        $track = env('APP_MODULE');
//        while (list(, $module) = each($modules)) {
        // echo '<pre>';
        // $modules = config("module.modules");
//         print_r($modules);
//         exit;
        if($modules){
            foreach($modules as $module){
//               die($track);
                if($module == $track){
              //   {
                    // Load the routes for each of the modules
                    if (file_exists(__DIR__ . '/' . $module . '/routes.php')) {
                        include __DIR__ . '/' . $module . '/routes.php';
                    }

                    // Load the views
                    if (is_dir(__DIR__ . '/' . $module . '/Views')) {
                        $this->loadViewsFrom(__DIR__ . '/' . $module . '/Views', $module);
                    }
                    
                    // Load the views
                    if (is_dir(__DIR__ . '/' . $module . '/lang')) {
                        $this->loadTranslationsFrom(__DIR__ . '/' . $module . '/lang', $module);
                    }
                }
            }
        }
    }

    public function register() {

    }

}
