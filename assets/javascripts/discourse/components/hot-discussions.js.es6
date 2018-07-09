import { observes } from "ember-addons/ember-computed-decorators";

export default Ember.Component.extend({
    classNames:['hot-discussions'],

    init() {
        this._super();
        
        var self = this;
        Ember.run.schedule("afterRender", () => {
        });
        
    }
});