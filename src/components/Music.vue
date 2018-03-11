<template>
  <div class="music">

    <!-- Navbar -->
        <div>
          <b-navbar  id="navbar" toggleable="md" type="dark">
          <b-navbar-brand id="nav-heading" v-bind:to="{name: 'Home'}">Less Than 100</b-navbar-brand>

          <b-navbar-nav id="nav-links" class="ml-auto">
              <b-nav-item v-bind:to="{name: 'Home'}">Home</b-nav-item>
              <b-nav-item v-bind:to="{name: 'Music'}">Music</b-nav-item>
            </b-navbar-nav>
        </b-navbar>
      </div>



    <div id="login" v-show="mustLogin && !loggedIn" >
      <div v-show="!loggedIn">
           <b-jumbotron id='login-jumbo'>
             <h1 id='login-header'>Find Music to Dance</h1>
                <p>Login to Spotify to find the music!</p>
                <p><b-btn id='login-button' @click="login">Log In</b-btn></p>
              <router-link :to="{name: 'Music'}">
          </router-link>
         </b-jumbotron>
      </div>
      <div id="user-profile-template"></div>
      <div id="user-profile"></div>
      <div id="oauth-template"></div>
      <div id="oauth"></div>
    </div>
    <div id="loggedIn" v-show="loggedIn">
      <b-jumbotron id="loggedIn-jumbo">
      <h3 id='loggedIn-h3'>Welcome {{me && me.display_name}}!</h3>
      <p>Search for music </p>
      <p v-show="query && query.length > 0">This search is based on <strong>{{query}}</strong></p>
      <b-form v-on:submit.prevent="getPlaylist">
        <p>I want to hear...  <input type="text" v-model="query" placeholder="something">
        <b-btn>Go</b-btn></p>
      </b-form>
      <table class="music">
        <tr v-for="(result,index) in results" :key="index">
          <td>{{result.name}}</td><td><button id="music-fetch-button" @click="fetchMusic">Fetch</button></td>
        </tr>
      </table>
         </b-jumbotron>
    </div>

  <div id='footer' class="footer">
    <div class="container-fluid text-center text-md-left">
                <div class="row">
                  <div id="add">
                      <h5 id="add-header" class="text-uppercase">Check out more at JNLewis Designs</h5>
                      <p class ="text-center text-md-left">Please visit my portfolio at <a id="website-link" href="https://www.jnlewisdesigns.com">JnlewisDesigns</a> to learn more about my work.
                       A small sample of my skills and abilities.</p>

                       <div id='social'>
                         <h5 class="text-uppercase">Social</h5>
                           <ul  class="list-unstyled">
                               <li><a id='social-link' href="https://github.com/lewisj13/less_than_100">Github</a></li>
                               <li><a id='social-link' href="https://www.linkedin.com/in/jamie-lewis-52a19b149">Linkedin</a></li>
                           </ul>
                       </div>
                    </div>
                </div>
            </div>

            <!--Copyright-->
            <div id='copyright' class="footer-copyright py-3 text-center">
                <div class="container-fluid">
                    © 2018 Copyright: <a id='copyright-link' href="https//www.jnlewisdesigns.com">JNLewis Designs</a>

              </div>
          </div>
      </div>


  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Music",
  data() {
    let loggedIn =
      this.$route.hash != null && this.$route.hash.length > 0 ? true : false;
    let access_token = this.$route.hash.substring(1);
    return {
      results: null,
      me: null,
      errors: [],
      query: "",
      mustLogin: true,
      loggedIn: loggedIn,
      access_token: access_token
    };
  },
  mounted: function() {
    console.log("access_token", this.access_token);
    if (this.access_token.length > 0) {
      let config = {
        headers: {
          Authorization: "Bearer ".concat(this.access_token)
        }
      };
      let URL = `https://api.spotify.com/v1/me`;
      let self = this;
      axios
        .get(URL, config)
        .then(response => {
          self.me = response.data;
        })
        .catch(error => {
          this.errors.push(error);
        });
    }
  },

  methods: {

    getHashParams: function() {
      var hashParams = {};
      var e,
        r = /([^&;=]+)=?([^&;]*)/g,
        q = window.location.hash.substring(1);
      while ((e = r.exec(q))) {
        hashParams[e[1]] = decodeURIComponent(e[2]);
      }
      return hashParams;
    },


    generateRandomString: function(length) {
      var text = "";
      var possible =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      for (var i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
      }
      return text;
    },
    authorize: function(stateKey) {
      var client_id = "c4eea423ec7b4dd49fc162ff369be3a4";
      var redirect_uri = "";
      if (location.host == "localhost:8080") {
        client_id = "c4eea423ec7b4dd49fc162ff369be3a4";
        redirect_uri = "http://localhost:8080/authorize";
      } else {
        client_id = "c4eea423ec7b4dd49fc162ff369be3a4";
        redirect_uri = "https://less-than-100.firebaseapp.com/authorize";
      }
      var state = this.generateRandomString(16);
      localStorage.setItem(stateKey, state);
      var scope = "user-read-private user-read-email";
      var url = "https://accounts.spotify.com/authorize";
      url += "?response_type=token";
      url += "&client_id=" + encodeURIComponent(client_id);
      url += "&scope=" + encodeURIComponent(scope);
      url += "&redirect_uri=" + encodeURIComponent(redirect_uri);
      url += "&state=" + encodeURIComponent(state);
      window.location = url;
    },
    login: function() {
      let stateKey = "spotify_auth_state";
      let params = this.getHashParams();
      let storedState = localStorage.getItem(stateKey);
      if (
        this.access_token.length > 0 &&
        (params.state == null || params.state !== storedState)
      ) {
        alert("There was an error during the authentication");
      } else {
        localStorage.removeItem(stateKey);
        if (this.access_token.length > 0) {
          axios.get({
            url: "https://api.spotify.com/v1/me",
            headers: {
              Authorization: "Bearer " + access_token
            },
            success: function(response) {
              userProfilePlaceholder.innerHTML = userProfileTemplate(response);
              (this.mustLogin = false), (this.loggedIn = true);
            }
          });
        } else {
          (this.mustLogin = true), (this.loggedIn = false);
        }
      }
      this.authorize(stateKey);
    },
    fetchMusic: function() {
      return {};
    },
    getPlaylist: function() {
      let config = {
        headers: {
          Authorization: "Bearer ".concat(this.access_token)
        }
      };
      let URL = `https://api.spotify.com/v1/search?type=album:hipster&q=${
        this.query
      }`;
      let self = this;
      axios
        .get(URL, config)
        .then(response => {
          self.results = response.data.playlists.items;
        })
        .catch(error => {
          this.errors.push(error);
        });
    }
  }
};
</script>

<style>

#navbar {
  background-color: #4ABDAC;
  font-family: trebuchet;
  border: none;
  color: white;
  padding-top: 10px;
  padding-bottom: 10px;
  margin-top: 0px;
  margin-bottom: 40px;
}
#nav-heading {
  font-weight: bold;
  font-size: 40px;
}
#nav-links {
  font-weight: bold;
  font-style: italic;
  font-size: 30px;
  padding-right: 50px;
}
#login {
  padding-top: 100px;
  padding-bottom: 100px;
  margin-bottom: 50px;
  background-color: white;
  border: solid;
}
#login-button {
  background-color: #4ABDAC;
  border: none;
}
#loggedIn {

}
#footer {
  background-color: gray;
  padding-top: 20px;
  padding-bottom: 20px;
  margin: 0;
}
#add {
  padding-right: 20px;
  padding-botto: 10px;
  margin: auto;
  text-align: center;
  color: white;
}
#website-link {
  color: #4ABDAC;
}
#social {
  margin: auto;
}
#social-link {
  color: #4ABDAC
}
#copyright {
  color: white;
  margin: auto;
  font-style: italic;
}
#copyright-link {
  color: #4ABDAC;
}
</style>
