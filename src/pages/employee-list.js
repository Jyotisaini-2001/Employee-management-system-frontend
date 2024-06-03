// "use client";
// // // EmployeeList.js

// import { useEffect, useState } from "react";
// import axios from "axios"; // Import Axios
// import Link from "next/link";
// import "../app/globals.css";
// import Modal from "@/components/Modal"; // Import the Modal component
// import Image from 'next/image';

// import {
//   HiOutlineEye,
//   HiOutlinePencilAlt,
//   HiOutlineTrash,
// } from "react-icons/hi"; // Import icons
// import Menu from "@/components/Menu";
// import { Dialog } from "@headlessui/react";

// export default function EmployeeList(){
//   const [employees, setEmployees] = useState([]);
//   const [showConfirmation, setShowConfirmation] = useState(false);
//   const [deleteId, setDeleteId] = useState(null);
//   useEffect(() => {
//     // Fetch employee data from backend API
//     const fetchEmployees = async () => {
//       try {
//         const response = await axios.get("http://localhost:3000/api/employees"); 
//         setEmployees(response.data);
//       } catch (error) {
//         console.error("Error fetching employee data:", error);
//       }
//     };

//     fetchEmployees();
//   }, []);


//   const handleDelete = async (id) => {
//     try {
//       await axios.delete(`http://localhost:3000/api/employees/${id}`);
//       const updatedEmployees = employees.filter((employee) => employee.id !== id);
//       setEmployees(updatedEmployees);
//       setShowConfirmation(false);
//       setDeleteId(null);
//     } catch (error) {
//       console.error("Error deleting employee:", error);
//     }
//   };

//   const confirmDelete = (id) => {
//     setDeleteId(id);
//     setShowConfirmation(true);
//   };

//   const cancelDelete = () => {
//     setShowConfirmation(false);
//     setDeleteId(null);
//   };

//   return (
//     <>
//       <Menu />
//       <div className="flex mt-24 justify-center min-h-screen">
//         <div className="overflow-x-auto">
//           <h1 className="text-3xl font-semibold mb-4">Employee List</h1>
//           <table className="min-w-full divide-y divide-gray-200 mt-8">
//             <thead className="bg-gray-50">
//               <tr>
//                 <th
//                   scope="col"
//                   className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
//                 >
//                   Image
//                 </th>
//                 <th
//                   scope="col"
//                   className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
//                 >
//                   Name
//                 </th>
//                 <th
//                   scope="col"
//                   className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
//                 >
//                   Address
//                 </th>
//                 <th
//                   scope="col"
//                   className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
//                 >
//                   State
//                 </th>
//                 <th
//                   scope="col"
//                   className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
//                 >
//                   Department
//                 </th>
//                 <th
//                   scope="col"
//                   className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
//                 >
//                   Actions
//                 </th>
//               </tr>
//             </thead>
//             <tbody className="bg-white divide-y divide-gray-200">
//               {employees.map((employee) => (
//                 <tr key={employee.id}>
//                   <td className="px-6 py-4 whitespace-nowrap">
//                     <img
//                       src={employee.image}
//                       className="h-10 w-10 rounded-full"
//                       alt="girl"
//                     />
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap">
//                     {employee.name}
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap">
//                     {employee.address}
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap">
//                     {employee.state}
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap">
//                     {employee.department}
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap space-x-2">
//                     <Link href={`/employee-detail/${employee.id}/view`}>
//                       <HiOutlineEye
//                         className="text-blue-600 hover:text-blue-700 cursor-pointer inline-block"
//                         size={20}
//                       />
//                     </Link>

//                     <Link
//                       href={`/employee-detail/${employee.id}/update`}
//                       passHref
//                     >
//                       <HiOutlinePencilAlt
//                         className="text-blue-600 hover:text-blue-700 cursor-pointer inline-block"
//                         size={20}
//                       />
//                     </Link>
//                     <HiOutlineTrash className="text-red-600 hover:text-red-700 cursor-pointer inline-block" size={20} onClick={() => confirmDelete(employee.id)} />

