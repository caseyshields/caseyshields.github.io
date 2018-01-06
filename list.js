"using strict";

Vue.component('entry', {
  props: {
    name: {type: String, required: true},
    summary: {type: String, required: false},
    tags: {type: Array, required: false},
    img: {type: String, required: false},
  },
  data: function() {
    return {content: 'internal data should be initialized based on type ?'}
  },
  template:
  `<iframe name="name+'_frame'" width="100%" height="500px" :src="name + '/index.html'">`
  
  //`<embed width="100%" height="500px" :src="name + '/index.html'">`

  // `<article>
  //   <a href="dragon/index.html"> // target="name+'_frame'">
  //     <img :src='img' width="200px" height="200px"/>
  //   </a>
  //   <span>
  //     <h1>{{name}}</h1>
  //     {{summary}}
  //   </span>
  //   <span>
  //     <ul><li v-for='tag in tags'>{{tag}}</li></ul>
  //   </span>
  // </article>`
  // todo create content based on
});

// A Vue component for displaying a sequence of diagrams
Vue.component('diagram', {
  props: {
    name: {type: String, required: true},
    stages: {type: Array, required: true, validator: function() {
      // todo ensure stages are properly formatted
    } }
  },
  // data: function() {
  //   // todo extrapolate the comments into an object then use it with teh template.
  // },
  template:
  `<article id="name">
    <section v-for="stage in stages">
      <figure>
        <img :src="name + '_' + stage.stage + '.svg'">
        <!--<figcaption>{{stage.stage}}</figcaption>-->
        <figcaption>{{stage.summary}}</figcaption>
      </figure>
      <figure v-for="step in stage.steps">
        <img :src="name + '_' + stage.stage + '_' + step + '.svg'">
        <figcaption>{{stage.stage + '.' + step}}</figcaption>
        <figcaption>caption</figcaption>
      </figure>
    </section>
  </article>`
});
