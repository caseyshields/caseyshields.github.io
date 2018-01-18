"using strict";

// A component which displays the metadata of a portfolio entry
Vue.component( 'entry', {

  props: {
    title: {type: String, required: true},
    name: {type: String, required: true},
    summary: {type: String, required: false},
    tags: {type: Array, required: false},
    img: {type: String, required: false},
    expanded: {type: Boolean, required: false}
  },

  data: function() {
    return {};
  },

  methods: {
    toggle: function (event) {
      this.expanded = !this.expanded;
      console.log("expanded: "+this.expanded);
    }
  },

  template:
  `<section class="summary">
    <img :src="img" width="200px" height="200px" v-on:click="toggle">
    <a :href="name+'/index.html'">
      <h1>{{title}}</h1>
    </a>
    <span>
      {{summary}}
    </span>
    <ul>
      <li v-for='tag in tags'>
        <em>{{tag}}</em>
      </li>
    </ul>
    <embed v-if="expanded" :src="name + '/index.html'" width="100%" height="500px">
  </section>`
  //`<iframe name="name+'_frame'" width="100%" height="500px" :src="name + '/index.html'"></iframe>`
  //`<embed width="100%" height="500px" :src="name + '/index.html'">`

});

// A Vue component for displaying a sequence of diagrams
Vue.component( 'diagram', {

  props: {
    name: {type: String, required: true},
    stages: {type: Array, required: true}
      //, validator: function() {} }
  },

  data: function() {
    // format the caption data so it can be more easily used with the template
    for( var n=0; n<this.stages.length; n++ ) {
      let stage = this.stages[n];
      stage.descriptions = [];
      if( stage.captions )
        stage.captions.forEach( function (item, index) {
          stage.descriptions[ item[0] ] = item[1];
        } );
    }
    return {};
  },

  template:
  `<article id="name">
    <section v-for="stage in stages">
      <figure>
        <img :src="name + '_' + stage.stage + '.svg'">
        <figcaption>{{stage.stage}}</figcaption>
        <figcaption>{{stage.summary}}</figcaption>
      </figure>
      <figure v-for="step in stage.steps">
        <img :src="name + '_' + stage.stage + '_' + step + '.svg'">
        <figcaption>{{stage.stage + '.' + step}}</figcaption>
        <figcaption>{{stage.descriptions[step]}}</figcaption>
      </figure>
    </section>
  </article>`
});
