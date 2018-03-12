<template>
  <div id="home" class="home">

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

<!-- Main section -->
    <div>
      <b-jumbotron id='main' header="Find Music to Dance" lead="Find music on Spotify that has been played 100 times or less." >

        <router-link :to="{name: 'Music'}">
              <b-btn id='button2' >Find Music</b-btn>
            </router-link>
         </b-jumbotron>
  </div>

<div id="information" class="container">
  <div class="row">
    <b-jumbotron id='info'class="col-md-6" header="Why this App?"  >
        <p> This app is a fun way to discover new music through Spotify. With the help of the Spotify web API and Vue.
          This project has come to life. The main goal was to create a fun space to discover new music.
          So come explore and find something you didnt know existed in the mircocosm that is Spotify.</p>
        </b-jumbotron>

        <div>
     <b-img src="src/assets/About_photo.jpeg" fluid alt="Responsive image" />
   </div>




      </div>
    </div>


<div id='footer' class="footer">
  <div class="container-fluid text-center text-md-left">
            <div class="row">
              <div id="add">
                  <h5 id="add-header" class="text-uppercase">Check out more at JNLewis Designs</h5>
                  <p class ="text-center text-md-left">Please visit my portfolio at <a id="website-link" href="http://jnlewisdesigns.com">JnlewisDesigns</a> to learn more about my work.
                   A small sample of my skills and abilities.</p>

                   <div id='social'>
                     <h5 class="text-uppercase">Social</h5>
                       <ul  class="list-unstyled">
                           <li><a id='social-link' href="https://github.com/lewisj13/less_than_100">Github</a></li>
                       </ul>
                   </div>
                </div>
            </div>
        </div>

        <!--Copyright-->
        <div id='copyright' class="footer-copyright py-3 text-center">
            <div class="container-fluid">
                © 2018 Copyright: <a id='copyright-link' href="http://jnlewisdesigns.com">JNLewis Designs</a>

          </div>
      </div>
  </div>
</div>

</template>

<script>


</script>

<style>

#home {
  background-color: #fc4a1a;
}
#navbar {
  background-color: #4ABDAC;
  color: white;
  font-family: trebuchet;
  border: none;
  color: white;
  padding-top: 20px;
  padding-bottom: 20px;
  margin-top: 0;
  margin-bottom: 0;
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

#button2 {
  background-color: #4ABDAC;
  border: none;
}

#main {
  padding-top: 100px;
  padding-bottom: 100px;
  margin-bottom: 50px;
  background-color: white;
  border: solid;
}

#information {
margin-left: 30px;
margin-right: 30px;
margin-top: 30px;
margin-bottom: 30px;
padding- right: 30px;
}
#info {
  text-align: center;
}
#photo {
  text-align: center;
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
  font-style: italic;
  color: white;
  margin: auto;
}
#copyright-link {
  color: #4ABDAC;
}
</style>
