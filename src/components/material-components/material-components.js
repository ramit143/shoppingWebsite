import { Button, TextField } from "@mui/material";



export function MaterialComponent () {

    function handleTextField (e) {
         alert(e.target.value  )
    }

    return (
        <div className="container-fluid">
        <h2>Bootstrap Button</h2>
          <button className="btn btn-primary">Register</button>

        <h2>React MUI Button</h2>

          <TextField onChange={handleTextField} label="Your Email" variant="standard"></TextField>
          <br/><br/>
          <Button variant="contained" color="success">Register</Button>
        </div>
    )
}