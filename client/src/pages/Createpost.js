import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

export default function Createpost() {
  const initialValues = {
    title: "",
    username: "",
    postText: "",
  };
  const validationSchema = Yup.object().shape({
    title: Yup.string().required('you must enter a title'),
    postText: Yup.string().required(),
    username: Yup.string().min(3).max(15).required(),
  });
  const handleSubmit = (data) => {
    console.log(data)
  };
  return (
    <div className="main-container-wrapper">
      <div className="create-post-section-wrapper">
        <div className="create-post-form">
          <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
            validationSchema={validationSchema}
          >
            <Form>
                <ErrorMessage name="title" component={'p'} style={{textAlign:"center", color:"red"}}/>
              <div className="each-field-wrapper">
                <Field
                  id="inputCreatepost"
                  autocomplete="off"
                  name="title"
                  placeholder="Ex. Title...."
                  className="input-field"
                />
              </div>

              <ErrorMessage name="username" component={'p'} style={{textAlign:"center", color:"red"}}/>
              <div className="each-field-wrapper">
                <Field
                  id="inputCreatepost"
                  name="username"
                  placeholder="Ex. John Doe...."
                  className="input-field"
                />
              </div>

                <ErrorMessage name="postText" component={'p'} style={{textAlign:"center", color:"red"}}/>
              <div className="each-field-wrapper">
                <Field
                  id="post"
                  name="postText"
                  placeholder="Ex. Post...."
                  className="input-field"
                />
              </div>

              <div className="each-field-wrapper">
                <button className="post-Btn" type="submit">
                  Create Post
                </button>
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
