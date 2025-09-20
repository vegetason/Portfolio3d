

const Footer = () => {
    return (
        <section className="c-space pt-7 border-t border-black-300 flex justify-between flex-wrap gap-5">
            <div className="text-white-500 flex gap-2">
                <p>Terms & Conditions</p>
                <p>|</p>
                <p>Privacy Policy</p>
            </div>
            <div className="flex gap-3">
                <a href="https://github.com/vegetason" className="cursor-pointer" target="_blank">
                    <div className="social-icon">
                        <img src='/assets/github.svg' alt="github" className="w-1/2 h-1/2" />
                    </div>
                </a>
                <a href="https://www.linkedin.com/in/irakoze-benimana-paulin-72328331a/" target="_blank">
                    <div className="social-icon">
                        <img src='/assets/linkedin.svg' alt="linkedin" className="w-1/2 h-1/2" />
                    </div>
                </a>
            </div>
            <p className="text-white-500">© 2025 Paulin. All rights reserved.</p>
        </section>
    )
}

export default Footer
