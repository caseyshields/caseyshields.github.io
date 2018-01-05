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
      summary: "Fold a birdbase with a grafted diagonal strip",
      captions: {1:"first caption"}
    });
    this.stages.push({
      stage:3,
      steps: 10,
      summary: "Pre-crease 'Y' bases in graft."
    });
    this.stages.push({
      stage: 4,
      steps: 11,
      summary: "Fold the 'Y' bases in the graft"
    });
    this.stages.push({
      stage: 5,
      steps: 8,
      summary: "Stretch the center of the base to form body"
    });
    this.stages.push({
      stage: 6,
      steps: 8,
      summary: "Fold rear legs and tail"
    });
    this.stages.push({
      stage: 7,
      steps: 10,
      summary: "Fold fore legs and neck"
    });
    this.stages.push({
      stage: 8,
      steps: 7,
      summary: "Fold the wing arms and shoulders"
    });
    this.stages.push({
      stage: 9,
      steps: 3,
      summary: "Shape tail"
    });// todo, move this to stage 6?
    this.stages.push({
      stage: 10,
      steps: 6,
      summary: "Fold head and horns"
    });
    this.stages.push({
      stage: 11,
      steps: 5,
      summary: "Shape hips and shoulders"
    });

    this.articles.push( {
      name: 'Western Dragon',
      type: 'origami',
      tags: ['intermediate', 'dragon', 'half-angle'],
      content: 'do as they do, not as they say'
    });
  }
});
