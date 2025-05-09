import { ErrorMessage, Field, Form, Formik } from "formik";
import { FilterType } from "../../../redux/users/usersReducer";

const validate = (values: FilterType) => {
    const errors = {};
    return errors;
};

type PropsType = {
    onFilterChanged: (filter: FilterType) => void
};

const UserSearchForm: React.FC<PropsType> = (props) => {

    const submit = (values: FilterType, {setSubmitting}: { setSubmitting: (isSubmitting: boolean) => void }) => {
        props.onFilterChanged(values);
        setTimeout(() => {
            setSubmitting(false);
        }, 400);
    };

    return (
        <div>
            <Formik
                initialValues={{ term: '', friend: null }}
                validate={ validate }
                onSubmit={ submit }
            >
            {({isSubmitting}) => (
                <Form>
                    <Field type="text" name="term" />
                    <ErrorMessage name="friend" component="div" />
                    <Field name="friend" as="select">
                        <option value="null">All</option>
                        <option value="true">Only followed</option>
                        <option value="false">Only unfollowed</option>
                    </Field>
                    <button type="submit" disabled={ isSubmitting }>Find</button>
                </Form>
            )}
            </Formik>
        </div>
    )
};

export default UserSearchForm;