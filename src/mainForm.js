import { Formik, Form, Field, ErrorMessage } from 'formik'
import {Link} from 'react-router-dom'
import React, {Component} from 'react'

class mainForm extends Component {

    initialState = {
        name: "",
        password: "",
    }

    submitForm = (values) => {
        this.props.handleSubmit(values)
        this.setState(this.initialState)
    }

    render() {
        //const {name, job} = this.state
        const formStyle = {
            marginLeft: "40%",
            marginTop: "20%"
        }
        return (
            <div>
                <Link to={'/home'}>Home</Link> <br></br>
                <Formik 
                    initialValues={this.initialState}
                    validate={
                        values => {
                            const errors = {}
                            if (!values.name) {
                                errors.name = "Required"
                            }
                            if (!values.password) {
                                errors.password = "Required"
                            }
                        }
                    }
                    onSubmit={(values, { setSubmitting }) => {
                        setTimeout(() => {
                            this.submitForm(values);
                            setSubmitting(false);
                        }, 400);
                    }}
                    >
                    {({isSubmitting}) => (
                        <Form style={formStyle}>
                            <p>Name: <Field type="name" name="name"/>
                            <ErrorMessage name="name" component="div"/>
                            </p>
                            <p>Password: <Field type="password" name="password"/>
                            <ErrorMessage name="password" component="div"/>
                            </p>
                            <button type="submit" disabled={isSubmitting}>Submit</button>
                        </Form>
                    )}
                </Formik>
            </div>
            
        )
    }
}

export default mainForm