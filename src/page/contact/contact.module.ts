import * as angular from 'angular';
import { ContactComponent } from './contact';
import { DescribeComponent } from './describe/describe';
import { ProfileComponent } from './profile/profile';
import { ContactServiceModule } from './service/contact.component.service';

const ContactModule: ng.IModule = angular.module('ContactModule', [
  ContactServiceModule.name
])
  .component('contact', ContactComponent)
  .component('describe', DescribeComponent)
  .component('profile', ProfileComponent);

export { ContactModule };
