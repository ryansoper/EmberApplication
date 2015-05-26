import Ember from 'ember';

export default Ember.Controller.extend({
actions:{
  goToAirsoft: function () {
    this.transitionToRoute("airsoft");
  } ,
  goToIndex: function () {
    this.transitionToRoute("index");
  },
  goToSoftware: function () {
    this.transitionToRoute("software");
  },
  goToPolice: function () {
    this.transitionToRoute("police");
  }
}
});
