import { AppBar, NavBar } from "components/shared";
import { MetaHead } from "components/shared/MetaHead";
import { Progress } from "@chakra-ui/react";
import { Footer } from "components/shared/Footer";

interface Props {
  children: React.ReactNode;
  // if title is not defined, navbar is disabled.
  title?: string;
  description?: string;
  progress?: number;
  onBackTapped?: () => void;
  navBar?: boolean;
  loading?: boolean;
  className?: string;
  ogpUrl?: string;
  footer?: boolean;
}
const Layout: React.FC<Props> = ({
  children,
  title,
  description,
  progress,
  onBackTapped,
  navBar = false,
  loading = false,
  className,
  ogpUrl,
  footer = false,
}) => {
  return (
    <>
      <MetaHead title={title} description={description} image={ogpUrl} />
      <AppBar className="w-screen z-10" />
      {navBar && (
        <NavBar
          title={title}
          percentage={progress}
          onBackTapped={onBackTapped}
        />
      )}
      {loading ? (
        <Progress size="xs" isIndeterminate />
      ) : (
        <main className={className}>{children}</main>
      )}
      {footer && <Footer />}
    </>
  );
};

export default Layout;
