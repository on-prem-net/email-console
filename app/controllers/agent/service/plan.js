import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
  notify: service(),
  actions: {
    provision(plan) {
      let agent = this.agent;
      let serviceInstance = this.store.createRecord('service-instance', {
        agent: this.agent,
        service: plan.get('service'),
        plan: plan
      });
      serviceInstance.save().then(() => {
        this.notify.info('Provisioned');
        this.transitionToRoute('agent', agent);
      }).catch((reason) => {
        this.notify.error(reason.errors[0].detail);
      });
    }
  }
});