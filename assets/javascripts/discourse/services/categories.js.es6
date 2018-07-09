import { ajax } from 'discourse/lib/ajax';
import {
  default as computed,
  on,
  observes
} from "ember-addons/ember-computed-decorators";

export default Ember.Service.extend({
    categories: null,
    
    @on('init')
    getCategories() {
        return ajax("/categories.json").then(result => {
            return this.set('categories', result);
        });
    },
})