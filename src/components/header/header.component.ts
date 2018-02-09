// import * as angular from 'angular';
import { Menu } from '../../model/menu';
import { HeaderComponentSource } from '../../source/header.component';
import { HeaderComponentService } from '../service/header.component.service';
import './header.component.less';

class HeaderComponentContorller implements ng.IComponentController {
  static $inject: Array<string> = ['$scope', '$timeout', '$window', 'HeaderComponentService'];

  menus: Array<Menu> = [];
  private HeaderSource = HeaderComponentSource;

  constructor(
    private $scope: ng.IScope,
    private $timeout: ng.ITimeoutService,
    private $window: any,
    private headerComponentService: HeaderComponentService) {
    // $scope.$on('ngRepeatFinished', ($event) => {
    // });
  }
  // https://docs.angularjs.org/api/ng/service/$compile#life-cycle-hooks
  $onInit() {
    this.getMenu();
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

  private async getMenu(): Promise<void> {
    console.log('getMenu');
    // this.menus = this.headerService.loadMenu();
  }

  private showConsole(message: string): void {
    console.log(message)
  }
}

const HeaderComponent: ng.IComponentOptions = {
  bindings: {
    id: '@'
  },
  templateUrl: './header.tpl',
  controller: HeaderComponentContorller,
  controllerAs: 'headerComponentCtrl'
}

export { HeaderComponent };
