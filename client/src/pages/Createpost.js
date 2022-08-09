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
    title: Yup.string().required("please enter  Title"),
    postText: Yup.string().required("please enter post"),
    username: Yup.string().min(3).max(15).required("please enter Username"),
  });
  const handleSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="main-container-wrapper">
      <h1 className="createpost-heading">Create Post</h1>
      <div className="create-post-section-wrapper">
        <div className="create-post-form">
          <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
            validationSchema={validationSchema}
          >
            <Form>
              <ErrorMessage
                name="title"
                component={"p"}
                style={{ textAlign: "center", color: "red" }}
              />
              <div className="each-field-wrapper">
                <Field
                  id="inputCreatepost"
                  autocomplete="off"
                  name="title"
                  placeholder="Enter  Title    Ex. Mystery Mist"
                  className="input-field"
                />
              </div>

              <ErrorMessage
                name="username"
                component={"p"}
                style={{ textAlign: "center", color: "red" }}
              />
              <div className="each-field-wrapper">
                <Field
                  id="inputCreatepost"
                  name="username"
                  placeholder="Enter Username  Ex. John123"
                  className="input-field"
                />
              </div>

              <ErrorMessage
                name="postText"
                component={"p"}
                style={{ textAlign: "center", color: "red" }}
              />
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

      {/* personal post */}

      <section className="user-posts">
        <h3>Previous Post</h3>
        <div className="cardItem-wrapper">
          {/* card */}
          <div className="cardItem">
            <div className="user-info">
              <img src="" alt="" />
              <div className="post-timestamp">
                <p>John211</p>
                <p>Aug 7 of 15:09</p>
              </div>
            </div>
            <div>
              
            </div>
            <p className="post-details">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex maxime
              error doloribus perspiciatis? Aliquid, provident.
            </p>
          </div>
           {/* card */}
          {/* card */}
          <div className="cardItem">
            <div className="user-info">
              <img src="" alt="" />
              <div className="post-timestamp">
                <p>John211</p>
                <p>Aug 7 of 15:09</p>
              </div>
            </div>
            <hr />
            <p className="post-details">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex maxime
              error doloribus perspiciatis? Aliquid, provident.
            </p>
          </div>
           {/* card */}
          {/* card */}
          <div className="cardItem">
            <div className="user-info">
              <img src="" alt="" />
              <div className="post-timestamp">
                <p>John211</p>
                <p>Aug 7 of 15:09</p>
              </div>
            </div>
            <hr />
            <p className="post-details">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex maxime
              error doloribus perspiciatis? Aliquid, provident.
            </p>
          </div>
           {/* card */}
          {/* card */}
          <div className="cardItem">
            <div className="user-info">
              <img src="" alt="" />
              <div className="post-timestamp">
                <p>John211</p>
                <p>Aug 7 of 15:09</p>
              </div>
            </div>
            <hr />
            <p className="post-details">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex maxime
              error doloribus perspiciatis? Aliquid, provident.
            </p>
          </div>
           {/* card */}
          {/* card */}
          <div className="cardItem">
            <div className="user-info">
              <img src="" alt="" />
              <div className="post-timestamp">
                <p>John211</p>
                <p>Aug 7 of 15:09</p>
              </div>
            </div>
            <hr />
            <p className="post-details">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex maxime
              error doloribus perspiciatis? Aliquid, provident.
            </p>
          </div>
           {/* card */}
          {/* card */}
          <div className="cardItem">
            <div className="user-info">
              <img src="" alt="" />
              <div className="post-timestamp">
                <p>John211</p>
                <p>Aug 7 of 15:09</p>
              </div>
            </div>
            <hr />
            <p className="post-details">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex maxime
              error doloribus perspiciatis? Aliquid, provident.
            </p>
          </div>
           {/* card */}
          {/* card */}
          <div className="cardItem">
            <div className="user-info">
              <img src="" alt="" />
              <div className="post-timestamp">
                <p>John211</p>
                <p>Aug 7 of 15:09</p>
              </div>
            </div>
            <hr />
            <p className="post-details">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex maxime
              error doloribus perspiciatis? Aliquid, provident.
            </p>
          </div>
           {/* card */}
          {/* card */}
          <div className="cardItem">
            <div className="user-info">
              <img src="" alt="" />
              <div className="post-timestamp">
                <p>John211</p>
                <p>Aug 7 of 15:09</p>
              </div>
            </div>
            <hr />
            <p className="post-details">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex maxime
              error doloribus perspiciatis? Aliquid, provident.
            </p>
          </div>
           {/* card */}

        </div>
      </section>
      {/* personal post */}
    </div>
  );
}
