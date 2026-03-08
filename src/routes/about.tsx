import { createFileRoute } from '@tanstack/react-router'
import teamImg from '@/assets/about/team.png'

export const Route = createFileRoute('/about')({
  component: RouteComponent,
})

const teamData = [
    {
        role: "COO",
        name: "Miaoyan",
        contributions: ["UI & UX Design", "Qualitative research"]
    },
    {
        role: "CFO",
        name: "Raphael",
        contributions: ["Financial Management", "Fundraising"]
    },
    {
        role: "CEO",
        name: "Maxim",
        contributions: ["He's the CEO, he does everything!"]
    },
    {
        role: "CIO",
        name: "Kaitai",
        contributions: ["Video Production", "Quantitative research"]
    },
    {
        role: "CTO",
        name: "Tharindu",
        contributions: ["Website implementation", "Research","Technical / Electronics shenanigans"]
    },
]

function RouteComponent() {
  return (
      <div>
          <div className="flex flex-col bg-linear-[180deg,white_0%,white_50%,#FFF5FD_70%,#D7DAFF]">
              <h1 className="font-outfit text-big mx-auto">
                <span className="text-[#303991]">
                    Hello
                </span>
                  <span className="text-[#555FD0]">
                    ,{' '}
                </span>
                  <span className="text-[#4656FF]">
                    We’re Tether!
                </span>
              </h1>
              <div>
                  <img
                      className=""
                      src={teamImg}
                  />
                  <div className="flex rounded-xl lg:rounded-full lg:bg-[#4758F2] bg-[#303991] text-white font-raleway font-black italic lg:not-italic text-[1rem] lg:text-[2rem] lg:px-4">
                      {teamData.map((person, index) => {
                          return (
                              <p
                                  key={index}
                                  className="mx-auto"
                              >
                                  {person.role}
                              </p>
                          )
                      })}
                  </div>
                  <div className="hidden lg:flex">
                      {teamData.map((person, index) => {
                          return (
                              <div
                                  key={index}
                                  className="mx-auto"
                              >
                                  <p className="">
                                      {person.name}
                                  </p>
                                  <ul className="list-disc">
                                      {person.contributions.map((contribution, contributuionIndex) => (
                                          <li key={contributuionIndex}>
                                              {contribution}
                                          </li>
                                      ))}
                                  </ul>
                              </div>
                          )
                      })}
                  </div>
              </div>
              <p className="lg:text-center font-outfit lg:text-[2.4rem]/12 lg:text-[#303991]">
                  We are a team of five Design Engineering students at Imperial College London.
                  At our university, students often leave their belongings in classrooms, where items can be
                  stolen without being noticed. As a result, many people feel anxious when leaving their
                  personal items unattended. This motivated us to use our engineering skills to reduce that
                  anxiety by making stealth theft noticeable in real time, helping people feel more confident
                  about the safety of their belongings.
              </p>
          </div>
      </div>
  )
}
