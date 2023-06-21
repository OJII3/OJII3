import { Navbar } from "@/components/Navbar";
import styles from "@/styles/Template.module.css";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <div className={styles.fadeIn}>{children}</div>
    </>
  );
}
