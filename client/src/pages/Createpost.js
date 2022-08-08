import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

export default function Createpost() {
  const initialValues = {
    title:"",
    title:"",
    postText:"",

  }
  const handleSubmit = ()=>{

  }
  return (
    <div className="main-container-wrapper">
      <div className="create-post-section-wrapper">
        <div className="create-post-form">
          <Formik  initialValues={initialValues} onSubmit={handleSubmit}>
            <Form>
              <div className="each-field-wrapper">
              
                <Field
                  id="inputCreatepost"
                  autocomplete="off"
                  name="title"
                  placeholder="Ex. Title...." className="input-field"
                />
              </div>

              <div className="each-field-wrapper">
               
                <Field
                  id="inputCreatepost"
                  name="username"
                  placeholder="Ex. John Doe...." className="input-field"
                />
              </div>

              <div className="each-field-wrapper">
              
                <Field id="post" name="postText" placeholder="Ex. Post...." className="input-field"/>
              </div>

              <div className="each-field-wrapper">
                <button className="post-Btn" type="submit">Create Post</button>
              </div>
            </Form>
          </Formik>
          </div>

          <div className="create-post-image-wrapper">
            <img src="/create.jpg" alt="" />
          </div>
     
      </div>
    </div>
  );
}
