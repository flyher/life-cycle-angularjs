import { Menu } from '../../model/menu';

export class HeaderComponentService {
  static $inject: Array<string> = ['$http'];
  constructor(public $http: ng.IHttpService) { }
  loadMenu(): ng.IPromise<any> {
    return this.$http.get('', {});
  }
}
