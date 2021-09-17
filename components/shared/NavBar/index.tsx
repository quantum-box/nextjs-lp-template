import { CircularProgress, CircularProgressLabel } from "@chakra-ui/react";
import { ArrowBackIcon } from "@chakra-ui/icons";

interface Props {
  title?: string;
  percentage?: number;
  onBackTapped?: () => void;
}

export const NavBar: React.FC<Props> = ({
  title = "",
  percentage = 0,
  onBackTapped,
}) => {
  return (
    <nav className="sticky top-0 z-10 w-screen h-16 bg-white flex justify-between items-center px-4">
      <span className="flex items-center">
        {onBackTapped && (
          <button onClick={onBackTapped} className="flex items-center mr-2">
            <ArrowBackIcon w={6} h={6} />
          </button>
        )}
        {title && (
          <h1 className="font-bold tracking-tighter md:tracking-normal">
            {title}
          </h1>
        )}
      </span>

      <CircularProgress value={percentage} color="blue.400">
        <CircularProgressLabel>{percentage}%</CircularProgressLabel>
      </CircularProgress>
    </nav>
  );
};
