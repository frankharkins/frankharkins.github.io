<script>
	import Accordion from "$lib/home/Accordion.svelte";
	import Link from "$lib/home/Link.svelte";
	import ProjectCard from "$lib/home/ProjectCard.svelte";
	import TimeLine from "$lib/home/TimeLine.svelte";

	const email = "frankharkins@hotmail.co.uk";
</script>


<div class="max-w-5xl mx-auto">
    <div class="max-w-2xl p-12 sm:p-18">
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
                        title="Snap!"
                        description="A simple game with CSS animations and websockets"
                        links={[
                          { text: "Play", url: "https://frankharkins.github.io/snap" },
                        ]}
                    />
                    <ProjectCard
                        title="quPython"
                        description="A reimagining of how we write quantum programs in Python"
                        links={[
                          { text: "Try it", url: "https://github.com/frankharkins/qupython" },
                        ]}
                    />
                    <ProjectCard
                        title="Carbon footprint calculator"
                        description={`A small project to help me learn web
                        development with Svelte. After trying other online
                        calculators, I wanted to create something that showed
                        the effects of lifestyle changes in real time.`}
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
