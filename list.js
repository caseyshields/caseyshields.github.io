"using strict";

// A component which displays the metadata of a portfolio entry
Vue.component( 'entry', {

  props: {
    title: {type: String, required: true},
    name: {type: String, required: true},
    summary: {type: String, required: false},
    tags: {type: Array, required: false},
    img: {type: String, required: false},
  },

  data: function() {
    return {
      expanded: false,
      message: "",
      height: 0
    };
  },

  methods: {
    // toggle whether the content is visible...
    toggle: function (event) {

      this.expanded = !this.expanded;
      if (this.expanded)
        this.message = "LOADING";
      else this.message = "";

      // can't really alter the reactive template's DOM!;
      // let dom = this.$el;
      // let p = dom.getElementsByTagName("p");
      // p.innerHTHL = "LOADING..."

      //let h = document.createElement("h1");
      //dom.append(h);
    },
    // when the iframe loads, resize the iframe to hold all of the content
    loaded: function (event) {
      let dom = this.$el;
      let iframe = dom.getElementsByTagName("iframe");
      this.height = iframe[0].contentWindow.document.body.scrollHeight
      this.message = "";
      // not sure if we can mess with template tag attributes
      //iframe[0].setAttribute("height", height+"px");

      //Vue.nextTick( function() {this.message="";})
      //this.message = ""; // this doe not work reactively when called from a load event handler...
    }
  },

  template:
  `<section class="summary">
    <img :src="img" width="200px" height="200px" v-on:click="toggle">
    <a :href="name+'/index.html'">
      <h1>{{message}} {{title}}</h1>
    </a>
    <span>
      {{summary}}
    </span>
    <ul>
      <li v-for='tag in tags'>
        <em>{{tag}}</em>
      </li>
    </ul>
    <iframe v-if="expanded"
      :src="name + '/index.html'"
      v-on:load="loaded"
      :height="height+'px'"
      width="100%" frameborder="0">
    </iframe>
  </section>`
  //sandbox="allow-scripts"
  //<!--<object v-if="expanded" :data="name + '/index.html'" type="text/html" width="100%" height="100%" />--> // type="svg+xml"
  //<!--<embed v-if="expanded" :src="name + '/index.html'" width="100%" height="auto" />-->
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
