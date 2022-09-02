import style from './Contact.module.css'

const Contact = () => {
  return (
    <div id="Contact" className={`${style.section} section`}>
      <div className={style.container}>
        <h2>Contact Me</h2>
        <br />
        <p>Lorem ipsum dolors set amit lorem ipsdsffm dolor set oosdfem ipsum dolor setsd amit</p>
        <div className={style.container2}>
          <div className={style.col}>
            <iframe
              src="https://tally.so/embed/wdW1RA?alignLeft=1&hideTitle=1&transparentBackground=1"
              width="100%"
              height="500"
              frameborder="0"
              marginheight="0"
              marginwidth="0"
              title="ayushdhingra.ml">
            </iframe>
          </div>
          <div className={style.col}>
            <img src={require('../../assets/images/hand.png')} alt="hand" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact;
