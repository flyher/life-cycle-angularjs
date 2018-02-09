import * as angular from 'angular';

import { AppComponent } from './app.component';
import { PageModule } from '../page/page.module';
import { AppRoutingModule } from './app.router.module';

const AppModule: ng.IModule = angular.module('AppModule', [
  PageModule.name
])
  .component('lcApp', AppComponent)
  .config(function () {
    console.log('config');
  })
  .config(AppRoutingModule);

export { AppModule };
