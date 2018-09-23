"using strict";

Vue.component( 'portfolio', {

  props: {
    entries: {type: Array, required:true}
  },

  data: function() {
    return {
      visible: false,
      url: ""
    };
  },

  methods: {
    show: function(link) {
      url = link;
      visible = true;
    },

    hide: function() {
      visible = true;
    }
  },

  template:
  `<main>
  <entry
      v-for="item in entries"
      v-bind:title="item.title"
      v-bind:summary="item.summary"
      v-bind:tags="item.tags"
      v-bind:link="item.link"
      v-bind:img="item.img">
    </entry>
    
    <iframe v-show="visible"
      name="display"
      :src="url"
      height="70%" width="70%"
      scrolling="yes" frameborder="5">
    </iframe>

    <slot></slot>
    </main>`
});

// A component which displays the metadata of a portfolio entry
Vue.component( 'entry', {

  props: {
    title: {type: String, required: true},
    summary: {type: String, required: false},
    tags: {type: Array, required: false},
    link: {type: String, required: true},
    img: {type: String, required: false}
  },

  data: function() {
    return {
      expanded: false,
      message: "",
      height: 0
    };
  },

  template:
  `<article>
      <img
        :src="img"
        width="200px"
        height="200px"
        v-on:click="$emit('display')">

      <a :href="link" target="display">
        <h1> {{message}} {{title}} </h1>
      </a>

      <span> {{summary}} </span>
      
      <ul>
        <li v-for='tag in tags'>
          <em> {{tag}} </em>
        </li>
      </ul>
  </article>`

});

// TODO extract this auto resizing iframe; could be useful...
//   created: function() {
//     window.addEventListener('resize', this.resize);
//  },

//  methods: {
//    // toggle whether the content is visible...
//    toggle: function (event) {

//      this.expanded = !this.expanded;
//      if (this.expanded)
//        this.message = "LOADING";
//      else this.message = "";
//    },

//    // resize the iframe to hold all of the loaded content
//    resize: function (event) {
//      console.log("resized: "+this.height);
//      if (!this.expanded) return;
//      let dom = this.$el;
//      let iframe = dom.getElementsByTagName("iframe");
//      this.height = 500;
//      //this.height = iframe[0].contentWindow.document.body.scrollHeight // not legal on a different page...
//      this.message = "";
//    }
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