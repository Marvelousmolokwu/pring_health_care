import Button from "../components/button";

const Home = () => {
  return (
    <>
      <section className=" relative ">
        <div className="fixed top-0">
          <div className="absolute bg-cream1 w-full h-[100vh]   left-0 "></div>
          <img
            src="https://res.cloudinary.com/ddgyd8szc/image/upload/v1687383537/woman-5380651_eh7psp.jpg"
            alt=""
            className="object-cover  w-[100vw] h-[100vh] "
          />
        </div>

        <main className="mt-28 lg:mt-40 relative text-center ">
          <div className="bg-lightPurple text-white font-extrabold text-xl lg:text-6xl max-w-[80%] mx-auto p-8 text-center  lg:leading-[6rem] ">
            <h2>
              Navigate Life's Stressors and Transitions with Confidence through
              Online Counseling
            </h2>
          </div>
          <div className="max-w-[80%] lg:max-w-[80%] mx-auto text-white mb-32 ">
            <p className="mt-4 mb-8">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              voluptatem perferendis necessitatibus illo nobis, distinctio
              deserunt sequi velit dolor omnis blanditiis iste impedit magnam
              maiores enim voluptate sint expedita id. Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Repudiandae impedit tempora,
              facere suscipit cupiditate sunt officiis error ducimus deserunt
              voluptatum sit ipsam fugiat, fugit nihil totam labore. Tempore,
              repellendus sed?
            </p>
            <Button />
          </div>
        </main>
        <section className="relative">
          <article>
            <div className="bg-purple2 text-white flex flex-col  items-center text-center py-10 px-4">
              <img
                src="https://res.cloudinary.com/ddgyd8szc/image/upload/v1687440073/therapy_3_eiigs0.png"
                alt="logo"
                className="w-14 h-14"
              />
              <p className="max-w-[80%] mx-auto text-xl">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Aliquid expedita possimus maxime fugit beatae illo porro modi
                cum. Consectetur inventore sunt doloribus debitis provident,
                ullam quisquam aliquam non necessitatibus error.
              </p>
            </div>
          </article>
        </section>
        <section className="bg-purple3 relative ">
          <div className="max-w-[80%] lg:max-w-[80%] mx-auto flex flex-col  md:flex-row  gap-4 justify-between items-center py-10  text-purple1">
            <article className="relative w-full max-h-[20rem]   border-2 border-purple1 ">
              <div className=" w-full h-full absolute">
                <img
                  src="https://res.cloudinary.com/ddgyd8szc/image/upload/v1687375510/therapy_2_st9jvt.png"
                  alt="logo"
                  className="w-full  h-full absolute   opacity-10"
                />
              </div>

              <div className="p-6 md:p-4 lg:p-6 gap-6 md:gap-0 lg:gap-6  flex flex-col ">
                <div className="flex gap-3 items-center">
                  <img
                    src="https://res.cloudinary.com/ddgyd8szc/image/upload/v1687243897/stars_runyul.png"
                    alt="img"
                  />
                  <h1 className="font-bold text-xl">Services</h1>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Earum voluptas iusto quaerat omnis est repudiandae libero
                  aperiam eaque minima
                </p>
                <button className="px-4 py-2 rounded-full bg-purple1 text-white w-5/6">
                  {" "}
                  Learn more
                </button>
              </div>
            </article>
            <article className="relative w-full max-h-[20rem]   border-2 border-purple1 ">
              <div className=" w-full h-full absolute  opacity-5">
                <img
                  src="https://res.cloudinary.com/ddgyd8szc/image/upload/v1687383922/mental-health-2019924_bw0qnc.jpg"
                  alt="logo"
                  className="w-full  h-full absolute   "
                />
              </div>

              <div className="p-6 md:p-4 lg:p-6 gap-6 md:gap-0 lg:gap-6   flex flex-col ">
                <div className="flex gap-3 items-center">
                  <img
                    src="https://res.cloudinary.com/ddgyd8szc/image/upload/v1687243896/bubbles_ksre67.png"
                    alt="img"
                  />
                  <h1 className="font-bold text-xl">About us</h1>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Earum voluptas iusto quaerat omnis est repudiandae libero
                  aperiam eaque minima
                </p>
                <button className="px-4 py-2 rounded-full bg-purple1 text-white w-5/6 ">
                  {" "}
                  Learn more
                </button>
              </div>
            </article>
            <article className="relative w-full max-h-[20rem]   border-2 border-purple1 ">
              <div className=" w-full h-full absolute">
                <img
                  src="https://res.cloudinary.com/ddgyd8szc/image/upload/v1687243897/photo-1573497620053-ea5300f94f21_acrbmg.avif"
                  alt="logo"
                  className="w-full  h-full absolute   opacity-10"
                />
              </div>

              <div className="p-6 md:p-4 lg:p-6 gap-6 md:gap-0 lg:gap-6   flex flex-col ">
                <div className="flex gap-3 items-center">
                  <img
                    src="https://res.cloudinary.com/ddgyd8szc/image/upload/v1687243897/stars_runyul.png"
                    alt="img"
                  />
                  <h1 className="font-bold text-xl">Consultation</h1>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Earum voluptas iusto quaerat omnis est repudiandae libero
                  aperiam eaque minima
                </p>
                <button className="px-4 py-2 rounded-full bg-purple1 text-white w-5/6">
                  Learn more
                </button>
              </div>
            </article>
          </div>
          <section className="max-w-[80%] lg:max-w-[60%] mx-auto py-20 lg:text-center flex flex-col justify-center items-center ">
            <h3 className="font-bold text-3xl border-dashed border-b-2  border-purple1 py-3  ">
              Our Mission Statement
            </h3>

            <p className="text-sm pb-16 py-3">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab minus
              pariatur modi laborum ratione quae quidem quo. Facere, odio et ex
              totam repudiandae, alias quae debitis fugiat omnis aliquid neque!
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
              repudiandae consequatur exercitationem, omnis veritatis, vero
              laboriosam fuga, voluptates placeat eaque ducimus dolorem cumque
              qui aliquid modi impedit hic amet officia.
            </p>
            <h3 className="font-bold text-3xl border-dashed border-b-2  border-purple1 py-3">
              How did Pring Health Care get Started ?
            </h3>
            <p className="text-sm py-3">
              Lorem ipsum dolor sit amehht consectetur adipisicing elit. Debitis
              expedita deleniti fugiat dolorem excepturi sunt laudantium quaerat
              cumque laboriosam. Aspernatur error nihil dolorem, expedita saepe
              alias architecto explicabo distinctio hic? Lorem ipsum dolor sit
              amet consectetur, adipisicing elit. Rem necessitatibus velit amet
              tempora sapiente maiores inventore ab, nemo, tenetur labore ipsa
              voluptate. Velit eius aliquid mollitia cum placeat dolores eos?
            </p>
          </section>
          <section className="text-sm bg-purple2 text-white flex flex-col  items-center text-center py-16 px-4 ">
            <img src="" alt="" />
            <div className="flex flex-col  items-center">
              <img
                src="https://res.cloudinary.com/ddgyd8szc/image/upload/v1688244806/folder_cpt6lk.png"
                alt=""
              />
              <h3 className="font-bold text-3xl border-dashed border-b-2  border-purple1 py-3  ">
                Our services
              </h3>
            </div>
            <div className="max-w-[80%] lg:max-w-[80%] mx-auto flex flex-col  md:flex-row  gap-4 justify-between items-center py-10">
              <article className="border border-white w-full max-h-auto p-4 rounded-md">
                <h4 className="font-bold text-xl">Treatment For Diseases</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Tenetur molestias earum repellendus expedita rerum, quas fuga
                  praesentium iste, facere possimus aspernatur unde vero,
                  cupiditate accusamus iusto cumque laudantium atque officia.
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio
                  hic rem beatae veritatis ducimus, ipsum quasi possimus
                  deleniti consequatur minus praesentium sed incidunt mollitia!
                  Earum impedit ipsam consequatur reprehenderit ratione?
                </p>
              </article>
              <article className="border border-white w-full max-h-auto p-4  rounded-md ">
                <h4 className="font-bold text-xl">Treatment For Depression</h4>

                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Tenetur molestias earum repellendus expedita rerum, quas fuga
                  praesentium iste, facere possimus aspernatur unde vero,
                  cupiditate accusamus iusto cumque laudantium atque officia.
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio
                  hic rem beatae veritatis ducimus, ipsum quasi possimus
                  deleniti consequatur minus praesentium sed incidunt mollitia!
                  Earum impedit ipsam consequatur reprehenderit ratione?
                </p>
              </article>
            </div>
            <button className="px-5 py-3 bg-white text-purple2 rounded-full flex gap-2 items-center">
              <img
                src="https://res.cloudinary.com/ddgyd8szc/image/upload/v1688245303/folder_4_uapjcm.png"
                className="h-6 w-6"
                alt="folder"
              />
              View All Our Services
            </button>
          </section>
          <section className="max-w-[80%] lg:max-w-[40%] mx-auto py-10  ">
            <form className="flex flex-col bg-white font-semibold p-6 gap-2">
              <h3 className="font-bold text-2xl text-purple1">
                Request a Consultation
              </h3>
              <label htmlFor="name">First Name:</label>
              <input type="text" id="name" placeholder="firstname" />
              <label htmlFor="lname">Last Name:</label>
              <input type="text" id="lname" placeholder="lastname" />
              <label htmlFor="why">What Brings You Here ?</label>
              <textarea type="textarea" id="why" />
              <label htmlFor="email">Email</label>
              <input type="email" id="email" placeholder="Your Email Address" />
              <label htmlFor="time">Best Time To Communicate With You</label>
              <select name="time">
                <option value="first-time">10am - 12pm</option>
                <option value="second-time">12pm - 2pm</option>
                <option value="third-time">2pm - 4pm</option>
              </select>
              <button className="bg-purple1 text-white font-semibold py-2 rounded-sm mt-2">
                Send
              </button>
            </form>
          </section>
        </section>
      </section>
    </>
  );
};

export default Home;
