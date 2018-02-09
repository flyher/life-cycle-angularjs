// https://docs.angularjs.org/api/ngComponentRouter
export class AppRoutingModule {
  static $inject: Array<string> = ['$stateProvider', '$urlRouterProvider'];

  constructor($stateProvider: ng.ui.IStateProvider, $urlRouterProvider: ng.ui.IUrlRouterProvider) {
    $stateProvider
      // .state('index', {
      //   url: 'index',
      //   component: 'index'
      // })
      .state('contact', {
        url: '/contact',
        component: 'contact'
      })
      .state('any', {
        url: 'any',
        component: 'contact'
      });

    // $urlRouterProvider
    //   .when('/', '/index/xzxz')
    //   .otherwise('/index/xzxz');
  }
}
