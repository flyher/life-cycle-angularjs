import * as angular from 'angular';
import { ContactComponentService } from './contact.component.service';
import { AboutComponentService } from './about.component.service';

const PageServiceModule: ng.IModule = angular.module('PageServiceModule', [])
  .service('ContactComponentService', ContactComponentService)
  .service('AboutComponentService', AboutComponentService);
export { PageServiceModule };
