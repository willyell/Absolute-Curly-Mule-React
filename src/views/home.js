import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import Navbar8 from '../components/navbar8'
import Hero17 from '../components/hero17'
import Features24 from '../components/features24'
import CTA26 from '../components/cta26'
import Features25 from '../components/features25'
import Pricing14 from '../components/pricing14'
import Testimonial17 from '../components/testimonial17'
import Contact10 from '../components/contact10'
import Footer4 from '../components/footer4'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Absolute Curly Mule</title>
        <meta property="og:title" content="Absolute Curly Mule" />
      </Helmet>
      <Navbar8
        link1={
          <Fragment>
            <span className="home-text100">#home</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="home-text101">#about</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="home-text102">#services</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="home-text103">#contact</span>
          </Fragment>
        }
        page1={
          <Fragment>
            <span className="home-text104">Home</span>
          </Fragment>
        }
        page2={
          <Fragment>
            <span className="home-text105">About Us</span>
          </Fragment>
        }
        page3={
          <Fragment>
            <span className="home-text106">Services</span>
          </Fragment>
        }
        page4={
          <Fragment>
            <span className="home-text107">Contact</span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="home-text108">Main Action</span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="home-text109">Secondary Action</span>
          </Fragment>
        }
        logoSrc="/cropped-xfav-1500h.png"
        page1Description={
          <Fragment>
            <span className="home-text110">Page One Description</span>
          </Fragment>
        }
        page2Description={
          <Fragment>
            <span className="home-text111">Page Two Description</span>
          </Fragment>
        }
        page3Description={
          <Fragment>
            <span className="home-text112">Page Three Description</span>
          </Fragment>
        }
        page4Description={
          <Fragment>
            <span className="home-text113">Page Four Description</span>
          </Fragment>
        }
      ></Navbar8>
      <Hero17
        action1={
          <Fragment>
            <span className="home-text114">Continue</span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="home-text115">Learn More</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text116">
              Stay connected and entertained with top mobile services tailored
              to your needs.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text117">Mobile Entertainment</span>
          </Fragment>
        }
        imageSrc="https://images.unsplash.com/photo-1732423486660-43b0d2909e0b?ixid=M3w5MTMyMXwwfDF8YWxsfDE1fHx8fHx8fHwxNzMyNTQ2OTYwfA&amp;ixlib=rb-4.0.3&amp;w=1500"
        image1Src="https://images.unsplash.com/photo-1732493669483-d36c907d0a3d?ixid=M3w5MTMyMXwwfDF8YWxsfDN8fHx8fHx8fDE3MzI1NDY5NjB8&amp;ixlib=rb-4.0.3&amp;w=1500"
        image2Src="https://images.unsplash.com/photo-1720048170996-40507a45c720?ixid=M3w5MTMyMXwxfDF8YWxsfDExfHx8fHx8fHwxNzMyNTQ2OTYwfA&amp;ixlib=rb-4.0.3&amp;w=1500"
        image7Src="https://images.unsplash.com/photo-1732459996749-e39500ee6063?ixid=M3w5MTMyMXwwfDF8YWxsfDJ8fHx8fHx8fDE3MzI1NDY5NjB8&amp;ixlib=rb-4.0.3&amp;w=1500"
        image8Src="https://images.unsplash.com/photo-1731902062633-1496d7bcf95c?ixid=M3w5MTMyMXwwfDF8YWxsfDE5fHx8fHx8fHwxNzMyNTQ2OTYwfA&amp;ixlib=rb-4.0.3&amp;w=1500"
      ></Hero17>
      <Features24
        feature1Title={
          <Fragment>
            <span className="home-text118">BrainQ</span>
          </Fragment>
        }
        feature2Title={
          <Fragment>
            <span className="home-text119">inTuner</span>
          </Fragment>
        }
        feature3Title={
          <Fragment>
            <span className="home-text120">EasyFitness</span>
          </Fragment>
        }
        feature1ImgSrc="https://images.unsplash.com/photo-1731902062588-4dce45ccc0cb?ixid=M3w5MTMyMXwwfDF8YWxsfDI0fHx8fHx8fHwxNzMyNTQ2OTYwfA&amp;ixlib=rb-4.0.3&amp;w=1500"
        feature1Description={
          <Fragment>
            <span className="home-text121">
              Test yourself, how do you rate how smart are you?
            </span>
          </Fragment>
        }
        feature2Description={
          <Fragment>
            <span className="home-text122">All your favorite music</span>
          </Fragment>
        }
        feature3Description={
          <Fragment>
            <span className="home-text123">Custom health programs</span>
          </Fragment>
        }
      ></Features24>
      <CTA26
        action1={
          <Fragment>
            <span className="home-text124">Get in touch</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text125">
              Contact us today to learn how we can help you achieve your goals.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text126">
              Ready to take your business to the next level?
            </span>
          </Fragment>
        }
      ></CTA26>
      <Features25
        feature1Title={
          <Fragment>
            <span className="home-text127">Advanced Security</span>
          </Fragment>
        }
        feature2Title={
          <Fragment>
            <span className="home-text128">Easy Integration</span>
          </Fragment>
        }
        feature3Title={
          <Fragment>
            <span className="home-text129">24/7 Support</span>
          </Fragment>
        }
        feature1Description={
          <Fragment>
            <span className="home-text130">
              Top-notch security measures to keep your data safe
            </span>
          </Fragment>
        }
        feature2Description={
          <Fragment>
            <span className="home-text131">
              Seamless integration with popular tools and platforms
            </span>
          </Fragment>
        }
        feature3Description={
          <Fragment>
            <span className="home-text132">
              Dedicated support team available round the clock
            </span>
          </Fragment>
        }
      ></Features25>
      <Pricing14
        plan1={
          <Fragment>
            <span className="home-text133">Basic plan</span>
          </Fragment>
        }
        plan2={
          <Fragment>
            <span className="home-text134">Business plan</span>
          </Fragment>
        }
        plan3={
          <Fragment>
            <span className="home-text135">Enterprise plan</span>
          </Fragment>
        }
        plan11={
          <Fragment>
            <span className="home-text136">Basic plan</span>
          </Fragment>
        }
        plan21={
          <Fragment>
            <span className="home-text137">Business plan</span>
          </Fragment>
        }
        plan31={
          <Fragment>
            <span className="home-text138">Enterprise plan</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text139">
              Choose the perfect plan for you
            </span>
          </Fragment>
        }
        content2={
          <Fragment>
            <span className="home-text140">
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text143">Pricing plan</span>
          </Fragment>
        }
        plan1Price={
          <Fragment>
            <span className="home-text144">$9.99/month</span>
          </Fragment>
        }
        plan2Price={
          <Fragment>
            <span className="home-text145">$19.99/month</span>
          </Fragment>
        }
        plan3Price={
          <Fragment>
            <span className="home-text146">$29.99/month</span>
          </Fragment>
        }
        plan1Action={
          <Fragment>
            <span className="home-text147">Sign up now</span>
          </Fragment>
        }
        plan1Price1={
          <Fragment>
            <span className="home-text148">$200/yr</span>
          </Fragment>
        }
        plan1Yearly={
          <Fragment>
            <span className="home-text149">or $200 yearly</span>
          </Fragment>
        }
        plan2Action={
          <Fragment>
            <span className="home-text150">Get started</span>
          </Fragment>
        }
        plan2Price1={
          <Fragment>
            <span className="home-text151">$299/yr</span>
          </Fragment>
        }
        plan2Yearly={
          <Fragment>
            <span className="home-text152">or $299 yearly</span>
          </Fragment>
        }
        plan3Action={
          <Fragment>
            <span className="home-text153">Join us</span>
          </Fragment>
        }
        plan3Price1={
          <Fragment>
            <span className="home-text154">$499/yr</span>
          </Fragment>
        }
        plan3Yearly={
          <Fragment>
            <span className="home-text155">or $499 yearly</span>
          </Fragment>
        }
        plan1Action1={
          <Fragment>
            <span className="home-text156">Get started</span>
          </Fragment>
        }
        plan1Yearly1={
          <Fragment>
            <span className="home-text157">or $20 monthly</span>
          </Fragment>
        }
        plan2Action1={
          <Fragment>
            <span className="home-text158">Get started</span>
          </Fragment>
        }
        plan2Yearly1={
          <Fragment>
            <span className="home-text159">or $29 monthly</span>
          </Fragment>
        }
        plan3Action1={
          <Fragment>
            <span className="home-text160">Get started</span>
          </Fragment>
        }
        plan3Yearly1={
          <Fragment>
            <span className="home-text161">or $49 monthly</span>
          </Fragment>
        }
        plan1Feature1={
          <Fragment>
            <span className="home-text162">Feature 1 included</span>
          </Fragment>
        }
        plan1Feature2={
          <Fragment>
            <span className="home-text163">Feature 2 included</span>
          </Fragment>
        }
        plan1Feature3={
          <Fragment>
            <span className="home-text164">Feature text goes here</span>
          </Fragment>
        }
        plan2Feature1={
          <Fragment>
            <span className="home-text165">Feature 1 included</span>
          </Fragment>
        }
        plan2Feature2={
          <Fragment>
            <span className="home-text166">Feature 2 included</span>
          </Fragment>
        }
        plan2Feature3={
          <Fragment>
            <span className="home-text167">Feature text goes here</span>
          </Fragment>
        }
        plan2Feature4={
          <Fragment>
            <span className="home-text168">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature1={
          <Fragment>
            <span className="home-text169">Feature 1 included</span>
          </Fragment>
        }
        plan3Feature2={
          <Fragment>
            <span className="home-text170">Feature 2 included</span>
          </Fragment>
        }
        plan3Feature3={
          <Fragment>
            <span className="home-text171">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature4={
          <Fragment>
            <span className="home-text172">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature5={
          <Fragment>
            <span className="home-text173">Feature text goes here</span>
          </Fragment>
        }
        plan1Feature11={
          <Fragment>
            <span className="home-text174">Feature text goes here</span>
          </Fragment>
        }
        plan1Feature21={
          <Fragment>
            <span className="home-text175">Feature text goes here</span>
          </Fragment>
        }
        plan1Feature31={
          <Fragment>
            <span className="home-text176">Feature text goes here</span>
          </Fragment>
        }
        plan2Feature11={
          <Fragment>
            <span className="home-text177">Feature text goes here</span>
          </Fragment>
        }
        plan2Feature21={
          <Fragment>
            <span className="home-text178">Feature text goes here</span>
          </Fragment>
        }
        plan2Feature31={
          <Fragment>
            <span className="home-text179">Feature text goes here</span>
          </Fragment>
        }
        plan2Feature41={
          <Fragment>
            <span className="home-text180">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature11={
          <Fragment>
            <span className="home-text181">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature21={
          <Fragment>
            <span className="home-text182">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature31={
          <Fragment>
            <span className="home-text183">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature41={
          <Fragment>
            <span className="home-text184">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature51={
          <Fragment>
            <span className="home-text185">Feature text goes here</span>
          </Fragment>
        }
      ></Pricing14>
      <Testimonial17
        review1={
          <Fragment>
            <span className="home-text186">
              Great experience with the service provided. Will definitely
              recommend to others.
            </span>
          </Fragment>
        }
        review2={
          <Fragment>
            <span className="home-text187">
              The team was very professional and delivered results beyond our
              expectations.
            </span>
          </Fragment>
        }
        review3={
          <Fragment>
            <span className="home-text188">
              Impressed with the quality of work and timely delivery. Looking
              forward to future collaborations.
            </span>
          </Fragment>
        }
        review4={
          <Fragment>
            <span className="home-text189">
              Exceptional service that helped us achieve our goals effectively.
              Thank you!
            </span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text190">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text191">What Our Customers Say</span>
          </Fragment>
        }
        author1Name={
          <Fragment>
            <span className="home-text192">John Doe</span>
          </Fragment>
        }
        author2Name={
          <Fragment>
            <span className="home-text193">Jane Smith</span>
          </Fragment>
        }
        author3Name={
          <Fragment>
            <span className="home-text194">David Johnson</span>
          </Fragment>
        }
        author4Name={
          <Fragment>
            <span className="home-text195">Emily Brown</span>
          </Fragment>
        }
        author1Position={
          <Fragment>
            <span className="home-text196">CEO, Company ABC</span>
          </Fragment>
        }
        author2Position={
          <Fragment>
            <span className="home-text197">Marketing Manager, Company XYZ</span>
          </Fragment>
        }
        author3Position={
          <Fragment>
            <span className="home-text198">CTO, Tech Solutions Inc.</span>
          </Fragment>
        }
        author4Position={
          <Fragment>
            <span className="home-text199">Founder, Startup Co.</span>
          </Fragment>
        }
      ></Testimonial17>
      <Contact10
        content1={
          <Fragment>
            <span className="home-text200">
              Have any questions or inquiries? Feel free to reach out to us.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text201">Contact Us</span>
          </Fragment>
        }
        location1={
          <Fragment>
            <span className="home-text202">Headquarters</span>
          </Fragment>
        }
        location2={
          <Fragment>
            <span className="home-text203">Support Center</span>
          </Fragment>
        }
        location1Description={
          <Fragment>
            <span className="home-text204">123 Main Street, City, Country</span>
          </Fragment>
        }
        location2Description={
          <Fragment>
            <span className="home-text205">
              456 Support Street, City, Country
            </span>
          </Fragment>
        }
      ></Contact10>
      <Footer4
        link1={
          <Fragment>
            <span className="home-text206">Home</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="home-text207">About Us</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="home-text208">Services</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="home-text209">Contact Us</span>
          </Fragment>
        }
        link5={
          <Fragment>
            <span className="home-text210">FAQ</span>
          </Fragment>
        }
        termsLink={
          <Fragment>
            <span className="home-text211">Terms and Conditions</span>
          </Fragment>
        }
        cookiesLink={
          <Fragment>
            <span className="home-text212">Cookies Policy</span>
          </Fragment>
        }
        privacyLink={
          <Fragment>
            <span className="home-text213">Privacy Policy</span>
          </Fragment>
        }
      ></Footer4>
    </div>
  )
}

export default Home
