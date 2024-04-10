// Write your code here.
import FaqItem from '../FaqItem'
import './index.css'

const Faqs = props => {
  const {faqsList} = props

  return (
    <div className="bg-container">
      <div className="shadow faq-continer">
        <h1 className="heading">FAQs</h1>
        <ul className="lists-items">
          {faqsList.map(eachFaq => (
            <FaqItem faqDetails={eachFaq} key={eachFaq.id} />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Faqs
