import * as angular from 'angular';

import { AppComponent } from './app.component';
import { PageModule } from '../page/page.module';
import { AppRoutingModule } from './app.router.module';
import { OnePaperModule } from '../components/onepaper.module';
import { OnePaperComponent } from '../components/onepaper';

const AppModule: ng.IModule = angular.module('AppModule', [
  PageModule.name,
  OnePaperModule.name
])
  .component('lcApp', AppComponent)
  .component('onePaper', OnePaperComponent)
  .config(function () {
    console.log('config');
  })
  .config(AppRoutingModule);

export { AppModule };
