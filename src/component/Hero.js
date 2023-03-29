import profile from "../assets/img/Muhammad-Prasetyo-Nugroho.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

export default function Hiro() {
  return (
    <>
      <div
        id="home"
        className="flex w-full h-screen flex-col md:flex-row items-center justify-center text-white relative"
      >
        <div className="md:w-3/6">
          <div class="flex flex-wrap justify-center">
            <div class="w-6/12 sm:w-4/12 px-4">
              <img
                src={profile}
                alt="profile"
                class="shadow rounded-full max-w-full h-auto align-middle border-none"
              />
            </div>
          </div>
        </div>
        <div className="md:w-3/6">
          <div className="flex flex-col w-full mt-8">
            <h1 className="text-xl text-gray-400">Hi, I'm</h1>
            <h1 className="text-2xl font-bold">Muhammad Prasetyo Nugroho</h1>
            <p className="text-xl font-bold text-gray-300">
              Frontend Developer
            </p>
            <p className="text-md font-light text-gray-400 ">
              Enthusiastic and motivated self-learning in Information
              Technology. Interested in exploring about Computer Network, Cloud
              Computing, DevSecops, and Web Development. Now I am looking for
              more experience in my field.
            </p>
          </div>
          <ul className="flex mt-2 gap-4 items-center">
            <li>
              <a
                href="https://github.com/mprasetyon"
                rel="noreferrer"
                target="_blank"
              >
                <FontAwesomeIcon size="2xl" icon={faGithub} />
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com/mprasetyon"
                rel="noreferrer"
                target="_blank"
              >
                <FontAwesomeIcon size="2xl" icon={faInstagram} />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/muhammad-prasetyo-nugroho-aab524191/"
                rel="noreferrer"
                target="_blank"
              >
                <FontAwesomeIcon size="2xl" icon={faLinkedinIn} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
