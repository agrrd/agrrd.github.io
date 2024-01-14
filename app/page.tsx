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


type WorkExperience = {
  title: string,
  fromDate: Date,
  toDate?: Date,
  company: string,
  location: string,
  description: string,
  breakPage: boolean,
}

// create a function that receives a date and return a string like "Jul 2019"
function formatDate(date: Date | undefined) {
  return date
    ? date.toLocaleDateString("en-US", { month: "short", year: "numeric" })
    : undefined
}

function WorkExperienceItem(props: { workExperience: WorkExperience, }) {
  return (
    <div className={props.workExperience.breakPage ? "break-after-page" : ""}>

      <Card className="m-2 hover:bg-gray-100">
        <CardHeader>
          <CardTitle>{props.workExperience.title}</CardTitle>
          <div className="flex flex-row justify-between">
            <CardDescription>{props.workExperience.company}</CardDescription>
            <CardDescription>
              {formatDate(props.workExperience.fromDate)} - {formatDate(props.workExperience.toDate) ?? "Present"}
            </CardDescription>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-xs">{props.workExperience.description}</p>
        </CardContent>
      </Card>
    </div>
  )
}


export default function Home() {
  const email = "agarrido@gmail.com"
  const contact = "Buenos Aires, Argentina, GMT-3"
  const skilledAt = [
    "Designing, managing and troubleshooting networks",
    "Managing Linux based infrastructures",
    "Automating with Python, Docker, Ansible, Jenkins, and GitLab",
    "Analyzing data with SQL",
    "Building command line apps in Python",
    "Creating web based tools in JavaScript",
  ]

  const workExperience: WorkExperience[] = [
    {
      title: "Network Specialist",
      company: "Independent Consultant",
      fromDate: new Date(2019, 6, 1),
      toDate: undefined,
      location: "Buenos Aires, Argentina.",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde architecto nulla eius sint maxime illum, dolorem quibusdam repudiandae accusantium et incidunt, illo veritatis obcaecati maiores, totam quis dolores doloribus recusandae!  Voluptas, excepturi sint cupiditate, beatae ullam suscipit corporis obcaecati vel quos commodi quae harum iste dolorum exercitationem. Nostrum, id. Ipsam dolorum id quibusdam est sunt eaque deserunt fuga iste dicta?  Aut voluptatibus veniam ducimus? Consectetur neque nostrum, nobis inventore laudantium libero atque ut quos eveniet fuga. Veniam expedita, dolorem eveniet iure cumque qui beatae fugiat repellat dignissimos rerum quia natus!  Expedita ullam numquam vitae quia modi deserunt laborum labore et blanditiis, qui quibusdam necessitatibus sed perspiciatis aperiam commodi doloribus recusandae voluptas ratione sapiente! Aut excepturi adipisci necessitatibus aperiam cum repellendus.  Ut non alias officia eaque quos. Sequi ipsum qui error sunt illo minima modi excepturi inventore labore fugiat, culpa nobis repudiandae temporibus corrupti rem perferendis eius voluptatum, enim nesciunt in!  Exercitationem perferendis ipsa, consequuntur quod eveniet vel doloremque facilis perspiciatis facere dicta explicabo consequatur cum voluptas praesentium id, laborum commodi neque accusamus architecto expedita distinctio sunt harum cumque! Labore, nisi!  Quisquam, soluta! Aliquid aliquam optio enim eligendi necessitatibus reprehenderit similique, doloremque sint quas dolorum beatae possimus quos nobis sed delectus ad! Reiciendis odio, possimus atque recusandae fugit optio porro expedita.  Itaque quam cumque repudiandae accusantium. Dolorum tenetur assumenda recusandae inventore eos cupiditate tempora rerum aperiam dolorem quaerat harum, suscipit, officia laudantium, consectetur repudiandae itaque autem molestiae numquam. Rem, eum et?  Harum, accusantium. Ducimus doloribus minus deserunt odio quidem corrupti exercitationem ratione praesentium dolore repudiandae et hic dolor quo laboriosam accusamus iusto, earum fugiat labore consequatur assumenda optio dignissimos rem iure.  Sint, libero! Quia, voluptatem ratione ab optio adipisci officiis doloribus, fugiat molestiae, aliquid eum recusandae obcaecati itaque provident maiores atque debitis quisquam voluptate dolore laudantium repellendus tempore rerum? Eos, quidem.",
      breakPage: true,
    },
    {
      title: "Network Specialist",
      company: "Independent Consultant",
      fromDate: new Date(2029, 6, 1),
      toDate: undefined,
      location: "Buenos Aires, Argentina.",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde architecto nulla eius sint maxime illum, dolorem quibusdam repudiandae accusantium et incidunt, illo veritatis obcaecati maiores, totam quis dolores doloribus recusandae!  Voluptas, excepturi sint cupiditate, beatae ullam suscipit corporis obcaecati vel quos commodi quae harum iste dolorum exercitationem. Nostrum, id. Ipsam dolorum id quibusdam est sunt eaque deserunt fuga iste dicta?  Aut voluptatibus veniam ducimus? Consectetur neque nostrum, nobis inventore laudantium libero atque ut quos eveniet fuga. Veniam expedita, dolorem eveniet iure cumque qui beatae fugiat repellat dignissimos rerum quia natus!  Expedita ullam numquam vitae quia modi deserunt laborum labore et blanditiis, qui quibusdam necessitatibus sed perspiciatis aperiam commodi doloribus recusandae voluptas ratione sapiente! Aut excepturi adipisci necessitatibus aperiam cum repellendus.  Ut non alias officia eaque quos. Sequi ipsum qui error sunt illo minima modi excepturi inventore labore fugiat, culpa nobis repudiandae temporibus corrupti rem perferendis eius voluptatum, enim nesciunt in!  Exercitationem perferendis ipsa, consequuntur quod eveniet vel doloremque facilis perspiciatis facere dicta explicabo consequatur cum voluptas praesentium id, laborum commodi neque accusamus architecto expedita distinctio sunt harum cumque! Labore, nisi!  Quisquam, soluta! Aliquid aliquam optio enim eligendi necessitatibus reprehenderit similique, doloremque sint quas dolorum beatae possimus quos nobis sed delectus ad! Reiciendis odio, possimus atque recusandae fugit optio porro expedita.  Itaque quam cumque repudiandae accusantium. Dolorum tenetur assumenda recusandae inventore eos cupiditate tempora rerum aperiam dolorem quaerat harum, suscipit, officia laudantium, consectetur repudiandae itaque autem molestiae numquam. Rem, eum et?  Harum, accusantium. Ducimus doloribus minus deserunt odio quidem corrupti exercitationem ratione praesentium dolore repudiandae et hic dolor quo laboriosam accusamus iusto, earum fugiat labore consequatur assumenda optio dignissimos rem iure.  Sint, libero! Quia, voluptatem ratione ab optio adipisci officiis doloribus, fugiat molestiae, aliquid eum recusandae obcaecati itaque provident maiores atque debitis quisquam voluptate dolore laudantium repellendus tempore rerum? Eos, quidem.",
      breakPage: false,
    },
    {
      title: "Network Specialist",
      company: "Independent Consultant",
      fromDate: new Date(2019, 6, 1),
      toDate: undefined,
      location: "Buenos Aires, Argentina.",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde architecto nulla eius sint maxime illum, dolorem quibusdam repudiandae accusantium et incidunt, illo veritatis obcaecati maiores, totam quis dolores doloribus recusandae!  Voluptas, excepturi sint cupiditate, beatae ullam suscipit corporis obcaecati vel quos commodi quae harum iste dolorum exercitationem. Nostrum, id. Ipsam dolorum id quibusdam est sunt eaque deserunt fuga iste dicta?  Aut voluptatibus veniam ducimus? Consectetur neque nostrum, nobis inventore laudantium libero atque ut quos eveniet fuga. Veniam expedita, dolorem eveniet iure cumque qui beatae fugiat repellat dignissimos rerum quia natus!  Expedita ullam numquam vitae quia modi deserunt laborum labore et blanditiis, qui quibusdam necessitatibus sed perspiciatis aperiam commodi doloribus recusandae voluptas ratione sapiente! Aut excepturi adipisci necessitatibus aperiam cum repellendus.  Ut non alias officia eaque quos. Sequi ipsum qui error sunt illo minima modi excepturi inventore labore fugiat, culpa nobis repudiandae temporibus corrupti rem perferendis eius voluptatum, enim nesciunt in!  Exercitationem perferendis ipsa, consequuntur quod eveniet vel doloremque facilis perspiciatis facere dicta explicabo consequatur cum voluptas praesentium id, laborum commodi neque accusamus architecto expedita distinctio sunt harum cumque! Labore, nisi!  Quisquam, soluta! Aliquid aliquam optio enim eligendi necessitatibus reprehenderit similique, doloremque sint quas dolorum beatae possimus quos nobis sed delectus ad! Reiciendis odio, possimus atque recusandae fugit optio porro expedita.  Itaque quam cumque repudiandae accusantium. Dolorum tenetur assumenda recusandae inventore eos cupiditate tempora rerum aperiam dolorem quaerat harum, suscipit, officia laudantium, consectetur repudiandae itaque autem molestiae numquam. Rem, eum et?  Harum, accusantium. Ducimus doloribus minus deserunt odio quidem corrupti exercitationem ratione praesentium dolore repudiandae et hic dolor quo laboriosam accusamus iusto, earum fugiat labore consequatur assumenda optio dignissimos rem iure.  Sint, libero! Quia, voluptatem ratione ab optio adipisci officiis doloribus, fugiat molestiae, aliquid eum recusandae obcaecati itaque provident maiores atque debitis quisquam voluptate dolore laudantium repellendus tempore rerum? Eos, quidem.",
      breakPage: false,
    },
    {
      title: "Network Specialist",
      company: "Independent Consultant",
      fromDate: new Date(2019, 6, 1),
      toDate: undefined,
      location: "Buenos Aires, Argentina.",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde architecto nulla eius sint maxime illum, dolorem quibusdam repudiandae accusantium et incidunt, illo veritatis obcaecati maiores, totam quis dolores doloribus recusandae!  Voluptas, excepturi sint cupiditate, beatae ullam suscipit corporis obcaecati vel quos commodi quae harum iste dolorum exercitationem. Nostrum, id. Ipsam dolorum id quibusdam est sunt eaque deserunt fuga iste dicta?  Aut voluptatibus veniam ducimus? Consectetur neque nostrum, nobis inventore laudantium libero atque ut quos eveniet fuga. Veniam expedita, dolorem eveniet iure cumque qui beatae fugiat repellat dignissimos rerum quia natus!  Expedita ullam numquam vitae quia modi deserunt laborum labore et blanditiis, qui quibusdam necessitatibus sed perspiciatis aperiam commodi doloribus recusandae voluptas ratione sapiente! Aut excepturi adipisci necessitatibus aperiam cum repellendus.  Ut non alias officia eaque quos. Sequi ipsum qui error sunt illo minima modi excepturi inventore labore fugiat, culpa nobis repudiandae temporibus corrupti rem perferendis eius voluptatum, enim nesciunt in!  Exercitationem perferendis ipsa, consequuntur quod eveniet vel doloremque facilis perspiciatis facere dicta explicabo consequatur cum voluptas praesentium id, laborum commodi neque accusamus architecto expedita distinctio sunt harum cumque! Labore, nisi!  Quisquam, soluta! Aliquid aliquam optio enim eligendi necessitatibus reprehenderit similique, doloremque sint quas dolorum beatae possimus quos nobis sed delectus ad! Reiciendis odio, possimus atque recusandae fugit optio porro expedita.  Itaque quam cumque repudiandae accusantium. Dolorum tenetur assumenda recusandae inventore eos cupiditate tempora rerum aperiam dolorem quaerat harum, suscipit, officia laudantium, consectetur repudiandae itaque autem molestiae numquam. Rem, eum et?  Harum, accusantium. Ducimus doloribus minus deserunt odio quidem corrupti exercitationem ratione praesentium dolore repudiandae et hic dolor quo laboriosam accusamus iusto, earum fugiat labore consequatur assumenda optio dignissimos rem iure.  Sint, libero! Quia, voluptatem ratione ab optio adipisci officiis doloribus, fugiat molestiae, aliquid eum recusandae obcaecati itaque provident maiores atque debitis quisquam voluptate dolore laudantium repellendus tempore rerum? Eos, quidem.",
      breakPage: false,
    },
    {
      title: "Network Specialist",
      company: "Independent Consultant",
      fromDate: new Date(2019, 6, 1),
      toDate: undefined,
      location: "Buenos Aires, Argentina.",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde architecto nulla eius sint maxime illum, dolorem quibusdam repudiandae accusantium et incidunt, illo veritatis obcaecati maiores, totam quis dolores doloribus recusandae!  Voluptas, excepturi sint cupiditate, beatae ullam suscipit corporis obcaecati vel quos commodi quae harum iste dolorum exercitationem. Nostrum, id. Ipsam dolorum id quibusdam est sunt eaque deserunt fuga iste dicta?  Aut voluptatibus veniam ducimus? Consectetur neque nostrum, nobis inventore laudantium libero atque ut quos eveniet fuga. Veniam expedita, dolorem eveniet iure cumque qui beatae fugiat repellat dignissimos rerum quia natus!  Expedita ullam numquam vitae quia modi deserunt laborum labore et blanditiis, qui quibusdam necessitatibus sed perspiciatis aperiam commodi doloribus recusandae voluptas ratione sapiente! Aut excepturi adipisci necessitatibus aperiam cum repellendus.  Ut non alias officia eaque quos. Sequi ipsum qui error sunt illo minima modi excepturi inventore labore fugiat, culpa nobis repudiandae temporibus corrupti rem perferendis eius voluptatum, enim nesciunt in!  Exercitationem perferendis ipsa, consequuntur quod eveniet vel doloremque facilis perspiciatis facere dicta explicabo consequatur cum voluptas praesentium id, laborum commodi neque accusamus architecto expedita distinctio sunt harum cumque! Labore, nisi!  Quisquam, soluta! Aliquid aliquam optio enim eligendi necessitatibus reprehenderit similique, doloremque sint quas dolorum beatae possimus quos nobis sed delectus ad! Reiciendis odio, possimus atque recusandae fugit optio porro expedita.  Itaque quam cumque repudiandae accusantium. Dolorum tenetur assumenda recusandae inventore eos cupiditate tempora rerum aperiam dolorem quaerat harum, suscipit, officia laudantium, consectetur repudiandae itaque autem molestiae numquam. Rem, eum et?  Harum, accusantium. Ducimus doloribus minus deserunt odio quidem corrupti exercitationem ratione praesentium dolore repudiandae et hic dolor quo laboriosam accusamus iusto, earum fugiat labore consequatur assumenda optio dignissimos rem iure.  Sint, libero! Quia, voluptatem ratione ab optio adipisci officiis doloribus, fugiat molestiae, aliquid eum recusandae obcaecati itaque provident maiores atque debitis quisquam voluptate dolore laudantium repellendus tempore rerum? Eos, quidem.",
      breakPage: false,
    },
    {
      title: "Solution Architect",
      company: "Intraway Corporation",
      fromDate: new Date(2015, 3, 1),
      toDate: new Date(2019, 6, 1),
      location: "Buenos Aires, Argentina",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde architecto nulla eius sint maxime illum, dolorem quibusdam repudiandae accusantium et incidunt, illo veritatis obcaecati maiores, totam quis dolores doloribus recusandae!  Voluptas, excepturi sint cupiditate, beatae ullam suscipit corporis obcaecati vel quos commodi quae harum iste dolorum exercitationem. Nostrum, id. Ipsam dolorum id quibusdam est sunt eaque deserunt fuga iste dicta?  Aut voluptatibus veniam ducimus? Consectetur neque nostrum, nobis inventore laudantium libero atque ut quos eveniet fuga. Veniam expedita, dolorem eveniet iure cumque qui beatae fugiat repellat dignissimos rerum quia natus!  Expedita ullam numquam vitae quia modi deserunt laborum labore et blanditiis, qui quibusdam necessitatibus sed perspiciatis aperiam commodi doloribus recusandae voluptas ratione sapiente! Aut excepturi adipisci necessitatibus aperiam cum repellendus.  Ut non alias officia eaque quos. Sequi ipsum qui error sunt illo minima modi excepturi inventore labore fugiat, culpa nobis repudiandae temporibus corrupti rem perferendis eius voluptatum, enim nesciunt in!  Exercitationem perferendis ipsa, consequuntur quod eveniet vel doloremque facilis perspiciatis facere dicta explicabo consequatur cum voluptas praesentium id, laborum commodi neque accusamus architecto expedita distinctio sunt harum cumque! Labore, nisi!  Quisquam, soluta! Aliquid aliquam optio enim eligendi necessitatibus reprehenderit similique, doloremque sint quas dolorum beatae possimus quos nobis sed delectus ad! Reiciendis odio, possimus atque recusandae fugit optio porro expedita.  Itaque quam cumque repudiandae accusantium. Dolorum tenetur assumenda recusandae inventore eos cupiditate tempora rerum aperiam dolorem quaerat harum, suscipit, officia laudantium, consectetur repudiandae itaque autem molestiae numquam. Rem, eum et?  Harum, accusantium. Ducimus doloribus minus deserunt odio quidem corrupti exercitationem ratione praesentium dolore repudiandae et hic dolor quo laboriosam accusamus iusto, earum fugiat labore consequatur assumenda optio dignissimos rem iure.  Sint, libero! Quia, voluptatem ratione ab optio adipisci officiis doloribus, fugiat molestiae, aliquid eum recusandae obcaecati itaque provident maiores atque debitis quisquam voluptate dolore laudantium repellendus tempore rerum? Eos, quidem.",
      breakPage: false,
    }
  ]

  return (
    <>
      <title>Alberto Garrido</title>
      <div className="container">
        <section className="text-gray-800 mt-4 flex flex-row justify-between">
          <div>
            <h1 className="font-semibold text-2xl">
              Alberto Garrido
            </h1>

            <h3 className="font-light text-lg">
              {contact}
            </h3>

            <h3 className="font-light text-lg underline">
              <a href={`mailto:${email}`}>
                {email}
              </a>
            </h3>

            <Link href="https://github.com/agrrd/cv" >
              <span className="underline">
                https://github.com/agrrd/cv
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
            <li className="flex flex-row gap-2">
              <div className="uppercase font-semibold">Education</div>
              <div>Bachiller. Nacional Superior N°6 Vicente López, 1998, Buenos Aires, Argentina.</div>
            </li>
            <li className="flex flex-row gap-2">
              <div className="uppercase font-semibold">Languages</div>
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

          <ul>
            {workExperience.map((workExperience, index) => (
              <WorkExperienceItem key={index} workExperience={workExperience} />
            ))}
          </ul>
        </section>

      </div >
    </>
  )
}
