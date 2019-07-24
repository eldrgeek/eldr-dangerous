import React from "react";
function emitEvent() {
  window.fbq("track", "CompleteRegistration", {
    value: 200,
    currency: "USD"
  });
}
function Register() {
  return (
    <div>
      <h2>Register</h2>
      <button id="submitButton" onClick={emitEvent}>
        Complete Registration
      </button>
      {/* <script type="text/javascript">
document.getElementById('submitButton').addEventListener('click', function() {
insert_event_code_here;
...
}, false);
</script> */}
    </div>
  );
}
export default Register;
