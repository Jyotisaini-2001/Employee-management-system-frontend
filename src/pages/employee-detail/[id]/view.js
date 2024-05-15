import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import Menu from '@/components/Menu';
import "../../../app/globals.css";
import Image from 'next/image';

export default function EmployeeDetails() {
  const router = useRouter();
  const { id } = router.query;
  const [employee, setEmployee] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEmployee = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/api/employees/${id}`);
        setEmployee(response.data);
      } catch (error) {
        console.error('Error fetching employee data:', error);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchEmployee();
    }
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!employee) {
    return <div>No employee found for ID: {id}</div>;
  }

  return (
    <>
      <Menu />
      <div className="flex justify-center items-center min-h-screen font-serif flex-wrap mt-12 ">
        <div className="flex justifiy-center items-center mb-4 sm:mb-0 sm:mr-8">
          <Image src='/girl.svg' alt='animation' className="w-full h-auto rounded-lg" />
        </div>
        <div className="max-w-md p-8 bg-white rounded-lg shadow-lg w-full sm:w-auto ">
          <h1 className="text-3xl font-bold mb-4">Employee Details</h1>
          <div className="mb-4">
            <p className="font-semibold">Name:</p>
            <p>{employee.name}</p>
          </div>
          <div className="mb-4">
            <p className="font-semibold">Address:</p>
            <p>{employee.address}</p>
          </div>
          <div className="mb-4">
            <p className="font-semibold">State:</p>
            <p>{employee.state}</p>
          </div>
          <div className="mb-4">
            <p className="font-semibold">Department:</p>
            <p>{employee.department}</p>
          </div>
        </div>
      </div>
    </>
  );
}
