import { CvHeader } from '@/interface'
import Image from 'next/image'
import me from '../../../../public/jag.png'

export const Header = ({ data }: { data: CvHeader }) => (
  <section className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40 lg:rounded-tr-md">
    <div className="mb-6 flex h-auto justify-center rounded-md lg:absolute lg:right-20">
      <Image
        src={me}
        alt="me"
        priority
        className="rounded-md"
      />
    </div>
    <div className="grid max-w-3xl grid-cols-1 items-baseline gap-y-8 md:grid-cols-4">
      <h2 className="text-base font-semibold text-zinc-800 dark:text-zinc-100">{data.name}</h2>

      <div className="md:col-span-3">
        <div className="flex justify-between">
          <p className="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100 lg:w-2/6">
            Address:
          </p>
          <p className="pl-4 text-zinc-600 dark:text-zinc-400 lg:w-4/6">{data.address}</p>
        </div>

        <div className="flex justify-between">
          <p className="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100 lg:w-2/6">
            Mobile number:
          </p>
          <p className="pl-4 text-zinc-600 dark:text-zinc-400 lg:w-4/6">
            <a
              href={`tel:${data.phone}`}
              className="hover:text-themeOrange dark:hover:text-themeGreen underline"
            >
              {data.phone}
            </a>
          </p>
        </div>

        <div className="flex justify-between">
          <p className="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100 lg:w-2/6">
            Email:
          </p>
          <p className="pl-4 text-zinc-600 dark:text-zinc-400 lg:w-4/6">
            <a
              href={`mailto:${data.email}`}
              className="hover:text-themeOrange dark:hover:text-themeGreen underline"
            >
              {data.email}
            </a>
          </p>
        </div>

        <div className="flex justify-between">
          <p className="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100 lg:w-2/6">
            Date of birth:
          </p>
          <p className="pl-4 text-zinc-600 dark:text-zinc-400 lg:w-4/6">{data.dateofbirth}</p>
        </div>

        <div className="flex justify-between">
          <p className="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100 lg:w-2/6">
            Github:
          </p>
          <p className="pl-4 text-zinc-600 dark:text-zinc-400 lg:w-4/6">
            <a
              target="_blank"
              rel="noreferrer"
              href={data.github}
              className="hover:text-themeOrange dark:hover:text-themeGreen underline"
            >
              {data.github.replace('https://', '')}
            </a>
          </p>
        </div>

        <div className="flex justify-between">
          <p className="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100 lg:w-2/6">
            LinkedIn:
          </p>
          <p className="pl-4 text-zinc-600 dark:text-zinc-400 lg:w-4/6">
            <a
              target="_blank"
              rel="noreferrer"
              href={data.linkedin}
              className="hover:text-themeOrange dark:hover:text-themeGreen break-all underline"
            >
              {data.linkedin.replace('https://www.', '')}
            </a>
          </p>
        </div>

        <div className="flex justify-between">
          <p className="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100 lg:w-2/6">
            Languages:
          </p>
          <p className="break-words pl-4 text-zinc-600 dark:text-zinc-400 lg:w-4/6">{data.lang}</p>
        </div>

        <div className="flex justify-between">
          <p className="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100 lg:w-2/6">
            Drivers license:
          </p>
          <p className="pl-4 text-zinc-600 dark:text-zinc-400 lg:w-4/6">{data.driverslic}</p>
        </div>
      </div>
    </div>
  </section>
)
