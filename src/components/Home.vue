<template>
  <div class="home">
    <img alt="Rebood logo" src="/static/rebood-logo-white.svg" class="logo" />
    <h1>{{ msg }}</h1>
    <p>
      Welcome to our workshop where we show basics<br />
      of dockerization and kubernetes.<br />
    </p>
    <p>
      Contact us here:
      <a href="https://rebood.com/" target="_blank" rel="noopener"
        >rebood.com</a
      >
    </p>
    <img
      src="/static/illustration-and-circle.svg"
      alt=""
      class="infographics"
    />
  </div>
</template>

<script>
export default {
  name: "Home",
  props: {
    msg: {
      default: "",
      type: String
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  padding: 0.67em 0;
  margin: 0;
}
a {
  color: #fff;
  letter-spacing: 0.05em;
  cursor: pointer;
  font-size: 18px;
  border-width: initial;
  border-style: none;
  border-color: initial;
  border-image: initial;
  background: rgb(242, 153, 74);
  padding: 7px 15px;
  border-radius: 10px;
  -webkit-appearance: button;
  -moz-appearance: button;
  appearance: button;
  text-decoration: none;
}
.logo {
  position: absolute;
  top: 50px;
  left: 50px;
}
.infographics {
  width: unset;
  max-width: calc((100% - 575px) - 100px);
  right: calc(6.66667%);
  max-height: 560px;
  min-width: 450px;
  position: absolute;
  top: 300px;
  transform: translateY(-50%);
  padding: 0px;
}

.home {
  padding: 0;
  width: 40%;
  max-width: 500px;
}

@media (min-width: 225px) {
  .home {
    padding: 150px 50px 50px;
  }
}

@media (min-width: 768px) {
  .home {
    padding: 150px 100px 50px;
  }
}

@media (min-width: 1440px) {
  .home {
    padding: 150px 250px 50px;
  }
}
</style>
