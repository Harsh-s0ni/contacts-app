import { ErrorMessage, Field, Form, Formik } from "formik"
import Modal from "./Modal"
import { collection, addDoc, doc, updateDoc } from "firebase/firestore"
import { db } from "../config/firebase"
import { toast } from "react-toastify"
import * as Yup from "yup";

const contactSchemaValidation = Yup.object().shape({
  Name: Yup.string().required("Name is Required"),
  Email: Yup.string().email("Invalid E-mail").required("E-mail is required")
})
const AddAndUpdateContact = ({ isOpen, onClose, isUpdate, contact }) => {
    
    const addContact = async (contact) => {
        try {
          const contactRef = collection(db, "contacts")
          await addDoc(contactRef, contact)
          toast.success("Contact Added Successfulfy")
          onClose()
        } catch (error) {
            console.log(error)
        }
    }
    const updateContact = async (contact , id) => {
        try {
          const contactRef = doc(db, "contacts",id)
          await updateDoc(contactRef, contact)
          onClose()
          toast.success("Contact Updated Successfulfy")
        } catch (error) {
            console.log(error)
        }
    }


  return (
    <div>
      <Modal isOpen={isOpen} onClose={onClose} >
        <Formik
          validationSchema={contactSchemaValidation}
          initialValues={isUpdate ? {
            Name: contact.Name,
            Email: contact.Email
          } :
          {
            Name: "",
            Email: "",
          }}
          onSubmit={(values) => {
            console.log(values)
            isUpdate ? updateContact(values,contact.id) :
            addContact(values)
            }}
        >
          <Form className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <label htmlFor="">Name</label>
              <Field name="Name" className="border h-10 "></Field>
              <div className="text-xs text-red-500">
                <ErrorMessage name="Name"/>
              </div>
            </div>         
            <div className="flex flex-col gap-1">
              <label htmlFor="">Email</label>
              <Field name="Email" type="email" className="border h-10 "></Field>
              <div className="text-xs text-red-500">
                <ErrorMessage name="Email"/>
              </div>
            </div>   
            <button type="submit" className=" self-end bg-orange px-3 py-1.5 border">
              {isUpdate ? "Update" : "Add"} Contact
            </button>      
          </Form>        
        </Formik>
      </Modal>
    </div>
  )
}

export default AddAndUpdateContact