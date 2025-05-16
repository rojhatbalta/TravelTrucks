import { formInitials } from "../../utils/formInitials";
import { formSchema } from "../../utils/formSchema";
import toast from "react-hot-toast";
import { Formik, Field, Form, ErrorMessage } from "formik";
import styles from "./BookForm.module.css";
import Button from "../Button/Button";

function BookForm() {
  return (
    <Formik
      initialValues={formInitials}
      onSubmit={() => toast.success("Successfully booked!")}
      validationSchema={formSchema}
    >
      <Form className={styles.form}>
        <Field
          id="name"
          name="name"
          placeholder="Name*"
          className={styles.input}
        />
        <ErrorMessage name="name" component="p" className={styles.error} />
        <Field
          id="email"
          name="email"
          type="email"
          placeholder="Email*"
          className={styles.input}
        />
        <ErrorMessage name="email" component="p" className={styles.error} />
        <Field
          name="bookingDate"
          id="bookingDate"
          type="date"
          className={styles.input}
        />
        <ErrorMessage
          name="bookingDate"
          component="p"
          className={styles.error}
        />
        <Field
          type="textarea"
          id="comment"
          name="comment"
          placeholder="Comment"
          className={`${styles.input} ${styles.textarea}`}
        />
        <ErrorMessage name="comment" component="div" className={styles.error} />
        <Button text="Send" />
      </Form>
    </Formik>
  );
}

export default BookForm;
