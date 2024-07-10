import { HiOutlineUserCircle } from "react-icons/hi";
import { RiEditCircleLine } from "react-icons/ri";
import { IoMdTrash } from "react-icons/io";
import { deleteDoc,doc} from "firebase/firestore";
import { db } from "../config/firebase";
import useDisclouse from "../hooks/useDisclouse";
import AddAndUpdateContact from "./AddAndUpdateContact";
import { toast } from "react-toastify";
const ContactCard = ({contact}) => {

  const deleteContact = async (id) => {
    try{
      await deleteDoc(doc(db,"contacts",id));
      toast.success("Contact Deleted Successfully");
    } catch(error){console.log(error);}
  };

  const {isOpen,onClose,onOpen} = useDisclouse();

  return(  
  <>
    <div key={contact.id} className="flex items-center justify-between bg-yellow rounded-lg p-2">
    <div className="flex gap-1">
      <HiOutlineUserCircle className="text-4xl text-orange"/>
      <div className="">
        <h2 className="font-medium">{contact.name}</h2>
        <p className="text-sm">{contact.email}</p>
      </div>
    </div>
    <div className="flex text-3xl">
      <RiEditCircleLine onClick={onOpen} className="cursor-pointer"/>
      <IoMdTrash onClick={() => deleteContact(contact.id)} className="text-orange cursor-pointer"/>
    </div>
  </div>
  <AddAndUpdateContact contact={contact} isUpdate isOpen={isOpen} onClose={onClose}/>
</>
  );
};

export default ContactCard;
