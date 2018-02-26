<template>
  <div class="music">
    <div>
    <b-nav id='nav' pills>
      <b-nav-item v-bind:to="{name: 'Home'}">Home</b-nav-item>
      <b-nav-item v-bind:to="{name: 'Music'}">Music</b-nav-item>
      <b-nav-item v-bind:to="{name: 'About'}">About</b-nav-item>
        </b-nav>
          </div>


      <h2 id="subtitle">MUSIC SECTION WITH SPOTIFY API</h2>

    <div id="login" v-show="mustLogin && !loggedIn" >
      <div v-show="!loggedIn">
        <p>Login to Spotify to find music that has been played less than 100 times!</p>
        <p><button id="login-button" @click="login">Log In</button></p>
      </div>
      <div id="user-profile-template"></div>
      <div id="user-profile"></div>
      <div id="oauth-template"></div>
      <div id="oauth"></div>
    </div>
    <div id="loggedIn" v-show="loggedIn">
      <h3>Welcome {{me && me.display_name}}</h3>
      <p>Music for your Mood</p>
      <p v-show="query && query.length > 0">This is a playlist based on <strong>{{query}}</strong></p>
      <form v-on:submit.prevent="getPlaylist">
        <p>I'm feeling like...<input type="text" v-model="query" placeholder="something">
        <button>Go</button></p>
      </form>
      <table class="music">
        <tr v-for="(result,index) in results" :key="index">
          <td>{{result.name}}</td><td><button id="music-fetch-button" @click="fetchMusic">Fetch</button></td>
        </tr>
      </table>


      <!-- <ul class="music" v-if="results && results.length > 0">
       <li v-for="(result,index) in results" :key="index">
            <span class="music-name">{{result.name}}</span>
            <input class="music-button" type="button" v-bind:value="result.name">
       </li>
      </ul> -->
    </div>
  </div>
</template>

<script>
import axios from "axios";
/**
 * Obtains para meters from the hash of the URL
 * @return Object
 */
function getHashParams() {
  var hashParams = {};
  var e,
    r = /([^&;=]+)=?([^&;]*)/g,
    q = window.location.hash.substring(1);
  while ((e = r.exec(q))) {
    hashParams[e[1]] = decodeURIComponent(e[2]);
  }
  return hashParams;
}
/**
 * Generates a random string containing numbers and letters
 * @param  {number} length The length of the string
 * @return {string} The generated string
 */
function generateRandomString(length) {
  var text = "";
  var possible =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (var i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
}
function authorize(stateKey) {
  var client_id = "";
  var redirect_uri = "";
  if (location.host == "localhost:8080") {
    client_id = "c4eea423ec7b4dd49fc162ff369be3a4";
    redirect_uri = "http://localhost:8080/authorize";
  } else {
    client_id = "c4eea423ec7b4dd49fc162ff369be3a4";
    redirect_uri = "https://less-than-100.firebaseapp.com/authorize/";
  }
  var state = generateRandomString(16);
  localStorage.setItem(stateKey, state);
  var scope = "user-read-private user-read-email";
  var url = "https://accounts.spotify.com/authorize";
  url += "?response_type=token";
  url += "&client_id=" + encodeURIComponent(client_id);
  url += "&scope=" + encodeURIComponent(scope);
  url += "&redirect_uri=" + encodeURIComponent(redirect_uri);
  // url += "&redirect_uri=" + redirect_uri;
  url += "&state=" + encodeURIComponent(state);
  window.location = url;
}
export default {
  name: "Music",
  data() {
    debugger;
    let loggedIn = this.$route.hash ? true : false;
    return {
      results: null,
      me: null,
      errors: [],
      query: "",
      mustLogin: true,
      loggedIn: loggedIn,
      access_token: this.$route.hash.substring(1)
    };
  },
  mounted: function() {
    console.log("access_token", this.access_token);
    if (this.access_token) {
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
    login: function() {
      let stateKey = "spotify_auth_state";
      let params = getHashParams();
      let storedState = localStorage.getItem(stateKey);
      if (
        this.access_token &&
        (params.state == null || params.state !== storedState)
      ) {
        alert("There was an error during the authentication");
      } else {
        localStorage.removeItem(stateKey);
        if (this.access_token) {
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
      authorize(stateKey);
    },
    fetchMusic: function(){
      return {};
    },
    getPlaylist: function() {
      let config = {
        headers: {
          Authorization: "Bearer ".concat(this.access_token)
        }
      };
      let URL = `https://api.spotify.com/v1/search?type=playlist&q=${this.query}`;
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

#nav {
  background-color: #4ABDAC;
  font-family: trebuchet;
  border: none;
  color: white;
  padding-top: 10px;
  padding-bottom: 10px;
  margin-top: 40px;
  margin-bottom: 40px;
}


</style>
