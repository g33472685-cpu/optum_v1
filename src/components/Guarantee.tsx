import { motion } from 'motion/react';
import { ShieldCheck, Award, ArrowRight } from 'lucide-react';

export default function Guarantee() {
  return (
    <section className="bg-zinc-100 text-zinc-900 pt-10">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="font-serif text-5xl font-medium mb-6">Our Guarantee</h2>
          <p className="text-lg text-zinc-600 mb-12 max-w-lg">
            We stand behind every install because when you invest in protection, you deserve peace of mind.
          </p>

          <div className="grid sm:grid-cols-2 gap-6 mb-12">
            <div className="bg-white p-8 rounded-3xl border border-zinc-200">
              <Award className="w-8 h-8 text-amber-600 mb-4" />
              <h3 className="font-medium text-xl mb-3">Manufacturer's Warranty — Honored 100%</h3>
              <p className="text-zinc-600 text-sm leading-relaxed">
                If any product we install—whether it's film, ceramic coating, window tint, or vinyl wrap—fails due to a manufacturer defect, we'll replace it. Simple as that.
              </p>
            </div>
            <div className="bg-white p-8 rounded-3xl border border-zinc-200">
              <ShieldCheck className="w-8 h-8 text-amber-600 mb-4" />
              <h3 className="font-medium text-xl mb-3">Craftsmanship Guarantee — We Own Our Work</h3>
              <p className="text-zinc-600 text-sm leading-relaxed">
                If something's off due to our installation, whether it's a fit issue, bubbling, or poor adhesion, we'll fix it.
              </p>
            </div>
          </div>

          <button className="flex items-center gap-2 bg-zinc-900 text-white px-8 py-4 rounded-full font-medium hover:bg-zinc-800 transition-colors mb-8">
            Schedule a Vehicle Protection Analysis
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="relative h-[600px] rounded-3xl overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=80&w=2070&auto=format&fit=crop"
            alt="Car with water beading"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>
    </section>
  );
}
