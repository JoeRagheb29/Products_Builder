import { memo } from "framer-motion";

function Footer() {
  return (
      <footer className="bg-white shadow-inner px-6 py-4 mt-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 text-sm">
            © {new Date().getFullYear()} Products Builder. All rights reserved.
          </p>
          <ul className="flex space-x-6 mt-2 md:mt-0">
            <li className="text-gray-700 hover:text-indigo-600 cursor-pointer text-sm">Privacy Policy</li>
            <li className="text-gray-700 hover:text-indigo-600 cursor-pointer text-sm">Terms of Service</li>
            <li className="text-gray-700 hover:text-indigo-600 cursor-pointer text-sm">Contact</li>
          </ul>
        </div>
      </footer>
  )
}

export default memo(Footer);
