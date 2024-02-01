import Code from "@/components/Code";
import { Link, Typography } from "@mui/material";
import React from "react";

interface Skill {
  name: string;
  years: number;
  body?: React.ReactNode;
}

export const skills: Skill[] = [
  {
    name: "React",
    years: 6,
    body: (
      <>
        <Typography paragraph>
          React is my strongest skill. I&apos;ve been using it since 2017; first
          using class components and maintaining/migrating pre-v15{" "}
          <Code>createClass</Code> components, then using hooks almost
          exclusively since their introduction in 2019.
        </Typography>
        <Typography paragraph>
          I&apos;ve used React on dozens of projects including single page
          applications using React Router and Next.JS, as well as several
          internal component libraries. I am proficient in advanced concepts
          such as context, memoization, and portaling. Most importantly, I have
          a deep understanding of React&apos;s component lifecycle. This deep
          understanding comes into play far more often than the less frequently
          used &quot;advanced&quot; APIs because it helps solve obsure bugs, fix
          poor performing components, and reduce unnecessary complexity.
        </Typography>
        <Typography paragraph>
          On the job, I&apos;ve taught React to 3 new-hire junior developers
          beginning with a few days of dedicated 1:1 teaching followed by
          as-needed mentorship; moving from basics to intermediate and advanced
          concepts over the course of 6 months to a year. In addition to
          in-person teaching, I also remain moderately active on
          stackoverflow.com (
          <Link
            href="https://stackoverflow.com/users/9381601/brian-thompson?tab=profile"
            target="_blank"
          >
            profile
          </Link>
          ) answering just under 400 React questions resulting in nearly 900
          up-votes.
        </Typography>
        <Typography paragraph>
          I enjoy developing with React, and have realized over the last few
          years that what I get the most satisfaction from is making React
          enjoyable for other developers. This comes in multiple forms, the
          primary of which are:
        </Typography>
        <ul>
          <li>
            <Typography>
              <b>Teaching</b> - you are more likely to enjoy working with a
              technology that you understand better. This almost always comes in
              the form of normal work <Link>collaboration</Link>, not dedicated
              teaching time. Every day problems and bugs that come up are
              opportunities to share what I&apos;ve learned with others in a way
              that they can see for themselves in real-time.
            </Typography>
          </li>
          <li>
            <Typography>
              <b>Building Tools</b> - creating custom hooks or reusable
              components and utilities that make feature development faster,
              consistent, and reliable. Improving my own pain-points is often a
              primary driver, but getting to multiply that benefit by also
              eliminating pain-points for everyone on the team/company is what
              really makes me enjoy my work.
            </Typography>
          </li>
        </ul>
      </>
    ),
  },
  {
    name: "JavaScript",
    years: 6,
    body: (
      <>
        <Typography paragraph>
          The proportion of plain JavaScript to React JavaScript is probably
          1/100, but as I&apos;ve taken a deep dive into React I have become
          very knowledgeable in the language beneath the tool.
        </Typography>
        <Typography paragraph>
          Some particular JavaScript areas that I have learned through React are
          the <Code>this</Code> keyword (less useful now that hooks have taken
          over), array methods, equality operations, and object equality and
          mutation. I began developing with JavaScript pre-ES6, so I also have a
          good knowledge of newer features, the pain-points they alleviate, and
          transpilation for browser compatibilty.
        </Typography>
        <Typography paragraph>
          This solid foundational knowledge of JavaScript makes me confident
          that I can quickly learn any frontend framework such as Vue or
          Angular.
        </Typography>
      </>
    ),
  },
  {
    name: "TypeScript",
    years: 5,
    body: (
      <>
        <Typography paragraph>
          TypeScript has become a favorite tool of mine.
        </Typography>
        <Typography paragraph>
          I learned React and JavaScript without it, and it didn&apos;t even
          cross my radar for a year or two. After hearing about it vaguely and
          understanding it was becoming somewhat popular, I began researching it
          myself. Often times I hear of popular technologies and can&apos;t
          understand the purpose they serve right away (ie <Link>docker</Link>).
          At that time, the only two languages I knew were PHP and JavaScript,
          so types were a foreign concept to me. An opportunity came up at work
          to build a new small React app, so I seized the chance to try out
          TypeScript and see for myself why it might be useful - I&apos;ve never
          looked back.
        </Typography>
        <Typography paragraph>
          TypeScript can be polarizing. I have encountered more developers that
          dislike it than like it. I don&apos;t think their grievances are
          completely unfounded, but I do firmly believe the benefits outweigh
          the burdens and that most burdens can be eliminated with some time
          invested in learning the tool and sensible configuration.
        </Typography>
        <Typography paragraph>
          The most important benefits I derive from TypeScript are:
        </Typography>
        <ul>
          <li>
            <Typography>
              <b>Shortened feedback loop</b> - get feedback on 90% of errors
              before you even get to the browser. This can easily add up to
              multiple hours saved per week, and improves developer experience
              (no one likes waiting for compile/refresh just to be told they
              have a typo).
            </Typography>
          </li>
          <li>
            <Typography>
              <b>Confident refactoring</b> - refactoring JavaScript is an
              invitation for bugs. TypeScript highlights those inevitable bugs
              and gives you confidence to improve your code through refactoring
            </Typography>
          </li>
          <li>
            <Typography>
              <b>Documentation as code</b> - over half of my trips to
              documentation websites (and the need to document my own code) are
              deleted. Type definitions paired with DocBlocks provide most if
              not all of the information developers need to use code - and best
              of all, they&apos;re guaranteed to be up-to-date.
            </Typography>
          </li>
        </ul>
      </>
    ),
  },
  {
    name: "Next.JS",
    years: 4,
    body: (
      <>
        <Typography paragraph>
          I discovered Next.JS in search of a good way to do server-side
          rendering, and it delivered so much more. I now use Next.JS on any SPA
          project that I can (including <Link>this website</Link>!).
        </Typography>
        <Typography paragraph>
          Website performance is important in any circumstance, but when
          customers are involved it becomes critical. I was managing the
          performance of our React SPAs using semi-manual code-splitting via
          webpack chunking. This method made a notable difference over shipping
          a single JavaScript bundle, but it required frequent adjustments and
          still left users with a less-than-ideal experience. The solution?
          Server-side rendering. Next.JS delivers this feature automatically,
          and provides many other benefits such as static generation,
          fast-refresh, built-in routing, and image optimization that make both
          the developer and user experience wonderful.
        </Typography>
        <Typography paragraph>
          My experience with Next.JS includes migrating the entire React portion
          of an e-commerce website (around 30 pages including cart and checkout)
          from static JS and React Router to the framework. This example used a
          mix of staticly generated pages at build time (with data), server-side
          rendered pages with server-side data fetching, and pages that do
          everything client-side except the first render.
        </Typography>
      </>
    ),
  },
  {
    name: "Laravel",
    years: 6,
    body: (
      <>
        <Typography paragraph>
          Laravel is a full-stack web development framework for PHP. It is
          remarkably similar to Ruby on Rails. Laravel includes support for the
          most common pieces of web applications: models (Eloquent ORM), views
          (Blade templates), and controllers (routing, requests and responses).
          In addition to those basics it also provides support for database
          migrations, authentication and authorization, feature testing, queuing
          jobs, sending email, and writing CLI commands.
        </Typography>
        <Typography paragraph>
          Typically, I have used Laravel as an API only solution - opting to
          only use Blade templates for email views. I have worked on Laravel
          projects ranging in size from 3 endpoints (for a central company
          authorization service) to hundreds of endpoints. I have used every
          feature of the framework including some of the less popular ones like
          commands (usually ran by the scheduler), model observers, and events.
        </Typography>
        <Typography paragraph>
          Laravel is a joy to work with. As I&apos;ve recently moved on
          professionally to other backend tools (Java/Spring), I have come to
          appreciate Laravel even more. It provides all the features I could
          need, is documented wonderfully, and has a concise, expressive API.
        </Typography>
        <Typography paragraph>
          One of my favorite features of Laravel is it&apos;s testing support. I
          am a believer in the theory of TDD, but Laravel is the only framework
          I&apos;ve used that makes it really 100% practical. When using Laravel
          I voluntarily opt-in to TDD about 80% of the time. I usually end up
          with about 90% test coverage, and have found that it&apos;s at about
          this percentage that the ROI for testing starts to plummet.
        </Typography>
        <Typography paragraph>
          The ability to write meaninful tests with significant coverage has
          some really powerful implications: framework, language, and database
          upgrades are usually {"<"}10 minute tasks. Often times, it&apos;s as
          simple as changing the version in a dockerfile or composer.json and
          running the test suite against it. This lets me keep all Laravel apps
          up-to-date, even ones that don&apos;t normally receive attention and
          are at risk of getting left on old versions until they become a
          problem and are now years out-of-date.
        </Typography>
      </>
    ),
  },
  {
    name: "PHP",
    years: 6,
    body: (
      <>
        <Typography paragraph>
          The vast majority of my PHP experience is through Laravel. However, I
          have maintained a few older codebases that were plain PHP. Working
          with these codebases taught me some extremely valuable lessons:
        </Typography>
        <ul>
          <li>
            <Typography>
              <b>You can write good, clean code without a framework</b> -
              frameworks like Laravel can help facilitate good code organization
              by automatically separating some concerns. However, there is
              nothing stopping you from doing those things when there is no
              framework to help. It took me longer than I&apos;d like to admit
              to figure this out, but you don&apos;t have to just follow the
              patterns in place (like dumping all the code in one 3000 line
              file), you can implement your own structures, patterns, helpers,
              etc and end up with a great application with no framework.
            </Typography>
          </li>
          <li>
            <Typography>
              <b>Frameworks aren&apos;t actually magic</b> - developing without
              a framework helped me understand a lot of the &quot;magic&quot;
              happening in Laravel. Sometimes it was just a framework feature
              that I had to develop myself becoming clearer having done it.
              Sometimes it really was a bit magical, but I was inspired to dig
              into Laravel&apos;s source code and discover how they had
              accomplished the functionality - leading to a deeper understanding
              of PHP.
            </Typography>
          </li>
        </ul>
        <Typography paragraph>
          While I would probably never opt to not use a framework (they just
          save too much time), my experience with plain PHP has been invaluable
          to my mindset as a developer.
        </Typography>
      </>
    ),
  },
  {
    name: "Docker",
    years: 4,
    body: (
      <>
        <Typography paragraph>
          Docker is another favorite tool of mine. My story with Docker is very
          similar to my experience with TypeScript where I heard about how
          useful it was, but didn&apos;t really understand why. Over the span of
          about a year I researched a bit here and there and slowly pieced
          together what problems it solves, experimented with it, and finally it
          clicked - this is a game-changing tool.
        </Typography>
        <Typography paragraph>
          There are tons of practical reasons to use Docker - and I&apos;m still
          discovering more. Some that I find the most valuable are:
        </Typography>
        <ul>
          <li>
            <Typography>
              <b>Deploy anywhere</b> - At one time the company I worked for used
              on-prem servers to host our websites. We had just completed a
              painfully slow server migration (over a year to get everything
              moved over). Why? Because all of our applications were coupled to
              the server, and the servers were different. Looking back (I was
              not not in a decision-making role at the time), this could have
              been improved without docker, but with docker it would have been a
              breeze. Applications that are not coupled to the server they run
              are easily ran on-prem, in the cloud, or both.
            </Typography>
          </li>
          <li>
            <Typography>
              <b>Independent upgrades</b> - Applications that define and provide
              their own environment needs, running in isolation, means it
              becomes trivial to run PHP 7.2 apps alongside PHP 8.2 apps, or
              Node 14 alongside Node 18. This means you can upgrade one app at a
              time, deploy it, verify it, and then move on the the next app.
              This significantly limits risk associated with upgrades, and even
              gives you the option to defer upgrades that are less pressing.
            </Typography>
          </li>
          <li>
            <Typography>
              <b>Dev/Prod parity</b> - When you can define your server
              dependencies within the application&apos;s codebase, you can often
              trivially use the same configuration to manage the development
              environment. Even if, for example, the same exact Dockerfile is
              not reused, you can quickly check dependencies of the development
              environment against production.
            </Typography>
          </li>
          <li>
            <Typography>
              <b>Instant development environments</b> - getting new developers
              setup to start working is always a pain-point. I&apos;ve seen it
              across multiple teams, I&apos;ve experienced it myself, and
              I&apos;ve heard plenty more examples of developers needing days or
              even over a week to get their environment setup correctly so that
              they can start working. This is frustrating to developers, and
              expensive to companies. I have solved this problem in two ways -
              both resulting in developer enviroment setup times of a few
              minutes.
            </Typography>
            <ol>
              <li>
                <Typography>
                  Use a standard docker image and include the set of commands to
                  get started in the project&apos;s README. Example:{" "}
                  <Code>
                    docker run --rm -v $(pwd):/app -w /app node:18-alpine npm i
                  </Code>{" "}
                  then{" "}
                  <Code>
                    docker run -p 3001:3000 -v $(pwd):/app -w /app
                    --name=app-name node:18-alpine npm run dev
                  </Code>
                </Typography>
              </li>
              <li>
                <Typography>
                  VS Code Dev Containers. An integration with VS Code that takes
                  the development enviroment defined in the project, runs it as
                  a docker container, and lets you start developing without
                  thinking about server requirements. This takes the potentially
                  days long process and makes it a single button click:
                  &quot;Open in Dev Container&quot;.
                </Typography>
              </li>
            </ol>
          </li>
        </ul>
      </>
    ),
  },
  {
    name: "GitLab CI",
    years: 3,
    body: (
      <>
        <Typography paragraph>
          GitLab CI was my introduction to Continuous Integration and
          Deployment. I have written roughly 20 scripts for deploying Laravel
          apps, React apps, composer packages, and npm packages.
        </Typography>
        <Typography paragraph>
          My first iteration of CI/CD was upgrading our JavaScript and PHP
          deployments from manual FTP actions to automated ones. This simple
          first pass at deployment automation changed our deployments forever.
          No more copy/paste mistakes; no more development changes accidentally
          going to prod. The stability of automation alone is enough to make
          this process invaluable.
        </Typography>
        <Typography paragraph>
          Second iterations included adding eslint checks and testing webpack
          builds for React apps, and running tests against our Laravel code on
          every commit. This removed the dreaded question, &quot;was this
          working when you had it last?&quot; or &quot;was this test failing for
          you?&quot;
        </Typography>
        <Typography paragraph>
          My last iteration with GitLab CI has been to containerize
          applications. Now in addition to running formatting checks, tests, and
          builds, it bundles the app into a Docker image and publishes it to a
          registry for final deployment. On some applications, the registry is
          scanned for updates and the final deploy happens automatically.
        </Typography>
        <Typography paragraph>
          CI/CD is a must-have in my opinion for any application that will be
          updated more than once. Even for personal projects it has become a
          major asset, as I may only work on it every 6 months and not remember
          all the steps to make it work - when it&apos;s automated, not only do
          the steps happen regardless of my memory, but they are documented in
          the form of a script.
        </Typography>
      </>
    ),
  },
  {
    name: "GitHub Actions",
    years: 2,
    body: (
      <>
        <Typography paragraph>
          GitHub Actions were my second CI/CD tool to learn after GitLab CI.
          Most of my opinions on CI/CD were formed with that tool and recorded
          there.
        </Typography>
        <Typography paragraph>
          In addition to the core CI/CD functionality of linting, testing, and
          deploying code, I have created Actions that do things like auto-bump
          package versions based on conventions, posted reminder comments on PRs
          when certain criteria was missing, and sent slack notifications on
          deployment success or failure.
        </Typography>
        <Typography paragraph>
          This project is setup with GitHub Actions, and if you&apos;re
          interested enough to look at the commit history, you&apos;ll notice
          that the deployment actions were setup very early. This is intetional.
          An app you can&apos;t deploy quickly and reliably isn&apos;t of much
          use. It is important to me to know that at any point during
          development, I can verify my code works and I can release it with
          confidence.
        </Typography>
      </>
    ),
  },
  {
    name: "Redux",
    years: 6,
    body: (
      <>
        <Typography paragraph>
          Redux is a bit of a hot topic in the React world, and as someone who
          has used Redux for several years and is active in the React community,
          I have formed my own strong opinions on it. But first, my experience.
        </Typography>
        <Typography paragraph>
          I have used Redux, React-Redux, Redux-Thunk, Redux-Form, and
          Redux-Saga; the former 3 I have used for over 6 years across dozens of
          projects. I have even written 3 custom Redux middlewares.
        </Typography>
        <Typography paragraph>
          <b>Is Redux still Relevant?</b> - The popularity of Redux has suffered
          some severe whiplash since it&apos;s release. Redux used to be nearly
          synonymous with React; they were almost always used together.
          It&apos;s popularity was certainly influnced by Dan Abromov (creator
          of Redux and React maintainer) and blog posts about patterns and best
          practices (including Ducks, and Container/Presenter). Abromov himself
          recognized that Redux&apos;s popularity had swung too far to the
          extreme, where people were using it even when it didn&apos;t really
          suit them (
          <Link href="https://medium.com/@dan_abramov/you-might-not-need-redux-be46360cf367">
            blog post here
          </Link>
          ).
        </Typography>
        <Typography paragraph>
          Over the last few years, the React community seems to have shifted
          away from Redux. I myself spent considerable effort removing Redux
          from several applications (including all of the middleware mentioned
          above). However, I think the community is at risk of swinging too far
          into the other extreme - believing Redux is <i>never</i> the right
          tool for the job.
        </Typography>
        <Typography paragraph>
          <b>Redux vs Context</b> - The discussion topic of Redux vs
          React&apos;s native context API needs to be clarified as it has been
          causing serious misconceptions amoung newer React developers. The
          problem with labeling this discussion &quot;Redux vs Context&quot; is
          that comparing Redux to Context is like comparing a hammer to a drill
          - they are two tools that serve completely different purposes.
        </Typography>
        <Typography paragraph>
          The origin of this debate is really about how state, specifically
          global state, should be managed. Should it be managed in Redux (which
          the community has started equating to &quot;bad&quot;)? Or should it
          be managed with Context? To actually substitute Redux for Context, you
          must introduce state. Context does not provide a way to persist data,
          only to share data with components as an alternative to props. This
          addition of state is where you can create some really excellent tools,
          or run the risk of re-inventing the wheel (a messier, trendier,
          Redux).
        </Typography>
        <Typography paragraph>
          Context plus state (<Code>useState</Code> or <Code>useReducer</Code>)
          now accomplishes the same thing as Redux - is it better? Maybe. Its
          better if your state is small, or can be broken into small
          self-contained groups that can each have their own Context provider.
          This opens the door for custom hooks, managing side-effects of global
          state changes with <Code>useEffect</Code> (harder to do in Redux), and
          less boilerplate.
        </Typography>
        <Typography paragraph>
          However, if your state is large, tightly coupled, and used by a
          signifcant amount of components, Redux still may be the best option. I
          would suggest that Redux is only the best choice 1% of the time, but I
          strongly disagree with the oversimplification of Redux = bad, Context
          = good.
        </Typography>
      </>
    ),
  },
  {
    name: "MySQL",
    years: 7,
    body: (
      <>
        <Typography paragraph>
          I don&apos;t pretend to be a SQL super-user, but I have used MySQL
          regularly for my entire career both as a user and administrator. The
          majority of my usage is simple table queries with a handful of{" "}
          <Code>WHERE</Code> clauses and maybe a <Code>JOIN</Code> here or
          there. I have on occassion needed to write very complex queries with
          multiple joins and sub-queries for reporting needs.
        </Typography>
        <Typography paragraph>
          I have also been responsible for administering production and local
          MySQL servers. This includes version upgrades, user management,
          performance tuning, point-in-time recovery backups, and replication.
        </Typography>
      </>
    ),
  },
  {
    name: "Postgres",
    years: 2,
    body: (
      <>
        <Typography paragraph>
          I have used Postgres on a few projects, but I have not done anything
          so advanced or specific to Postgres that it differs from my experience
          with MySQL. I understand that there are some additional features
          Postgres offers, but in my day-to-day work an ORM typically abstracts
          away any differences between database systems.
        </Typography>
      </>
    ),
  },
  {
    name: "Node",
    years: 5,
    body: (
      <>
        <Typography paragraph>
          Node is an interesting technology to discuss regarding job postings
          and resumes. It begs the question, &quot;in what way do you use
          Node?&quot;
        </Typography>
        <Typography paragraph>
          As frontend frameworks have started to become most people&apos;s first
          introduction to the JavaScript ecosystem, I am noticing a growing
          misconception about what Node is. Node is simply a JavaScript runtime
          for the server. However, I commonly hear people referring to Node as
          if it were running in a browser or almost synonymous with modern
          JavaScript. I believe this misconception comes from using Node as a
          development tool, and not understanding where it&apos;s
          responsibilities terminate in the process.
        </Typography>
        <Typography paragraph>
          Loosely, you could say I have used Node since I started using React.
          Node provides npm, and the runtime for it&apos;s commands and
          processes. For a static React app, this is simply installing
          dependencies and building the output files through webpack. Slightly
          less loosely, you could consider developing from &quot;Create React
          App&quot; (CRA) using Node, since it goes one step further and runs a
          Node server to handle hot module replacement (HMR). However, neither
          of these scenarios really prove much knowledge of working with Node.
        </Typography>
        <Typography paragraph>
          Situations that I personally consider to be &quot;working with
          Node&quot; include server-side rendering, using the API functionality
          from Next.JS, or using something like Express.js. I have a moderate
          level of experience in these areas, but I also don&apos;t believe that
          developing in Node is all that different from developing for the
          browser. There are usually different purposes and patterns - handling
          requests, connecting to a database, etc, but ultimately it is still
          JavaScript (or preferably TypeScript).
        </Typography>
      </>
    ),
  },
  {
    name: "HTML/CSS",
    years: 8,
    body: (
      <>
        <Typography paragraph>
          The foundational technologies of web development that are less and
          less frequently used directly. In college, I built a website for a
          tree service company using pure HTML and CSS. It was repetitive,
          difficult to parse visually, and slow to write. However, it gave me an
          excellent base knowledge for these technologies that are now often
          abstracted away (JSX, SCSS, SASS, JSS, etc).
        </Typography>
        <Typography paragraph>
          I recently spent some time learning CSS flex-box which has
          significantly increased my ability to create layouts manually. Instead
          of positioning things with margin, bootstrap grids, or MUI Grids, I am
          now comfortable creating CSS layouts from scratch if needed (this
          website uses CSS modules, and flex-box extensively).
        </Typography>
      </>
    ),
  },
  {
    name: "Java/Spring",
    years: 1,
    body: (
      <>
        <Typography paragraph>
          Working with Spring/Spring Boot has interested me for a few years. The
          main driver for this was just wanting to learn something a bit more
          mainstream than Laravel for backend development.
        </Typography>
        <Typography paragraph>
          I have taken pluralsite courses on Maven, Spring, Spring MVC, and have
          worked professionaly on one Java/Spring project.
        </Typography>
        <Typography paragraph>
          The concepts are simple enough, often shared across other languages
          and frameworks. Learning Maven was the most important step of learning
          Java for me. My opinion as a newer user is that most growth from this
          point on will be learning what and how Spring does things behind the
          scenes in order to better take advantage of what they have to offer.
        </Typography>
      </>
    ),
  },
];
