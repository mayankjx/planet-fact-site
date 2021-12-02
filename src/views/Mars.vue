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
      name: "MARS",
      planetImg: "planet-mars",
      source: "#",
      overview: `Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System, being larger than only Mercury. In English, Mars carries the name of the Roman god of war and is often referred to as the "Red Planet".`,
      structure:
        "Like Earth, Mars has differentiated into a dense metallic core overlaid by less dense materials. Scientists initially determined that the core is at least partially liquid. Current models of its interior imply a core consisting primarily of iron and nickel with about 16–17% sulfur.",
      geology:
        "Mars is a terrestrial planet whose surface consists of minerals containing silicon and oxygen, metals, and other elements that typically make up rock. The surface is primarily composed of tholeiitic basalt, although parts are more silica-rich than typical basalt.",
    };
  },
  methods: {},
};
</script>

<style></style>
