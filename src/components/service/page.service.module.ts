import * as angular from 'angular';
import { HeaderComponentService } from './header.component.service';
import { FooterComponentService } from './footer.component.service';

const PageServiceModule: ng.IModule = angular.module('PageServiceModule', [])
  .service('HeaderComponentService', HeaderComponentService)
  .service('FooterComponentService', FooterComponentService);
export { PageServiceModule };
