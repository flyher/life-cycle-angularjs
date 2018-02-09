import * as angular from 'angular';
import { HeaderComponentService } from './header.component.service';
import { FooterComponentService } from './footer.component.service';

const OnePaperServiceModule: ng.IModule = angular.module('OnePaperServiceModule', [])
  .service('HeaderComponentService', HeaderComponentService)
  .service('FooterComponentService', FooterComponentService);
export { OnePaperServiceModule };
