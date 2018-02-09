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
    this.showConsole('HeaderComponentContorller');
  }


  // https://docs.angularjs.org/api/ng/service/$compile#life-cycle-hooks
  $onInit() {
    this.getMenu();
    this.showConsole('HeaderComponentContorller $onInit');
  }

  $onChanges() {
    this.showConsole('HeaderComponentContorller $onChanges');
  }

  $doCheck() {
    this.showConsole('HeaderComponentContorller $doCheck');
  }

  $onDestroy() {
    this.showConsole('HeaderComponentContorller $onDestroy');
  }

  $postLink() {
    this.showConsole('HeaderComponentContorller $postLink');
  }

  private async getMenu(): Promise<void> {
    console.log('getMenu');
    // this.menus = 
    console.log(this.headerComponentService.loadMenu());
  }

  private showConsole(message: string): void {
    console.log(message);
  }
}

const HeaderComponent: ng.IComponentOptions = {
  bindings: {
    id: '@'
  },
  templateUrl: './header.component.html',
  controller: HeaderComponentContorller,
  controllerAs: 'headerComponentCtrl'
};

export { HeaderComponent };
