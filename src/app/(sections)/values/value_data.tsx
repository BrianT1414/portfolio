import { Link, Typography } from "@mui/material";
import React from "react";

interface Value {
  name: string;
  body?: React.ReactNode;
}

export const values: Value[] = [
  {
    name: "Quality",
    body: (
      <>
        <Typography paragraph>
          Quality is of utmost importance to me; it drives everything I do. This
          begs the questions: quality of what, and in what way?
        </Typography>
        <Typography paragraph>
          To me it means quality of a product and everything that goes into
          making it. In terms of the product it means it works, is designed
          around the user, it effectively accomplishes its purpose, and is
          robust (handles more than just the happy-paths). In terms of product
          components it means its code is written well and it is scalable and
          maintainable - engineered rather than taped together.
        </Typography>
        <Typography paragraph>
          Most everyone can agree to the value of a quality product; quality of
          a product&apos;s development tends to be more contentious. It follows
          reason why it is undervalued: its advantages are taken for granted (
          <i>this is just how things should be</i> - that&apos;s right!), and
          the cost of its absence is difficult to associate to a cause from the
          outside.
        </Typography>
        <Typography paragraph>
          Quality of software is not black and white; it&apos;s a spectrum.
          Quality is a science, a pursuit; it requires observation and
          experimentation. It is a life-long search for &quot;better&quot;,
          always keeping a firm grasp of pragmatism and understanding the law of
          diminishing returns.
        </Typography>
        <Typography paragraph>What does quality software mean?</Typography>
        <ul>
          <li>
            <Typography>
              <b>Stability</b> - the product is not a source of worry. You can
              trust that it works, and will still work tomorrow. Releases are
              often non-events. When there are problems, they are small and
              inconsequentially fast to repair.
            </Typography>
          </li>
          <li>
            <Typography>
              <b>Maintainability</b> - how fast can you add new features or
              change an existing one? How many times do you hear &quot;we ran
              into some technical hurdles and it&apos;s taking a bit longer than
              we hoped&quot;? The pursuit of quality is the pursuit of
              proportional cost of change - a small change should cost a small
              amount, a medium change a medium amount, and so on.
            </Typography>
          </li>
        </ul>
      </>
    ),
  },
  {
    name: "Ownership",
    body: (
      <>
        <Typography paragraph>
          I believe that people do their best work when they feel a sense of
          ownership of what they&apos;re building. Ideally this means getting to
          take responsibility for a project in all areas, from development to
          deployment and support.
        </Typography>
        <Typography paragraph>
          Taking ownership costs something, it doesn&apos;t just mean you get to
          do whatever you want; it means you also have to own the results - good
          or bad. Ideally it means doing your own deployments and monitoring. It
          means you can&apos;t defer blame to another person or team when
          something goes wrong; you are responsible and (critically important)
          enabled to fix problems and, therefore, are motivated to make sure
          they never happen.
        </Typography>
        <Typography paragraph>
          Ownership isn&apos;t just a cost, it&apos;s also an important benefit.
          Feeling ownership helps you take pride in your work. It makes wins
          feel more personal, and accountability comes naturally instead of
          begrudgingly. Ownership feeds directly in to quality, which makes it a
          win for everybody. Above all, ownership cannot be used as a fear-based
          tool to make these things happen. It needs to come from a position of
          trust.
        </Typography>
      </>
    ),
  },
  {
    name: "Purpose",
    body: (
      <>
        <Typography paragraph>
          This is a value that does not enhance a project or job, but instead
          serves more as a filter. I am most motivated when the project I&apos;m
          working on makes a real difference. I don&apos;t need to change the
          world, but I do feel the need to help people. This can be in small
          ways: helping build a product that serves a need I can relate to,
          improving a user&apos;s experience with good UI and performance, or
          enabling other developers to do their best work. The form varies, but
          I do my best work when the product I&apos;m working on and my
          contributions to it are making a meaningful difference.
        </Typography>
      </>
    ),
  },
  {
    name: "Continuous Improvement",
    body: (
      <>
        <Typography paragraph>
          I&apos;m never satisfied with good enough; I am always pursuing
          &quot;better&quot;. This is a journey I can take myself, but I prefer
          to take with my teammates. Sharing each other&apos;s strengths and
          perspectives helps everybody, and accelerates growth otherwise done
          alone.
        </Typography>
        <Typography paragraph>
          I enjoy learning new technologies. Some of my favorite tools are those
          that I learned through long, research intensive processes sprinkled
          with failure - specifically Docker and TypeScript (read more in{" "}
          <Link href="/skills">skills</Link>). These are tools that solved
          problems I didn&apos;t know I had, but have now profoundly changed the
          way I work. This type of learning only comes if you are curious enough
          and motivated enough to seek out &quot;better&quot;.
        </Typography>
      </>
    ),
  },
  {
    name: "Pragmatism",
    body: (
      <>
        <Typography paragraph>
          To explain why I value pragmatism, I need to explain my view on
          Principle. I believe principles are critically important to good
          decision making. I make an effort to seek out good principles to
          adopt; I&apos;ve read books on agile, software architecture, design
          patterns, and more.
        </Typography>
        <Typography paragraph>
          A long time ago, from a source I can&apos;t remember, I read
          &quot;when you hold good principles, 90% of your decisions are already
          made for you&quot;. I believe this roughly holds true in software
          development too.
        </Typography>
        <Typography paragraph>
          Because principles potentially hold so much influence, I don&apos;t
          believe they should be followed blindly. Simply someone saying that
          &quot;this is the best way&quot; is not enough. Principles should be
          questioned, challenged, tested, until they are accepted at good.
          It&apos;s important that each person test the principles they choose
          to hold for two reasons: 1. not all are good 2. it gives you a deep
          understanding of <i>why</i> a principle is good. Principles must be
          blended with pragmatism in order to achieve the best outcome.
        </Typography>
        <Typography paragraph>
          <b>
            The importance of asking <i>why</i>:
          </b>
        </Typography>
        <Typography paragraph>
          If we can agree that principles apply 90% of the time, then we&apos;re
          still left with 10% to solve on our own. Solving these problems
          isn&apos;t the hard part; the hard part is know when abandoning
          principle is actually the right decision. To make this decision, we
          need to have a robust understanding of the value proposition a
          principle offers.
        </Typography>
        <Typography paragraph>
          We need to be able to accurately evaluate motives for diverging from
          principle. Is it just hard, and we&apos;re wanting to take the easy
          path? Or does the situation actually negate the underlying value of
          following the principle? Is the effort required far greater than the
          benefit? Or will the long-term result actually be worth additional
          time upfront? You can&apos;t make these decisions without knowing the{" "}
          <i>why</i>.
        </Typography>
        <Typography paragraph>
          I value the ability to make practical decisions. Whether it be
          regarding Agile, SOLID design, or any other method, best practice,
          architecture, or principle. I strive to find the sweet spot on the
          wide spectrum between a haphazard &quot;just get it done&quot; type of
          person and a theoritical only, impractical{" "}
          <Link
            href="https://www.joelonsoftware.com/2001/04/21/dont-let-architecture-astronauts-scare-you/"
            target="_blank"
          >
            architecture astronaut
          </Link>
          .
        </Typography>
      </>
    ),
  },
  {
    name: "Agility",
    body: (
      <>
        <Typography paragraph>
          &quot;<i>Agility</i>, does he mean Agile?&quot; Yeah, pretty much.
        </Typography>
        <Typography paragraph>
          I believe Agile practices work, if done right and for the right
          reasons. Agile is an ubrella that includes many more-specific
          displines of working. Broadly, it offers value by giving data
          (velocity or throughput estimation) for managers or those interested
          in knowing how long a project will take. It also provides a framework
          that allows for change. Finally, from a high level, it also promotes
          requent releases - which typically results in fewer problems and
          faster delivery.
        </Typography>
        <Typography paragraph>
          I would consider myself a bit of an Agile evanglist, but not
          necessarily an Agile purist. I recently heard of an agile team that
          decided they did not want to point stories - it took too much time and
          it just didn&apos;t seem worth it. This is pretty shocking to most
          people that know agile; you could understandably ask the question,
          &quot;why even do agile then?&quot;
        </Typography>
        <Typography paragraph>
          I pondered this, and came to the conclusion - from the outside looking
          in, I can&apos;t say if this was actually a good or bad decision.
          Maybe their situation is one with no deadlines and no one really cares
          to see the progress; they just want it to get done and be done well.
          If that&apos;s true, a lot of the value of story pointing is lost, so
          maybe it is the right call for their team.
        </Typography>
        <Typography paragraph>
          Would I personally still point things? Yeah, probably. I find that
          seeing a burndown and closing out points has a positive psychological
          effect for the team. The <i>point</i> being, Agile is flexible, and is
          most effective when you know your situation and the value each
          component brings to the table (see pragmatism).
        </Typography>
      </>
    ),
  },
  {
    name: "Collaboration",
    body: (
      <>
        <Typography paragraph>
          Collaboration helps people do their best work. In a more self-serving
          sense, it&apos;s also really fun. Both asynchronous and real-time
          collaboration are incredibly important, but I believe that real-time
          is unmatched in the value it can add.
        </Typography>
        <Typography paragraph>
          Remote work has made collaboration more difficult, but certainly not
          impossible. There&apos;s more resistance than just spinning a chair
          around and talking to your team. However, remote collaboration tools
          and a team mindset that values it can make remote work just as
          collaborative as it was before.
        </Typography>
        <Typography paragraph>
          A team I was on recently accomplished this using Slack huddles. We
          treated it almost like we were in the office; we would join randomly
          for long stretches and work on our own things, but with essentially no
          resistance to asking questions or providing input. We would do
          frequent screen shares and help each other problem solve and discuss
          better ways of doing things. There was no obligation to join, but we{" "}
          <i>wanted</i> to. It was highly productive, and frankly, it was a lot
          of fun.
        </Typography>
      </>
    ),
  },
];
