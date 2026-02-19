<script lang="ts">
	import Accordion from "$lib/home/Accordion.svelte";
	import Link from "$lib/home/Link.svelte";
	import ProjectCard from "$lib/home/ProjectCard.svelte";
	import type { Theme } from "$lib/home/ThemeSelector.svelte";
	import ThemeSelector from "$lib/home/ThemeSelector.svelte";
	import TimeLine from "$lib/home/TimeLine.svelte";

	let theme: Theme = $state("Default");

	const email = "frankharkins@hotmail.co.uk";
</script>

<svelte:head>
    {#if theme === 'Dark'}
        <style>
          :root {
            background: var(--color-black);
          }
        </style>
    {:else if theme === 'Light'}
        <style>
          :root {
            background: var(--color-white);
          }
        </style>
    {/if}
</svelte:head>

<div class="max-w-5xl mx-auto" data-theme={theme}>
    <div class="relative max-w-2xl m-12 sm:m-18">
        <ThemeSelector bind:theme={theme} className="absolute right-0 top-0"/>
        <h1 class="font-bold text-title mb-2">Frank Harkins</h1>

        <p>
            Software developer
        </p>

        <div class="mt-8">
            <Accordion title="Experience">
                <TimeLine events={[
                  {
                    title: "Software developer",
                    employer: "IBM Quantum",
                    timePeriod: "2023 - present",
                    description: `I am a full-stack engineer for IBM Quantum
                    Documentation. On the frontend, we use React and Next.js, we
                    also have extensive content-management tooling written in
                    TypeScript, Python, and Rust.`
                  },
                  {
                    title: "Developer advocate",
                    employer: "Qiskit, IBM",
                    timePeriod: "2020 - 2023",
                    description: `I wrote and managed content for Qiskit's
                    online quantum computing textbook. During my time there, it
                    became one of the most popular and well-loved Qiskit
                    products. I later worked on, IBM Quantum Learning, the
                    textbook's spiritual successor.`,
                  },
                  {
                    title: "Tutor",
                    employer: "Self-employed",
                    timePeriod: "2018-2020",
                    description: `I taught GCSE & A’-level Maths and Physics.
                    During this time, I also created a website to teach quantum
                    computing to students of different backgrounds.`
                  },
                  {
                    title: "Student (Physics BSc.)",
                    employer: "University of Leeds",
                    timePeriod: "2015-2018",
                    description: `I studied theoretical physics, graduating with
                    a 2:1. My dissertation was on quantum computing.`
                  },
                ]} />
            </Accordion>

            <Accordion title="Projects">
                <ul>
                    <ProjectCard
                        title="Event loop"
                        description={`A todo app tailored for async work,
                        inspired by Node's event loop. Keep working on a task
                        until you're blocked, then move onto the next one.`}
                        links={[
                          { text: "Try it", url: "https://frankharkins.github.io/event-loop/" },
                        ]}
                    />
                    <ProjectCard
                        title="Snap!"
                        description={`An online, two-player card game, and my
                        first foray into server programming in Rust. Play online
                        with a friend.`}
                        links={[
                          { text: "Play", url: "https://frankharkins.github.io/snap" },
                        ]}
                    />
                    <ProjectCard
                        title="quPython"
                        description={`A library to write object-oriented quantum
                        programs, rather than the assembly-like approach of most
                        other libraries.`}
                        links={[
                          { text: "Try it", url: "https://github.com/frankharkins/qupython" },
                        ]}
                    />
                    <ProjectCard
                        title="Carbon footprint calculator"
                        description={`Rather than just showing a calculation, I
                        wanted to be able to see how different factors affected
                        my footprint. Fill in your information, then move the
                        sliders to see what effect different lifestyle changes
                        have.`}
                        links={[
                          { text: "Try it", url: "https://frankharkins.github.io/carbon-footprint/" },
                        ]}
                    />
                    <ProjectCard
                        title="Launchpad whackamole"
                        description="A game for the original Novation Launchpad (a midi controller)."
                        links={[
                          { text: "See source", url: "https://github.com/frankharkins/launchpad-whackamole" },
                        ]}
                    />
                    <ProjectCard
                        title="CNOT"
                        description="An introduction to quantum computing."
                        links={[
                          { text: "Start learning", url: "https://cnot.io/" },
                        ]}
                    />
                </ul>
            </Accordion>
            <Accordion title="Contact">
                <ul>
                    <li>
                        Email me at <Link href={`mailto:${email}`}>{email}</Link>.
                    </li>
                    <li>
                        Add me on <Link href="https://www.linkedin.com/in/frank-harkins/">LinkedIn</Link>
                    </li>
                </ul>
            </Accordion>
        </div>
    </div>
</div>
