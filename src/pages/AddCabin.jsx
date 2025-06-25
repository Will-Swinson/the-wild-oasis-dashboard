import { useState } from "react";
import Button from "../ui/Button";
import CreateCabinForm from "../features/cabins/CreateCabinForm";
import Modal from "../ui/Modal";

export default function AddCabin() {
  return (
    <div>
      <Modal>
        <Modal.Open opens="cabin-form">
          <Button>Add new cabin</Button>
        </Modal.Open>
        <Modal.Window name="cabin-form">
          <CreateCabinForm />
        </Modal.Window>
        {/* <Modal.Open opens="table">
        <Button>Add new cabin</Button>
        </Modal.Open>
        <Modal.Window name="table">
        <CreateCabinForm />
      </Modal.Window> */}
      </Modal>
    </div>
  );
}

// export default function AddCabin() {
//   const [isOpenModal, setIsOpenModal] = useState(false);

//   return (
//     <div>
//       <Button
//         onClick={() => setIsOpenModal((prevIsOpenModal) => !prevIsOpenModal)}
//       >
//         Add new cabin
//       </Button>
//       {isOpenModal && (
//         <Modal
//           onCloseModal={() =>
//             setIsOpenModal((prevIsOpenModal) => !prevIsOpenModal)
//           }
//         >
//           <CreateCabinForm
//             onCloseModal={() =>
//               setIsOpenModal((prevIsOpenModal) => !prevIsOpenModal)
//             }
//           />
//         </Modal>
//       )}
//     </div>
//   );
// }
