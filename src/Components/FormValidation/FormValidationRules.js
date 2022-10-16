export default function validate(values) {
  let errors = {};

  if (!values.firstName) {
    errors.firstName = "First Name is required";
  }
  if (!values.lastName) {
    errors.lastName = "Last Name is required";
  }
  if (!values.day) {
    errors.day = "Day is required";
  }
  if (!values.month) {
    errors.month = "Month  is required";
  }
  if (!values.year) {
    errors.year = "Year  is required";
  }

  if (!values.email) {
    errors.email = "Email address is required";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Email address is invalid";
  }
  if (!values.phone) {
    errors.phone = "Phone Number  is required";
  }

  return errors;
}
