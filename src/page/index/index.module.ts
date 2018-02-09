import * as angular from 'angular';
import { IndexComponent } from './index';

const IndexModule: ng.IModule = angular.module('IndexModule', [
    // ContactServiceModule.name
])
    .component('index', IndexComponent)

export { IndexModule };