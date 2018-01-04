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
  <ul><li v-for='count in 10'>{{count}}</li></ul>
  </article>`
  // todo create content based on
});

Vue.component('diagrams', {
  props: {
    name: {type: String, required: true},
    stages: {type: Array, required: true}
  },
  data: {
    // todo extrapolate the comments into an object then use it with teh template.
  },
  template:
  `<section v-for="stage in stages">
    <figure v-for="step in stage.steps">
      <img v-bind:src="name+'/'+name+'_'stage+'_'+step"/>
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
    //stages = {1:5, 2:5, 3:10, 4:11, 5:8, 6:8, 7:10, 8:7, 9:3, 10:6, 11:4};
    stages = [ {
        stage: 1, 
        steps: 5,
        captions:{1:"first caption"}
      },{
        stage: 2, 
        steps: 5,
        captions:{1:"first caption"}
      }
    ];
    stages = [5, 5, 10, 11, 8, 8, 10, 7, 3, 6, 4];
    let test = {
      name: 'Western Dragon',
      type: 'origami',
      tags: ['intermediate', 'dragon', 'half-angle'],
      content: 'do as they do, not as they say'
    }
    this.articles.push( test );
  }
});
