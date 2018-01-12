"using strict";

Vue.component( 'home', {

  props: {
    name: {type: String, required: true},
  },

  template:
  `<header>
    <h1><a href="" target="main">
      {{this.name}}
    </a></h1>
    <a href="mailto:caseyorigami@gmail.com"> email </a>
    <!--<input v-model="query" placeholder="search">-->
  </header>`
} );

// A component which displays the metadata of a portfolio entry
Vue.component( 'entry', {

  props: {
    name: {type: String, required: true},
    summary: {type: String, required: false},
    tags: {type: Array, required: false},
    img: {type: String, required: false},
  },

  data: function() {
    return {}
  },

  template:
  `<section class="summary">
    <img :src='img' width="200px" height="200px"/>
    <a class="title" href="dragon/index.html">
      <h1>{{name}}</h1>
    </a>
    <span>
      {{summary}}
    </span>
    <ul>
      <li v-for='tag in tags'>
        <em>{{tag}}</em>
      </li>
    </ul>
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
