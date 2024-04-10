// Write your code here.
import {Component} from 'react'
import './index.css'

class FaqItem extends Component {
  state = {isBtnClicked: false}

  renderAbswer = () => {
    const {faqDetails} = this.props
    const {answerText} = faqDetails
    const {isBtnClicked} = this.state

    if (isBtnClicked) {
      return (
        <div>
          <hr />
          <p className="answer">{answerText}</p>
        </div>
      )
    }
    return null
  }

  onClickBtn = () => {
    this.setState(prevState => ({
      isBtnClicked: !prevState.isBtnClicked,
    }))
  }

  renderActiveImage = () => {
    const {isBtnClicked} = this.state
    const btnImage = isBtnClicked
      ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
    const alt = isBtnClicked ? 'mius' : 'plus'
    return (
      <button type="button" className="btn" onClick={this.onClickBtn}>
        <img src={btnImage} alt={alt} />
      </button>
    )
  }

  render() {
    const {faqDetails} = this.props
    const {questionText} = faqDetails
    return (
      <li className="list-items">
        <div className="faq-cintainer">
          <h1 className="question">{questionText}</h1>
          {this.renderActiveImage()}
        </div>
        {this.renderAbswer()}
      </li>
    )
  }
}

export default FaqItem
