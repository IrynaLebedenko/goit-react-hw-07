import ContactForm from "../contactForm/ContactForm";
import SearchBox from "../searchBox/SearchBox";
import ContactList from "../contactList/ContactList";
import css from './App.module.css'
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { selectIsLoading, selectError } from "../../redux/selectors";
import { fetchContacts } from "../../redux/contactsOps";
import ErrorMessage from "../errorMessage/ErroeMessage";
import Loader from "../loader/Loader";




const App = () => {
const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    console.log("work")
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.mainContainer}>
    <h1 className={css.title}>Phonebook</h1>
    <ContactForm/>
      <SearchBox /> 
      {isLoading && <Loader />}
       {error && <ErrorMessage message={error} />}
      <ContactList/>
      </div>
  );
};

export default App;
