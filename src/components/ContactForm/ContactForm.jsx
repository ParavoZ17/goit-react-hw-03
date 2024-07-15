import { ErrorMessage, Field, Form, Formik, validateYupSchema } from "formik";
import { useId } from "react";
import * as Yup from "yup";
import css from './ContactForm.module.css'


export default function ContactForm({onAdd}) {
  const nameId = useId();
  const numberId = useId();
  const userSchema = Yup.object().shape({
    userName: Yup.string("Use 'ABC'")
      .min(3, "Too short")
      .max(10, "Too long")
      .required("This is required"),
    number: Yup.string()
    .matches(/^\d+$/, "Use numbers only")
      .min(9, "Too short")
      .max(12, "Too long")
      .required("This is required"),
  });

  return (
    <Formik
      validationSchema={userSchema}
      initialValues={{ userName: "", number: "" }}
      onSubmit={(values, actions) => {
        const newContact = {
          name: values.userName,
          number: values.number,
        };
        actions.resetForm();
        onAdd(newContact);
      }}
    >
      <Form className={css.form}>
        <div className={css.item}>
          <label htmlFor="nameId" className={css.label}>Name</label>
          <Field id="nameId" name="userName" className={css.input}/>
          <ErrorMessage name="userName" component="span" className={css.attention}/>
        </div>
        <div className={css.item}>
          <label htmlFor="numberId" className={css.label}>Number</label>
          <Field id="numberId" name="number" className={css.input}/>
          <ErrorMessage name="number" component="span" className={css.attention}/>
        </div>
        <button type="submit" className={css.submit}>Add contact</button>
      </Form>
    </Formik>
  );
}
