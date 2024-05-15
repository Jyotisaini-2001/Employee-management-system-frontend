// // pages/employee-detail/[id]/update.js

// import { useState, useEffect } from 'react';
// import { useRouter } from 'next/router';
// import axios from 'axios';
// import { cn } from '../../../utils/cn';
// import { Info } from '@/components/info';
// import Image from 'next/image';
// 

// import Menu from '@/components/Menu';
// import "../../../app/globals.css";

// export default function UpdateEmployeePage() {
//   const router = useRouter();
//   const { id } = router.query;
//   const [employee, setEmployee] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [step, setStep] = useState(0);
//   const [infoSubmitted, setInfoSubmitted] = useState(false);
//   const [formData, setFormData] = useState({
//     name: '',
//     address: '',
//     state: '',
//     department: ''
//   });

//   // Function to fetch employee details based on ID
//   useEffect(() => {
//     const fetchEmployee = async () => {
//       try {
//         const response = await axios.get(`http://localhost:3000/api/employees/${id}`);
//         setEmployee(response.data);
//         // Set form data with fetched employee details
//         setFormData({
//           name: response.data.name,
//           address: response.data.address,
//           state: response.data.state,
//           department: response.data.department
//         });
//       } catch (error) {
//         console.error('Error fetching employee data:', error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     if (id) {
//       fetchEmployee();
//     }
//   }, [id]);

//   // Function to handle form submission
//   const handleInfoSubmit = async (e) => {
//     e.preventDefault();
//     // Add logic to update employee details
//     try {
//       await axios.put(`http://localhost:3000/api/employees/${id}`, formData);
//       // Redirect to employee detail page after successful update
//       router.push(`/employee-detail/${id}`);
//     } catch (error) {
//       console.error('Error updating employee:', error);
//     }
//   };

//   // Function to handle form input changes
//   const handleInputChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (!employee) {
//     return <div>No employee found for ID: {id}</div>;
//   }

//   return (
//     <>
//     {/* <Menu/> */}
//     <div className="flex items-center justify-center min-h-screen">

//     <div className="relative flex min-h-screen w-screen flex-col rounded-2xl bg-white lg:min-h-fit lg:w-fit lg:flex-row lg:p-4 mt-24 mb-8">
//       <div className="absolute flex w-full gap-4 lg:relative lg:w-fit">
//         <picture className="w-full">
//           <source
//             srcSet="/bg-sidebar-desktop.svg"
//             media="(min-width: 1024px)"
//             className="-z-10 select-none"
//           />
//           <img src="/bg-sidebar-mobile.svg" className="w-full" alt="" />
//         </picture>

//         <ul className="absolute flex w-full justify-center gap-6 p-10 text-white lg:inset-0 lg:flex-col lg:justify-start">
//           {['Your Info'].map((title, index) => (
//             <li className="flex items-center gap-4" key={title}>
//               <div
//                 className={cn(
//                   'grid h-10 w-10 place-content-center rounded-full border font-bold',
//                   index === step && 'bg-light-blue text-purplish-blue',
//                 )}
//               >
//                 {index + 1}
//               </div>

//               <div className="hidden text-start lg:block">
//                 <p className="text-white">STEP {index + 1}</p>
//                 <h2 className="font-bold uppercase text-white">{title}</h2>
//               </div>
//             </li>
//           ))}
//         </ul>
//       </div>

//       {!infoSubmitted ? (
//         <Info setInfo={handleInfoSubmit} />
//       ) : (
//         <div className="grid h-full place-content-center gap-8 py-16 text-center">
//           <Image
//             src="/icon-thank-you.svg"
//             className="mx-auto"
//             width={80}
//             height={80}
//             alt="Checkmark"
//           />
//           <div className="flex flex-col gap-3 text-cool-gray">
//             <h1 className="text-3xl font-bold text-marine-blue">Thank you!</h1>
//             <p className="text-lg">
//               Thanks for providing the information! We appreciate it.
//             </p>
//           </div>
//           <div>
//           <Link href="/view-details">
//                 <span className="text-blue-500 cursor-pointer hover:underline">view details</span>
//               </Link>{' '}
//               or{' '}
//               <Link href="/update">
//                 <span className="text-blue-500 cursor-pointer hover:underline">update</span>
//               </Link>{' '}
//               your information.
//           </div>
//         </div>
//       )}
//     </div>
//     </div>
//     </>
//   );
// }
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import Input from '../../../components/ui/input';
import Title from '../../../components/ui/title';
import { cn } from '../../../utils/cn';
import "../../../app/globals.css";
import Image from 'next/image';
import Link from 'next/link';
import Menu from '@/components/Menu';

