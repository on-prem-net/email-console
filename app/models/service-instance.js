import DS from 'ember-data';
const { Model } = DS;

export default Model.extend({
  agent: DS.belongsTo('agent'),
  service: DS.belongsTo('service', {inverse:null}),
  plan: DS.belongsTo('plan', {inverse:null}),
  accounts: DS.hasMany('account'),
  domains: DS.hasMany('domain'),
  endpoints: DS.hasMany('endpoint'),
  createdBy: DS.belongsTo('user', {inverse:null}),
  createdAt: DS.attr('date'),
  updatedAt: DS.attr('date')
});
