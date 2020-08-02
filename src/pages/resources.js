import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import Header from "../components/header";
import Footer from "../components/footer";
import SEO from "../components/seo";

export default () => (
  <StaticQuery
    query={graphql`
      query {
        frosh3: file(relativePath: { eq: "frosh-3.jpg" }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={(data) => (
      <body className="leading-normal tracking-normal text-white gradient">
        <SEO
          title="Frosh of the Penguins"
          keywords={[`McGill`, `Management`, `Frosh`, `2020`, `Penguins`]}
        />

        <Header />

        <section className="bg-white py-8">
          <div className="container max-w-5xl mx-auto m-8">
            <h2 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
              Resources
            </h2>
            <div className="w-full mb-4">
              <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
            </div>
            <div className="flex flex-wrap">
              <div className="p-6">
                <h3 id="frosh-mission-statement">Frosh Mission Statement</h3>
                <p className="text-gray-600 mb-8">
                  McGill Management Frosh is committed to providing a safe,
                  inclusive, and accessible space to all participants of
                  orientation. While Frosh 2020 may be unique, we continue to
                  honour this commitment, and aim to provide the opportunity and
                  space for participants to foster connections and be welcomed
                  into their time at Desautels. If you have any concerns or
                  feedback, please feel free to contact frosh@mus.mcgill.ca.{" "}
                </p>
                <Img fluid={data.frosh3.childImageSharp.fluid} />
              </div>
            </div>
            <div className="flex flex-wrap">
              <div className="p-6">
                <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">
                  Student Resources
                </h3>
                <h3 className="text-2xl text-gray-700 font-bold leading-none mb-2">
                  During Frosh
                </h3>
                <p className="text-gray-600 mb-8">
                  <strong>Coordinators </strong>
                  Coordinators are upper year students who spend their summer
                  organizing Frosh by planning events and ensuring that the
                  Frosh mission statement is upheld. There are 10 Management
                  Orientation Coordinators who will be able to help or redirect
                  you to services as needed.
                </p>
                <p className="text-gray-600 mb-8">
                  <strong>Access Allies </strong>
                  Access Allies are Frosh leaders with additional inclusivity,
                  accessibility and mental health training that are there for
                  you if you don’t feel comfortable speaking with your own
                  Leaders or need a little extra support! After you register for
                  Frosh you will receive more information on how to identify and
                  contact access allies.
                </p>
                <p className="text-gray-600 mb-8">
                  <strong>Peer Support Centre </strong>
                  This is a student-run, confidential and non-judgemental
                  support center at McGill in the SSMU building on McTavish.
                  Each day of Frosh students may book an appointment to receive
                  support with anxiety, depression, other mental health
                  challenges, or simply to have someone to talk to! 514 398 3782
                </p>
                <p className="text-gray-600 mb-8">
                  <strong>OSVRSE </strong>
                  Office for Sexual Violence Response, Support and Education.
                  Run by McGill administration to respond to and help prevent
                  sexual violence.
                </p>
                <ul className="list-disc text-m lg:text-l -mt-6 ml-8 mb-4 font-light text-gray-600">
                  <li>514 398 3954</li>
                  <li>Sexual violence response advisor: 514 398 4486</li>
                  <li>Sexual violence education advisor: 514 398 3786</li>
                  <li>osvrse@mcgill.ca</li>
                </ul>
                <p className="text-gray-600 mb-8">
                  <strong>SACOMSS </strong>
                  Sexual Assault Centre of the McGill Students’ Society. Run by
                  McGill students to help provide counseling services for
                  survivors of sexual misconduct. 514 398 8500
                </p>
                <h3 className="text-2xl text-gray-700 font-bold leading-none mb-2">
                  During your time at McGill Frosh
                </h3>
                <p className="text-gray-600 mb-8">
                  <strong>Red Frogs </strong>
                  Student volunteers, they focus on preventative measures to
                  help ensure that you’re having a fun, safe time. Look for them
                  handing out water, granola bars and freezies, wearing their
                  own Red Frog shirts.
                </p>
                <p className="text-gray-600 mb-8">
                  <strong>
                    McGill Student Emergency Response Team (M-SERT)
                  </strong>
                  M-SERT is a volunteer student service whose members provide
                  emergency first aid services. If you ever need help, don&#39;t
                  be afraid to ask as they’ll be present at many McGill events
                  wearing red shirts.
                </p>
                <ul className="list-disc text-m lg:text-l -mt-6 ml-8 mb-4 font-light text-gray-600">
                  <li>msert.firstaid@gmail.com</li>
                  <li>514 398 3000</li>
                </ul>
                <p className="text-gray-600 mb-8">
                  <strong>Drivesafe </strong>A volunteer student service, they
                  offer free rides home to students in need anywhere on the
                  island of Montreal. They are available during the Fall and
                  Winter semesters from 11 pm to 3 am on Thursday, Friday and
                  Saturday nights. 514 398 8040
                </p>
                <p className="text-gray-600 mb-8">
                  <strong>Walksafe </strong>A volunteer student service that
                  provides free accompaniment for those walking at night
                  anywhere on the island of Montreal. Sunday – Thursday: 9 pm to
                  12 am Friday – Saturday: 9 pm to 3 am.
                </p>
                <ul className="list-disc text-m lg:text-l -mt-6 ml-8 mb-4 font-light text-gray-600">
                  <li>514 398 2498</li>
                </ul>
                <p className="text-gray-600 mb-8">
                  <strong>
                    Sexual Assault Center of McGill Student Society (SACOMSS)
                  </strong>
                  SACOMSS provides a variety of services for survivors of sexual
                  assault and their allies. Volunteer and student-run, they
                  offer pro-survivor, non-judgemental support to students in
                  need, regardless of situation.
                </p>
                <ul className="list-disc text-m lg:text-l -mt-6 ml-8 mb-4 font-light text-gray-600">
                  <li>514 398 8500</li>
                  <li>main@sacomss.org</li>
                </ul>
                <p className="text-gray-600 mb-8">
                  <strong>McGill Security </strong>
                  They patrol campus ensuring the safety of students 24 hours a
                  day. If you have an emergency on campus, do not be afraid to
                  call them.
                </p>
                <ul className="list-disc text-m lg:text-l -mt-6 ml-8 mb-4 font-light text-gray-600">
                  <li>514 398 3000</li>
                </ul>
                <p className="text-gray-600 mb-8">
                  <strong>International student services </strong>
                  International Student Services (ISS) works hard to promote the
                  growth, development and success of this burgeoning community,
                  and ease their transition to McGill and Montreal. ISS offers a
                  host of services, including Orientation activities, a social
                  and support network, health insurance guidance, and much more!
                </p>
                <p className="text-gray-600 mb-8">
                  <strong>Office for Students with Disabilities (OSD) </strong>
                  OSD provides services for students with disabilities including
                  exam taking accommodations, access to peer-written class
                  notes, and more. 1010 Sherbrooke Ouest, suite 410
                </p>
                <ul className="list-disc text-m lg:text-l -mt-6 ml-8 mb-4 font-light text-gray-600">
                  <li>514 398 6009</li>
                </ul>
                <p className="text-gray-600 mb-8">
                  <strong>Student Wellness Hub </strong>
                  The Student Wellness Hub is a students&#39; place to go for
                  their holistic health and wellness needs. It provides access
                  to basic physical and mental health services, as well as
                  health promotion and peer support programs, in convenient
                  locations at both our Macdonald and downtown campuses.
                  Professional physical and mental health services. 514 398 6017
                </p>
              </div>
              <div className="p-6">
                <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">
                  Consent
                </h3>
                <p className="text-gray-600 mb-8">
                  Consent is an informed and uninhibited agreement from all
                  participating and affected parties regarding an action or
                  activity. Consent is continuous, meaning it can be revoked at
                  any time for any reason. It can be recognised by the presence
                  of an enthusiastic “yes”, and not by the absence of a “no”.
                  This applies to all circumstances and situations during Frosh,
                  including sexual acts, photosharing, and alcohol consumption.
                  Consent from all involved and affected members is required for
                  all actions people choose to take.
                </p>
                <p className="text-gray-600 mb-8">
                  Consent can never be assumed and cannot be given if a person
                  is incapacitated by alcohol and/or drugs or unconscious.
                </p>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </body>
    )}
  />
);
