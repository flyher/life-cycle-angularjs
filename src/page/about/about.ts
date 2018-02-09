import './about.less';
class AboutController implements ng.IComponentController {
  constructor() {
    console.log('AboutController');
  }
}

const AboutComponent: ng.IComponentOptions = {
  templateUrl: './about.html',
  controller: AboutController,
  controllerAs: 'aboutCtrl'
};

export { AboutComponent };
