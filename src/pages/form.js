'use client'
import React, { useState } from 'react';
import { Info, defaultValues as defaultInfo } from '../components/info';
import { cn } from '../utils/cn';
import Image from 'next/image';
import Link from 'next/link';
import Menu from '../components/Menu';
import "../app/globals.css";

export default function Form (){
  const [step, setStep] = useState(0);
  const [infoSubmitted, setInfoSubmitted] = useState(false);

  const handleInfoSubmit = (data) => {
    // Handle form submission logic here (if needed)
    setInfoSubmitted(true);
  };

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
        <Info setInfo={handleInfoSubmit} />
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
          <Link href="/view-details">
                <span className="text-blue-500 cursor-pointer hover:underline">view details</span>
              </Link>{' '}
              or{' '}
              <Link href="/update">
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
