import { useFormik } from "formik";
import {
  TextField,
  Select,
  MenuItem,
  InputLabel,
  Button,
  Box,
  Chip,
  FormControlLabel,
  FormLabel,
  RadioGroup,
  Radio,
  Typography,
  Grid,
  Paper
} from "@mui/material";
import Textarea from "@mui/joy/Textarea";
import { countries, hobbies } from "../constants";


const validate = (values) => {
  const errors = {};
  if (!values.username) {
    errors.username = "Username is Required";
  } 
  if (!values.address) {
    errors.address = "Address is Required";
  }
  if (!values.country) {
    errors.country = "Country is Required";
  }
  if (!values.gender) {
    errors.gender = "Gender is Required";
  }
  if (!values.hobbies) {
    errors.hobbies = "Hobbies are Required";
  } else if (values.hobbies.length < 2) {
    errors.hobbies = "There must be atleast two hobbies";
  }
  return errors;
};

const UserForm = () => {
  const formik = useFormik({
    initialValues: {
      username: "",
      address: "",
      country: "",
      hobbies: [],
      gender: "",
    },
    validate,
    validateOnChange: false, 
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <Paper elevation={8} className="flex justify-center items-center w-11/12 h-[60%] p-6 relative">
      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={2} justifyContent="center" justifyItems="center">
          <Grid item md={6} xs={12}>
            <TextField
              style={{ background: "white", width: "80%" }}
              name="username"
              id="username"
              label="Username"
              value={formik.values.username}
              onChange={formik.handleChange}
              variant="outlined"
            />
            {formik.errors.username ? (
              <Typography className=" text-red-600 text-xs">
                {formik.errors.username}
              </Typography>
            ) : null}
          </Grid>
          <Grid item md={6} xs={12}>
            <Textarea
              style={{ width: "80%" }}
              name="address"
              value={formik.values.address}
              onChange={formik.handleChange}
              placeholder="Type your address"
              variant="outlined"
              minRows={2}
            />
              {formik.errors.address ? (
              <Typography className=" text-red-600 text-xs">
                {formik.errors.address}
              </Typography>
            ) : null}
          </Grid>
          <Grid item md={6} xs={12}>
            <InputLabel id="demo-simple-select-label">Country</InputLabel>
            <Select
              style={{ background: "white", width: "80%" }}
              id="country"
              name="country"
              value={formik.values.country}
              onChange={formik.handleChange}
              label="Country"
            >
              {countries.map((name) => (
                <MenuItem
                  key={name}
                  value={name}
                >
                  {name}
                </MenuItem>
              ))}
            </Select>
            {formik.errors.country ? (
              <Typography className=" text-red-600 text-xs">
                {formik.errors.country}
              </Typography>
            ) : null}
          </Grid>
          <Grid item md={6} xs={12}>
            <InputLabel id="demo-multiple-chip-label">Hobbies</InputLabel>
            <Select
              style={{ background: "white", width: "80%" }}
              labelId="demo-multiple-chip-label"
              id="demo-multiple-chip"
              name="hobbies"
              multiple
              value={formik.values.hobbies}
              onChange={formik.handleChange}
              renderValue={(selected) => (
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                  {selected.map((value) => (
                    <Chip key={value} label={value} />
                  ))}
                </Box>
              )}
            >
              {hobbies.map((name) => (
                <MenuItem
                  key={name}
                  value={name}
                >
                  {name}
                </MenuItem>
              ))}
            </Select>
            {formik.errors.hobbies ? (
              <Typography className=" text-red-600 text-xs">
                {formik.errors.hobbies}
              </Typography>
            ) : null}
          </Grid>
          <Grid item md={6} xs={12}>
            <FormLabel id="demo-row-radio-buttons-group-label">
              Gender
            </FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
            >
              <FormControlLabel
                value="male"
                name="gender"
                control={<Radio />}
                label="Male"
                onChange={formik.handleChange}
              />
              <FormControlLabel
                name="gender"
                value="female"
                control={<Radio />}
                label="Female"
                onChange={formik.handleChange}
              />
            </RadioGroup>
            {formik.errors.gender ? (
              <Typography className=" text-red-600 text-xs">
                {formik.errors.gender}
              </Typography>
            ) : null}
          </Grid>
          <Grid item className="absolute bottom-2 right-4">
            <Button color="primary" variant="contained" type="submit">
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </Paper>
  );
};

export default UserForm;
