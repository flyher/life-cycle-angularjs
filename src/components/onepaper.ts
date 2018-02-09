import './onepaper.less';
class OnePaperController implements ng.IComponentController {
  constructor() {
    console.log('OnePaperController');
  }
}

const OnePaperComponent: ng.IComponentOptions = {
  templateUrl: './onepaper.html',
  controller: OnePaperController,
  controllerAs: 'onepaperCtrl'
};

export { OnePaperComponent };
