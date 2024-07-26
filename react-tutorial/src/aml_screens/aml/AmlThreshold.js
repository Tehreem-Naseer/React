import React from 'react';
import { useState } from 'react';
import '../css/aml.css'

function AmlThreshold ()  {

    const [values,setValues] = useState({
        application:'',
        senderEmail:'',
    })

    const handleChange = (e) => {
        setValues({...values, [e.target.name]:[e.target.value]})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(values);
    }

    const ResetFun = () => {
        setValues({
            senderEmail:'',
        })
    }

  return (
    <>
    <div className='container'>
      <h1>AML SYSTEM</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor='appl'>Application</label>
        <select name='application' id='appli' onChange={(e)=>handleChange(e)}>
            <option value="">Select</option>
        </select>

        <label htmlFor='emailSender'>Sender Email</label>
        <input type='email' placeholder='Sender Email' name='senderEmail' onChange={(e)=>handleChange(e)} required value={values.firstname}/>

        <label htmlFor='amlMonitor'>Enable AML Monitor</label>
        <input type="checkbox" id="checkbox1" name="option1" value="Option 1"/>

        <label htmlFor='daysMonitor'>Days To Monitor</label>
        <input type='number' name='monitorApplication'></input>

        <label htmlFor='emailBody'>Email Body</label>
        <textarea name="emailBody" id="emailBody" cols={30} rows={10} placeholder='Email Body'></textarea>

        <button type='button' onClick={ResetFun}>Reset</button>
        <button type='submit'>Submit</button>

      </form>
    </div>
    </>
  );
};

export default AmlThreshold;