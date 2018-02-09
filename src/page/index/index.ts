import './index.less';
class IndexController implements ng.IComponentController {
  constructor() {}
}

const IndexComponent: ng.IComponentOptions = {
  template: './index.tpl',
  controller: IndexController,
  controllerAs: 'indexCtrl'
};

export { IndexComponent };
