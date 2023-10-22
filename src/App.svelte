<script>
  import Accordian from './lib/Accordian.svelte';
  import TypedText from './lib/TypedText.svelte';
  import ExperienceBullet from './lib/ExperienceBullet.svelte';
  import ProjectBullet from './lib/ProjectBullet.svelte';
  import Spinner from './lib/Spinner.svelte';
  const timeSpacing = 0.3;
  const maxState = 7;
  let state = 0;

  function nextState () {
    state = state + 1
    if (state == 1) {
      window.setTimeout(nextState, 1000)
    }
    else if (state < maxState) {
      window.setTimeout(nextState, timeSpacing * 1000)
    }
  }

  window.setTimeout(nextState, 2.1 * 1000)

  document.body.addEventListener('click', () => { state = maxState }, true)
</script>

<main>
  <h1>
    <TypedText text="Frank Harkins" speed={1.5} delay={0.5}/>
  </h1>
  {#if state > 1}
    <p class="mono" style="margin-bottom: 3rem;">
      Developer / science writer
    </p>
  {/if}

  {#if state > 2}
    <Accordian>
      <span slot="title">
        About
      </span>
      <span slot="content">
        <p>
        I'm from the north of England, but now live in London.
        <p>
        I currently work for IBM Quantum, where I sit somewhere between science
        writer and software developer. My role is helping people use our
        products through documentation, software support, and teaching about
        quantum computing in general.
        <p>
        The most important skill in my work is making things easier to
        understand, whether it's a concept in physics or a block of code.
        </p>
      </span>
    </Accordian>
  {/if}
  {#if state > 3}
    <Accordian>
      <span slot="title">
        Experience
      </span>
      <span slot="content">
        <ul>
          <ExperienceBullet
            title="Developer advocate"
            info={[
              'Qiskit, IBM',
              '2020 - present'
            ]}
            description={
            `A developer advocate improves the experience of developing using
            IBM Quantum's products. For me, this includes helping developers
            understand concepts in quantum computing through <a
            href="https://learning.quantum-computing.ibm.com/">learning
            materials</a>, as well as supporting their projects through our
            official software <a href="https://qiskit.org/ecosystem/">
            Ecosystem</a>.
            <p>
            I previously wrote and managed content for IBM's online <a
            href='https://qiskit.org/learn/'>quantum computing textbook</a>.
            I was both a subject matter expert, and a bridge between academics
            and software developers.`
            }
          />
          <ExperienceBullet
            title="Tutor"
            info={[
              'Self-employed',
              '2018-2020'
            ]}
            description={'I taught GCSE & A’-level Maths and Physics.'}
          />
          <ExperienceBullet
            title="Student"
            info={[
              'University of Leeds',
              '2015-2018'
            ]}
            description={
            `I studied Physics, graduating with a 2:1. My dissertation was on
            quantum computing.`
            }
          />
        </ul>
      </span>
    </Accordian>
  {/if}
  {#if state > 4}
    <Accordian>
      <span slot="title">
        Projects
      </span>
      <span slot="content">
        <p>Personal projects of mine.</p>
        <ul>
          <ProjectBullet
            title="Carbon footprint calculator"
            link="https://frankharkins.github.io/carbon-footprint/"
            description={
              `A small project to help me learn web development with Svelte.
            After trying other online calculators, I wanted to create something
            that showed the effects of lifestyle changes in real time.`
            }
           />
           <ProjectBullet
             title="CNOT"
             link="https://cnot.io"
             description={
               `An introduction to quantum computing.`
             }
           />
           <ProjectBullet
             title="Launchpad whackamole"
             link="https://github.com/frankharkins/launchpad-whackamole"
             description={
               `A game for the original Novation Launchpad (a midi controller).`
             }
           />
        </ul>
      </span>
    </Accordian>
  {/if}
  {#if state > 5}
    <Accordian>
      <span slot="title">
        Blog
      </span>
      <span slot="content">
        <p>Check out <a href="/blog">my blog</a>.
      </span>
    </Accordian>
  {/if}
  {#if state > 6}
    <Accordian>
      <span slot="title">
        Contact
      </span>
      <span slot="content">
        <ul>
          <li>Email me at <a href="mailto:frankharkins@hotmail.co.uk">frankharkins@hotmail.co.uk</a></li>
          <li>Add me on <a href="https://www.linkedin.com/in/francis-harkins-382324151/">Linkedin</a></li>
        </ul>
      </span>
    </Accordian>
  {/if}
  {#if maxState > state && state > 0 }
    <Spinner />
  {/if}
</main>
