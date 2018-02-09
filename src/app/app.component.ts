class AppComponentController implements ng.IComponentController {
  constructor() {
    console.log('app.component');
  }
}

const AppComponent: ng.IComponentOptions = {
  template: '<ui-view></ui-view>',
  // templateUrl: './app.component.html',
  controller: AppComponentController,
  controllerAs: 'app'
};

export { AppComponent };