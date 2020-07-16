import React from "react";
import { connect } from "react-redux";
import { Typography, Button, Paper, CircularProgress } from "@material-ui/core";
import { Link } from "react-router-dom";
function Dashboard({ authenticated, loading }) {
  if (loading) {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "150px",
        }}
      >
        <CircularProgress size={120} thickness={2} />
      </div>
    );
  }
  if (!loading && !authenticated) {
    return (
      <div className="dashboard">
        <Paper className="paper">
          <Typography variant="h4">User Not Logged In</Typography>
          <div className="buttons">
            <Button
              className="login"
              component={Link}
              to="/login"
              variant="contained"
              color="secondary"
            >
              Log In
            </Button>
            <Button
              className="register"
              component={Link}
              to="/register"
              color="primary"
            >
              Register
            </Button>
          </div>
        </Paper>
      </div>
    );
  } else {
    return (
      <div className="dashboard">
        <Paper className="paper">
          <Typography>User Logged In</Typography>
        </Paper>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  authenticated: state.user.authenticated,
  loading: state.user.loading,
});
export default connect(mapStateToProps)(Dashboard);
