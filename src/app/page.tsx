import { Button, Typography } from "@mui/material";
import styles from "./index.module.css";
import { name, navMap, title } from "@/constants";

export default function Home() {
  return (
    <main className={styles.container}>
      <div>
        <div>
          <Typography variant="h1">{name}</Typography>
        </div>
        <div>
          <Typography variant="h3">{title}</Typography>
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
          {Object.entries(navMap).map(([name, link]) => (
            <Button key={name} color="success" component="a" href={link}>
              {name}
            </Button>
          ))}
        </div>
      </div>
    </main>
  );
}
