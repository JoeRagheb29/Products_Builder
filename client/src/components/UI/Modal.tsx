import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { useMemo , memo } from "react";


interface ModalProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  description?: string;
  isOpen,
  closeModal: () => void;
  children: React.ReactNode;
  className?,
}

function Modal({ title , description, isOpen, closeModal, className, children }: ModalProps) {


  return (
    <>
      <Dialog open={isOpen} as="div" className="relative z-10 focus:outline-none" onClose={closeModal}>
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto backdrop-blur-lg ">
          <div className="flex min-h-full items-center justify-center p-4">
            <DialogPanel transition className={`${className} w-full max-w-md rounded-xl duration-300 ease-out data-closed:transform-[scale(95%)] data-closed:opacity-0 bg-white shadow-md p-5`}>
              {title && <DialogTitle as="h1" className="text-3xl text-center uppercase font-medium">{title}</DialogTitle>}
              <p className="mt-2 text-sm/6 text-black/50">{description}</p>
              <div className="mt-4">{children}</div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
}

export default memo(Modal);