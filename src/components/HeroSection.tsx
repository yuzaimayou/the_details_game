import Link from "next/link";

export default function HeroSection() {
    return (
        <section className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden bg-black text-white">

            <div className="absolute inset-0 z-0 opacity-20"
                style={{
                    backgroundImage: `linear-gradient(#333 1px, transparent 1px), linear-gradient(90 border-box, #333 1px, transparent 1px)`,
                    backgroundSize: '40px 40px'
                }}>
            </div>


            <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-zinc-800/40 via-black to-black"></div>


            <div className="relative z-10 container mx-auto px-4 text-center">


                <div className="inline-block px-3 py-1 mb-6 border border-zinc-700 rounded-full bg-zinc-900/50 backdrop-blur-sm">
                    <span className="text-xs font-mono text-zinc-400 tracking-widest uppercase">
                        v1.0.0 is now live
                    </span>
                </div>

                <h1 className="text-4xl md:text-8xl font-extrabold tracking-tighter mb-6 bg-clip-text text-white">
                    THE ULTIMATE <br />
                    <span className="text-white">GAME DATABASE</span>
                </h1>


                <p className="max-w-2xl mx-auto text-zinc-400 text-lg md:text-xl mb-10 leading-relaxed">
                    Tra cứu thông tin, chỉ số nhân vật và lịch sử cập nhật của hàng ngàn tựa game trên toàn thế giới với độ trễ cực thấp.
                </p>


                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <Link href="/explore">
                        <button className="px-8 py-3 bg-white text-black font-bold rounded-md hover:bg-zinc-200 transition-all duration-300 w-full sm:w-auto">
                            Explore Now
                        </button>
                    </Link>
                    <Link className="cursor-pointer" href="https://github.com/yuzaimayou">
                        <button className="px-8 py-3 border border-zinc-700 bg-black text-white font-semibold rounded-md hover:bg-zinc-900 transition-all duration-300 w-full sm:w-auto">
                            About Me
                        </button>
                    </Link>


                </div>


                <div className="mt-16 font-mono text-sm text-zinc-500">
                    <span className="text-zinc-700">$</span> created by next.js
                </div>
            </div>


            <div className="absolute bottom-0 w-full h-[1px] bg-linear-to-r from-transparent via-zinc-800 to-transparent"></div>
        </section>
    )
}