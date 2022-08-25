import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { BtnForm } from './ContactForm.styled';

export const MainForm = styled(Form)`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: ${p => p.theme.space[3]}px;
`;

export const FieldForm = styled(Field)`
    width: 400px;
`;

const schema = yup.object().shape({
    name: yup.string().required(),
    number: yup.string().required(),
    })
    
const initialValues = {
        name: '',
        number: '',
    }    

export const ContactForm = ({ onSubmit }) => { 
  function handleSubmit(e) {
    e.preventDefault();
    const name = e.target.name.value;
    const number = e.target.number.value;
    onSubmit(name, number)
    e.target.reset();
  }
    return <Formik initialValues={initialValues} validationSchema={schema}>
        <MainForm autoComplete='off' onSubmit={handleSubmit}>
          <label htmlFor='name'>Name
            <FieldForm type="text" name="name" pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
  required/>
          </label>
          <ErrorMessage name="name" component='div' />
          <br />
          <label htmlFor='number'>Number
                <FieldForm type="tel" name="number" pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
  required/>
          </label>
            <ErrorMessage name="number" component='div'/>
          <BtnForm type="submit">Add contact</BtnForm>
        </MainForm>
      </Formik>
}

ContactForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};
