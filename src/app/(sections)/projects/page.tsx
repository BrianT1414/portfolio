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
            action={<Button endIcon={<GitHubIcon />}>View on GitHub</Button>}
          />
          <CardContent>
            <Typography paragraph>
              This project is written in TypeScript using React and Next.js.
              Styling is done with CSS modules and Material UI components. It is
              packaged into a container image using Docker, and deployed in the
              cloud with Digital Ocean.
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
