import { useState, useRef, ChangeEvent, FormEvent } from "react";
import { FaCalendar, FaGavel } from "react-icons/fa6";
import { motion } from 'framer-motion';
import MagicButton from "./ui/MagicButton";

import Link from "next/link";
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
import { FeaturesSectionDemo } from "./ui/Features";
import { IconMail, IconMap, IconX } from "@tabler/icons-react";

interface FormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  office: string;  // New field for office location
}

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

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

  return (
    <section 
      className="flex flex-col bg-no-repeat"
    >
       
      <div className="pb-[-30px] pt-36" >
        <div className="h-screen w-full dark:bg-black-100 bg-transparent absolute top-0 left-0 flex items-center justify-center">
          <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-transparent [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
        </div>

        <div className="flex justify-center relative my-20 z-10">
          <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
            
            <p className="uppercase tracking-widest text-lg text-center text-slate-200 font-medium max-w-80">
              RAJ GILL LAW CORPORATION
            </p>
          
            <h1
             
              className="text-center text-[40px] text-[#e5e5e5] md:text-5xl lg:text-6xl mt-5 mb-5">Surrey & Abbotsford, British Columbia's Most Trusted Attorneys</h1>
           
            <p className="text-center md:tracking-wider text-slate-200 font-normal mb-4 text-sm md:text-lg lg:text-2xl">
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
                <button onClick={() => setIsDialogOpen(true)}>
                  <MagicButton
                    title="SCHEDULE"
                    icon={<FaCalendar />}
                    position="right"
                    otherClasses="rounded-lg text-neutral-300"
                  />
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
                          id="surrey"
                          name="office"
                          value="Surrey"
                          checked={formData.office === "Surrey"}
                          onChange={handleOfficeChange}
                        />
                        <label htmlFor="surrey" className="ml-2">Surrey</label>
                      </div>
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

            <Alert className="mt-5">
                <IconMail className="h-4 w-4" />
                <AlertTitle>New Office in Abbotsford!</AlertTitle>
                <IconMap/>  
                <AlertDescription className="flex flex-row">
                  1779 Clearbrook Road #216, Abbotsford, BC
                </AlertDescription>
              </Alert>
          </div>
        </div>
      </div>

  
      <div id="" className="mt-48 mb-36">
        <FeaturesSectionDemo/>
        <div className="flex flex-col items-center">
          <a href="/client-testimonials">
            <MagicButton
              title="Client Reviews"
              icon={<FaGavel />}
              position="right"
              otherClasses="rounded-lg"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
