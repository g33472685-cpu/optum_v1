import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

import { motion } from 'motion/react';
import { useForm } from 'react-hook-form';

export default function CTA() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data: any) => console.log(data);

  return (
    <section id="contact" className="bg-[#0a1a1f] py-20 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold mb-12">
          Ready to Protect <br />
          Your Investment?
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Column: What Happens Next */}
          <div className="border border-zinc-700 rounded-2xl p-8 bg-[#0f252b]">
            <h3 className="text-xl font-bold mb-6">WHAT HAPPENS NEXT?</h3>
            <p className="text-zinc-300 mb-8 text-sm leading-relaxed">
              Once you fill out the form, we'll be in contact with you within
              one business day. At that time, we will schedule a time for
              you to come into the shop with your vehicle to go over
              options.
            </p>

            <div className="space-y-4 text-sm text-zinc-300 mb-8">
              <p><strong>Address:</strong> 4444 W 76th St, Edina, MN 55435</p>
              <p><strong>Phone:</strong> 651-706-9895</p>
              <p><strong>Mon-Fri:</strong> 10:00 AM to 6:00 PM (Appointment Only)</p>
              <p><strong>Sat:</strong> 11:00 AM to 2:00 PM (Appointment Only)</p>
              <p><strong>Sun:</strong> Closed</p>
            </div>

            <button className="w-full bg-white text-black font-bold py-4 rounded-lg hover:bg-zinc-200 transition-colors">
              CLICK HERE TO BOOK ONLINE
            </button>
          </div>

          {/* Right Column: Form */}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">Year, Make, Model *</label>
                <input {...register("vehicle")} placeholder="Example: 2023 BMW M3" className="w-full bg-[#0f252b] border border-zinc-700 rounded-lg p-4 text-white" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Full Name *</label>
                <input {...register("name")} placeholder="Enter your full name" className="w-full bg-[#0f252b] border border-zinc-700 rounded-lg p-4 text-white" />
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">Email *</label>
                <input {...register("email")} placeholder="Enter your email address" className="w-full bg-[#0f252b] border border-zinc-700 rounded-lg p-4 text-white" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Phone *</label>
                <input {...register("phone")} placeholder="Enter your phone number" className="w-full bg-[#0f252b] border border-zinc-700 rounded-lg p-4 text-white" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-4">Choose Your Desired Service:</label>
              <div className="space-y-2">
                {['Paint Protection Film', 'Ceramic Coating', 'Window Tinting', 'Paint Correction', 'Premium Auto Detailing', 'Vinyl Wraps', 'Auto Body'].map(service => (
                  <label key={service} className="flex items-center gap-3">
                    <input type="checkbox" {...register("services")} value={service} className="w-5 h-5 rounded border-zinc-700 bg-[#0f252b]" />
                    {service}
                  </label>
                ))}
              </div>
            </div>

            <label className="flex items-start gap-3 text-sm text-zinc-300">
              <input type="checkbox" {...register("terms")} className="mt-1 w-5 h-5 rounded border-zinc-700 bg-[#0f252b]" />
              I agree to terms & conditions provided by the company. By providing my phone number, I agree to receive text messages & phone calls from Pristine Detail.
            </label>
          </form>
        </div>
      </div>
    </section>
  );
}
