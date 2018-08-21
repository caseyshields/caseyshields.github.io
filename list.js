"using strict";

// A component which displays the metadata of a portfolio entry
Vue.component( 'entry', {

  props: {
    title: {type: String, required: true},
    name: {type: String, required: true},
    summary: {type: String, required: false},
    tags: {type: Array, required: false},
    img: {type: String, required: false},
    link: {type: String, required: true}
  },

  data: function() {
    return {
      expanded: false,
      message: "",
      height: 0
    };
  },

  created: function() {
    // window.addEventListener('resize', this.resize);
  },

  methods: {
    // toggle whether the content is visible...
    toggle: function (event) {

      this.expanded = !this.expanded;
      if (this.expanded)
        this.message = "LOADING";
      else this.message = "";
    },

    // resize the iframe to hold all of the loaded content
    resize: function (event) {
      console.log("resized: "+this.height);
      if (!this.expanded) return;
      let dom = this.$el;
      let iframe = dom.getElementsByTagName("iframe");
      this.height = 500;
      //this.height = iframe[0].contentWindow.document.body.scrollHeight // not legal on a different page...
      this.message = "";
    }
  },

  template:
  `<article>
    <header :id="name">
      <img :src="img" width="200px" height="200px" >
      <a :href="link" target="popup">
        <h1> {{message}} {{title}} </h1>
      </a>
      <span> {{summary}} </span>
      <ul>
        <li v-for='tag in tags'>
          <em> {{tag}} </em>
        </li>
      </ul>
    </header>
  </article>`
  //<img :src="img" width="200px" height="200px" v-on:click="toggle">
    // <iframe v-if="expanded"
    //   :src= "link"
    //   v-on:load="resize"
    //   :height="height+'px'"
    //   scrolling="yes" width="100%" frameborder="0">
    // </iframe>

  //sandbox="allow-scripts"
  //<!--<object v-if="expanded" :data="name + '/index.html'" type="text/html" width="100%" height="100%" />--> // type="svg+xml"
  //<!--<embed v-if="expanded" :src="name + '/index.html'" width="100%" height="auto" />-->
});
      // <img
      //   :src="img"
      //   width="200px"
      //   height="200px"
      //   v-on:click="$emit('link', )">
// Vue.component( 'lister', {
  
//   data: function () {
//     return {
//       visible: false,
//       url: ""
//     };
//   },

//   methods: {
//     show = function(link) {
//       url = link;
//       visible = true;
//     },

//     hide = function() {
//       visible = true;
//     }
//   },

//   template:
//     `<slot></slot>
//     <iframe
//       vshow="visible"
//       name="lister",
//       :src="link" >
//     </iframe>`
// });

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

    //TODO make the whole app a component...
// `<main>
//     <nav>putlinkshere</nav>
//     <article
//       v-for="item in articles"
//       :title"item.title"
//       :summary="item.summary"
//       :tags="item.tags"
//       :link="item.link">
//     </article>
//     <iframe
//       :name="id",
//       :src="link" >
//     </iframe>
// </main>`