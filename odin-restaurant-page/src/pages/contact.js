/**
 *  Handles the form submission for the reservation form.
 * @param {*} event - The event object representing the form submission
 */
const handleReservationFormSubmit = (event) => {
  // Prevent the form from submitting
  event.preventDefault();
  console.log("Reservation form submitted");

  const form = event.target;
  const formMessage = document.getElementById("form-message");

  const formData = new FormData(form);
  const reservationData = {
    name: formData.get("name").trim(),
    phone: formData.get("phone").trim(),
    guests: formData.get("guests"),
    date: formData.get("date"),
    time: formData.get("time"),
    message: formData.get("message").trim(),
  };

  if (formMessage) {
    formMessage.style.color = "#5f6f52";
    formMessage.innerHTML = `
      <strong>Opa! Reservation Requested 🎉</strong><br>
      Thank you, ${reservationData.name}. We are processing your request for ${reservationData.guests} guests on ${reservationData.date} at ${reservationData.time}.<br> 
    `;
  }

  form.reset();
};

/**
 *  Creates the contact page section with contact information and reservation form.
 * @returns - The contact page section element
 */
const createContactPage = () => {
  const contactSection = document.createElement("section");
  contactSection.classList.add("contact-section");
  contactSection.setAttribute("aria-label", "Contact Section");

  const contactHeading = document.createElement("div");
  contactHeading.classList.add("contact-heading");

  const contactTitle = document.createElement("h2");
  contactTitle.textContent = "Booking & Visits";

  const contactIntro = document.createElement("p");
  contactIntro.textContent =
    "Join us at the Agora Bistro. Whether a family dinner or a romantic night, our warm and welcoming atmosphere will bring you and your loved ones together in a place where the flavors of Greece come to life. We look forward to welcoming you!";

  const contactInfo = document.createElement("div");
  contactInfo.classList.add("contact-info");
  contactInfo.innerHTML = `
    <p><span>Address</span>123 Main Street, Athens, Greece</p>
    <p><span>Phone</span>+30 213 778 965</p>
    <p><span>Email</span>info@agorabistro.com</p>
    <p><span>Opening Hours</span>Mon-Fri: 11:00 - 22:00, Sat-Sun: 12:00 - 23:00</p>
  `;

  const reservationForm = document.createElement("form");
  reservationForm.classList.add("reservation-form");
  reservationForm.id = "reservation-form";
  reservationForm.innerHTML = `
    <h3>Make a Reservation</h3>
    <label>Name
      <input type="text" name="name" placeholder="Enter your name" required />
    </label>
    <label>Phone
      <input type="tel" name="phone" placeholder="+30 123 456 789" required />
    </label>
    <label>Guests
       <input type="number" name="guests" min="1" max="20" placeholder="2" required />
    </label>
    <label>Date
      <input type="date" name="date" required />
    </label>
    <label>Time
      <input type="time" name="time" min="10:00" max="21:30" required />
    </label>
    <label class="form-message-label">Message
       <textarea name="message" placeholder="Occasion, special requests, or anything else you'd like to add"></textarea>
    </label>
    <button type="submit">Request Reservation</button>
    <p class="form-message" id="form-message" aria-live="polite" role="status"></p>
  `;

  reservationForm.addEventListener("submit", handleReservationFormSubmit);

  contactHeading.appendChild(contactTitle);
  contactHeading.appendChild(contactIntro);
  contactSection.appendChild(contactHeading);
  contactSection.appendChild(contactInfo);
  contactSection.appendChild(reservationForm);

  return contactSection;
};

export default createContactPage;
