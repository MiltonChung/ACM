import BackgroundSVG from "@/components/BackgroundSvg";
import styles from "@/styles/resources.module.scss";

export default function ResourcesPage() {
  return (
    <div className={styles.resourcesContainer}>
      <BackgroundSVG />

      <h1>
        Curated resources list -- just for <span>you</span>
      </h1>

      <div className={styles.resourcesContent}>
        <h2>
          💪 <span>Surviving CS</span> at UCSC 💪
        </h2>
        <div className={styles.resourcesSection}>
          <h3>Meeting Slides</h3>
          <p>
            Go to our{" "}
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://drive.google.com/drive/folders/1HcgKkv9gUD1f6N2as4RDKjL2Ryp5MC6I?usp=sharing"
            >
              google drive
            </a>
            .
          </p>
        </div>

        <div className={styles.resourcesSection}>
          <h3>What classes do I take?</h3>
          <p>
            Here&apos;s all the classes you&apos;ll need to take along with when
            they&apos;re offered this year:
          </p>

          <ul className={styles.indent}>
            <li>
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://undergrad.soe.ucsc.edu/sites/default/files/curriculum-charts/2022-09/CS_BS_22-23.pdf"
              >
                Curriculum Flow Charts
              </a>
            </li>
            <li>
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://ucsc.smartcatalogiq.com/en/current/General-Catalog/Academic-Units/Baskin-Engineering/Computer-Science-and-Engineering/Computer-Science-BS/"
              >
                UCSC Requirements and Planners
              </a>
            </li>
            <li>
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://registrar.ucsc.edu/"
              >
                Registrar
              </a>
            </li>
          </ul>
        </div>

        <div className={styles.resourcesSection}>
          <h3>Want to learn more about a professor?</h3>
          <p>
            Visit UCSC&apos;s{" "}
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://engineering.ucsc.edu/people/faculty/"
            >
              faculty
            </a>{" "}
            page.
          </p>
        </div>

        <div className={styles.resourcesSection}>
          <h3>Or get involved with research?</h3>
          <p>
            Visit UCSC&apos;s{" "}
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://engineering.ucsc.edu/research/"
            >
              engineering research
            </a>
            .
          </p>
        </div>
      </div>

      <div className={styles.resourcesContent}>
        <h2>
          😎 Getting that <span>dream</span> internship or job 😎
        </h2>

        <div className={styles.resourcesSection}>
          <h3>Fill this out!</h3>
          <p>
            Start by filling out{" "}
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://drive.google.com/drive/folders/1HcgKkv9gUD1f6N2as4RDKjL2Ryp5MC6I?usp=sharing"
            >
              this worksheet
            </a>{" "}
            to figure out what you want your ideal career to look like.
          </p>
        </div>

        <div className={styles.resourcesSection}>
          <h3>Resume and Cover Letters Advice</h3>
          <p>
            Time to perfect your resume and cover letters, here&apos;s advice to
            get you started.
          </p>

          <ul className={styles.indent}>
            <li>
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://docs.google.com/document/u/1/d/e/2PACX-1vQpvbP8lzPvZrNvrX58UlacpQiLgh1fBQYfOS2pEJZvp-zOb9uKQJYKSsDQ6mJWoPf3H09OmdrLDcaK/pub?urp=gmail_link"
              >
                Resume
              </a>
            </li>
            <li>
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://docs.google.com/presentation/d/1UjABDWF6znH59oarywZpm-Bb4mjBa72yEhOgatSoDsE/edit?usp=sharing"
              >
                Resume Workshop
              </a>
            </li>
          </ul>

          <p>
            Now you&apos;re ready to learn more about the interview process!
          </p>
          <p>
            Here&apos;s a{" "}
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://github.com/cassidoo/getting-a-gig"
            >
              good overview
            </a>
            , a more{" "}
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://www.freecodecamp.org/news/how-to-land-a-top-notch-tech-job-as-a-student-5c97fec82f3d/"
            >
              detailed overview
            </a>
            , and{" "}
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://medium.com/students-corner/strategies-for-landing-a-tech-internship-57f9370f533c"
            >
              advice from a UCSC ACM Alumni
            </a>{" "}
            that works at Microsoft now.
          </p>
        </div>

        <div className={styles.resourcesSection}>
          <h3>Side Projects</h3>
          <p>Here are some great ways to start with some side projects:</p>
          <ul className={styles.indent}>
            <li>
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://docs.google.com/presentation/d/1se3fdXUn3D3flqSTeXVz6XJ6_GWa1UC6ZVBU3Do3jmc/edit?usp=sharing"
              >
                Project Workshop
              </a>
            </li>
            <li>
              <p>
                Hackathons! You can find a list of all the{" "}
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://mlh.io/"
                >
                  MLH hackathons
                </a>
                . We even have an UCSC one,{" "}
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://acmhacks.vercel.app/"
                >
                  ACM Hacks
                </a>
              </p>
            </li>
          </ul>
        </div>

        <div className={styles.resourcesSection}>
          <h3>Technical Prep</h3>
          <p>
            You can find some more detailed information about technical prep
            here.
          </p>
          <p>
            We recommend going through this book, Cracking the Coding Interview,
            and practicing coding questions here:
          </p>

          <ul className={styles.indent}>
            <li>
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://leetcode.com/"
              >
                Leetcode
              </a>
            </li>
            <li>
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://codesignal.com/"
              >
                Codesignal
              </a>
            </li>
            <li>
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://www.hackerrank.com/"
              >
                HackerRank
              </a>
            </li>
            <li>
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://www.geeksforgeeks.org/"
              >
                GeeksForGeeks
              </a>
            </li>
          </ul>

          <p>
            You can stay up to date with all the tech news on{" "}
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://news.ycombinator.com/"
            >
              HackerNews
            </a>
            !
          </p>

          <p>
            Still unsure on where to apply? You can utilize these resources:
          </p>

          <ul className={styles.indent}>
            <li>
              <p>CECI Fair</p>
            </li>
            <li>
              <p>LinkedIn</p>
            </li>
            <li>
              <p>Jumpstart</p>
            </li>
            <li>
              <p>Handshake</p>
            </li>
            <li>
              <p>BSO</p>
            </li>
            <li>
              <p>Newsletter</p>
            </li>
            <li>
              <p>Piazza</p>
            </li>
            <li>
              <p>Cold Email</p>
            </li>
            <li>
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://www.breakoutlist.com/all"
              >
                Big List of Companies
              </a>
            </li>
            <li>
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://ghc.anitab.org/previous-years/2018-sponsorships/corporate-sponsors/"
              >
                Another Big List
              </a>
            </li>
          </ul>

          <p>
            Don&apos;t worry if you&apos;re a first or second year, you can
            still apply! Here&apos;s a list of fellowships tailored just for
            you:
          </p>

          <ul className={styles.indent}>
            <li>
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://a16z.com/portfolio/"
              >
                Andreesson Horowitz
              </a>
            </li>
            <li>
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://www.kleinerperkins.com/partnerships/"
              >
                Kleiner Perkins
              </a>
            </li>
            <li>
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://www.sequoiacap.com/our-companies/?_spotlight=1"
              >
                Sequoia
              </a>
            </li>
          </ul>
        </div>

        <div className={styles.resourcesSection}>
          <h3>
            Ugh! There are so many companies; how do I keep track of them all?
          </h3>
          <p>We recommend using these:</p>

          <ul className={styles.indent}>
            <li>
              <p>Huntr.co</p>
            </li>
            <li>
              <p>Airtable</p>
            </li>
            <li>
              <p>Trello</p>
            </li>
            <li>
              <p>Google Sheets + Excel</p>
            </li>
          </ul>
        </div>

        <h2>
          🎉<span>Congratulations!</span> You got the job 🎉
        </h2>
      </div>
    </div>
  );
}
