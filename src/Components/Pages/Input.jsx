import React from 'react';
import "../Style/input.css";
import Navbar from "./Navbar";


const Input = () => {
  return (
    <>
    <Navbar/>
       <div class="main_box">
        <h1>Enter your courses to find the <br/> perfect time schedule</h1>
        <input class="term_input" placeholder="Enter your term"></input>

        <h5 class="input_subject">Subject</h5>
        <select id="course_code" class="subject_input" name="Subject">
    <option value="volvo">CS</option>
    <option value="saab">CO</option>
    <option value="fiat">MATH</option>
    <option value="audi">AFM</option>
  </select><br/>
  <select id="course_code" class="subject_input" name="Subject">
    <option value="volvo">CS</option>
    <option value="saab">CO</option>
    <option value="fiat">MATH</option>
    <option value="audi">AFM</option>
  </select><br/>
  <select id="course_code" class="subject_input" name="Subject">
    <option value="volvo">CS</option>
    <option value="saab">CO</option>
    <option value="fiat">MATH</option>
    <option value="audi">AFM</option>
  </select><br/>
  <select id="course_code" class="subject_input" name="Subject">
    <option value="volvo">CS</option>
    <option value="saab">CO</option>
    <option value="fiat">MATH</option>
    <option value="audi">AFM</option>
  </select><br/>
  <select id="course_code" class="subject_input gap" name="Subject">
    <option value="volvo">CS</option>
    <option value="saab">CO</option>
    <option value="fiat">MATH</option>
    <option value="audi">AFM</option>
  </select>
       </div>
    </>
  )
}

export default Input