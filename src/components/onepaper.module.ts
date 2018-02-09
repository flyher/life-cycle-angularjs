import * as angular from 'angular';
import { HeaderComponentService } from './service/header.component.service';
import { HeaderComponent } from './header/header.component';
import { FooterComponentService } from './service/footer.component.service';
import { FooterComponent } from './footer/footer.component';
import { OnePaperComponent } from './onepaper';

const OnePaperModule: ng.IModule = angular.module('OnePaperModule', [
  // HeaderComponentService.name,
  // FooterComponentService.name
])
  // .component('headerComponent', HeaderComponent)
  // .component('footerComponent', FooterComponent)
  .component('onePaper', OnePaperComponent);

export { OnePaperModule };
