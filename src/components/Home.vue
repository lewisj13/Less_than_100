<template>
  <div id="home" class="home">

<!-- Navbar -->
    <div>
      <b-navbar  id="navbar" toggleable="md" type="dark">
        <b-navbar-brand v-bind:to="{name: 'Home'}">Less Than 100</b-navbar-brand>

      <b-navbar-nav class="ml-auto">
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
            </router-link>    </b-jumbotron>
  </div>

<div id="information" class="container">
  <div class="row">
    <b-jumbotron id='info'class="col-md-6" header="Why this App?"  >
        <p> This app is a fun way to discover new music through Spotify. With the help of the Spotify web API and Vue.
          This project has come to life. The main goal was to create a fun space to discover new music.
          So come explore and find something you didnt know existed in the mircocosm that is Spotify.</p>
        </b-jumbotron>
      </div>
    </div>


<div id='footer' class="footer">
  <div class="container-fluid text-center text-md-left">
            <div class="row">

                <div id="add" class="col-md-6">
                    <h5 class="text-uppercase">For other projects check out JNLewis Designs.</h5>
                    <p  class ="text-center text-md-left">Please visit my portfolio at <a href="https://www.jnlewisdesigns.com">JnlewisDesigns</a> to learn more about my work.
                     This is just a small sample of my skills and abilities. </p>
                </div>

                <div id='social' class="col-md-6" type='dark'>
                    <h5 class="text-uppercase">Social</h5>
                    <ul class="list-unstyled">
                        <li><a href="https://github.com/lewisj13/less_than_100">Github</a></li>
                        <li><a href="https://www.linkedin.com/in/jamie-lewis-52a19b149">Linkedin</a></li>

                    </ul>
                </div>
            </div>
        </div>

        <!--Copyright-->
        <div id='copyright' class="footer-copyright py-3 text-center">
            <div class="container-fluid">
                © 2018 Copyright: <a href="https//www.jnlewisdesigns.com">JNLewis Designs</a>

          </div>
      </div>
  </div>
</div>

</template>

<script>



</script>

<style>

#navbar {
  background-color: #4ABDAC;
  color: white;
  font-family: trebuchet;
  border: none;
  color: white;
  padding-top: 40px;
  padding-bottom: 40px;
  margin-top: 10px;
  margin-bottom: 0;
}

#button2 {
  background-color: #4ABDAC;
  border: none;
}

#main {
  padding-top: 100px;
  padding-bottom: 100px;
  margin-bottom: 0;
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
  padding-top: 30px;
  padding-bottom: 30px;
  padding-left: 30px;
  padding-rigth: 30px;
  color: white;
}

#add {
  padding-right: 20px;
  padding-left: 20px;
}
</style>
