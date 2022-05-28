import logoImg from "../../images/top-logo.png";

function Footer() {
    return (
        <section className="section-footer">
            <div className="footer">
                <div><p>2020 © All rights reserved.</p></div>
                <div className="botton-logo"><img src={logoImg}/></div>
            </div>
        </section>
    );
}

export default Footer;