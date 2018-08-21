"using strict";

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
    `<div id="name">
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
    </div>`
});