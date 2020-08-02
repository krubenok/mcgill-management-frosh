import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import Header from "../components/header";
import Footer from "../components/footer";
import SEO from "../components/seo";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "../css/accordion.css";

export default () => (
  <StaticQuery
    query={graphql`
      query {
        frosh1: file(relativePath: { eq: "frosh-1.jpg" }) {
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
              About
            </h2>
            <div className="w-full mb-4">
              <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
            </div>

            <div className="flex flex-wrap">
              <div className="p-6">
                <p className="text-gray-600 mb-8">
                  The Management Undergraduate Society (MUS) is proud to present
                  Frosh of the Penguins, open to all incoming students within
                  the Faculty of Management at McGill University. Due to all
                  classes moving online for the Fall 2020 Semester, Management
                  Frosh will be proceeding in a virtual environment. Our goal is
                  to provide an unforgettable experience that is safe, inclusive
                  and welcoming, even with the uniqueness of Frosh this year.
                  Within our two day virtual event, students will be able to
                  connect with fellow classmates, upper year students, and
                  faculty members, as well as be introduced to the McGill and
                  Montreal community.
                </p>
                <p className="text-gray-600 mb-8">
                  No matter where our froshies are this year they will have the
                  ability to meet the McGill community, become comfortable with
                  Montreal, and make long-lasting friends. With the guidance of
                  over 70 Frosh Leaders, Management Frosh is an incoming
                  student's chance to experience all that McGill has to offer.
                </p>
                <Img fluid={data.frosh1.childImageSharp.fluid} />
              </div>
            </div>
            <section>
              <div className="p-6">
                <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">
                  Frequently Asked Questions
                </h3>
              </div>
              <Accordion allowZeroExpanded>
                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton>What is Frosh?</AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p className="text-m lg:text-l mt-2 font-light">
                      Frosh is your two day introduction to McGill University
                      and the Faculty of Management through engaging virtual
                      events. Frosh will be dedicated to showcasing McGill
                      campus and student life while helping students foster
                      online connections with other McGill students in a safe
                      and inclusive environment. We encourage all incoming
                      McGill students to participate for the chance to meet
                      other incoming students from around the world.
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton>When is Frosh?</AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p className="text-m lg:text-l mt-2 font-light">
                      August 29-30. Other orientation programs will be running
                      in the weeks leading up to Frosh. Make sure you keep an
                      eye out for more information regarding Discover McGill,
                      and Info Day.
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      What will Frosh look like?
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p className="text-m lg:text-l mt-2 font-light">
                      Frosh will consist of 2 days of virtual content. All
                      students will be placed in Frosh groups with 4 returning
                      students guiding them through the events. Students will
                      have the chance to learn more about their faculty, bond
                      with their groups, make new friends, all while
                      participating in engaging programming.
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      How do I register?
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p className="text-m lg:text-l mt-2 font-light">
                      Register through the registration button on our homepage!
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      How much does Frosh cost?
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p className="text-m lg:text-l mt-2 font-light">
                      The price for Management Frosh 2020 is $18 + processing
                      fees, which grants you access to two days of interactive
                      online events and activities.
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      What merchandise do I receive?
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p className="text-m lg:text-l mt-2 font-light">
                      In your Frosh package you will receive a hat, t-shirt,
                      mug, and more!
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton>What is the MUS?</AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p className="text-m lg:text-l mt-2 font-light">
                      The Management Undergraduate Society (MUS) represents all
                      full and part time undergraduate students enrolled at the
                      Desautels Faculty of Management. Almost like a student
                      government, the MUS is responsible for providing countless
                      events, activities, and services to students, allowing
                      them to enjoy the best possible university experience.
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      Who are Frosh Coordinators?
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p className="text-m lg:text-l mt-2 font-light">
                      Frosh coordinators are a group of 10 upper year students
                      who have been working tirelessly this summer to shape your
                      virtual Frosh experience. During the week, keep an eye out
                      for coordinators in white hoodies as they pop in and out
                      of events. Feel free to ask them any questions, or just
                      say hi!
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      Who are Frosh Leaders?
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p className="text-m lg:text-l mt-2 font-light">
                      Frosh leaders are McGill Students who have previously
                      participated in Frosh and want to volunteer their time to
                      guide new students through this awesome new experience.
                      They are selected out of a competitive pool of applicants
                      and complete extensive training on harm reduction, online
                      skills, consent, and more!
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>
              </Accordion>
              <div className="p-6">
                <br />
                <h3 className="text-2xl text-gray-800 font-bold leading-none mb-3">
                  Frosh Events and Participation
                </h3>
              </div>
              <Accordion allowZeroExpanded>
                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      Are all events mandatory?
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p className="text-m lg:text-l mt-2 font-light">
                      While we encourage you to attend all Frosh events, there
                      is no mandatory participation. That being said, you do
                      need to register in order to participate in any or all of
                      the events!
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      Can I arrive late to events?
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p className="text-m lg:text-l mt-2 font-light">
                      Some Frosh events will be recorded or you will have entry
                      access throughout the duration of the event. However,
                      there will be certain events, such as organized bonding
                      activities that will require you to be there on time and
                      present for the entire event. Your Frosh leaders and the
                      schedule will keep you informed on which events these are.
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      How will I receive my merch?
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p className="text-m lg:text-l mt-2 font-light">
                      Merchandise will be available for pickup in the week
                      leading up to the Frosh in Montreal. If you are not
                      returning to Montreal for the semester, don’t worry!
                      Merchandise will be held securely for you until you decide
                      to travel to Montreal when deemed appropriate. Information
                      regarding pick up, and delayed pick up will be
                      communicated to you!
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      Who can participate in Frosh?
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p className="text-m lg:text-l mt-2 font-light">
                      Frosh events and programming are for students entering
                      their first year of university at McGill in the Fall,
                      students who entered McGill in the Winter term of the
                      previous academic year, transfer students to McGill.
                      Returning students, family members, and
                      (non-McGill-attending) friends of new students are not
                      permitted to attend Frosh.
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      I’m from Montreal, should i still participate?
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p className="text-m lg:text-l mt-2 font-light">
                      We highly encourage all incoming Management students to
                      participate in Management Frosh! It is a great way to make
                      friends in the Management faculty and get acquainted with
                      upper year mentors (Frosh Leaders) and the McGill campus.
                      Even if students have lived in Montreal their entire life,
                      we guarantee Frosh will show them something they have yet
                      to see and will give them a chance to meet tons of people
                      new to Montreal!
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>
              </Accordion>
              <div className="p-6">
                <br />
                <h3 className="text-2xl text-gray-800 font-bold leading-none mb-3">
                  Accessibility and Inclusivity
                </h3>
              </div>
              <Accordion allowZeroExpanded>
                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton>What is Consent?</AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p className="text-m lg:text-l mt-2 font-light">
                      Consent is an informed and uninhibited agreement from all
                      participating and affected parties regarding an action or
                      activity. Consent is continuous, meaning it can be revoked
                      at any time for any reason. It can be recognised by the
                      presence of an enthusiastic “yes”, and not by the absence
                      of a “no”. This applies to all circumstances and
                      situations during Frosh, including sexual acts,
                      photosharing, and alcohol consumption. Consent from all
                      involved and affected members is required for all actions
                      people choose to take.
                    </p>
                    <p className="text-m lg:text-l mt-2 font-light">
                      Consent can never be assumed and cannot be given if a
                      person is incapacitated by alcohol and/or drugs or
                      unconscious.
                    </p>
                    <p className="text-m lg:text-l mt-2 font-light">
                      All Frosh participants are required to watch a video about
                      consent made by Frosh Coordinators. This ensures that the
                      meaning of consent is unambiguous and unanimous among all
                      Frosh participants. Many (notably, but not exclusively,
                      sexual) acts committed without consent in the context of
                      Frosh are eligible for consequences imposed by respective
                      Frosh Committees and the Office of the Dean of Students.
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      What is sexual harassment and sexual assault?
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p className="text-m lg:text-l mt-2 font-light">
                      Sexual violence is an umbrella term thaty encapsulates two
                      behaviours; sexual harassment and sexual asssault.
                    </p>
                    <p className="text-m lg:text-l mt-2 font-light">
                      Sexual harassment is any form of unwanted sexual advances,
                      requests for sexual acts, and verbal sexual aggressions.
                      This includes harassment online or in-person. Examples of
                      sexual harassment include, but are not limited to,
                      unwelcome sexual teasing, jokes, remarks, questions, or
                      suggestive signals.
                    </p>
                    <p className="text-m lg:text-l mt-2 font-light">
                      Sexual assault is any act of a sexual nature that the done
                      without unambiguous and enthusiastic consent. Sexual
                      harassment becomes sexual assault when physical contact is
                      made. Both sexual assault and harassment can be committed
                      by any gender.
                    </p>
                    <p className="text-m lg:text-l mt-2 font-light">
                      If you or someone you know is affected by sexual assault
                      or harassment during Frosh, please do not hesitate to
                      contact the Inclusivity Coordinator. They will explain the
                      various courses of action available, offer on and off
                      campus resources and support, and will provide
                      confidential, non-judgmental, and pro-survivor support.
                    </p>
                    <p className="text-m lg:text-l mt-2 font-light">
                      Regardless of the nature of the sexual act or type of
                      harassment, if the incident made you uncomfortable we
                      encourage you to reach out to the Inclusivity Coordinator
                      immediately. Unless there is imminent danger, your
                      disclosure will remain completely confidential.
                    </p>
                    <p className="text-m lg:text-l mt-2 font-light">
                      <em>
                        Please note: you do not have to contact the Inclusivity
                        Coordinator directly, leaders and other coordinators are
                        all prepared and trained to receive and help with such
                        information.
                      </em>
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      I have mental health challenges, how could Frosh affect
                      that?
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p className="text-m lg:text-l mt-2 font-light">
                      Frosh is an exciting week full of new experiences and
                      meeting tons of other incoming students. But just as much
                      as it is exciting, it can also be mentally taxing and
                      stress-inducing. Students are encouraged to speak up when
                      they are struggling with their mental health challenges.
                      McGill has a number of resources available to students
                      during Orientation Week that serves this purpose:
                    </p>
                    <ul className="list-disc text-m lg:text-l ml-8 mt-2 font-light">
                      <li>
                        Peer Support Centre: A confidential and non-judgmental
                        peer support service located on the 4th floor of the
                        SSMU building on McTavish. Volunteers will be available
                        by phone during Frosh. For more information please
                        consult their website:{" "}
                        <a href="https://psc.ssmu.ca">https://psc.ssmu.ca</a>
                      </li>
                      <li>
                        Nightline: A confidential, anonymous, and non-judgmental
                        peer support service via phone conversation. For Frosh
                        hours of service, please consult their website:
                        <a href="https://ssmu.mcgill.ca/nightline">
                          https://ssmu.mcgill.ca/nightline
                        </a>
                      </li>
                      <li>
                        Access Allies: Frosh Leaders with additional and more
                        specific training that makes them well-equipped to refer
                        Frosh participants to the correct services for a variety
                        of mental or physical challenges. They will be
                        identifiably distinct from other leaders during Frosh
                        and you may contact any access ally from any group.
                      </li>
                    </ul>
                  </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      During Frosh, how will I receive extra support for my
                      accessibility challenges?
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p className="text-m lg:text-l mt-2 font-light">
                      Student’s Frosh Leaders are there to help them every step
                      of the way during Frosh. Always feel free to reach out to
                      your Leaders if you require extra assistance at any point
                      during the week. Additionally, the Management Inclusivity
                      Coordinator will be present during Frosh to ensure all
                      accessibility concerns are addressed and student’s receive
                      adequate support. This Coordinator’s phone number will be
                      accessible once you sign up for Frosh.
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      I have another issue that Frosh Coordinators should be
                      made aware of, how do I inform them?
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p className="text-m lg:text-l mt-2 font-light">
                      If you have any other concerns (medical, mental health,
                      etc.) that you would like to be noted please email us at
                      frosh@mus.mcgill.ca or message McGill Management Frosh on
                      Facebook. We check these regularly and will be sure to get
                      back to you right away. Please remember that we will be
                      better equipped to help you if you tell us of any
                      potential issues before Frosh begins. You are also welcome
                      to reach out to any Frosh Coordinator during the event in
                      order to share any issues that may arise. Please do not
                      worry about approaching us; we are here to ensure your
                      safety and fun at Frosh!
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>
              </Accordion>
              <div className="p-6">
                <p className="text-gray-600 mb-8">
                  MUS would like to acknowledge that McGill University is
                  situated on the traditional territory of the Kanien’keha:ka, a
                  place which has long served as a site of meeting and exchange
                  amongst nations. MUS recognizes and respects the
                  Kanien’keha:ka as the traditional custodians of the lands and
                  waters on which we meet today.
                </p>
              </div>
            </section>
          </div>
        </section>

        <Footer />
      </body>
    )}
  />
);
