export default function Home() {
  return (
    <div className="container bg-[#eee] mx-8">
      <h1 className="text-4xl mt-10 py-6 font-bold text-gray-700 flex justify-center">
        Dr. Norman Borlaug
      </h1>
      <p className="flex justify-center">The man who saved a billion lives</p>
      <div className="grid grid-cols-3 grid-cols-[1fr_15fr_1fr]">
        <div className=""></div>
        <div className="flex flex-col  text-center bg-white">
          <img
            className="bg-white mx-24"
            src={
              "https://cdn.freecodecamp.org/testable-projects-fcc/images/tribute-page-main-image.jpg"
            }
          />
          <p className="bg-white py-5 ">
            Dr. Norman Borlaug, third from the left, trains biologists in Mexico
            on how to increase wheat yields - part of his life-long war on
            hunger.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-3 grid-cols-[1fr_2fr_1fr]">
        <div></div>
        <div className="flex flex-col items-center leading-8">
          <ul className=" py-10">
            <li className="list-disc">
              <span className="font-bold">1914</span> - Born in Cresco, Iowa
            </li>
            <li className="list-disc">
              <span className="font-bold">1933</span> - Leaves his family's farm
              to attend the University of Minnesota, thanks to a Depression era
              program known as the "National Youth Administration"
            </li>
            <li className="list-disc">
              <span className="font-bold">1935</span>- Has to stop school and
              save up more money. Works in the Civilian Conservation Corps,
              helping starving Americans. "I saw how food changed them", he
              said. "All of this left scars on me."
            </li>
            <li className="list-disc">
              <span className="font-bold">1937</span> - Finishes university and
              takes a job in the US Forestry Service
            </li>
            <li className="list-disc">
              <span className="font-bold">1938</span>- Marries wife of 69 years
              Margret Gibson. Gets laid off due to budget cuts. Inspired by
              Elvin Charles Stakman, he returns to school study under Stakman,
              who teaches him about breeding pest-resistent plants.
            </li>
            <li className="list-disc">
              <span className="font-bold">1941</span>- Tries to enroll in the
              military after the Pearl Harbor attack, but is rejected. Instead,
              the military asked his lab to work on waterproof glue, DDT to
              control malaria, disinfectants, and other applied science.
            </li>
            <li className="list-disc">
              <span className="font-bold">1942</span> - Receives a Ph.D. in
              Genetics and Plant Pathology
            </li>
            <li className="list-disc">
              <span className="font-bold">1944</span> - Rejects a 100% salary
              increase from Dupont, leaves behind his pregnant wife, and flies
              to Mexico to head a new plant pathology program. Over the next 16
              years, his team breeds 6,000 different strains of disease
              resistent wheat - including different varieties for each major
              climate on Earth.
            </li>
            <li className="list-disc">
              <span className="font-bold">1945</span> - Discovers a way to grown
              wheat twice each season, doubling wheat yields
            </li>
            <li className="list-disc">
              <span className="font-bold">1953</span>- crosses a short, sturdy
              dwarf breed of wheat with a high-yeidling American breed, creating
              a strain that responds well to fertilizer. It goes on to provide
              95% of Mexico's wheat.
            </li>
            <li className="list-disc">
              <span className="font-bold">1962</span> - Visits Delhi and brings
              his high-yielding strains of wheat to the Indian subcontinent in
              time to help mitigate mass starvation due to a rapidly expanding
              population
            </li>
            <li className="list-disc">
              {" "}
              <span className="font-bold">1970</span> - receives the Nobel Peace
              Prize
            </li>
            <li className="list-disc">
              <span className="font-bold">1983</span> - helps seven African
              countries dramatically increase their maize and sorghum yields
            </li>
            <li className="list-disc">
              <span className="font-bold">1984</span> - becomes a distinguished
              professor at Texas A&M University
            </li>
            <li className="list-disc">
              <span className="font-bold">2005</span>- states "we will have to
              double the world food supply by 2050." Argues that genetically
              modified crops are the only way we can meet the demand, as we run
              out of arable land. Says that GM crops are not inherently
              dangerous because "we've been genetically modifying plants and
              animals for a long time. Long before we called it science, people
              were selecting the best breeds."
            </li>
            <li className="list-disc">
              {" "}
              <span className="font-bold">2009</span>- dies at the age of 95.
            </li>
            <li className="pt-10 italic">
              "Borlaug's life and achievement are testimony to the far-reaching
              contribution that one man's towering intellect, persistence and
              scientific vision can make to human peace and progress".
            </li>
            <li className="pt-5 italic">
              " -- Indian Prime Minister Manmohan Singh
            </li>
          </ul>
        </div>
        <div></div>
      </div>
      <div></div>

      <h3 className="flex justify-center pb-5 mb-10 font-bold">
        If you have time, you should read more about this incredible human being
        on his
        <a
          href="https://en.wikipedia.org/wiki/Norman_Borlaug"
          className="underline text-indigo-600"
        >
          &nbsp;Wikipedia entre.
        </a>
      </h3>
    </div>
  );
}
