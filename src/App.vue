<template>
  <div id="app">
    <div class="intro">
      <h1>The Migration-Mobility Nexus</h1>
      <div class="authors">Lorenzo Piccoli and Matteo Gianni - <i>University of Neuchâtel and University of Geneva</i></div>
      <p>
        The Migration-MobiliObserve the interaction between different ways to describe human movementty Nexus is an analytical tool to:
        <ul>
          <li>Explain how this interaction provides meaning to social and political phenomena</li>
        </ul>
      </p>
    </div>

    <Scrollama
      :debug="false"
      :offset="0.5"
      @step-enter="({ element }) => (currStep = element.dataset.stepNo)"
    >
      <div class="step" data-step-no="1">
        <h3>Continuum</h3>
        <div class="subtitle">Fluid mobilities might gradually change into 
          more stable forms of migration and the other way around.
        </div>
        <div class="content">
          Commercial commitments in trade agreements foster longer term migration, rather than temporary forms of mobility [IP24] 
The length of residency and the contributions that are required to benefit from the welfare state influence natives’ propensity to discriminate against migrants and movers [IP26–IP27]
Recent changes in welfare policies have allowed individuals to move freely across countries of the Schengen area [IP22]
        </div>
      </div>
      <div class="step" data-step-no="2">
        <h3>Enablement</h3>
        <div class="subtitle">Migration requires mobility,
while mobility can lead to migration.
        </div>
        <div class="content">
          Inclusive policies and voting rights reduce the propensity of non-citizens to change their residency [IP30–IP31]
Migration experiences can foster both internal mobility in the country and transnational business activities based on cross-border mobilities [IP23– IP32]
        </div>
      </div>
      <div class="step" data-step-no="3">
        <h3>Opposition </h3>
        <div class="subtitle">Migration and mobility 
are two mutually exclusive conceptions of movement.
        </div>
        <div class="content">
          The mobility of undocumented migrants and refugees challenges and undermines migration regulations [IP26–IP28]
        </div>
      </div>
      <div class="step" data-step-no="4">
        <h3>Hierarchy</h3>
        <div class="subtitle">Migration and mobility are political categoriesthat legitimize hierarchies of movement
        </div>
        <div class="content">
          Temporary commercial mobility commitments in trade agreements may create privileges and disadvantages compared to traditional migration [IP24]
In the labour market and in access to welfare, one’s migration status is negatively associated with the probability of being employed and of receiving benefits [IP25–IP29]
Transnational families can be formed voluntarily, for lifestyle reasons, and involuntarily because of legal constraints, wars, health or financial issues [IP23–IP33]
Migration is only one among many mobilities that shape localities in terms of inclusion and exclusion, transnationalisation, boundaries and people’s life trajectories [IP34]
        </div>
      </div>
      <div class="graphic" slot="graphic">
        <chart :currentStep="currStep" :totalSteps="4"></chart>
      </div>
    </Scrollama>

    <div class="outro">
      <h3>Why does it matter?</h3>
      <div class="columns-text">
        <div>
          <b>Reflexivity</b><br/>The way we think about “migration” and “mobility” largely depends on our preconceived – and often implicit – assumptions 
        </div>
        <div><b>Normative debates</b><br/>All uses of “migration” and “mobility” involve preferences regarding what justice and democratic legitimacy should be</div>
        <div><b>Interdisciplinarity</b><br/>Research has traditionally studied migration and mobility as separate subjects, but we cannot fully understand one without considering the other
</div>
      </div>
    </div>
  </div>
</template>

<script>
import "intersection-observer";
import Scrollama from "vue-scrollama";
import Chart from './components/Chart'

export default {
  name: "App",
  components: {
    Scrollama,
    Chart
  },
  data() {
    return {
      currStep: null
    };
  }
};
</script>

<style src="vue-scrollama/dist/vue-scrollama.css"></style>

<style lang="stylus">
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&display=swap')

#app
  font-family: "Roboto", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #000000;
  margin-top: 60px;
  background-color #ffffff
  text-align left
  font-size 26px
  font-weight 300
.intro,
.outro
  padding: 20vh 0;
  text-align left 
  margin: 0 3rem;
.intro
  padding-top: 10px
  padding-bottom 20vh
  width 75%
h1
  padding 0px
  margin 0px
  padding-bottom 10px
.authors
  font-size 18px
  font-weight 500
  margin-bottom 10vh
.columns-text
  display flex
  div
    flex 1
    margin-right 20px
    font-size 21px
    &:last-child
      margin-right 0px
// additions and overrides of DOM elements vue-scrollama sets up
.scrollama-container
  display: flex;
  flex-direction row-reverse
  .scrollama-graphic
    flex: 1;
    height: 80vh;
    top: 10vh;
    min-width 60%

  .scrollama-steps
    flex: 1;


// your elements styles
.graphic
  height: 100%;
  margin: 0 3rem;
  font-size: 10rem;
  display: flex;
  align-items: center;
  justify-content: center;

.step
  padding 0px
  margin: 0 3rem;
  margin-bottom: 30vh;
  h3
    font-size 60px
    font-weight 300
    border-bottom 3px solid
  .subtitle
    font-size 24px
    font-weight 400
    margin-bottom 30px
  .content
    font-size 21px
    font-weight 300
  &:last-child
    margin-bottom: 0;

</style>
