webpackJsonp([1],{"1/oy":function(t,e){},"2fmL":function(t,e){},"43Cz":function(t,e){},Fs8J:function(t,e){},G4NU:function(t,e){},Id91:function(t,e){},Jmt5:function(t,e){},M93x:function(t,e,s){"use strict";var a={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var i=s("VU/8")({name:"App"},a,!1,function(t){s("2fmL")},null,null);e.a=i.exports},NHnr:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),function(t){var e=s("7+uW"),a=s("M93x"),i=s("YaEn"),n=s("9CA4"),o=s.n(n),r=s("5Vcx"),c=s.n(r),l=s("7t+N"),u=s.n(l),d=s("AYPi"),h=s.n(d),v=s("Jmt5");s.n(v);t.jQuery=u.a,new e.a({el:"#app",router:i.a,template:"<App/>",components:{App:a.a}});s("K3J8");e.a.use(c.a,new o.a),e.a.config.productionTip=!1,e.a.use(h.a,{id:"UA-114926652-1"})}.call(e,s("DuR2"))},YaEn:function(t,e,s){"use strict";var a=s("7+uW"),i=s("e6fC"),n=s("/ocq"),o=s("lO7g"),r=s("mtWM"),c=s.n(r),l={name:"Music",data:function(){return{results:null,me:null,errors:[],query:"",mustLogin:!0,loggedIn:null!=this.$route.hash&&this.$route.hash.length>0,access_token:this.$route.hash.substring(1)}},mounted:function(){var t=this;if(console.log("access_token",this.access_token),this.access_token.length>0){var e={headers:{Authorization:"Bearer ".concat(this.access_token)}},s=this;c.a.get("https://api.spotify.com/v1/me",e).then(function(t){s.me=t.data}).catch(function(e){t.errors.push(e)})}},methods:{getHashParams:function(){for(var t,e={},s=/([^&;=]+)=?([^&;]*)/g,a=window.location.hash.substring(1);t=s.exec(a);)e[t[1]]=decodeURIComponent(t[2]);return e},generateRandomString:function(t){for(var e="",s="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",a=0;a<t;a++)e+=s.charAt(Math.floor(Math.random()*s.length));return e},authorize:function(t){var e="c4eea423ec7b4dd49fc162ff369be3a4",s="";"localhost:8080"==location.host?(e="c4eea423ec7b4dd49fc162ff369be3a4",s="http://localhost:8080/authorize"):(e="c4eea423ec7b4dd49fc162ff369be3a4",s="https://less-than-100.firebaseapp.com/authorize");var a=this.generateRandomString(16);localStorage.setItem(t,a);var i="https://accounts.spotify.com/authorize";i+="?response_type=token",i+="&client_id="+encodeURIComponent(e),i+="&scope="+encodeURIComponent("user-read-private user-read-email"),i+="&redirect_uri="+encodeURIComponent(s),i+="&state="+encodeURIComponent(a),window.location=i},login:function(){var t="spotify_auth_state",e=this.getHashParams(),s=localStorage.getItem(t);this.access_token.length>0&&(null==e.state||e.state!==s)?alert("There was an error during the authentication"):(localStorage.removeItem(t),this.access_token.length>0?c.a.get({url:"https://api.spotify.com/v1/me",headers:{Authorization:"Bearer "+access_token},success:function(t){userProfilePlaceholder.innerHTML=userProfileTemplate(t),this.mustLogin=!1,this.loggedIn=!0}}):(this.mustLogin=!0,this.loggedIn=!1)),this.authorize(t)},fetchMusic:function(){return{}},getPlaylist:function(){var t=this,e={headers:{Authorization:"Bearer ".concat(this.access_token)}},s="https://api.spotify.com/v1/search?type=playlist&q="+this.query,a=this;c.a.get(s,e).then(function(t){a.results=t.data.playlists.items}).catch(function(e){t.errors.push(e)})}}},u={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"music"},[s("div",[s("b-navbar",{attrs:{id:"navbar",toggleable:"md",type:"dark"}},[s("b-navbar-brand",{attrs:{id:"nav-heading",to:{name:"Home"}}},[t._v("Less Than 100")]),t._v(" "),s("b-navbar-nav",{staticClass:"ml-auto",attrs:{id:"nav-links"}},[s("b-nav-item",{attrs:{to:{name:"Home"}}},[t._v("Home")]),t._v(" "),s("b-nav-item",{attrs:{to:{name:"Music"}}},[t._v("Music")])],1)],1)],1),t._v(" "),s("div",[s("b-img",{attrs:{src:"src/assets/headphones.jpeg",fluid:"",alt:"Responsive image"}})],1),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:t.mustLogin&&!t.loggedIn,expression:"mustLogin && !loggedIn"}],attrs:{id:"login"}},[s("div",{directives:[{name:"show",rawName:"v-show",value:!t.loggedIn,expression:"!loggedIn"}]},[s("b-jumbotron",{attrs:{id:"login-jumbo"}},[s("h1",{attrs:{id:"login-header"}},[t._v("Find Music to Dance")]),t._v(" "),s("p",[t._v("Login to Spotify to find the music!")]),t._v(" "),s("p",[s("b-btn",{attrs:{id:"login-button"},on:{click:t.login}},[t._v("Log In")])],1),t._v(" "),s("router-link",{attrs:{to:{name:"Music"}}})],1)],1),t._v(" "),s("div",{attrs:{id:"user-profile-template"}}),t._v(" "),s("div",{attrs:{id:"user-profile"}}),t._v(" "),s("div",{attrs:{id:"oauth-template"}}),t._v(" "),s("div",{attrs:{id:"oauth"}})]),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:t.loggedIn,expression:"loggedIn"}],attrs:{id:"loggedIn"}},[s("b-jumbotron",{attrs:{id:"loggedIn-jumbo"}},[s("h3",{attrs:{id:"loggedIn-h3"}},[t._v("Welcome "+t._s(t.me&&t.me.display_name)+"!")]),t._v(" "),s("p",[t._v("Search for music ")]),t._v(" "),s("p",{directives:[{name:"show",rawName:"v-show",value:t.query&&t.query.length>0,expression:"query && query.length > 0"}]},[t._v("This search is based on "),s("strong",[t._v(t._s(t.query))])]),t._v(" "),s("b-form",{on:{submit:function(e){e.preventDefault(),t.getPlaylist(e)}}},[s("p",[t._v("I want to hear...  "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.query,expression:"query"}],attrs:{type:"text",placeholder:"something"},domProps:{value:t.query},on:{input:function(e){e.target.composing||(t.query=e.target.value)}}}),t._v(" "),s("b-btn",[t._v("Go")])],1)]),t._v(" "),s("table",{staticClass:"music"},t._l(t.results,function(e,a){return s("tr",{key:a},[s("td",[t._v(t._s(e.name))]),s("td",[s("button",{attrs:{id:"music-fetch-button"},on:{click:t.fetchMusic}},[t._v("Fetch")])])])}))],1)],1),t._v(" "),t._m(0)])},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"footer",attrs:{id:"footer"}},[s("div",{staticClass:"container-fluid text-center text-md-left"},[s("div",{staticClass:"row"},[s("div",{attrs:{id:"add"}},[s("h5",{staticClass:"text-uppercase",attrs:{id:"add-header"}},[t._v("Check out more at JNLewis Designs")]),t._v(" "),s("p",{staticClass:"text-center text-md-left"},[t._v("Please visit my portfolio at "),s("a",{attrs:{id:"website-link",href:"https://www.jnlewisdesigns.com"}},[t._v("JnlewisDesigns")]),t._v(" to learn more about my work.\n                       A small sample of my skills and abilities.")]),t._v(" "),s("div",{attrs:{id:"social"}},[s("h5",{staticClass:"text-uppercase"},[t._v("Social")]),t._v(" "),s("ul",{staticClass:"list-unstyled"},[s("li",[s("a",{attrs:{id:"social-link",href:"https://github.com/lewisj13/less_than_100"}},[t._v("Github")])])])])])])]),t._v(" "),s("div",{staticClass:"footer-copyright py-3 text-center",attrs:{id:"copyright"}},[s("div",{staticClass:"container-fluid"},[t._v("\n                    © 2018 Copyright: "),s("a",{attrs:{id:"copyright-link",href:"https//www.jnlewisdesigns.com"}},[t._v("JNLewis Designs")])])])])}]};var d=s("VU/8")(l,u,!1,function(t){s("43Cz")},null,null).exports,h={name:"authorize",created:function(){console.log("Authorize created")},data:function(){var t=location.hash.split("&").map(function(t){return t.split("=")}).reduce(function(t,e){return t[e[0]]=e[1],t},{})["#access_token"];return this.$router.push({path:"/music#"+t}),{display_name:"authorize"}},methods:{}},v={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("p",[this._v("Congrats, you have been authorized.")]),this._v(" "),e("p",[this._v("Logged in as "+this._s(this.display_name))]),this._v(" "),e("router-link",{attrs:{to:{name:"Music"}}},[this._v("Return to Music")])],1)},staticRenderFns:[]},m=s("VU/8")(h,v,!1,null,null,null).exports;a.a.use(n.a),a.a.use(i.a);e.a=new n.a({mode:"history",routes:[{path:"/",name:"Home",component:o.default},{path:"/Music",name:"Music",component:d},{path:"/authorize",name:"authorize",component:m}]})},lO7g:function(t,e,s){"use strict";var a=s("Fs8J"),i=s.n(a),n=s("o+24");var o=function(t){s("G4NU")},r=s("VU/8")(i.a,n.a,!1,o,null,null);e.default=r.exports},"o+24":function(t,e,s){"use strict";var a={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"home",attrs:{id:"home"}},[s("div",[s("b-navbar",{attrs:{id:"navbar",toggleable:"md",type:"dark"}},[s("b-navbar-brand",{attrs:{id:"nav-heading",to:{name:"Home"}}},[t._v("Less Than 100")]),t._v(" "),s("b-navbar-nav",{staticClass:"ml-auto",attrs:{id:"nav-links"}},[s("b-nav-item",{attrs:{to:{name:"Home"}}},[t._v("Home")]),t._v(" "),s("b-nav-item",{attrs:{to:{name:"Music"}}},[t._v("Music")])],1)],1)],1),t._v(" "),s("div",[s("b-jumbotron",{attrs:{id:"main",header:"Find Music to Dance",lead:"Find music on Spotify that has been played 100 times or less."}},[s("router-link",{attrs:{to:{name:"Music"}}},[s("b-btn",{attrs:{id:"button2"}},[t._v("Find Music")])],1)],1)],1),t._v(" "),s("div",{staticClass:"container",attrs:{id:"information"}},[s("div",{staticClass:"row"},[s("b-jumbotron",{staticClass:"col-md-6",attrs:{id:"info",header:"Why this App?"}},[s("p",[t._v(" This app is a fun way to discover new music through Spotify. With the help of the Spotify web API and Vue.\n          This project has come to life. The main goal was to create a fun space to discover new music.\n          So come explore and find something you didnt know existed in the mircocosm that is Spotify.")])]),t._v(" "),s("div",[s("b-img",{attrs:{src:"src/assets/About_photo.jpeg",fluid:"",alt:"Responsive image"}})],1)],1)]),t._v(" "),t._m(0)])},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"footer",attrs:{id:"footer"}},[s("div",{staticClass:"container-fluid text-center text-md-left"},[s("div",{staticClass:"row"},[s("div",{attrs:{id:"add"}},[s("h5",{staticClass:"text-uppercase",attrs:{id:"add-header"}},[t._v("Check out more at JNLewis Designs")]),t._v(" "),s("p",{staticClass:"text-center text-md-left"},[t._v("Please visit my portfolio at "),s("a",{attrs:{id:"website-link",href:"http://jnlewisdesigns.com"}},[t._v("JnlewisDesigns")]),t._v(" to learn more about my work.\n                   A small sample of my skills and abilities.")]),t._v(" "),s("div",{attrs:{id:"social"}},[s("h5",{staticClass:"text-uppercase"},[t._v("Social")]),t._v(" "),s("ul",{staticClass:"list-unstyled"},[s("li",[s("a",{attrs:{id:"social-link",href:"https://github.com/lewisj13/less_than_100"}},[t._v("Github")])])])])])])]),t._v(" "),s("div",{staticClass:"footer-copyright py-3 text-center",attrs:{id:"copyright"}},[s("div",{staticClass:"container-fluid"},[t._v("\n                © 2018 Copyright: "),s("a",{attrs:{id:"copyright-link",href:"http://jnlewisdesigns.com"}},[t._v("JNLewis Designs")])])])])}]};e.a=a},zj2Q:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.42398cb74d399863966d.js.map