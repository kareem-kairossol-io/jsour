import DefaultLayout from "../../layout/DefaultLayout"
import contact from './../../images/contact.jpg'

const Contact = () => {
    return (
        <DefaultLayout>
            <div className="page-header">
                <div className="container">
                    <h1 className="page-title">Contact Us</h1>
                </div>
                <img src={contact} alt="" />
            </div>
            <div className="contact_us_wrapper">
                <div className="container">

                <form action="">
                    <h2>Jusoor Always Listening</h2>
                    <div className="form_wrapper">
                        <input type="email" name="email" id="email" placeholder="Your Email" />
                        <input type="text" name="name" id="name" placeholder="Your Name" />
                        <input type="text" name="subject" id="subject" placeholder="Subject" />
                        <textarea name="message" id="message" placeholder="Message" ></textarea>
                        <button>Send Message</button>
                    </div>
                </form>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3453.4889196294653!2d31.20589227620154!3d30.051517018234485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145841258343c36d%3A0x1d46b4ab7263e6f7!2s10%20El-Batal%20Ahmed%20Abd%20El-Aziz%2C%20Ad%20Doqi%2C%20Dokki%2C%20Giza%20Governorate%203751333!5e0!3m2!1sen!2seg!4v1707392314566!5m2!1sen!2seg" width="600" height="450" style={{border: 0}}  loading="lazy" ></iframe>
                </div>
            </div>
        </DefaultLayout>
    )
}

export default Contact