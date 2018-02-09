import * as angular from 'angular';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { OnePaperComponent } from './onepaper';
import { OnePaperServiceModule } from './service/onepaper.service.module';

const OnePaperModule: ng.IModule = angular.module('OnePaperModule', [
  OnePaperServiceModule.name
])
  .component('header', HeaderComponent);
  // .component('footerComponent', FooterComponent)
  // .component('onePaper', OnePaperComponent);

export { OnePaperModule };
