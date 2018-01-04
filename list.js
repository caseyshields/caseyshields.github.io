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

Vue.component('diagram', {
  props: {
    name: {type: String, required: true},
    stages: {type: Array, required: true}
  },
  // data: function() {
  //   // todo extrapolate the comments into an object then use it with teh template.
  // },
  template:
  `<article>
    <section v-for="stage in stages">
      <div>{{stage.summary}}</div>
      <figure v-for="step in stage.steps">
        <img :src="name + '/' + name + '_' + stage.stage + '_' + step + '.svg'">
        <figcaption>TODO insert the captions here</figcaption>
      </figure>
    </section>
  </article>`
});

let instance = new Vue({
  el: "#list",
  data: {
    title: "Vue Component Examples",
    query: '',
    articles: [],
    stages: []
  },
  created: function() {
    //stages = {1:5, 2:5, 3:10, 4:11, 5:8, 6:8, 7:10, 8:7, 9:3, 10:6, 11:4};
    // stages = [5, 5, 10, 11, 8, 8, 10, 7, 3, 6, 4];
    this.stages.push( {
      stage: 1, 
      steps: 5,
      summary: "Construct the landmark sequences",
      captions: {1:"first caption"}
    });
    this.stages.push( {
      stage: 2, 
      steps: 5,
      summary: "fold a birdbase with a grafted diagonal strip",
      captions: {1:"first caption"}
    });

    this.articles.push( {
      name: 'Western Dragon',
      type: 'origami',
      tags: ['intermediate', 'dragon', 'half-angle'],
      content: 'do as they do, not as they say'
    });
  }
});