export default function UpdateEmployeePage() {
  const router = useRouter();
  const { id } = router.query;
  const [loading, setLoading] = useState(true);
  const { register, handleSubmit, setValue } = useForm();
  const [step, setStep] = useState(0);
  const [infoSubmitted, setInfoSubmitted] = useState(false);

  useEffect(() => {
    const fetchEmployee = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/api/employees/${id}`);
        const { name, address, state, department } = response.data;
        setValue('name', name);
        setValue('address', address);
        setValue('state', state);
        setValue('department', department);
      } catch (error) {
        console.error('Error fetching employee data:', error);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchEmployee();
    }
  }, [id, setValue]);

  const onSubmit = async (data) => {
    try {
      await axios.put(`http://localhost:3000/api/employees/${id}`, data);
      router.push(`/employee-detail/${id}/view`);
    } catch (error) {
      console.error('Error updating employee:', error);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
    <Menu/>
    <div className="flex items-center justify-center min-h-screen">

    <div className="relative flex min-h-screen w-screen flex-col rounded-2xl bg-white lg:min-h-fit lg:w-fit lg:flex-row lg:p-4 mt-24 mb-8">
      <div className="absolute flex w-full gap-4 lg:relative lg:w-fit">
        <picture className="w-full">
          <source
            srcSet="/bg-sidebar-desktop.svg"
            media="(min-width: 1024px)"
            className="-z-10 select-none"
          />
          <img src="/bg-sidebar-mobile.svg" className="w-full" alt="" />
        </picture>

        <ul className="absolute flex w-full justify-center gap-6 p-10 text-white lg:inset-0 lg:flex-col lg:justify-start">
          {['Your Info'].map((title, index) => (
            <li className="flex items-center gap-4" key={title}>
              <div
                className={cn(
                  'grid h-10 w-10 place-content-center rounded-full border font-bold',
                  index === step && 'bg-light-blue text-purplish-blue',
                )}
              >
                {index + 1}
              </div>

              <div className="hidden text-start lg:block">
                <p className="text-white">STEP {index + 1}</p>
                <h2 className="font-bold uppercase text-white">{title}</h2>
              </div>
            </li>
          ))}
        </ul>
      </div>
      {!infoSubmitted ? (
    <form onSubmit={handleSubmit(onSubmit)} className="page-container">
      <div className="page-content">
        <Title title="Personal Info">
          Please provide your name, profile, address, and department.
        </Title>
        <div className="flex flex-col gap-6">
          <Input
            label="Name"
            type="text"
            placeholder="Name"
            {...register('name', { required: true })}
          />
          <Input
            label="Address"
            type="text"
            placeholder="Address"
            {...register('address', { required: true })}
          />
          <Input
            label="State"
            type="text"
            placeholder="State"
            {...register('state', { required: true })}
          />
          <Input
            label="Department"
            type="text"
            placeholder="Department"
            {...register('department', { required: true })}
          />
        </div>
      
      <div
        className={cn(
          'flex  bg-white  justify-center', // Center for small screens
          'md:justify-end' // Right align for medium and large screens
        )}
      >
        <button
          type="submit"
          className="rounded-lg px-6 py-3 font-medium text-white transition-colors bg-marine-blue hover:bg-purplish-blue focus:bg-purplish-blue "
        >
          Submit
        </button>
      </div>
      </div>
    </form>
   ) : (
    <div className="grid h-full place-content-center gap-8 py-16 text-center">
      <Image
        src="/icon-thank-you.svg"
        className="mx-auto"
        width={80}
        height={80}
        alt="Checkmark"
      />
      <div className="flex flex-col gap-3 text-cool-gray">
        <h1 className="text-3xl font-bold text-marine-blue">Thank you!</h1>
        <p className="text-lg">
          Thanks for providing the information! We appreciate it.
        </p>
      </div>
      <div>
      <Link href="#view-details">
            <span className="text-blue-500 cursor-pointer hover:underline">view details</span>
          </Link>{' '}
          or{' '}
          <Link href="#update">
            <span className="text-blue-500 cursor-pointer hover:underline">update</span>
          </Link>{' '}
          your information.
      </div>
    </div>
  )}
</div>
</div>
</>
  );
};

