<template>
  <div class="planet-info">
    <div class="planet-image">
      <img :src="getImage(planetImg)" />
    </div>
    <div class="planet-desc">
      <h2 class="name">{{ name }}</h2>
      <p class="text overview" v-if="showOverview">
        {{ overview }}
      </p>
      <p class="text structure" v-if="showStructure">
        {{ structure }}
      </p>
      <p class="text geology" v-if="showGeology">
        {{ geology }}
      </p>
      <br />
      <span class="links">
        <p>Source</p>
        <a :href="source">Wikipedia</a>
      </span>
      <div
        class="button-1"
        :class="{ active: showOverview }"
        @click="toggleOverview"
      >
        <p>01</p>
        <p class="info-text">OVERVIEW</p>
      </div>
      <div
        class="button-1"
        :class="{ active: showStructure }"
        @click="toggleStructure"
      >
        <p>02</p>
        <p class="info-text">INTERNAL STRUCTURE</p>
      </div>
      <div
        class="button-1"
        :class="{ active: showGeology }"
        @click="toggleGeology"
      >
        <p>03</p>
        <p class="info-text">SURFACE GEOLOGY</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["name", "planetImg", "source", "overview", "structure", "geology"],
  data() {
    return {
      showOverview: true,
      showStructure: false,
      showGeology: false,
    };
  },
  methods: {
    getImage(img) {
      let image = require(`../assets/images/${img}.svg`);
      return image;
    },
    toggleOverview() {
      this.showOverview = true;
      this.showStructure = false;
      this.showGeology = false;
    },
    toggleStructure() {
      this.showOverview = false;
      this.showStructure = true;
      this.showGeology = false;
    },
    toggleGeology() {
      this.showOverview = false;
      this.showStructure = false;
      this.showGeology = true;
    },
  },
  mounted() {
    let buttons = document.querySelectorAll(".button-1");
  },
};
</script>

<style>
.planet-info {
  display: flex;
  justify-content: space-around;
  margin-top: 100px;
  margin-left: 150px;
  margin-right: 150px;
}

.planet-image {
  flex: 2;
}

.planet-image img {
  height: 450px;
}

.planet-info .planet-desc {
  flex: 1;
  text-align: left;
}

.planet-desc .name {
  font-weight: 700px;
  font-size: 70px;
  letter-spacing: -1px;
}

.planet-desc .text {
  margin-top: 15px;
  font-weight: 400;
  opacity: 0.8;
  line-height: 1.5em;
}

.links {
  display: flex;
  margin-bottom: 30px;
}

.links p {
  opacity: 0.5;
}

.links a {
  margin-left: 20px;
  color: white;
  opacity: 0.8;
  text-decoration: none;
  border-bottom: 0.5px solid #777;
}

.button-1 {
  display: flex;
  margin: 20px 0px;
  padding: 10px 20px;
  align-items: center;
  border: 1px solid #777;
  cursor: pointer;
}

.active {
  background-color: rgba(138, 43, 226, 1);
  border: none;
}

.button-1 p {
  font-size: 16px;
  font-weight: 500;
  opacity: 0.7;
}

.button-1 .info-text {
  margin-left: 20px;
  font-size: 16px;
  font-weight: 500;
  opacity: 1;
  font-style: bold;
}
</style>
