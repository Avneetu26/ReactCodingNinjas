import "./styles.css";

// Create an object named "styles" to store all the styles.
export default function App() {
  return (
    <div className="App">
      {/* Use an internal style object instead of inline styles for the form element. */}
      <form style={styles.form}>
        {/* Use an internal style object instead of inline styles for the heading. */}
        <h3 style={styles.heading}>Sign Up</h3>
        {/* Use an internal style object instead of inline styles for the username input. */}
        <input style={styles.inputs} placeholder="Username" />
        {/* Use an internal style object instead of inline styles for the email input. */}
        <input style={styles.inputs} placeholder="Email" />
        {/* Use an internal style object instead of inline styles for the password input. */}
        <input style={styles.inputs} placeholder="Password" />
        {/* Use an internal style object instead of inline styles for the action container. */}
        <div style={styles.actions}>
          {/* Use an internal style object instead of inline styles for the Cancel button. */}
          <button style={styles.buttons}>Cancel</button>
          {/* Use an internal style object instead of inline styles for the Login button. */}
          <button style={styles.buttons}>Login</button>
        </div>
      </form>
    </div>
  );
}

const styles = {
  form: {
    width: "60%",
    margin: "50px auto",
    display: "flex",
    flexDirection: "column", // fixed typo here
    gap: "20px"
  },

  heading: {
    fontSize: "2rem",
    letterSpacing: "2px"
  },

  inputs: {
    padding: "10px"
  },

  actions: {
    display: "flex",
    justifyContent: "center",
    gap: "20px"
  },

  buttons: {
    outline: "none",
    paddingBlock: "5px",
    width: "100px",
    backgroundColor: "red",
    color: "white",
    cursor: "pointer"
  }
};
