import './profile.less';
class ProfileController implements ng.IComponentController {
  constructor() {
    console.log('ProfileController');
  }
}

const ProfileComponent: ng.IComponentOptions = {
  templateUrl: './profile.html',
  controller: ProfileController,
  controllerAs: 'profileCtrl'
};

export { ProfileComponent };
