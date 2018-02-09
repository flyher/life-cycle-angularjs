import * as angular from 'angular';
import 'angular-animate';
import 'angular-sanitize';
import 'angular-ui-bootstrap';
import '@uirouter/angularjs';
import { AppModule } from '../app/app.module';
angular.element(document).ready(() => {
  const body: Element = document.getElementById('lcApp') as HTMLElement;
  angular.bootstrap(body, [
    'ngAnimate',
    'ngSanitize',
    'ui.router',
    'ui.bootstrap',
    AppModule.name,
  ], { strictDi: true });
});
