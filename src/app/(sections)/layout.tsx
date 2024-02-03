import { name, navMap, title } from "@/constants";
import { Button, Typography } from "@mui/material";
import styles from "./sections.module.css";

export default function SectionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      <header className={styles.nav_container}>
        <div className={styles.title_container}>
          <Typography variant="h3">{name}</Typography>
          <Typography variant="h5">{title}</Typography>
        </div>
        <div className={styles.actions_container}>
          <div className={styles.actions}>
            <Button component="a" href="/">
              Home
            </Button>
            {Object.entries(navMap).map(([name, item]) => (
              <Button key={name} component="a" href={item.path}>
                {name}
              </Button>
            ))}
          </div>
        </div>
      </header>
      <div className={styles.content}>{children}</div>
    </main>
  );
}
