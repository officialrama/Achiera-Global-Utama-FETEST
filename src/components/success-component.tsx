'use client'
import * as React from 'react';

interface SuccessProps {
  success: boolean;
  setSuccess: React.Dispatch<React.SetStateAction<boolean>>;
}

const SuccessModal: React.FC<SuccessProps> = ({ success, setSuccess }) => {

  return (
    <div className={`${
        success ? "flex" : "hidden"
      } justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-black bg-opacity-50`}>
      <div className="fixed inset-0 z-10 w-screen overflow-y-auto items-center justify-center">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
              <div className="flex items-center">
                <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                </div>
                <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                  <div className="mt-2 mb-3">
                    <p className="text-sm text-gray-500">
                    Succes Register Your Account
                    </p>
                  </div>
                  <button
                type="button"
                data-autofocus
                onClick={() => setSuccess(false)}
                className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
              >
                Close
              </button>
                </div>
              </div>
            </div>
        </div>
      </div>
      </div>
  )
}

export default SuccessModal