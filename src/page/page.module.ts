import * as angular from 'angular';

import { ContactModule } from './contact/contact.module';
import { AboutModule } from './about/about.module';

const PageModule: ng.IModule = angular.module('PageModule', [
  ContactModule.name,
  AboutModule.name
]);

export { PageModule };
