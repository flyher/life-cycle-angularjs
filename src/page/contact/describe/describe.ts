import './describe.less';
class DescribeController implements ng.IComponentController {
  constructor() {
    console.log('DescribeController');
  }
}

const DescribeComponent: ng.IComponentOptions = {
  templateUrl: './describe.html',
  controller: DescribeController,
  controllerAs: 'describeCtrl'
};

export { DescribeComponent };
