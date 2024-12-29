import { useState, useEffect } from 'react';
import { useForm, ValidationError } from "@formspree/react";

export default function ContactForm() {
  const [state, handleSubmit] = useForm("mnqepqya");
  const [isInUS, setIsInUS] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchLocation = async () => {
      try {
        // Use a CORS-friendly geolocation service
        const response = await fetch('https://ipapi.co/json/', {
          mode: 'cors',
          headers: {
            'Access-Control-Allow-Origin': '*'
          }
        });
        
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        
        const data = await response.json();
        setIsInUS(data.country === 'US');
      } catch (error) {
        console.error('Error fetching location:', error);
        // Default to allowing form submission if fetch fails
        setIsInUS(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchLocation();
  }, []);

  const handleFormSubmit = (e) => {
    if (!isInUS) {
      e.preventDefault();
      alert('Sorry, we are only accepting messages from the United States.');
    } else {
      handleSubmit(e);
    }
  }

  if (state.succeeded) {
    return <p id="submit_message">Thanks for contacting us!</p>;
  }

  return (
    <div>
      <section className="contact" id="contact">
        <h2 className="section-title">Contact Us</h2>
        {isLoading ? (
          <p>Checking location...</p>
        ) : (
          <form onSubmit={handleFormSubmit} className="contact-form">
            <input
              id="name"
              type="text"
              name="name"
              placeholder="Full Name"
              required
              className="input-field"
            />
            <ValidationError prefix="Name" field="name" errors={state.errors} />
            <input
              id="email"
              type="email"
              name="_replyto"
              placeholder="Email"
              required
              className="input-field"
            />
            <ValidationError
              prefix="Email"
              field="_replyto"
              errors={state.errors}
            />
            <input
              id="phone"
              type="tel"
              name="phone"
              placeholder="Phone Number"
              className="input-field"
            />
            <ValidationError prefix="Phone" field="phone" errors={state.errors} />
            <textarea
              id="message"
              name="message"
              placeholder="Message"
              required
              className="textarea-field"
            >
            </textarea>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
            <button
              type="submit"
              disabled={state.submitting}
              className="cta-button"
            >
              Send Message
            </button>
          </form>
        )}
        <div className="contact-info-text">
          <p><span> Phone: (808) 755-1887 </span><span>Email: Kilaueasolutions@gmail.com</span></p>
        </div>
      </section>
    </div>
  );
}
