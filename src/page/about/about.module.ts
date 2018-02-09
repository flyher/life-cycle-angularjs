import * as angular from 'angular';
import { AboutComponent } from './about';
// import { AboutServiceModule } from './service/about.component.service';

const AboutModule: ng.IModule = angular.module('AboutModule', [
  // AboutServiceModule.name
])
  .component('about', AboutComponent)

export { AboutModule };
