import { Button, Typography } from "@mui/material";
import styles from "./index.module.css";

export default function Home() {
  return (
    <main className={styles.container}>
      <div>
        <div>
          <Typography variant="h1">Brian Thompson</Typography>
        </div>
        <div>
          <Typography variant="h3">Software Developer</Typography>
        </div>
      </div>
      <div className={styles.introduction_container}>
        <Typography className={styles.introduction}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Typography>
      </div>
      <div className={styles.actions_container}>
        <div className={styles.actions}>
          <Button color="success" component="a" href="/">
            Skills
          </Button>
          <Button color="success" component="a" href="/values">
            Values
          </Button>
          <Button color="success" component="a" href="/">
            Project Highlights
          </Button>
          <Button color="success" component="a" href="/">
            Work History
          </Button>
        </div>
      </div>
    </main>
  );
}
