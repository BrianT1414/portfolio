import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Unstable_Grid2 as Grid,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import styles from "./index.module.css";
import { name, navMap, title } from "@/constants";
import { Bolt, AltRoute } from "@mui/icons-material";

export default function Home() {
  return (
    <main className={styles.container}>
      <div className={styles.name}>
        <div>
          <Typography variant="h1">{name}</Typography>
        </div>
        <div>
          <Typography variant="h3">{title}</Typography>
        </div>
      </div>
      <Grid container spacing={3} maxWidth="100%" m={1}>
        <Grid lgOffset={3} lg={3} md={6}>
          <Card sx={{ textAlign: "left", minHeight: 300, maxWidth: 655 }}>
            <CardHeader
              title={<Typography variant="h6">Quick Info</Typography>}
              avatar={<Bolt htmlColor="#ffcc08" />}
            />
            <CardContent>
              <List sx={{ paddingTop: 0 }}>
                <ListItem>
                  <Typography>
                    <b>Full-stack Developer</b> - Frontend, backend, database,
                    server, network
                  </Typography>
                </ListItem>
                <ListItem>
                  <Typography>
                    <b>Leader</b> - Experience leading teams of 2-10; a trusted
                    voice to upper-management
                  </Typography>
                </ListItem>
                <ListItem>
                  <Typography>
                    <b>Learner</b> - Always searching for <i>how</i>, <i>why</i>
                    , and <i>better</i>
                  </Typography>
                </ListItem>
              </List>
            </CardContent>
          </Card>
        </Grid>
        <Grid lg={3} md={6}>
          <Card sx={{ textAlign: "left", minHeight: 300, maxWidth: 655 }}>
            <CardHeader
              title={<Typography variant="h6">Purpose</Typography>}
              avatar={<AltRoute />}
            />
            <CardContent>
              <Typography paragraph>
                Find what you need, and nothing more.
              </Typography>
              <List sx={{ paddingTop: 0 }}>
                <ListItem>
                  <Typography>
                    <b>High-level Summary</b> - Quickly browse through lists of
                    my skills, values, and experience
                  </Typography>
                </ListItem>
                <ListItem>
                  <Typography>
                    <b>Deep-dive</b> - Get to know me! Spend as much time as
                    you&apos;d like reading about each technology I&apos;ve
                    worked with and qualities I value
                  </Typography>
                </ListItem>
              </List>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <div className={styles.actions_container}>
        <div className={styles.actions}>
          {Object.entries(navMap).map(([name, path]) => (
            <Button key={name} component="a" href={path} size="large">
              {name}
            </Button>
          ))}
        </div>
      </div>
    </main>
  );
}
