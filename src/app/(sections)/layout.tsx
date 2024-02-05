import { name, navMap, title } from "@/constants";
import { Button, Typography } from "@mui/material";
import styles from "./sections.module.css";
import MobileNav from "@/components/MobileNav";
import Link from "next/link";

export default function SectionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      <header className={styles.nav_container}>
        <Link href="/" className={styles.title_container}>
          <Typography variant="h3">{name}</Typography>
          <Typography variant="h5">{title}</Typography>
        </Link>
        <div className={styles.mobile_actions}>
          <MobileNav />
        </div>
        <div className={styles.actions_container}>
          <div className={styles.actions}>
            <Button component="a" href="/">
              Home
            </Button>
            {Object.entries(navMap).map(([name, path]) => (
              <Button key={name} component="a" href={path} size="large">
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
