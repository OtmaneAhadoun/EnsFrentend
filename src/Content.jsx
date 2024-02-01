import React, { useState } from "react";

function Content() {
  return (
    <div>
      {" "}
      <div className="header h-32 capitalize">
        <img src="./images/logo_2.png" className="logo" alt="" />
        <nav className="navbar text-base flex  capitalize">
          <a href="#home" className="hover-underline capitalize">
            Accueil
          </a>
          <a href="#about" className="hover-underline">
            À propos
          </a>
          <a href="#courses" className="hover-underline">
            Cours
          </a>
          <a href="#teacher" className="hover-underline">
            Enseignant
          </a>
          <a href="#review" className="hover-underline">
            Avis
          </a>
          <a href="#blog" className="hover-underline">
            Blog
          </a>
          <a href="#contact" className="hover-underline">
            Contact
          </a>
        </nav>
        <a href="/ens.um5/inscription" className="btn mb-3 ">
          <span className="text text-1">inscription</span>
          <span className="text text-2" aria-hidden="true">
            inscription
          </span>
        </a>
        {/* Formulaire de connexion */}
      </div>
      <section className="home" id="home">
        <div className="content font-semibold">
          <h3>École Normale Supérieure de Rabat</h3>
          <p className=" font-medium">
            Université Mohammed V de Rabat Ministrère de l’Enseignement
            Supérieur
          </p>
          <a href="#" className="btn">
            <span className="text text-1">En savoir plus</span>
            <span className="text text-2" aria-hidden="true">
              En savoir plus
            </span>
          </a>
          {/* Fin de la section Accueil */}
        </div>
      </section>
      <section className="about" id="about">
        {/* Fin de la section en-tête */}
        {/* Début de la section Accueil */}
        <h1 className="heading">À propos de nous</h1>
        <div className="container">
          <figure className="about-image">
            <img src="images/home.jpeg" alt="" height={500} />
            <img src="images/home2.png" alt="" className="about-img" />
          </figure>
          <div className="about-content">
            <h3>18 ans d'expérience</h3>
            <p>
              L’École Normale Supérieure (E.N.S.) de Rabat a été créée en 1978,
              à côté d’autres établissements du même genre, dans le cadre d’un
              programme national destiné à la formation des enseignants du
              Secondaire de second cycle
            </p>
            <p>
              afin de répondre à une demande accrue dans le secteur de
              l’enseignement public à cette époque et visant en même temps la
              marocanisation des cadres.
            </p>
            <a href="#" className="btn">
              <span className="text text-1">Lire la suite</span>
              <span className="text text-2" aria-hidden="true">
                Lire la suite
              </span>
            </a>
          </div>
        </div>
      </section>
      {/* about section ends */}
      {/* subjects section starts */}
      <section className="subjects">
        <h1 className="heading">Nos matières populaires</h1>
        <div className="box-container">
          <div className="box">
            <img src="images/subject-1.png" alt="" />
            <h3>développement</h3>
            <p>amusement et défis</p>
          </div>
          <div className="box">
            <img src="images/subject-2.png" alt="" />
            <h3>mathématiques</h3>
            <p>amusement et défis</p>
          </div>
          <div className="box">
            <img src="images/subject-3.png" alt="" />
            <h3>design graphique</h3>
            <p>amusement et défis</p>
          </div>
          <div className="box">
            <img src="images/subject-4.png" alt="" />
            <h3>ingénierie</h3>
            <p>amusement et défis</p>
          </div>
        </div>
      </section>
      {/* Fin de la section des matières */}
      {/* Début de la section des cours */}
      <section className="courses" id="courses">
        <h1 className="heading">Nos cours célèbres</h1>
        <div className="box-container">
          {/* Boîte de cours 1 */}
          <div className="box">
            <div className="image shine">
              <img src="images/course-1.jpg" alt="" />
              <h3>base</h3>
            </div>
            <div className="content">
              <h4>49,99 $</h4>
              <p>mis à jour le 25/09/2021</p>
              <h3>développement frontend</h3>
              <div className="stars">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star-half-alt" />
                <span>(785)</span>
              </div>
              <div className="icons">
                <span>
                  <i className="far fa-bookmark" /> 15 leçons
                </span>
                <span>
                  <i className="far fa-clock" /> 8h 25m 9s
                </span>
              </div>
            </div>
          </div>
          {/* Boîte de cours 2 */}
          <div className="box">
            <div className="image shine">
              <img src="images/course-2.jpg" alt="" />
              <h3>base</h3>
            </div>
            <div className="content">
              <h4>49,99 $</h4>
              <p>mis à jour le 25/09/2021</p>
              <h3>développement frontend</h3>
              <div className="stars">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star-half-alt" />
                <span>(785)</span>
              </div>
              <div className="icons">
                <span>
                  <i className="far fa-bookmark" /> 15 leçons
                </span>
                <span>
                  <i className="far fa-clock" /> 8h 25m 9s
                </span>
              </div>
            </div>
          </div>
          {/* Boîte de cours 3 */}
          <div className="box">
            <div className="image shine">
              <img src="images/course-3.jpg" alt="" />
              <h3>base</h3>
            </div>
            <div className="content">
              <h4>49,99 $</h4>
              <p>mis à jour le 25/09/2021</p>
              <h3>développement frontend</h3>
              <div className="stars">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star-half-alt" />
                <span>(785)</span>
              </div>
              <div className="icons">
                <span>
                  <i className="far fa-bookmark" /> 15 leçons
                </span>
                <span>
                  <i className="far fa-clock" /> 8h 25m 9s
                </span>
              </div>
            </div>
          </div>
          {/* Boîte de cours 4 */}
          <div className="box">
            <div className="image shine">
              <img src="images/course-4.jpg" alt="" />
              <h3>base</h3>
            </div>
            <div className="content">
              <h4>49,99 $</h4>
              <p>mis à jour le 25/09/2021</p>
              <h3>développement frontend</h3>
              <div className="stars">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star-half-alt" />
                <span>(785)</span>
              </div>
              <div className="icons">
                <span>
                  <i className="far fa-bookmark" /> 15 leçons
                </span>
                <span>
                  <i className="far fa-clock" /> 8h 25m 9s
                </span>
              </div>
            </div>
          </div>
          {/* Boîte de cours 5 */}
          <div className="box">
            <div className="image shine">
              <img src="images/course-5.jpg" alt="" />
              <h3>base</h3>
            </div>
            <div className="content">
              <h4>49,99 $</h4>
              <p>mis à jour le 25/09/2021</p>
              <h3>développement frontend</h3>
              <div className="stars">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star-half-alt" />
                <span>(785)</span>
              </div>
              <div className="icons">
                <span>
                  <i className="far fa-bookmark" /> 15 leçons
                </span>
                <span>
                  <i className="far fa-clock" /> 8h 25m 9s
                </span>
              </div>
            </div>
          </div>
          {/* Boîte de cours 6 */}
          <div className="box">
            <div className="image shine">
              <img src="images/course-6.jpg" alt="" />
              <h3>base</h3>
            </div>
            <div className="content">
              <h4>49,99 $</h4>
              <p>mis à jour le 25/09/2021</p>
              <h3>développement frontend</h3>
              <div className="stars">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star-half-alt" />
                <span>(785)</span>
              </div>
              <div className="icons">
                <span>
                  <i className="far fa-bookmark" /> 15 leçons
                </span>
                <span>
                  <i className="far fa-clock" /> 8h 25m 9s
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* courses section ends */}
      {/* teacher section starts */}
      <section className="teacher" id="teacher">
        <h1 className="heading">our expert teacher</h1>
        <div className="box-container">
          <div className="box">
            <div className="image">
              <img src="images/teacher-1.png" alt="" />
              <div className="share">
                <a href="#" className="fab fa-facebook-f" />
                <a href="#" className="fab fa-twitter" />
                <a href="#" className="fab fa-instagram" />
              </div>
            </div>
            <div className="content">
              <h3>john deo</h3>
              <span>instructor</span>
            </div>
          </div>
          <div className="box">
            <div className="image">
              <img src="images/teacher-2.png" alt="" />
              <div className="share">
                <a href="#" className="fab fa-facebook-f" />
                <a href="#" className="fab fa-twitter" />
                <a href="#" className="fab fa-instagram" />
              </div>
            </div>
            <div className="content">
              <h3>john deo</h3>
              <span>instructor</span>
            </div>
          </div>
          <div className="box">
            <div className="image">
              <img src="images/teacher-3.png" alt="" />
              <div className="share">
                <a href="#" className="fab fa-facebook-f" />
                <a href="#" className="fab fa-twitter" />
                <a href="#" className="fab fa-instagram" />
              </div>
            </div>
            <div className="content">
              <h3>john deo</h3>
              <span>instructor</span>
            </div>
          </div>
          <div className="box">
            <div className="image">
              <img src="images/teacher-4.png" alt="" />
              <div className="share">
                <a href="#" className="fab fa-facebook-f" />
                <a href="#" className="fab fa-twitter" />
                <a href="#" className="fab fa-instagram" />
              </div>
            </div>
            <div className="content">
              <h3>john deo</h3>
              <span>instructor</span>
            </div>
          </div>
        </div>
      </section>
      <section className="blog" id="blog">
        <h1 className="heading">our blogs</h1>
        <div className="box-container">
          <div className="box">
            <div className="image shine">
              <img src="images/blog-1.jpg" alt="" />
              <h3>09 dec 2022</h3>
            </div>
            <div className="content">
              <div className="icons">
                <a href="#">
                  <i className="fas fa-user" />
                  by admin
                </a>
              </div>
              <h3>we have best courses for you</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
                explicabo minus.
              </p>
              <a href="#" className="btn">
                <span className="text text-1">read more</span>
                <span className="text text-2" aria-hidden="true">
                  read more
                </span>
              </a>
            </div>
          </div>
          <div className="box">
            <div className="image shine">
              <img src="images/blog-2.jpg" alt="" />
              <h3>09 dec 2022</h3>
            </div>
            <div className="content">
              <div className="icons">
                <a href="#">
                  <i className="fas fa-user" />
                  by admin
                </a>
              </div>
              <h3>we have best courses for you</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
                explicabo minus.
              </p>
              <a href="#" className="btn">
                <span className="text text-1">read more</span>
                <span className="text text-2" aria-hidden="true">
                  read more
                </span>
              </a>
            </div>
          </div>
          <div className="box">
            <div className="image shine">
              <img src="images/blog-3.jpg" alt="" />
              <h3>09 dec 2022</h3>
            </div>
            <div className="content">
              <div className="icons">
                <a href="#">
                  <i className="fas fa-user" />
                  by admin
                </a>
              </div>
              <h3>we have best courses for you</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
                explicabo minus.
              </p>
              <a href="#" className="btn">
                <span className="text text-1">read more</span>
                <span className="text text-2" aria-hidden="true">
                  read more
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* blog section ends */}
      {/* contact section starts */}
      <section className="contact" id="contact">
        <h1 className="heading">contact us</h1>
        <div className="row">
          <div className="image">
            <img src="images/contact.png" alt="" />
          </div>
          <form action="">
            <h3>send us a message</h3>
            <input type="text" placeholder="name" className="box" />
            <input type="email" placeholder="email" className="box" />
            <input type="number" placeholder="phone number" className="box" />
            <textarea
              placeholder="message"
              className="box"
              cols={30}
              rows={10}
              defaultValue={""}
            />
            <a href="#" className="btn">
              <span className="text text-1">send message</span>
              <span className="text text-2" aria-hidden="true">
                send message
              </span>
            </a>
          </form>
        </div>
      </section>
      {/* contact section ends */}
      {/* footer section stars */}
      <section className="footer">
        <div className="box-container">
          <div className="box">
            <h3>find us here</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum
              beatae.
            </p>
            <div className="share">
              <a href="#" className="fab fa-facebook-f" />
              <a href="#" className="fab fa-twitter" />
              <a href="#" className="fab fa-instagram" />
              <a href="#" className="fab fa-linkedin" />
            </div>
          </div>
          <div className="box">
            <h3>contact us</h3>
            <p>+1234 587 1478</p>
            <a href="#" className="link">
              ninjashub4@gmail.com
            </a>
          </div>
          <div className="box">
            <h3>localization</h3>
            <p>
              230 points of the pines <br />
              colorado springs <br />
              united states
            </p>
          </div>
        </div>
      </section>
      {/* footer section ends */}
      {/* custom js */}
    </div>
  );
}

export default Content;
