<template>
  <PlanetInfo
    :name="name"
    :planetImg="planetImg"
    :source="source"
    :overview="overview"
    :structure="structure"
    :geology="geology"
  ></PlanetInfo>
</template>

<script>
import PlanetInfo from "../components/PlanetInfo.vue";

export default {
  components: { PlanetInfo },
  data() {
    return {
      name: "EARTH",
      planetImg: "planet-earth",
      source: "#",
      overview: `Third planet from the Sun and the only known planet to harbor life.
         About 29.2% of Earth's surface is land with remaining 70.8% is covered with water.
          Earth's distance from the Sun, 
          physical properties and geological history have allowed life to evolve and thrive.`,
      structure:
        "Earth's interior, like that of the other terrestrial planets, is divided into layers by their chemical or physical (rheological) properties. The outer layer is a chemically distinct silicate solid crust, which is underlain by a highly viscous solid mantle.",
      geology:
        "The total surface area of Earth is about 510 million km2. The continental crust consists of lower density material such as the igneous rocks granite and andesite. Less common is basalt, a denser volcanic rock that is the primary constituent of the ocean floors.",
    };
  },
  methods: {},
};
</script>

<style></style>
