import * as angular from 'angular';
import { ContactComponentService } from './contact.component.service';
// import { IndexComponentService } from './index.component.service';

const PageServiceModule: ng.IModule = angular.module('PageServiceModule', [])
  // .service('IndexComponentService', IndexComponentService)
  .service('ContactComponentService', ContactComponentService);
export { PageServiceModule };
