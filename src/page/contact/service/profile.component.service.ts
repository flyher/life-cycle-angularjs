export class ProfileComponentService {
  static $inject: Array<string> = ['$http'];
  constructor(public $http: ng.IHttpService) { }
}
