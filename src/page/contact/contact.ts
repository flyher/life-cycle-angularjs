import './contact.less';
class ContactController implements ng.IComponentController {
  constructor() {
    console.log('ContactController');
  }
}

const ContactComponent: ng.IComponentOptions = {
  templateUrl: './contact.html',
  controller: ContactController,
  controllerAs: 'contactCtrl'
};

export { ContactComponent };
