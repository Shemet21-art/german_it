import { Drawer, makeStyles } from "@material-ui/core";
import "./styles.scss";

type Props = {
  children: any;
  open: boolean;
  onClose: () => void;
};

const useStyles = makeStyles({
  root: {
    zIndex: "10000 !important" as any,
  },

  paper: {
    padding: 15,
    width: 240,
    background: `linear-gradient(
      111.68deg,
      rgba(255, 255, 255, 0.9) 7.59%,
      rgba(255, 255, 255, 0.9) 102.04%
    )`,
  },
});

function SideDrawer({ children, open, onClose }: Props) {
  const classes = useStyles();

  return (
    <Drawer
      className="sideDrawer"
      classes={{ paper: classes.paper, root: classes.root }}
      anchor="left"
      open={open}
      onClose={onClose}
    >
      {children}
    </Drawer>
  );
}

export default SideDrawer;
