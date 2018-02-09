export class ContactComponentService {
  static $inject: Array<string> = ['$http'];
  constructor(public $http: ng.IHttpService) { }
}
