export class IndexComponentService {
  static $inject: Array<string> = ['$http'];
  constructor(public $http: ng.IHttpService) { }
}
