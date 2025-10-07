import { useState, useRef, ChangeEvent, FormEvent } from "react";
import { FaCalendar } from "react-icons/fa6";

import {motion} from "framer-motion"
//@ts-ignore
import { LoopPingPong } from "three";
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert";
import emailjs from '@emailjs/browser';
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import FeaturesSectionDemo  from "./ui/Features";
import { IconBriefcase, IconMail, IconMan, IconPhone, IconX } from "@tabler/icons-react";
import Link from "next/link";
import { FloatingNav } from "./ui/floating-navbar";

interface FormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  office: string;  // New field for office location
}

const   Hero = () => {


  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    service: "",
    office: ""  // Initialize office choice
  });

  const [isDialogOpen, setIsDialogOpen] = useState(false); // State to control dialog visibility
  const [alertStatus, setAlertStatus] = useState<"success" | "error" | "empty" | null>(null); // State to control alert status

  const form = useRef<HTMLFormElement>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleOfficeChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, office: e.target.value });  // Update office location
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validation check: Ensure all fields are filled
    if (!formData.name || !formData.email || !formData.phone || !formData.service || !formData.office) {
      setAlertStatus("empty");
      return;
    }

    if (form.current) {
      emailjs.sendForm(
        'service_ra4bns3',
        'template_lht18tt',
        form.current,
        'z0MwCC311h8UoFulf'
      ).then(
        (result) => {
          console.log(result.text);
          // Set success alert and close dialog
          setAlertStatus("success");
          setIsDialogOpen(false);
        },
        (error) => {
          console.log(error.text);
          // Set error alert
          setAlertStatus("error");
        }
      );
    }
  };
    const navItems = [
      {
        name: "Services",
        id: "services",
        icon: <IconBriefcase className="h-4 w-4 text-neutral-500 dark:text-white" />,
      },
      {
        name: "Our Team",
        id: "about",
        icon: <IconMan className="h-4 w-4 text-neutral-500 dark:text-white" />,
      },
      {
        name: "Contact",
        id: "touch",
        icon: <IconPhone className="h-4 w-4 text-neutral-500 dark:text-white" />,
      },
   
    ];

  return (
    <section 
      className="flex flex-col bg-no-repeat"
    >
      <FloatingNav navItems={navItems}/>
       
      <div className="pb-[-30px] pt-44" >
        <div className="h-screen w-full dark:bg-black-100 bg-transparent absolute top-0 left-0 flex items-center justify-center">
        
        </div>

        <div className="flex justify-center relative my-20 z-10">
          <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
            
            <p className=" tracking-wider uppercase text-2xl text-center text-slate-200 font-medium max-w-83">
        Raj Gill Law Corporation
            </p>
          
            <h1
             
              className="text-center -tracking-wide text-white md:text-5xl text-2xl mt-9 mb-9">Surrey & Abbotsford, British Columbia&rsquo;s Most Trusted Attorneys</h1>
           
            <p className="text-center md:tracking-wider text-slate-200 font-normal mb-4 md:text-lg lg:text-2xl">
              Schedule a Free Consultation.
            </p>

            {alertStatus === "success" && (
              <Alert>
                <IconMail className="h-4 w-4" />
                <AlertTitle>Appointment Scheduled.</AlertTitle>
                <AlertDescription>
                  We will be in touch shortly.
                </AlertDescription>
              </Alert>
            )}

            {alertStatus === "error" && (
              <Alert>
                <IconX className="h-4 w-4" />
                <AlertTitle>Uh Oh!</AlertTitle>
                <AlertDescription>
                  Your message did not go through. Please try again.
                </AlertDescription>
              </Alert>
            )}

            {alertStatus === "empty" && (
              <Alert>
                <IconX className="h-4 w-4" />
                <AlertTitle>Empty Fields</AlertTitle>
                <AlertDescription>
                  Please fill out all the fields before submitting.
                </AlertDescription>
              </Alert>
            )}

            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogTrigger asChild>
                <button onClick={() => setIsDialogOpen(true)} className="bg-slate-900 relative inline-flex h-12 w-full md:w-60 md:mt-10 overflow-hidden rounded-sm  p-[1px] focus:outline-none "><span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg
             bg-none px-7 text-sm font-medium text-neutral-200 backdrop-blur-3xl gap-2">SCHEDULE<FaCalendar /></span>
                  
                </button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px] rounded-2xl">
                <DialogHeader>
                  <DialogTitle>Schedule a consultation</DialogTitle>
                  <DialogDescription>
                    Please fill out the information below.
                  </DialogDescription>
                </DialogHeader>
                <form ref={form} onSubmit={handleSubmit} className="grid gap-4 py-4">
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="name" className="text-right">
                      Full Name
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="col-span-3"
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="email" className="text-right">
                      Email
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="col-span-3"
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="phone" className="text-right">
                      Phone No.
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="col-span-3"
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="service" className="text-right">
                      Service
                    </Label>
                    <Input
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="col-span-3"
                    />
                  </div>

                  {/* New Office Location Checkbox Section */}
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label className="text-right">Office Location</Label>
                    <div className="col-span-3 space-y-2">
                      <div>
                        <input
                          type="radio"
                          id="abbotsford"
                          name="office"
                          value="Abbotsford"
                          checked={formData.office === "Abbotsford"}
                          onChange={handleOfficeChange}
                        />
                        <label htmlFor="abbotsford" className="ml-2">Abbotsford</label>
                      </div>
                      <div>
                        <input
                          type="radio"
                          id="surrey"
                          name="office"
                          value="Surrey"
                          checked={formData.office === "Surrey"}
                          onChange={handleOfficeChange}
                        />
                        <label htmlFor="surrey" className="ml-2">Surrey</label>
                      </div>
                    </div>
                  </div>

                  {/* Hidden input for office location */}
                  <input type="hidden" name="office" value={formData.office} />

                  <DialogFooter>
                    <Button type="submit">Submit</Button>
                  </DialogFooter>
                </form>
              </DialogContent>
            </Dialog>

        
      <motion.div
    animate={{
      y: [-40, -50, -40],
    }}
    transition={{
      duration: 1.5,
      repeat: Infinity,
      //@ts-ignore
      repeatType: LoopPingPong,
    }}
    className="mt-[150px]"
  >
    <Link
      href="#services"
      className="flex items-center gap-2"
  
    >
      {/* Remove the hidden class */}
      <svg
        data-accordion-icon
        className="sm:block w-16 rotate-180 shrink-0"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 10 6"
      >
        <path
          stroke="white"
          strokeLinecap="square"
          strokeLinejoin="bevel"
          strokeWidth="2"
          d="M9 5 5 1 1 5"
        />
      </svg>
    </Link>
    <Link
      href="#services"
      className="flex items-center gap-2"
   scroll
    >
      <svg
        data-accordion-icon
        className=" w-16 rotate-180 shrink-53"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 10 6"
      >
        <path
          stroke="white"
          strokeLinecap="square"
          strokeLinejoin="bevel"
          strokeWidth="2"
          d="M9 5 5 1 1 5"
        />
      </svg>
    </Link>
  </motion.div>
          </div>
        </div>
      </div>
    

      <div  className="" id="services">
         <hr className="mb-20" />
         <h1 className="tracking-widest text-6xl text-center text-slate-200 font-medium mt-12 mb-12 max-w-83" >Our Services</h1>
        <FeaturesSectionDemo/>
        <div className="md:mb-32"/>
      </div>
    </section>
  );
};

export default Hero;
