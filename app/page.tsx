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

import { formatDate, dateDelta } from "@/lib/utils"
import { contact, email, siteUrl, skilledAt, } from "@/data"

function WorkExperienceContainer() {
  return (
    <>
      <CompanyExperienceComponent
        company="Independent Consultant"
        fromDate={new Date(2021, 0, 1)}
        toDate={undefined}
        breakPage={false}
        position="Network Specialist Consultant"
        location="Buenos Aires, Argentina"
      >
        <text>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur, eum neque, provident deserunt harum et ut omnis eveniet dicta magnam voluptatibus perferendis ea animi fugiat doloremque quod ipsa rerum pariatur?
          Pariatur, repellendus explicabo maiores quasi optio neque quis suscipit doloremque labore ad aspernatur aliquam reprehenderit iusto rerum? Rerum reiciendis ad aperiam itaque. Accusamus culpa autem blanditiis tempore deleniti quidem earum.
          Officia sunt veniam esse fuga animi a aliquid soluta consequuntur optio iusto fugiat repudiandae quo, inventore mollitia, ratione nulla temporibus eos tempore dolore ipsam! Molestiae dicta explicabo quisquam laboriosam provident!
        </text>

        <ul className="my-2 mx-8 list-disc">
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatem.
          </li>
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatem.
          </li>
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatem.
          </li>
        </ul>
      </CompanyExperienceComponent>

      <CompanyExperienceComponent
        company="Intraway Corporation"
        fromDate={new Date(2015, 0, 1)}
        toDate={new Date(2019, 0, 1)}
        breakPage={true}
        position="Solution Architect"
        location="Buenos Aires, Argentina"
      >
        <text>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur, eum neque, provident deserunt harum et ut omnis eveniet dicta magnam voluptatibus perferendis ea animi fugiat doloremque quod ipsa rerum pariatur?
          Pariatur, repellendus explicabo maiores quasi optio neque quis suscipit doloremque labore ad aspernatur aliquam reprehenderit iusto rerum? Rerum reiciendis ad aperiam itaque. Accusamus culpa autem blanditiis tempore deleniti quidem earum.
          Officia sunt veniam esse fuga animi a aliquid soluta consequuntur optio iusto fugiat repudiandae quo, inventore mollitia, ratione nulla temporibus eos tempore dolore ipsam! Molestiae dicta explicabo quisquam laboriosam provident!
        </text>

        <ul className="my-2 mx-8 list-disc">
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatem.
          </li>
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatem.
          </li>
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatem.
          </li>
        </ul>

      </CompanyExperienceComponent>

      <CompanyExperienceComponent
        company="Intraway Corporation"
        fromDate={new Date(2015, 0, 1)}
        toDate={new Date(2019, 0, 1)}
        breakPage={false}
        position="Technical Account Manager"
        location="Buenos Aires, Argentina"
      >
        <text>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur, eum neque, provident deserunt harum et ut omnis eveniet dicta magnam voluptatibus perferendis ea animi fugiat doloremque quod ipsa rerum pariatur?
          Pariatur, repellendus explicabo maiores quasi optio neque quis suscipit doloremque labore ad aspernatur aliquam reprehenderit iusto rerum? Rerum reiciendis ad aperiam itaque. Accusamus culpa autem blanditiis tempore deleniti quidem earum.
          Officia sunt veniam esse fuga animi a aliquid soluta consequuntur optio iusto fugiat repudiandae quo, inventore mollitia, ratione nulla temporibus eos tempore dolore ipsam! Molestiae dicta explicabo quisquam laboriosam provident!
        </text>

        <ul className="my-2 mx-8 list-disc">
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatem.
          </li>
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatem.
          </li>
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatem.
          </li>
        </ul>

      </CompanyExperienceComponent>

      <CompanyExperienceComponent
        company="Intraway Corporation"
        fromDate={new Date(2015, 0, 1)}
        toDate={new Date(2019, 0, 1)}
        breakPage={false}
        position="Support Engineer"
        location="Buenos Aires, Argentina"
      >
        <text>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur, eum neque, provident deserunt harum et ut omnis eveniet dicta magnam voluptatibus perferendis ea animi fugiat doloremque quod ipsa rerum pariatur?
          Pariatur, repellendus explicabo maiores quasi optio neque quis suscipit doloremque labore ad aspernatur aliquam reprehenderit iusto rerum? Rerum reiciendis ad aperiam itaque. Accusamus culpa autem blanditiis tempore deleniti quidem earum.
          Officia sunt veniam esse fuga animi a aliquid soluta consequuntur optio iusto fugiat repudiandae quo, inventore mollitia, ratione nulla temporibus eos tempore dolore ipsam! Molestiae dicta explicabo quisquam laboriosam provident!
        </text>

        <ul className="my-2 mx-8 list-disc">
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatem.
          </li>
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatem.
          </li>
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatem.
          </li>
        </ul>

      </CompanyExperienceComponent>

      <CompanyExperienceComponent
        company="IBM Global Services Argentina"
        fromDate={new Date(2015, 0, 1)}
        toDate={new Date(2019, 0, 1)}
        breakPage={false}
        position="Unix / Data Protection Specialist"
        location="Buenos Aires, Argentina"
      >
        <text>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur, eum neque, provident deserunt harum et ut omnis eveniet dicta magnam voluptatibus perferendis ea animi fugiat doloremque quod ipsa rerum pariatur?
          Pariatur, repellendus explicabo maiores quasi optio neque quis suscipit doloremque labore ad aspernatur aliquam reprehenderit iusto rerum? Rerum reiciendis ad aperiam itaque. Accusamus culpa autem blanditiis tempore deleniti quidem earum.
          Officia sunt veniam esse fuga animi a aliquid soluta consequuntur optio iusto fugiat repudiandae quo, inventore mollitia, ratione nulla temporibus eos tempore dolore ipsam! Molestiae dicta explicabo quisquam laboriosam provident!
        </text>

        <ul className="my-2 mx-8 list-disc">
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatem.
          </li>
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatem.
          </li>
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatem.
          </li>
        </ul>

      </CompanyExperienceComponent>

      <CompanyExperienceComponent
        company="Cablevision - Fibertel"
        fromDate={new Date(2015, 0, 1)}
        toDate={new Date(2019, 0, 1)}
        breakPage={false}
        position="NOC Operator"
        location="Buenos Aires, Argentina"
      >
        <text>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur, eum neque, provident deserunt harum et ut omnis eveniet dicta magnam voluptatibus perferendis ea animi fugiat doloremque quod ipsa rerum pariatur?
          Pariatur, repellendus explicabo maiores quasi optio neque quis suscipit doloremque labore ad aspernatur aliquam reprehenderit iusto rerum? Rerum reiciendis ad aperiam itaque. Accusamus culpa autem blanditiis tempore deleniti quidem earum.
          Officia sunt veniam esse fuga animi a aliquid soluta consequuntur optio iusto fugiat repudiandae quo, inventore mollitia, ratione nulla temporibus eos tempore dolore ipsam! Molestiae dicta explicabo quisquam laboriosam provident!
        </text>

        <ul className="my-2 mx-8 list-disc">
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatem.
          </li>
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatem.
          </li>
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatem.
          </li>
        </ul>

      </CompanyExperienceComponent>
    </>
  )
}

