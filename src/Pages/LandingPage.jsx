import { Grid } from '@mui/material'
import React from 'react'
import UserForm from '../Components/UserForm'

const LandingPage = () => {
  return (
    <Grid container className='bg-wave bg-no-repeat bg-cover h-full w-full'>
        <Grid item md={6} xs={0}>
           <div></div>
        </Grid>
        <Grid item md={6} xs={12} className='flex flex-col justify-center items-center'>
            {/* <p className='font-semibold md:text-5xl text-3xl mb-5'>Formik Form</p> */}
            <UserForm/>
        </Grid>
    </Grid>
  )
}

export default LandingPage