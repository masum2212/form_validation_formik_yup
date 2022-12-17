import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useFormik } from "formik";
import Button from "@mui/material/Button";
import { singUpSchema } from "../schemas";
import { FormControl,Input, InputLabel, FormHelperText } from '@mui/material';

const initialValues = {
  name: "",
  email: "",
  password: "",
  confirm_password: "",
};

function Form() {
  const { values, handleSubmit, touched, handleChange, handleBlur, errors } =
    useFormik({
      initialValues: initialValues,
      validationSchema: singUpSchema,
      onSubmit: (values, { resetForm }) => {
        console.log(values);
        resetForm();
      },
    });
  console.log(errors);

  return (
    <div className="container">
      <Box
        onSubmit={handleSubmit}
        component="form"
        sx={{
          display: "flex",
          flexDirection: "column",
          "& .MuiTextField-root": { m: 1, width: "40ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="outlined-basic"
          label="Name"
          variant="outlined"
          name="name"
          onChange={handleChange}
          onBlur={handleBlur}
          values={values.name}
        />
        {errors.name && touched.name ? <p>{errors.name}</p> : null}
        <TextField
          id="outlined-basic"
          label="Email"
          variant="outlined"
          name="email"
          onChange={handleChange}
          onBlur={handleBlur}
          values={values.email}
        />
        {errors.email && touched.email ? <p>{errors.email}</p> : null}
        <TextField
          id="outlined-basic"
          label="Password"
          variant="outlined"
          name="password"
          onChange={handleChange}
          onBlur={handleBlur}
          values={values.password}
        />
        {errors.password && touched.password ? <p>{errors.password}</p> : null}
        <TextField
          id="outlined-basic"
          label="Confirm Password"
          variant="outlined"
          name="confirm_password"
          onChange={handleChange}
          onBlur={handleBlur}
          values={values.confirm_password}
        />
        {errors.confirm_password && touched.confirm_password ? (
          <p>{errors.confirm_password}</p>
        ) : null}
        <Button variant="contained" color="success" type="submit">
          Submit
        </Button>
      </Box>
      <FormControl>
        <InputLabel htmlFor="my-input">Email address</InputLabel>
        <Input id="my-input" aria-describedby="my-helper-text" />
        <FormHelperText id="my-helper-text">
          We'll never share your email.
        </FormHelperText>
      </FormControl>
    </div>
  );
}

export default Form;
