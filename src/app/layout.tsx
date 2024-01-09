import "@/assets/styles/globals.scss";
import LayoutSidebar from "@/components/layout/Sidebar";
import styles from "./layout.module.scss";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body>
        <div className={styles.mainWrapper}>
          <LayoutSidebar />
          <main style={{ minHeight: "200vh" }}>{children}</main>
        </div>
      </body>
    </html>
  );
}
