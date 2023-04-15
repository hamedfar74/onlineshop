export const validate = (data, type) => {
  const errors = {};

  

  if (!data.email) {
    errors.email = "Email required";
  } else if (!/(\w\.?)+@[\w\.-]+\.\w{2,4}/.test(data.email)) {
    errors.email = "Email Address is Invalid";
  } else {
    delete errors.email;
  }

  if (!data.password) {
    errors.password = "Password is required";
  } else if (data.password.length < 6) {
    errors.password = "Password need to be 6 character or more ";
  } else {
    delete errors.password;
  }

  
  if (type === "signup") {
    if (!/[a-zA-Z][a-zA-Z0-9-_]{4,24}/.test(data.name)) {
      errors.name = "Username required";
    } else {
     delete errors.name;
    }

    if (!data.confirmPassword) {
        errors.confirmPassword = "Confirm the Password";
    } else if (data.confirmPassword !== data.password) {
        errors.confirmPassword = "Password Do Not Match";
    } else {
        delete errors.confirmPassword;
    }
    
    if (data.isAccepted) {
      delete errors.isAccepted;
    } else {
      errors.isAccepted = "Accept Our Terms";
    }
  }

  return errors;
};
