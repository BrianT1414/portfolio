import {
  Card,
  CardContent,
  CardHeader,
  Chip,
  Button,
  Typography,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import Template from "../template";
import Link from "next/link";
import { github_repo_link } from "@/constants";

const description = (
  <>
    I currently only have one public project to show off - this website. I have
    the problem of picking too many hobbies to fill up my time - woodworking,
    mountain biking, golf, and many many more. On the occasion that I&apos;m in
    a programming-is-life kind of mood, I tend to focus on learning rather than
    building - reading books, watching conference presentations, or similar. I
    built this website for the sole purpose of filling this gap; to show at some
    small level that the experience I talk about is more than just words on a
    resume.
  </>
);

const itemsUsed = [
  "React",
  "Next.js",
  "Material UI",
  "TypeScript",
  "Docker",
  "GitHub Actions",
];

export default function Projects() {
  return (
    <Template title="Projects" description={description}>
      <div style={{ maxWidth: 600, margin: "auto", marginBottom: 30 }}>
        <Card>
          <CardHeader
            title="Portfolio Website"
            action={
              <Button
                component="a"
                href={github_repo_link}
                target="_blank"
                endIcon={<GitHubIcon />}
              >
                View on GitHub
              </Button>
            }
          />
          <CardContent>
            <Typography paragraph>
              This project is written in TypeScript using React and Next.js.
              Styling is done with CSS modules and Material UI components. It is
              packaged into a container image using Docker, and deployed in the
              cloud with Digital Ocean.
            </Typography>
            <Typography paragraph>
              The source-code is written very thoughtfully to demonstrate what
              is important to me as a developer. If you&apos;re interested, I
              would encourage you to{" "}
              <Link href={github_repo_link} target="_blank">
                take a look
              </Link>
              !
            </Typography>
            {itemsUsed.map((item) => (
              <Chip key={item} label={item} sx={{ mr: 1, mb: 1 }} />
            ))}
          </CardContent>
        </Card>
      </div>
    </Template>
  );
}
