export class FooterComponentService {
  static $inject: Array<string> = ['$http'];
  constructor(public $http: ng.IHttpService) { }
}
