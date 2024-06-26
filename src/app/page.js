import Link from "next/link";
import { FaPlay } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { CiYoutube } from "react-icons/ci";
import { LiaLongArrowAltRightSolid } from "react-icons/lia";

export default function Home() {
  return (
    <div>
      <header className="bg-[--purple] h-[105vh] container">
        <nav className="flex justify-around items-center w-full py-8">
          <h2 className="text-3xl font-gilroy-bold">E-learn</h2>
          <ul className="flex gap-10 font-gilroy-medium">
            <li>
              <Link href="#">Home</Link>
            </li>
            <li>
              <Link href="#">About</Link>
            </li>
            <li>
              <Link href="#">Student info</Link>
            </li>
            <li>
              <Link href="#">Support</Link>
            </li>
            <li>
              <Link href="#">Admissions</Link>
            </li>
          </ul>
          <Link
            href="#"
            className="font-gilroy-medium border border-black px-8 py-2 rounded-full"
          >
            Sign up
          </Link>
        </nav>

        <div className="flex flex-col justify-center items-center gap-5 my-8">
          <h2 className="text-8xl font-gilroy-bold text-center">
            The best way to learn or <br /> pratice a language
          </h2>
          <p className="font-gilroy-medium my-5 text-lg">
            Educating, Inspiring, & Transforming Young Women. A Tuition-Free
            Private Middle School
          </p>
          <div className="font-gilroy-medium space-x-6">
            <Link
              href="#"
              className="border border-black px-8 py-4 rounded-full text-white bg-black hover:bg-white hover:text-black transition-colors duration-300"
            >
              Contact Us
            </Link>
            <Link
              href="#"
              className="border border-black px-8 py-4 rounded-full hover:bg-white hover:text-black transition-colors duration-300"
            >
              Apply Now
            </Link>
          </div>
        </div>

        <div className="flex gap-10 justify-center pt-5">
          <div
            className="h-[500px] w-[300px] bg-white rounded-full"
            style={{
              backgroundImage:
                "url('https://pubkgroup.com/wp-content/uploads/2020/07/no-big-deal.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
          <div
            className="h-[500px] w-[300px] bg-white rounded-full"
            style={{
              backgroundImage:
                "url('https://phimath-soutien-scolaire.fr/wp-content/uploads/2020/08/pic-garc%CC%A7on-scaled.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
          <div
            className="h-[500px] w-[300px] bg-white rounded-full"
            style={{
              backgroundImage:
                "url('https://thumbs.dreamstime.com/b/confident-man-sunglasses-smile-posing-his-arms-crossed-over-isolated-blue-background-244110414.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
        </div>
      </header>

      <section className="px-28 space-y-14">
        <div className="pt-[25%] w-full">
          <h1 className="text-5xl font-gilroy-bold">
            Educationg, Inspiring, <br />& Transforming
          </h1>
        </div>

        <div className="flex gap-16 items-center relative">
          <div
            className="h-[400px] w-[280px] bg-white rounded-full"
            style={{
              backgroundImage:
                "url('https://www.fecap.br/wp-content/uploads/2023/07/homem-sorridente-estudando-segurando-cadernos-e-parecendo-feliz-em-pe-sobre-um-fundo-azul-scaled.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
          <div className="w-[28%] space-y-5">
            <h2 className="text-5xl font-gilroy-bold">Our Vision</h2>
            <p className="font-gilroy-medium">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora
              odio, hic voluptas molestiae quibusdam illo commodi itaque iste
              inventore vel deleniti eaque facere blanditiis. A aspernatur omnis
              esse tempore delectus!
            </p>
          </div>
          <div
            className="absolute right-0 top-[-100px] h-[280px] w-[180px] bg-white rounded-full"
            style={{
              backgroundImage:
                "url('https://img.freepik.com/free-photo/young-bearded-student-guy-red-polo-shirt-with-backpack-holding-notebooks-looking-up-with-smile-face-thinking-positive-standing-white-wall_141793-101790.jpg?size=626&ext=jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
        </div>

        <div className="flex gap-16 items-center justify-between">
          <div className="w-[28%] space-y-5">
            <h2 className="text-5xl font-gilroy-bold">Our Mission</h2>
            <p className="font-gilroy-medium">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora
              odio, hic voluptas molestiae quibusdam illo commodi itaque iste
              inventore vel deleniti eaque facere blanditiis.
            </p>
          </div>

          <div
            className="h-[340px] w-[480px] bg-white rounded-full relative"
            style={{
              backgroundImage:
                "url('https://1.bp.blogspot.com/-MAvZdIakwlo/YCVU06Lc7PI/AAAAAAAAKg4/kJa1BFoB-d0wxtwuwQr7-htKZYw3BFwjwCLcBGAsYHQ/s450/kURIR.png')",
              backgroundSize: "cover",
            }}
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-5 rounded-full hover:cursor-pointer">
              <FaPlay className="text-sm" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[--white] px-28 py-20 my-24">
        <div className="flex gap-16 items-center">
          <div
            className="h-[450px] w-[350px] bg-white rounded-full"
            style={{
              backgroundImage:
                "url('https://thumbs.dreamstime.com/b/happy-laughing-student-his-notebook-portrait-isolated-white-background-34742067.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
          <div className="w-[50%] space-y-5">
            <h2 className="text-5xl font-gilroy-bold">
              Our History and <br />
              Core Values
            </h2>
            <p className="font-gilroy-medium">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora
              odio, hic voluptas molestiae quibusdam illo commodi itaque iste
              inventore vel deleniti eaque facere blanditiis. A aspernatur omnis
              esse tempore delectus!
            </p>
            <p className="font-gilroy-medium pb-10">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde ex
              ratione molestias facere.
            </p>
            <Link
              href="#"
              className="font-gilroy-medium border border-black px-8 py-3 rounded-full"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>






      <section className="px-28 py-20 space-y-24">

        <div className="flex gap-16 items-center justify-between">
          <div className="w-[50%] space-y-5">
            <h3 className="font-gilroy-bold border border-black rounded-full px-5 py-2 w-fit text-[12px]">A TUITION-FREE PRIVATE SCHOOL</h3>
            <h2 className="text-5xl font-gilroy-bold">An Exptional <br />Education</h2>
            <p className="font-gilroy-medium leading-8">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora
              odio, hic voluptas molestiae quibusdam illo commodi itaque iste
              inventore vel deleniti eaque facere blanditiis. A aspernatur omnis
              esse tempore delectus. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora
              odio, hic voluptas molestiae quibusdam illo commodi itaque iste
              inventore vel deleniti eaque facere blanditiis.
            </p>
          </div>

          <div
            className="h-[480px] w-[350px] bg-white rounded-full relative"
            style={{
              backgroundImage:
                "url('https://www.paymentsjournal.com/wp-content/uploads/2022/06/front-view-young-male-courier-red-uniform-cape-holding-paper-food-package-smiling-pink-background-scaled.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute top-20 left-[-60px] z-10 bg-white rounded-full w-[150px] h-[100px]" style={{
              backgroundImage: "url('https://thumbs.dreamstime.com/b/business-woman-reading-book-smiling-portrait-isolated-104919047.jpg')",
              backgroundSize: "cover",
            }}>
            </div>
          </div>
        </div>

        
        <div className="flex gap-16 items-center">
          <div
            className="h-[450px] w-[350px] bg-white rounded-full relative"
            style={{
              backgroundImage:
                "url('https://www.kindpng.com/picc/m/20-207973_student-png-student-transparent-background-png-download.png')",
              backgroundSize: "cover",
            }}
          >
          <div className="absolute bottom-0 right-[-20px] z-10 bg-white rounded-full w-[140px] h-[200px] border-[3px] border-white" style={{
              backgroundImage: "url('https://images.pexels.com/photos/13198517/pexels-photo-13198517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
              backgroundSize: "cover",
            }}>
            </div>
          </div>
          <div className="w-[50%] space-y-5">
          <h3 className="font-gilroy-bold border border-black rounded-full px-5 py-2 w-fit text-[12px]">LONG-TERM SUCCESS</h3>
            <h2 className="text-5xl font-gilroy-bold">
              Graduate Support<br />
              Program
            </h2>
            <p className="font-gilroy-medium">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora
              odio, hic voluptas molestiae quibusdam illo commodi itaque iste
              inventore vel deleniti eaque facere blanditiis. A aspernatur omnis
              esse tempore delectus!
            </p>
            <p className="font-gilroy-medium pb-10">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde ex
              ratione molestias facere. Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde ex
              ratione molestias facere.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde ex
              ratione molestias facere.
            </p>
            <Link
              href="#"
              className="font-gilroy-medium border border-black px-8 py-3 rounded-full"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>






      <section className="bg-[--white] px-28 py-20 flex flex-col justify-center items-center space-y-10">
        <h2 className="text-6xl font-gilroy-bold">Subscribe our newsletter</h2>
        <p className="font-gilroy-medium w-[50%] text-center">
          Teaches You How To Communicate Your Unique Comedy Skillfully comedy
          workshop. Virtual stand up comedy. Virtual comedy class.
        </p>
        <form action="#" className="flex gap-12 border-b border-black pb-3">
          <input
            type="email"
            placeholder="Enter your E-mail address"
            className="bg-[--white] font-gilroy-medium placeholder:text-black w-[300px] focus:outline-none"
          />
          <button className="text-3xl" type="submit">
            <LiaLongArrowAltRightSolid />
          </button>
        </form>
      </section>

      <footer className="bg-[--purple] py-11 px-28">
        <div className="flex justify-between items-center w-full">
          <h2 className="text-4xl font-gilroy-bold">Follow us no filter.</h2>
          <div className="flex gap-10">
            <Link href="#">
              <FaLinkedinIn />
            </Link>
            <Link href="#">
              <FaFacebookF />
            </Link>
            <Link href="#">
              <FaInstagram />
            </Link>
            <Link href="#">
              <FaXTwitter />
            </Link>
            <Link href="#">
              <CiYoutube />
            </Link>
          </div>
        </div>

        <hr className="my-8 border-[--gray]" />

        <div className="flex justify-between">
          <div className="font-gilroy-medium flex gap-20">
            <p>© {new Date().getFullYear()}. All Rights Reserved.</p>
            <Link href="#">Terms Of Use</Link>
            <Link href="#">Privacy Policy</Link>
          </div>

          <div>
            <p className="font-gilroy-medium">Design By Orix Agency</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
