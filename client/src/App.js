import logo from './logo.svg';
import './App.css';
import {Container, AppBar, Typography, Grow, Grid} from '@material-ui/core';

import blogs from './images/blogs.png';
import Form from './components/Form/Form';
import Posts from './components/Posts/Posts';
import useStyles from './styles';

function App() {
  const classes = useStyles();
  return (
    <Container maxidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography variant="h2" align="center">Blogs</Typography>
        <img className={classes.image} src={blogs} alt="blogs" height="60" />
      </AppBar>
      <Grow in>
        <Container>
          <Grid container justify="spece-between" alignment="stretch" spacing={3}>
            <Grid item xs={12} sm={6}>
              <Posts></Posts>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Form></Form>
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
}

export default App;
