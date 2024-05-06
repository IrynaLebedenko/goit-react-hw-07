import css from "./Contacts.module.css";
import { FaUser, FaPhoneAlt } from 'react-icons/fa';

import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';
const Contact = ({ name, number, id}) => {
    const dispatch = useDispatch();

    const handleDelete = () => dispatch(deleteContact(id))
    return (
        <div className={css.contactContainer}>
            
            <div><p className={css.contactInput}><FaUser />{name}</p>
                <p className={css.contactInput}><FaPhoneAlt/>{ number}</p>
            </div>
            <button className={css.btn} onClick={() => handleDelete(id)}>Delete</button>
        </div>
    )
}
export default Contact;