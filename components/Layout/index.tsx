// components/layout.tsx

import Footer from "../Footer";
import Header from "../Header";
import { useState } from "react";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps): JSX.Element {
  // const [reload, setReload] = useState(false);
  return (
    <>
      <main>
        <Header />
        {children}
        <Footer />
      </main>
    </>
  );
}
