import { Formik, Form, Field, ErrorMessage } from 'formik'
import React, {Component} from 'react'

class RegisterForm extends Component {

    initialState = {
        name: "",
        job: "",
    }

    

    handleChange = (event) => {
        const {name, value} = event.target

        this.setState({
            [name]: value,
        })
    }
    
    submitForm = (values) => {
        this.props.handleSubmit(values)
        this.setState(this.initialState)
    }

    render() {
        //const {name, job} = this.state

        return (
            <Formik 
                initialValues={this.initialState}
                validate={
                    values => {
                        const errors = {}
                        if (!values.name) {
                            errors.name = "Required"
                        }
                        if (!values.job) {
                            errors.job = "Required"
                        }
                    }
                }
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        console.log(this.state)
                        this.submitForm(values);
                        setSubmitting(false);
                    }, 400);
                  }}
                >
                {({isSubmitting}) => (
                    <Form>
                        Name: <Field type="name" name="name"/>
                        <ErrorMessage name="name" component="div"/>
                        Job: <Field type="job" name="job"/>
                        <ErrorMessage name="job" component="div"/>
                        <button type="submit" disabled={isSubmitting}>Submit</button>
                    </Form>
                )}
            </Formik>
            
        )
    }
}

export default RegisterForm