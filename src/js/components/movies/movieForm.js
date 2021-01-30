import React from 'react';
import { useDispatch } from 'react-redux'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { useFormik } from 'formik';

import { hideModal } from '../../actions/actions'
import { saveNewMovieRemote, updateMovieRemote } from '../../reducers/movies'
import * as Yup from 'yup'

const MovieForm = ({ id }) => {
    // Pass the useFormik() hook initial form values and a submit function that will
    // be called when the form is submitted
    const dispatch = useDispatch()
    var result = {
        id: '',
        title: '',
        posterurl: '',
        genres: [],
        storyline: ''
    }


    React.useEffect(() => {
        const fetchData = async () => {
            result = await fetch(`https://600d74baf979dd001745cba7.mockapi.io/api/v1/movies/${id}`).then(res => res.json())
            Object.keys(result).forEach(k => {
                if (formik) {
                    formik.setFieldValue(k, result[k])
                }
            })
        }

        if (id) {
            result = fetchData()
        }

    }, [id])

    const formik = useFormik({
        initialValues: result,
        enableReinitialize: true,
        validationSchema: MovieSchema,
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
            const saveNewMovieThunk = saveNewMovieRemote(values)
            //console.log('form submit: ' + (id ? 'edit': 'add') ) 
            if (id != undefined) {
                dispatch(updateMovieRemote(values))
            } else {
                dispatch(saveNewMovieThunk)
            }

            dispatch(hideModal(true))

        },
    });


    return (
        <>
            <Form size="lg" variant="dark" onSubmit={formik.handleSubmit}>
                <Form.Control type="hidden" value={formik.values.id} />

                <Form.Group controlId="title">
                    <Form.Label size="lg">TITLE</Form.Label>
                    <Form.Control name="title" type="text"
                        onChange={formik.handleChange}
                        value={formik.values.title} />
                    {formik.touched.title && formik.errors.title ? (
                        <div>{formik.errors.title}</div>
                    ) : null}
                </Form.Group>
                <Form.Group controlId="posterurl">
                    <Form.Label size="lg">POSTER URL</Form.Label>
                    <Form.Control type="text"
                        onChange={formik.handleChange}
                        value={formik.values.posterurl} />
                    {formik.touched.posterurl && formik.errors.posterurl ? (
                        <div>{formik.errors.posterurl}</div>
                    ) : null}
                </Form.Group>
                <Form.Group controlId="releaseDate">
                    <Form.Label>RELEASE DATE</Form.Label>
                    <Form.Control type="date" placeholder="Select Date" />
                    {formik.touched.releaseDate && formik.errors.releaseDate ? (
                        <div>{formik.errors.releaseDate}</div>
                    ) : null}
                </Form.Group>
                <Form.Group controlId="genres" name="genres">
                    <Form.Label>GENRE</Form.Label>
                    <Form.Control as="select"
                        onChange={formik.handleChange}
                        multiple={true}
                        value={formik.values.genres} >
                        <option >Action</option>
                        <option>Comedy</option>
                        <option>Drama</option>
                        <option>Thriller</option>
                        <option>Western</option>
                    </Form.Control>
                    {formik.touched.genres && formik.errors.genres ? (
                        <div>{formik.errors.genres}</div>
                    ) : null}
                </Form.Group>
                <Form.Group controlId="storyline">
                    <Form.Label>STORYLINE</Form.Label>
                    <Form.Control type="text" placeholder="Overview here"
                        onChange={formik.handleChange}
                        value={formik.values.storyline}
                    />
                    {formik.touched.storyline && formik.errors.storyline ? (
                        <div>{formik.errors.storyline}</div>
                    ) : null}
                </Form.Group>

                <Button variant="danger" type="submit" >SUBMIT</Button>{' '}
                <Button variant="outline-danger" type="button">RESET</Button>

            </Form>
        </>
    );
};


const MovieSchema = Yup.object().shape({
    title: Yup.string()
        .min(5, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    posterurl: Yup.string().url('Please, enter valid URL')
        .required('Required'),
    genres: Yup.array().of(Yup.string()).required('Required'),
    releaseDate: Yup.date().default(function () {
        return new Date();
    }),
    storyline: Yup.string()
        .min(5, 'Too Short!')
        .max(500, 'Too Long!')
        .required('Required'),

});


export default MovieForm