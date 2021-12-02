<template>
  <div id="nav">
    <p class="title">THE PLANETS</p>
    <nav>
      <ul class="nav-links">
        <li>
          <router-link :to="{ name: 'Mercury' }">Mercury</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'Venus' }">Venus</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'Home' }">Earth</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'Mars' }">Mars</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'Jupiter' }">Jupiter</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'Saturn' }">Saturn</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'Uranus' }">Uranus</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'Neptune' }">Neptune</router-link>
        </li>
      </ul>
    </nav>
  </div>
  <router-view />
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&display=swap");
#app {
  font-family: "Lato", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #eee;
  height: 753px;
  background: url("D:/Study Material/view-engines/VUE/planet-fact-site/src/assets/bg.jpg")
    no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}

#nav {
  padding: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px 10%;
  border-bottom: 3px solid rgba(255, 255, 255, 0.2);
}

#nav li {
  list-style: none;
  display: inline-block;
  padding: 0px 20px;
}

#nav a {
  font-weight: 500;
  font-size: 16px;
  text-decoration: none;
  color: #eee;
  opacity: 0.9;
}

#nav a.router-link-exact-active {
  color: rgba(186, 85, 211, 1);
  border-bottom: 1px solid grey;
  opacity: 1;
}

.title {
  font-weight: 700;
  font-size: 23px;
  cursor: pointer;
}
</style>