//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//       <Modal isOpen={showConfirmation} onRequestClose={cancelDelete}>
//         <div>
//           <h2 className="text-lg font-semibold mb-2">Delete Employee</h2>
//           <p className="text-sm text-gray-600 mb-4">Are you sure you want to delete this employee?</p>
//           <div className="flex justify-end space-x-2">
//             <button onClick={cancelDelete} className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300">Cancel</button>
//             <button onClick={() => handleDelete(deleteId)} className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700">Delete</button>
//           </div>
//         </div>
//       </Modal>
//     </>
//   );
// }
"use client";
// // EmployeeList.js

import { useEffect, useState } from "react";
import axios from "axios"; // Import Axios
import Link from "next/link";
import "../app/globals.css";
import Modal from "@/components/Modal"; // Import the Modal component
import Image from 'next/image';

import {
  HiOutlineEye,
  HiOutlinePencilAlt,
  HiOutlineTrash,
} from "react-icons/hi"; // Import icons
import Menu from "@/components/Menu";
import { Dialog } from "@headlessui/react";

export default function EmployeeList(){
  const [employees, setEmployees] = useState([]);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [deleteId, setDeleteId] = useState(null);
  useEffect(() => {
    // Fetch employee data from backend API
    const fetchEmployees = async () => {
      try {
        const response = await axios.get("https://employee-management-system-backend-4h30.onrender.com/api/employees"); 
        setEmployees(response.data);
      } catch (error) {
        console.error("Error fetching employee data:", error);
      }
    };

    fetchEmployees();
  }, []);


  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://employee-management-system-backend-4h30.onrender.com/api/employees/${id}`);
      const updatedEmployees = employees.filter((employee) => employee.id !== id);
      setEmployees(updatedEmployees);
      setShowConfirmation(false);
      setDeleteId(null);
    } catch (error) {
      console.error("Error deleting employee:", error);
    }
  };

  const confirmDelete = (id) => {
    setDeleteId(id);
    setShowConfirmation(true);
  };

  const cancelDelete = () => {
    setShowConfirmation(false);
    setDeleteId(null);
  };

  return (
    <>
      <Menu />
      <div className="flex mt-24 justify-center min-h-screen">
        <div className="overflow-x-auto">
          <h1 className="text-3xl font-semibold mb-4">Employee List</h1>
          <table className="min-w-full divide-y divide-gray-200 mt-8">
            <thead className="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Image
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Name
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Address
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  State
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Department
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {employees.map((employee) => (
                <tr key={employee.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <img
                      src={employee.image}
                      className="h-10 w-10 rounded-full"
                      alt="girl"
                    />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {employee.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {employee.address}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {employee.state}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {employee.department}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap space-x-2">
                    <Link href={`/employee-detail/${employee.id}/view`}>
                      <HiOutlineEye
                        className="text-blue-600 hover:text-blue-700 cursor-pointer inline-block"
                        size={20}
                      />
                    </Link>

                    <Link
                      href={`/employee-detail/${employee.id}/update`}
                      passHref
                    >
                      <HiOutlinePencilAlt
                        className="text-blue-600 hover:text-blue-700 cursor-pointer inline-block"
                        size={20}
                      />
                    </Link>
                    <HiOutlineTrash className="text-red-600 hover:text-red-700 cursor-pointer inline-block" size={20} onClick={() => confirmDelete(employee.id)} />

                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Modal isOpen={showConfirmation} onRequestClose={cancelDelete}>
        <div>
          <h2 className="text-lg font-semibold mb-2">Delete Employee</h2>
          <p className="text-sm text-gray-600 mb-4">Are you sure you want to delete this employee?</p>
          <div className="flex justify-end space-x-2">
            <button onClick={cancelDelete} className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300">Cancel</button>
            <button onClick={() => handleDelete(deleteId)} className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700">Delete</button>
          </div>
        </div>
      </Modal>
    </>
  );
}
