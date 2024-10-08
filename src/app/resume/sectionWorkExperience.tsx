import Section from '@/components/section'
import clsx from 'clsx'
import React from 'react'

function SectionWorkExperience() {
  return (
    <Section className="bg-main py-10 md:py-20">
      <h2 className="text-4xl md:text-5xl font-medium text-center mb-10 md:mb-20">
        My Work Experience
      </h2>
      <div className="flex flex-col">
        <div className="grid grid-cols-3">
          <div className="hidden md:flex flex-col">
            <div className="text-lg font-semibold">AXON Networks, Ho Chi Minh city</div>
            <div>Dec 2022 - Now</div>
          </div>
          <div
            className={clsx(
              'col-span-3 md:col-span-2 flex flex-col gap-4 pl-10 md:pl-20 pb-20',
              'border-dashed border-l-2 border-secondary',
              'relative',
            )}
          >
            <div
              className={clsx(
                'bg-main border-2 border-dashed border-secondary rounded-full',
                'absolute -left-4 p-2',
              )}
            >
              <div className="bg-yellow-500" />
            </div>
            <div className="flex md:hidden flex-col">
              <div className="md:text-lg font-semibold">AXON Networks, Ho Chi Minh city</div>
              <div>Dec 2022 - Now</div>
            </div>
            <div>
              <div className={clsx('md:text-lg font-semibold')}>Web Application Engineer</div>
              <div className="text-muted-foreground">ReactJS, Typescript, MUI</div>
            </div>
            <ul className="flex flex-col gap-2">
              <li>
                • Working in Axon Orchestrator product, a dashboard allow user controls network
                devices.
              </li>
              <li>• In charge of maintaining existed features and implementing new product.</li>
              <li>
                • Closely cooperate with other worldwide teams from Denmark (Dev + Designer), US
                (managers) and Singapore (Dev + QA).
              </li>
            </ul>
          </div>
          <div className="hidden md:flex flex-col">
            <div className="text-lg font-semibold">MyConstant, Ho Chi Minh city</div>
            <div>Apr 2020 - Sep 2022</div>
          </div>
          <div
            className={clsx(
              'col-span-3 md:col-span-2 flex flex-col gap-4 pl-10 md:pl-20 pb-20',
              'border-dashed border-l-2 border-secondary',
              'relative',
            )}
          >
            <div
              className={clsx(
                'bg-main border-2 border-dashed border-secondary rounded-full',
                'absolute -left-4 p-2',
              )}
            >
              <div className="bg-blue-500 w-4 h-4 rounded-full" />
            </div>
            <div className="flex md:hidden flex-col">
              <div className="md:text-lg font-semibold">MyConstant, Ho Chi Minh city</div>
              <div>Apr 2020 - Sep 2022</div>
            </div>
            <div>
              <div className={clsx('md:text-lg font-semibold')}>Frontend Developer</div>
              <div className="text-muted-foreground">
                ReactJS, Javascript/Typescript, web3.js, Bootstrap, ChakraUI
              </div>
            </div>
            <ul className="flex flex-col gap-2">
              <li>
                <a
                  className="text-blue-500 underline"
                  target="_blank"
                  href="https://www.myconstant.com"
                >
                  https://www.myconstant.com
                </a>
              </li>
              <li>• MyConstant is an investing platform in crypto industrial.</li>
              <li>
                • In charge of implement well-looking and responsive UI for new products, as well as
                maintain old products. Implement design from Sketch and Figma.
              </li>
              <li>• Build new blog page (Wordpress) to support content team and marketing.</li>
            </ul>
          </div>
          <div className="hidden md:flex flex-col">
            <div className="text-lg font-semibold">Designveloper, Ho Chi Minh city</div>
            <div>Apr 2018 - Mar 2020</div>
          </div>
          <div
            className={clsx(
              'col-span-3 md:col-span-2 flex flex-col gap-4 pl-10 md:pl-20 pb-20',
              'border-dashed border-l-2 border-secondary',
              'relative',
            )}
          >
            <div
              className={clsx(
                'bg-main border-2 border-dashed border-secondary rounded-full',
                'absolute -left-4 p-2',
              )}
            >
              <div className="bg-red-500 w-4 h-4 rounded-full" />
            </div>
            <div className="flex md:hidden flex-col">
              <div className="md:text-lg font-semibold">Designveloper, Ho Chi Minh city</div>
              <div>Apr 2018 - Mar 2020</div>
            </div>
            <div>
              <div className={clsx('md:text-lg font-semibold')}>Fullstack Developer</div>
              <div className="text-muted-foreground">
                React, React Native, NodeJS, MongoDB, GraphQL, Docker
              </div>
            </div>
            <ul className="flex flex-col gap-2">
              <li>
                <a
                  className="text-blue-500 underline"
                  target="_blank"
                  href="https://www.luminpdf.com"
                >
                  https://www.luminpdf.com
                </a>
              </li>
              <li>
                • Build web application using ReactJS, and mobile application using React Native and
                native languages (Swift and Java).
              </li>
              <li>
                • Build API for authentication module, payment module with Stripe and write unit
                test.
              </li>
            </ul>
          </div>
          <div className="hidden md:flex flex-col">
            <div className="text-lg font-semibold">Nguyen Hiep Software, Ho Chi Minh city</div>
            <div>Nov 2016 - Mar 2018</div>
          </div>
          <div
            className={clsx(
              'col-span-3 md:col-span-2 flex flex-col gap-4 pl-10 md:pl-20',
              'border-dashed border-l-2 border-secondary',
              'relative',
            )}
          >
            <div
              className={clsx(
                'bg-main border-2 border-dashed border-secondary rounded-full',
                'absolute -left-4 p-2',
              )}
            >
              <div className="bg-gray-500 w-4 h-4 rounded-full" />
            </div>
            <div className="flex md:hidden flex-col">
              <div className="md:text-lg font-semibold">Nguyen Hiep Software, Ho Chi Minh city</div>
              <div>Nov 2016 - Mar 2018</div>
            </div>
            <div>
              <div className={clsx('md:text-lg font-semibold')}>
                Internship / Fullstack Developer
              </div>
              <div className="text-muted-foreground">HTML/CSS, NodeJS, iOS, Android, MongoDB</div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}

export default SectionWorkExperience
