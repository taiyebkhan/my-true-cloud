import { ReactNode } from "react";

export type FAQ = { question: string; answer: ReactNode };

export const defaultFAQs: FAQ[] = [
  {
    question: "What is SaaS or Cloud Computing?",
    answer: (
      <div className="pb-9">
        <p className="font-['montserrat'] text-lg font-normal leading-[21.94px] tracking-normal text-left">
        Software as a Service (SaaS) is also referred to as On-Demand, which is
        delivery model of software and related services where an application
        provider hosts and manages a software solution, licenses it on a
        subscription basis, and users access it via the Internet.
        </p>
      </div>
    ),
  },
  {
    question: "Who owns the Data?",
    answer: (
        <div className="pb-9">
        <p className="font-['montserrat'] text-lg font-normal leading-[21.94px] tracking-normal text-left">
        </p>
      </div>
    ),
  },
  {
    question: "How do we manage customizations and real time interfaces with on premise systems?",
    answer: (
        <div className="pb-9">
        <p className="font-['montserrat'] text-lg font-normal leading-[21.94px] tracking-normal text-left">
        </p>
      </div>
    ),
  },
  {
    question: "As needs change can you move your products and solution on premise?",
    answer: (
        <div className="pb-9">
        <p className="font-['montserrat'] text-lg font-normal leading-[21.94px] tracking-normal text-left">
        </p>
      </div>
    ),
  },
  {
    question: "How does pricing work?",
    answer: (
        <div className="pb-9">
        <p className="font-['montserrat'] text-lg font-normal leading-[21.94px] tracking-normal text-left">
        </p>
      </div>
    ),
  }
  ,
  {
    question: "How long does it take to implement your products?",
    answer: (
        <div className="pb-9">
        <p className="font-['montserrat'] text-lg font-normal leading-[21.94px] tracking-normal text-left">
        </p>
      </div>
    ),
  }
  ,
  {
    question: "What about system availability?",
    answer: (
        <div className="pb-9">
        <p className="font-['montserrat'] text-lg font-normal leading-[21.94px] tracking-normal text-left">
        </p>
      </div>
    ),
  },
  {
    question: "What about software upgrades?",
    answer: (
        <div>
        <p className="font-['montserrat'] text-lg font-normal leading-[21.94px] tracking-normal text-left">
        </p>
      </div>
    ),
  },
  {
    question: "Do you sell through partners?",
    answer: (
        <div className="pb-9">
        <p className="font-['montserrat'] text-lg font-normal leading-[21.94px] tracking-normal text-left">
        </p>
      </div>
    ),
  },
  
  {
    question: "What is your response time?",
    answer: (
        <div className="pb-9">
        <p className="font-['montserrat'] text-lg font-normal leading-[21.94px] tracking-normal text-left">
        </p>
      </div>
    ),
  },
  {
    question: "What devices does your system work on?",
    answer: (
        <div className="pb-9">
        <p className="font-['montserrat'] text-lg font-normal leading-[21.94px] tracking-normal text-left">
        </p>
      </div>
    ),
  },
  {
    question: "Does your ERP system have an accounting package?",
    answer: (
        <div className="pb-9">
        <p className="font-['montserrat'] text-lg font-normal leading-[21.94px] tracking-normal text-left">
        </p>
      </div>
    ),
  },
  {
    question: "What type of security do you have with the system?",
    answer: (
        <div className="pb-9">
        <p className="font-['montserrat'] text-lg font-normal leading-[21.94px] tracking-normal text-left">
        </p>
      </div>
    ),
  },
  {
    question: "How do you stack up with other companies?",
    answer: (
        <div className="pb-9">
        <p className="font-['montserrat'] text-lg font-normal leading-[21.94px] tracking-normal text-left">
        </p>
      </div>
    ),
  },
  {
    question: "What is SAS 70 Certification?",
    answer: (
        <div className="pb-9">
        <p className="font-['montserrat'] text-lg font-normal leading-[21.94px] tracking-normal text-left">
        </p>
      </div>
    ),
  },
];
