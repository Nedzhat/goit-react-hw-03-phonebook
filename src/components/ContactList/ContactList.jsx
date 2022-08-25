import { BtnForm } from 'components/ContactForm/ContactForm.styled';
import PropTypes from 'prop-types';
import { ContactItem } from './ContactList.styled';


export const ContactList = ({visibleContacts, deleteContact}) => {
    return <ul>
          {visibleContacts.map(({id, name, number}) => {
            return <ContactItem key={id}>
              <span>
                {name}:
              </span>
              <span>
                {number}
              </span>
              <BtnForm onClick={() => deleteContact(id)}>Удалить</BtnForm>
            </ContactItem>
          })}
      </ul>
}

ContactList.propTypes = {
    visibleContacts: PropTypes.array.isRequired,
    deleteContact: PropTypes.func.isRequired,
}