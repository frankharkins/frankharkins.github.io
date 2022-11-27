<script>
  import Accordian from './lib/Accordian.svelte';
  import TypedText from './lib/TypedText.svelte';
  import ExperienceBullet from './lib/ExperienceBullet.svelte';
  import ProjectBullet from './lib/ProjectBullet.svelte';
  const introTime = 1;  // Length of typewriter animation
</script>

<main>
  <h1>
    <TypedText text="Frank Harkins" speed={introTime-0.2} cursor={true} delay={0.2}/>
  </h1>
  <TypedText text="Developer / technical writer" delay={introTime+0.2}/>
  <br>

  <Accordian>
    <span slot="title">
      <TypedText text="About" delay={introTime+0.3}/>
    </span>
    <span slot="content">
      <p>
      Hi, I'm Frank. I have a background in physics, technical writing, and
      software development. I care about effective communication, and creating
      high-quality products.
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
  <Accordian>
    <span slot="title">
      <TypedText text="Projects" delay={introTime+0.4}/>
    </span>
    <span slot="content">
     Links to personal projects of mine.
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
  <Accordian>
    <span slot="title">
      <TypedText text="Contact" delay={introTime+0.5}/>
    </span>
    <span slot="content">
      <ul>
        <li>Email me at <a href="mailto:frankharkins@hotmail.co.uk">frankharkins@hotmail.co.uk</a></li>
        <li>Add me on <a href="https://www.linkedin.com/in/francis-harkins-382324151/">Linkedin</a></li>
      </ul>
    </span>
  </Accordian>
</main>

<style>
</style>
