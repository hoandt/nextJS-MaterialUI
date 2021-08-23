import { makeStyles, Toolbar, Typography } from "@material-ui/core";
import { AppBar } from "@material-ui/core";
import { Menu } from "@material-ui/icons";
const useStyles = makeStyles((theme) => ({
  pushToolbar: {
    flexGrow: 1,
  },
  toolbar: {
    ...theme.mixins.toolbar,
  },
}));
function HeaderBar() {
  const classes = useStyles();
  return (
    <>
      <AppBar>
        <Toolbar>
          <Typography className={classes.pushToolbar}>Hello</Typography>
          <Menu />
        </Toolbar>
      </AppBar>
      <div className={classes.toolbar}></div>
    </>
  );
}

export default HeaderBar;
