"using strict";

Vue.component('entry', {
  props: {
    name: {type: String, required: true},
    type: {type: String, required: true, validator: function(value) {
        return ( value=='text' || value=='origami' );
    }},
    tags: {type: Array, required: false},
    img: {type: String, required: false},
    diagrams: {type: Array, required: false, validator: function(value) {
        // todo ensure there is an aray of integers representing the number of steps in each stage
    }}
  },
  data: function() {
    return {content: 'internal data should be initialized based on type ?'}
  },
  template: `<article>
  <h2>{{name}}</h2>
  <ul><li v-for='tag in tags'>{{tag}}</li></ul>
  <div v-text="content"></div>
  </article>`
  // todo create content based on
});

Vue.component('diagrams', {
  props: {
    name: {type: String, required: true},
    stages: {type: Array, required: true}
  },
  template: `<section>
  <figure v-for="count in stages">
  <img v-bind:src="'name_'+count"/>
  </figure>
  </section>`
});

let instance = new Vue({
  el: "#list",
  data: {
    title: "Vue Component Examples",
    query: '',
    articles: []
  },
  created: function() {
    let test = {
      name: 'Western Dragon',
      type: 'origami',
      tags: ['intermediate', 'dragon', 'half-angle'],
      content: 'do as they do, not as they say'
    }
    this.articles.push( test );
  }
});
