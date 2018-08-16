import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Button from '@material-ui/core/Button';
import { connect } from "react-redux";
import { formSubmit } from '../actions';
import { Redirect } from "react-router-dom";

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
});


class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Text"
    };
  }
  handleClick = event => {
    console.log('Handle Click');
    this.props.handleSubmit('hey..! whats up..!');
  };
  render() {
    const { classes, isAuthenticated } = this.props;
    console.log(isAuthenticated);
    if(isAuthenticated) {
      this.props.history.push('/');
    }
    return (
      <div>
        <FormControl error aria-describedby="name-error-text">
          <InputLabel htmlFor="name-error">Name</InputLabel>
          <Input
            id="name-error"
            value={this.state.name}
            onChange={this.handleChange}
          />
          <FormHelperText id="name-error-text">Error</FormHelperText>
          <Button variant="contained" color="primary" className={classes.button} onClick={this.handleClick}>
            Primary
          </Button>
        </FormControl>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.LoginReducer.isAuthenticated,
  }
};

const mapDispatchToProps = dispatch => ({
  handleSubmit: (data) => {
    dispatch(formSubmit(data));
  }
});

const connectedComponent = connect(mapStateToProps, mapDispatchToProps)(LoginPage);

export default withStyles(styles)(connectedComponent);
