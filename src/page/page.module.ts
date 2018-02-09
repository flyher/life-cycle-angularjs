import * as angular from 'angular';

import { ContactModule } from './contact/contact.module';
// import { IndexModule } from './index/index.module';

const PageModule: ng.IModule = angular.module('PageModule', [
  ContactModule.name
  // IndexModule.name
]);

export { PageModule };
