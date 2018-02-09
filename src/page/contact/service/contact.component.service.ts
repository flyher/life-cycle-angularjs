import * as angular from 'angular';
import { DescribeComponentService } from './describe.component.service';
import { ProfileComponentService } from './profile.component.service';

const ContactServiceModule: ng.IModule = angular.module('ContactServiceModule', [])
  .service('DescribeComponentService', DescribeComponentService)
  .service('ProfileComponentService', ProfileComponentService);
export { ContactServiceModule };
