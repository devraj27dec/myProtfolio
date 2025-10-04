import { myexperince } from "@/constat";

export default function Experience() {
  return (
    <div className="flex flex-col items-center justify-center gap-6 sm:py-32 py-16">
      <h2 className="scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-4xl text-slate-200">
        My Experience
      </h2>
      <div className="w-full max-w-3xl space-y-4 mt-10">
        {myexperince.map((exp) => (
          <div
            key={exp.id}
            className="w-full rounded-xl shadow-md p-5 border border-slate-700 hover:shadow-lg transition bg-indigo-950"
          >
            <div className="flex justify-between">
                <h3 className="text-lg font-semibold text-slate-100">
                {exp.company}
                </h3>
                <div className="flex text-xs text-slate-400">
                    <p>{exp.start_date}</p> - <p>{exp.end_date}</p>
                </div>
            </div>
            <p className="text-sm text-slate-300 py-2">{exp.type}</p>
            <p className="text-sm text-slate-300 mb-2">{exp.role}</p>
          </div>
        ))}
      </div>
    </div>
  )
}