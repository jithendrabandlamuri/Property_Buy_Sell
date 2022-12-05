import React, { useEffect } from 'react'
import { CheckSquareFill, Check2 } from 'react-bootstrap-icons';
import Accordion from 'react-bootstrap/Accordion';
import Navbaruser from "./Narbaruser"
import { useNavigate } from 'react-router-dom'

const basicPrice = 1500;
const standardPrice = 3000;
const premiumPrice = 5000

function Subscription({ setIsAuth, isAuth }) {
    let navigate = useNavigate()

    useEffect(() => {
        if (!isAuth) {
            navigate('/login')
        }
    }, [])

    function handleSubmit(price) {
        if (price) {
            var options = {
                key: "rzp_test_eMoNKm1nGhee9f",
                key_secret: "7CcklJBXFXeib85KnDzcVffL",
                amount: price * 100,
                currency: "INR",
                name: "STARTUP_PROJECTS",
                description: "for testing purpose",
                handler: function (response) {
                    alert(response.razorpay_payment_id);
                },
                prefill: {
                    name: "Velmurugan",
                    email: "mvel1620r@gmail.com",
                    contact: "7904425033"
                },
                notes: {
                    address: "Razorpay Corporate office"
                },
                theme: {
                    color: "#3399cc"
                }
            };
            var pay = new window.Razorpay(options);
            pay.open();
        }
    }


    return (
        <>
            <Navbaruser setIsAuth={setIsAuth} isAuth={isAuth} />
            <div className="back_image">
                <div className='container'>
                    <br /><br />
                    <div >Title</div><br />
                    <h5 >Pay Zero Commission &amp; Call Owners Directly</h5>
                    <br />
                    <div className="row">
                        <div className="col-sm-4">
                            <Check2 />
                            <b>
                                <span > Save Money:</span>
                                <span >Get Direct Access to Owner Properties</span>
                            </b>
                        </div>
                        <div className="col-sm-4 ">
                            <Check2 />
                            <b>
                                <span > Save Effort:</span>
                                <span >Help from Relationship Manager</span>
                            </b>
                        </div>
                        <div className="col-sm-4">
                            <Check2 />
                            <b>
                                <span >  Save Time:</span>
                                <span >View Property over WhatsApp video call</span>
                            </b>
                        </div>
                    </div>
                    <br /><br />
                    <div className='row row-cols-1 row-cols-md-3'>
                        <div className='col'>
                            <div className='card text-center'>
                                <div className='card-header'>
                                    <h4 className='fw-normal'>
                                        Basic
                                    </h4>
                                </div>
                                <div className='card-body'>
                                    <h1 className='card-title'>&#8377;1500<small className='text-muted fw-light'>/mo</small></h1>
                                    <ul className="list-unstyled mt-3 mb-4">
                                        <li >Validity (Days)<span >: <b>90</b></span></li>
                                        <li >LIVE Video Tour<span>: <b> Max 1</b></span></li>
                                        <li >No. of Owners you can contact<span>: <b> 20</b></span></li>
                                        <li>Assistance from Relationship Manager : <CheckSquareFill /></li>
                                    </ul>
                                    <button type="button" className="btn btn-lg w-100 btn-outline-success" onClick={() => { handleSubmit(basicPrice) }}>Buy now</button>
                                </div>

                            </div>
                        </div>
                        <div className='col'>
                            <div className='card text-center'>
                                <div className='card-header'>
                                    <h4 className='fw-normal'>
                                        Standard
                                    </h4>
                                </div>
                                <div className='card-body'>
                                    <h1 className='card-title'>&#8377;3000<small className='text-muted fw-light'>/mo</small></h1>
                                    <ul className="list-unstyled mt-3 mb-4">
                                        <li >Validity (Days)<span >: <b>120</b></span></li>
                                        <li >LIVE Video Tour<span>: <b> Max 3</b></span></li>
                                        <li >No. of Owners you can contact<span>: <b> 40</b></span></li>
                                        <li>Assistance from Relationship Manager : <CheckSquareFill /></li>
                                    </ul>
                                    <button type="button" className="btn btn-lg w-100 btn-outline-success" onClick={() => { handleSubmit(standardPrice) }}>Buy now</button>
                                </div>

                            </div>

                        </div>
                        <div className='col'>
                            <div className='card text-center'>
                                <div className='card-header'>
                                    <h4 className='fw-normal'>
                                        Premium
                                    </h4>
                                </div>
                                <div className='card-body'>
                                    <h1 className='card-title'>&#8377;5000<small className='text-muted fw-light'>/mo</small></h1>
                                    <ul className="list-unstyled mt-3 mb-4">
                                        <li >Validity (Days)<span >: <b>265</b></span></li>
                                        <li >LIVE Video Tour<span>: <b> Max 5</b></span></li>
                                        <li >No. of Owners you can contact<span>: <b>80</b></span></li>
                                        <li>Assistance from Relationship Manager : <CheckSquareFill /></li>
                                    </ul>
                                    <button type="button" className="btn btn-lg w-100 btn-outline-success" onClick={() => { handleSubmit(premiumPrice) }}>Buy now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br /><br /><br />
                    <h3 style={{ textAlign: "left" }}>Frequently Asked Questions</h3><br />
                    <Accordion style={{ textAlign: "left" }}>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>What is MB Prime?</Accordion.Header>
                            <Accordion.Body>
                                <p>MB Prime is a membership programme that gives you exclusive access to properties posted directly by Owners, so you can Save on Money.</p>
                                <span>Key benefits of this membership includes:</span>
                                <ul>
                                    <li>Priority access to properties posted by Owners</li>
                                    <li>View contact no. of upto 35 Owners</li>
                                    <li>Instant alerts for new matching properties</li>
                                    <li>On-call support for queries</li>
                                    <li>Assured cashback of upto Rs 4,000 on home loan</li>
                                    <li>Upto Rs 3,000 OFF on Packers & Movers</li>
                                    <li>Special discount deals from partner brands</li>
                                </ul>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>How to avail MB Prime benefits?</Accordion.Header>
                            <Accordion.Body>
                                <p>MB Prime makes your property search really easy, quick, and stress-free. Here's how you can avail all the benefits:</p>
                                <ul>
                                    <li>Step 1: Become an MB Prime member and tell us your requirements</li>
                                    <li>Step 2: Get Priority Access to properties posted directly by Owners</li>
                                    <li>Step 3: View contact no. of upto 35 Owners (or 15 if you are a Basic member)</li>
                                    <li>Step 4: Finalize the property you like & Save big on Brokerage</li>
                                    <li>Step 5: Save extra on Rent Agreement/Home Loan and Packers & Movers</li>
                                </ul>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header>How does the On-call Assistant help?</Accordion.Header>
                            <Accordion.Body>
                                <p>As an MB Prime member, you will have an On-call Assistant to address all your queries throughout the journey & ensure a smooth experience for you.</p>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3">
                            <Accordion.Header>What is the difference between Basic & Pro plans?</Accordion.Header>
                            <Accordion.Body>
                                <ul>
                                    <li>Basic members can view contact details of 15 Owners whereas this limit is 35 for Pro members</li>
                                    <li>Basic members do not enjoy any savings on Packers & Movers, whereas Pro members save upto Rs 3,000.</li>
                                    <li>MoneyBack plan offers all the benefits of Pro Plan along with 100% refund guarantee if you can't find the property of your choice</li>
                                </ul>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="4">
                            <Accordion.Header>Are there any other charges apart from MB Prime membership price?</Accordion.Header>
                            <Accordion.Body>
                                <p>No, These are all inclusive charges and there's no extra cost for availing any membership benefit. However, if you buy or rent a property through a Broker, you will still have to pay the brokerage</p>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                    <br /><br /><br /><br /><br /><br />
                </div>
            </div>
        </>
    )
}

export default Subscription
