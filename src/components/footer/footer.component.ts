// import * as angular from 'angular';
import { Menu } from '../../model/menu';
import { FooterComponentSource } from '../../source/footer.component';
import { FooterComponentService } from '../service/footer.component.service';
import './footer.component.less';

class FooterComponentController implements ng.IComponentController {
  static $inject: Array<string> = ['$scope', '$timeout', '$window', 'FooterComponentService'];

  menus: Array<Menu> = [];
  private FooterComponentSource = FooterComponentSource;

  constructor(
    private $scope: ng.IScope,
    private $timeout: ng.ITimeoutService,
    private $window: any,
    private FooterComponentService: FooterComponentService) {
    // $scope.$on('ngRepeatFinished', ($event) => {
    // });
  }
  // https://docs.angularjs.org/api/ng/service/$compile#life-cycle-hooks
  $onInit() {
    this.showConsole('$onInit');
  };

  $onChanges() {
    this.showConsole('#onChanges');
  }

  $doCheck() {
    this.showConsole('#doCheck');
  }

  $onDestroy() {
    this.showConsole('#onDestroy');
  }

  $postLink() {
    this.showConsole('#postLink');
  }

  private showConsole(message: string): void {
    console.log(message)
  }
}

const FooterComponent: ng.IComponentOptions = {
  bindings: {
    id: '@'
  },
  templateUrl: './footer.component.tpl',
  controller: FooterComponentController,
  controllerAs: 'footerComponentCtrl'
}

export { FooterComponent };