type CompanyExperienceComponentProps = {
  company: string,
  fromDate: Date,
  toDate?: Date,
  breakPage?: boolean,
  position: string,
  location: string,
  children?: React.ReactNode
}

function CompanyExperienceComponent(props: CompanyExperienceComponentProps) {
  const { years, months } = dateDelta(props.fromDate, props.toDate ?? new Date())

  return (
    <div className={props.breakPage ? "pt-6 md:flex md:flex-row break-after-page hover:bg-gray-200" : "pt-6 md:flex md:flex-row hover:bg-gray-200"}>
      <div className="text-center md:w-1/6 font-light text-xs mt-1 mr-4">
          {formatDate(props.fromDate)} - {formatDate(props.toDate) ?? "Present"}
      </div>


      <div className="md:w-5/6 border-l-2">
          <div className="md:mx-2">
            <div className="text-md">{props.position}</div>
            <div className="flex flex-row justify-between">
              <CardDescription>{props.company}</CardDescription>
            </div>
          </div>

          <div className="m-2 text-xs">{props.children}</div>
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
              <div className="w-24 uppercase font-semibold">
                <text>Education</text>
              </div>
              <div>
                <text>
                  Bachiller. Nacional N°6 Vicente López, 1998, Buenos Aires, Argentina.
                </text>
              </div>
            </li>

            <li className="flex flex-row gap-2">
              <div className="w-24 uppercase font-semibold">
                <text>Languages</text>
              </div>
              <div>
                <text className="flex">English: Fluent</text>
                <text className="flex">Spanish: Native</text>
              </div>
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

          <WorkExperienceContainer />
        </section>

      </div >
    </>
  )
}
