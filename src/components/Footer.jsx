import React from 'react';

const Footer = () => {
  return (
    <footer className="p-10 bg-secondary text-base-content rounded-t-3xl mt-12 px-4 md:px-12 text-white/80">
      
     
      <div className="footer">
        <nav>
          <h6 className="footer-title text-primary">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>

        <nav>
          <h6 className="footer-title text-primary">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>

        <nav>
          <h6 className="footer-title text-primary">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>

        <form>
          <h6 className="footer-title text-primary">Newsletter</h6>
          <fieldset className="form-control w-80">
            <label className="label">
              <span className="label-text text-white/50">
                Enter your email address
              </span>
            </label>
            <div className="join">
              <input
                type="text"
                placeholder="username@site.com"
                className="input input-bordered join-item"
              />
              <button className="btn btn-primary join-item text-white">
                Subscribe
              </button>
            </div>
          </fieldset>
        </form>
      </div>

      
      <div className="flex flex-col-reverse sm:flex-row justify-center gap-5 text-white mt-10 border-t border-gray-600 pt-5">
        <p>©2026 Digitools. All rights reserved.</p>

        <div className="mb-5 sm:mb-0 flex gap-5">
          <p>Privacy Policy</p>
          <p>Terms of Service</p>
          <p>Cookies</p>
        </div>
      </div>

    </footer>
  );
};

export default Footer;