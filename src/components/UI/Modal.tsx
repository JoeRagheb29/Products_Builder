import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
// import { Children, useState } from "react";
import Button from "./Button";

interface ModalProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  description?: string;
  isOpen: boolean;
  closeModal: () => void;
  children: React.ReactNode;
}

function Modal({ title , description, isOpen, closeModal, children }: ModalProps) {


  return (
    <>
      <Dialog open={isOpen} as="div" className="relative z-10 focus:outline-none focus:ring-2 focus:bg-blend-color-burn " onClose={closeModal} __demoMode>
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto focus:outline-none focus:ring-2 focus:bg-blend-color-burn focus:contain-layout">
          <div className="flex min-h-full items-center justify-center p-4">
            <DialogPanel transition className="w-full max-w-md rounded-xl bg-white/5 p-6 backdrop-blur-2xl duration-300 ease-out data-closed:transform-[scale(95%)] data-closed:opacity-0">
              {title && <DialogTitle as="h3" className="text-base/7 font-medium">{title}</DialogTitle>}
              <p className="mt-2 text-sm/6 text-black/50">{description}</p>
              <div className="mt-4">
                  {children}
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
}

export default Modal;