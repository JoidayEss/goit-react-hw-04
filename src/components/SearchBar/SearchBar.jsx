import { Field, Form, Formik } from "formik";
import s from "./SearchBar.module.css";

const SearchBar = ({ onChangeQuery }) => {
  const initialValues = {
    query: "",
  };
  const handleSubmit = (values) => {
    onChangeQuery(values.query);
  };
  return (
    <div className={s.header}>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form>
          <Field
            className={s.input}
            name="query"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
          <button className={s.button} type="submit">
            Search
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default SearchBar;
