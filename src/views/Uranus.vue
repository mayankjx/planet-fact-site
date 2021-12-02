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
      name: "URANUS",
      planetImg: "planet-uranus",
      source: "#",
      overview: `Uranus is the seventh planet from the Sun. Its name is a reference to the Greek god of the sky, Uranus according to Greek mythology, was the great-grandfather of Ares. It has the third-largest planetary radius and fourth-largest planetary mass in the Solar System.`,
      structure:
        "The standard model of Uranus's structure is that it consists of three layers: a rocky (silicate/iron–nickel) core in the centre, an icy mantle in the middle and an outer gaseous hydrogen/helium envelope. The core is relatively small, with a mass of only 0.55 Earth masses.",
      geology:
        "The composition of Uranus's atmosphere is different from its bulk, consisting mainly of molecular hydrogen and helium. The helium molar fraction, i.e. the number of helium atoms per molecule of gas, is 0.15±0.03 in the upper troposphere.",
    };
  },
  methods: {},
};
</script>

<style></style>
