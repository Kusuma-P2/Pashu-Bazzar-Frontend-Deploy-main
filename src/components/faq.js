import React from "react";
import { useState } from "react";
import { useGlobalAuthContext } from "../AuthContext";
import "../static/faq.css";

const Faq = () => {
  const data = [
    {
      id: 1,
      title: {"en": "Do I have to allow the use of cookies?","hi": "क्या मुझे कुकीज़ के उपयोग की अनुमति देनी होगी?"},
      info: "Unicorn vinyl poutine brooklyn, next level direct trade iceland. Shaman copper mug church-key coloring book, whatever poutine normcore fixie cred kickstarter post-ironic street art.",
    },
    {
      id: 2,
      title: {"en": "How do I change my My Page password?","hi": "मैं अपना माई पेज पासवर्ड कैसे बदलूं?"},
      info: "Coloring book forage photo booth gentrify lumbersexual. Migas chillwave poutine synth shoreditch, enamel pin thundercats fashion axe roof party polaroid chartreuse.",
    },
    {
      id: 3,
      title: {"en": "What is BankID?","hi": "BankID क्या है?"},
      info: "Enamel pin fam sustainable woke whatever venmo. Authentic asymmetrical put a bird on it, lumbersexual activated charcoal kinfolk banjo cred pickled sartorial.",
    },
    {
      id: 4,
      title: {"en": "Whose birth number can I use?","hi": "मैं किसकी जन्म संख्या का उपयोग कर सकता हूं?"},
      info: "Edison bulb direct trade gentrify beard lo-fi seitan sustainable roof party franzen occupy squid. Knausgaard cronut succulents, scenester readymade shabby chic lyft. Copper mug meh vegan gentrify.",
    },
    {
      id: 5,
      title: {"en": "When do I recieve a password ordered by letter?","hi": "मुझे पत्र द्वारा आदेशित पासवर्ड कब प्राप्त होगा?"},
      info: "Locavore franzen fashion axe live-edge neutra irony synth af tilde shabby chic man braid chillwave waistcoat copper mug messenger bag. Banjo snackwave blog, microdosing thundercats migas vaporware viral lo-fi seitan ",
    },
  ];
  const [questions, setQuestions] = useState(data);
  return (
    <div>
      <main className="faqContainer">
        <div className="container">
          <section className="info">
            {questions.map((question) => {
              return (
                <SingleQuestion
                  key={question.id}
                  {...question}
                ></SingleQuestion>
              );
            })}
          </section>
        </div>
      </main>
    </div>
  );
};

const SingleQuestion = ({ title, info }) => {
  const {translate} = useGlobalAuthContext();
  const [translateLang] = translate
  const [showInfo, setShowInfo] = useState(false);
  return (
    <article className="question">
      <header>
        <h4 className="faqTitle">{title[translateLang]}</h4>
        <button className="btn" onClick={() => setShowInfo(!showInfo)}>
          {showInfo ? "-" : "+"}
        </button>
      </header>
      {showInfo && <p className="faqPara">{info}</p>}
    </article>
  );
};
export default Faq;
