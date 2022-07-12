import { Tab } from "@mui/material";
import { useNavigate } from "react-router-dom";

interface TabLinkProps {
  label: string;
  href: string;
}

export const TabLink = (props: TabLinkProps) => {
  const navigate = useNavigate();

  return (
    <Tab
      component="a"
      onClick={(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        event.preventDefault();
        navigate(props.href, { replace: true });
      }}
      {...props}
    />
  );
};
