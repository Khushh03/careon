// export default function AboutSection() {
//     return <section className="min-h-96">asdasdasdasd</section>
// }
import { ArrowRight } from "lucide-react"

export default function AboutSection() {
    return (
        <section className="py-24 px-6 bg-[#F8F9FA] font-inter">
            <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-16">
                {/* Text Content */}
                <div className="flex-1 space-y-8">
                    {/* Badge */}
                    <div className="flex items-center gap-3">
                        <span className="h-3 w-3 rounded-full bg-[#00B94E]" />
                        <span className="text-sm font-bold tracking-widest text-gray-500 ">
                            About Us
                        </span>
                    </div>

                    {/* Heading */}
                    <h2 className="text-[40px] font-bold text-gray-900 leading-tight tracking-tight font-inter">
                        United Together to Create <br />
                        <span className="text-gray-900">Enduring Hope</span>
                    </h2>

                    {/* Description */}
                    <p className="text-lg text-gray-600 max-w-lg leading-relaxed">
                        We are purpose driven organization empowering health &
                        education. Our mission is to provide sustainable
                        solutions for communities in need through dedicated
                        support and global outreach.
                    </p>

                    {/* Action Button */}
                    <button className="group flex items-center gap-2 px-8 py-4 border-2 border-gray-900 rounded-full text-gray-900 font-bold hover:bg-gray-900 hover:text-white transition-all duration-300">
                        Learn More
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>

                {/* Image Container */}
                <div className="flex-1 relative">
                    <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl border-[12px] border-white">
                        <img
                            src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=1200"
                            alt="Community kids smiling"
                            className="w-full h-[500px] object-cover hover:scale-105 transition-transform duration-700"
                        />
                    </div>

                    {/* Subtle decorative background shape */}
                    <div className="absolute -bottom-6 -right-6 w-full h-full bg-gray-200 rounded-[3rem] -z-0" />
                </div>
            </div>
        </section>
    )
}

            
    