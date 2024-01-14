import Image from 'next/image'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import Link from 'next/link'

import { CompanyExperience, Position } from '@/types'
import { formatDate, dateDelta } from "@/lib/utils"
import { contact, email, siteUrl, skilledAt, workExperience, } from "@/data"

function WorkExperienceContainer(props: { workExperience: CompanyExperience[] }) {
  return (
    <div className="mt-8">
      {
        props.workExperience.map((companyExperience, index) => (
          <CompanyExperience key={index} experience={companyExperience} />
        ))
      }
    </div>
  )
}

function CompanyExperience(props: { experience: CompanyExperience, }) {

  return (
    <div className={props.experience.breakPage ? "mb-4 flex flex-row break-after-page" : "mb-4 flex flex-row"}>
      <h1 className="p-2 w-1/6 font-semibold text-right text-md mr-4">
        {props.experience.company}
      </h1>

      <div className="w-5/6">
        {
          props.experience.positions.map((position, index) => {
            const { years, months } = dateDelta(position.fromDate, position.toDate ?? new Date())

            return (
              <div key={index} className="p-2 mb-4 hover:bg-gray-100">
                <div className="mx-2">
                  <div>{position.title}</div>
                  <div className="flex flex-row justify-between">
                    <CardDescription>{position.location}</CardDescription>
                    <CardDescription>
                      {formatDate(position.fromDate)} - {formatDate(position.toDate) ?? "Present"}
                      {years > 0 && <span className="mx-2">{`(${years} years)`}</span>}
                    </CardDescription>
                  </div>
                </div>

                <div className="m-2 text-xs">{position.description}</div>
              </div>
            )

          })
        }
      </div>

    </div>
  )
}


export default function Home() {
  return (
    <>
      <title>Alberto Garrido</title>
      <div className="container">
        <section className="text-gray-800 mt-4 flex flex-row justify-between">
          <div>
            <h1 className="font-semibold text-2xl">
              Alberto Garrido
            </h1>
            <h1 className="font-semibold text-xl">
              Solution Architect
            </h1>

            <h3 className="font-light text-sm">
              {contact}
            </h3>

            <h3 className="font-light text-sm underline">
              <a href={`mailto:${email}`}>
                {email}
              </a>
            </h3>

            <Link href={siteUrl} >
              <span className="text-sm underline">
                {siteUrl}
              </span>
            </Link>
          </div>

          <div>
            <Image className="w-28 h-28 border-slate-200 border-2 rounded" src="/foto.jpg" alt="Alberto Garrido" width="384" height="512" />
          </div>

        </section>

        <section>
          {/*       background section */}
          <ul className="text-xs mt-6">
            <li className="flex flex-row gap-2 mb-2">
              <div className="w-32 uppercase font-semibold">Education</div>
              <div>Bachiller. Nacional Superior N°6 Vicente López, 1998, Buenos Aires, Argentina.</div>
            </li>
            <li className="flex flex-row gap-2">
              <div className="w-32 uppercase font-semibold">Languages</div>
              <div>English: Fluent. Spanish: Native</div>
            </li>
          </ul>
        </section>


        <section>
          <h2 className="uppercase font-semibold text-xl mt-6">
            Career Profile
          </h2>
          <p className="text-xs mt-2">
            With two decades of experience I have worked for leading companies such as Cablevisión/Fibertel, IBM Global Services, and Intraway Corporation. My expertise involves implementing company’s products, providing consulting services, using automation to improve infrastructure and business processes, and integrating enterprise systems.
            I am also proficient in software development using Python, SQL, and JavaScript.
          </p>

          <div className="text-xs mt-2">
            I am skilled at:
            <ul className="list-disc m-2">
              {skilledAt.map((skill, index) => (
                <li className="ml-8" key={index}>{skill}</li>
              ))}
            </ul>
          </div>
        </section>

        <section>
          <h2 className="uppercase font-semibold text-xl mt-6">
            Work Experience
          </h2>

          <WorkExperienceContainer workExperience={workExperience} />
        </section>

      </div >
    </>
  )
}
