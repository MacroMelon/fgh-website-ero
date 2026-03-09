import { createFileRoute } from '@tanstack/react-router'
import teamImg from '@/assets/about/team.png'

import maasLogo from '@/assets/about/partners/maas360.png'
import chinesePoliceLogo from '@/assets/about/partners/chinese_police.png'
import imperialCollgeLogo from '@/assets/about/partners/imperial_collge.png'
import jamfLogo from '@/assets/about/partners/jamf.png'
import metPoliceLogo from '@/assets/about/partners/met_police.png'
import msIntuneLogo from '@/assets/about/partners/microsft_intune.png'
import samsungLogo from '@/assets/about/partners/samsung.png'
import UCLLogo from '@/assets/about/partners/ucl.png'

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
        contributions: ["Design lead lead lead", "CAD Renders"]
    },
    {
        role: "CIO",
        name: "Kaitai",
        contributions: ["Video Production", "Quantitative research"]
    },
    {
        role: "CTO",
        name: "Tharindu",
        contributions: ["Website implementation", "Electronics"]
    },
]

const partnerData = [
    {
        name: "University College London",
        logo: UCLLogo
    },
    {
        name: "MaaS360",
        logo: maasLogo
    },
    {
        name: "British Metropolitan Police",
        logo: metPoliceLogo
    },
    {
        name: "Microsoft Intune",
        logo: msIntuneLogo
    },
    {
        name: "Imperial College",
        logo: imperialCollgeLogo
    },
    {
        name: "Samsung",
        logo: samsungLogo
    },
    {
        name: "jamf",
        logo: jamfLogo
    },
    {
        name: "Chinese Police",
        logo: chinesePoliceLogo
    },
]

function RouteComponent() {
  return (
      <div>
          <div className="flex flex-col bg-linear-[180deg,white_0%,white_50%,#FFF5FD_70%,#D7DAFF]">
              <h1 className="mt-36 font-outfit text-big mx-auto">
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
              <div className="flex flex-col mx-auto w-250 mt-28">
                  <img
                      className=""
                      src={teamImg}
                      alt="Group picture of team"
                  />
                  <div className="hidden lg:flex mt-4">
                      {teamData.map((person, index) => {
                          return (
                              <div
                                  key={index}
                                  className="mx-auto flex-1"
                              >
                                  <div className="text-center font-black font-outfit text-[#364AFF]">
                                      <p className="text-[1.9rem]">
                                          {person.name}
                                      </p>
                                      <p className="text-[1.3rem]">
                                          {person.role}
                                      </p>
                                  </div>
                                  <ul className="list-disc list-outside mt-4 font-outfit text-[1rem]/5 text-[#303991]">
                                      {person.contributions.map((contribution, contributuionIndex) => (
                                          <li
                                              className="ml-16 px-2"
                                              key={contributuionIndex}
                                          >
                                              {contribution}
                                          </li>
                                      ))}
                                  </ul>
                              </div>
                          )
                      })}
                  </div>
              </div>
              <p className="mx-auto max-w-300 mt-22 p-5 lg:text-center font-outfit text-small text-[#303991]">
                  We are a team of five Design Engineering students at Imperial College London.
                  At our university, students often leave their belongings in classrooms, where items can be
                  stolen without being noticed. As a result, many people feel anxious when leaving their
                  personal items unattended. This motivated us to use our engineering skills to reduce that
                  anxiety by making stealth theft noticeable in real time, helping people feel more confident
                  about the safety of their belongings.
              </p>
              <a
                  title="See how to get started with Tether"
                  className="flex mx-auto mt-28 mb-24 py-1.5 self-center justify-center w-84 min-w-64 rounded-2xl  border-[#303991] border-6 text-[#303991] font-medium font-outfit text-[1.9rem] line-clamp-1"
                  href="/contact"
              >
                  Contact
              </a>
          </div>
          <div className="mx-18 my-36">
              <h2 className="font-outfit text-big text-[#3D4EE8]">
                  Developed with insights from
              </h2>
              <div className="flex gap-4 mt-20">
                  {partnerData.map((partner, index) => (
                      <div
                          className="flex flex-1 px-6 aspect-square bg-linear-[180deg,#FFF9FD,#E4E6FF]"
                          key={index}
                      >
                          <img
                              className="my-auto"
                              src={partner.logo}
                              alt={partner.name + " logo"}
                          />
                      </div>
                  ))}
              </div>
          </div>
      </div>
  )
}
