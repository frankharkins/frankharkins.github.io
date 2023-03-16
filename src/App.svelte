<script>
  import Accordian from './lib/Accordian.svelte';
  import TypedText from './lib/TypedText.svelte';
  import ExperienceBullet from './lib/ExperienceBullet.svelte';
  import ProjectBullet from './lib/ProjectBullet.svelte';
  import Spinner from './lib/Spinner.svelte';
  const timeSpacing = 0.3;
  const maxState = 5;
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
    Developer / technical writer
    <br>
  {/if}

  {#if state > 2}
    <Accordian>
      <span slot="title">
        About
      </span>
      <span slot="content">
        <p>
        Hi, I'm Frank. I have experience in physics, technical writing, and
        software development.
        </p>
        <p>
        I care about effective communication, and creating high-quality
        products.
        </p>
        <h3>Experience:</h3>
        <ul>
          <ExperienceBullet
            title="Developer advocate"
            info={[
              'Qiskit, IBM',
              '2020 - present'
            ]}
            description={
            `I write and manage content for IBM's online <a
             href='https://qiskit.org/learn/'>quantum computing textbook</a>.
             I act as both a subject matter expert, and a bridge between academics
             and software developers.`
            }
          />
          <ExperienceBullet
            title="Tutor"
            comment={'GCSE & A-level maths and physics'}
            info={[
              'Self-employed',
              '2018-2020'
            ]}
          />
          <ExperienceBullet
            title="Student"
            comment="Physics BSc"
            info={[
              'University of Leeds',
              '2015-2018'
            ]}
          />
        </ul>
        <p>Contact me for further experience and details</p>
      </span>
    </Accordian>
  {/if}
  {#if state > 3}
    <Accordian>
      <span slot="title">
        Projects
      </span>
      <span slot="content">
        <p>Links to personal projects of mine.</p>
        <ul>
          <ProjectBullet
            title="Carbon footprint calculator"
            link="https://frankharkins.github.io/carbon-footprint/"
            description={
              `This is a small project I created to help me learn web development
               with Svelte. After trying other online calculators, I wanted to
               create something that showed you the effects of lifestyle changes in
               real time.`
            }
           />
           <ProjectBullet
             title="CNOT"
             link="https://cnot.io"
             description={
               `A website introducing quantum computing to undergraduate students.`
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
  {#if state > 4}
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
  {#if 5 > state && state > 0 }
    <Spinner />
  {/if}
</main>
