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
  //`<iframe name="name+'_frame'" width="100%" height="500px" :src="name + '/index.html'"></iframe>`

  //`<embed width="100%" height="500px" :src="name + '/index.html'">`

  `<article>
    <a href="dragon/index.html"> // target="name+'_frame'">
      <img :src='img' width="200px" height="200px"/>
    </a>
    <span>
      <h1>{{name}}</h1>
      {{summary}}
    </span>
    <span>
      <ul><li v-for='tag in tags'>{{tag}}</li></ul>
    </span>
  </article>`
});

// A Vue component for displaying a sequence of diagrams
Vue.component('diagram', {
  props: {
    name: {type: String, required: true},
    stages: {type: Array, required: true}//, validator: function() {} }
  },
  data: function() {
    for( var n=0; n<this.stages.length; n++ ) {
      let stage = this.stages[n];
      stage.descriptions = [];
      if( stage.captions )
        stage.captions.forEach( function (item, index) {
          stage.descriptions[ item[0] ] = item[1];
          //console.log( n+': '+item );
        } );
      //console.log( stage.descriptions );
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
