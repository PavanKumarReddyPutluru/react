
import './App.css';
import logo_ippopay from'./Images/logo_ippopay.svg';
import image1 from './Images/image1.svg';
import image2 from './Images/image2.jpeg';
import new_payment_gateway from './Images/new_payment_gateway.svg';
import new_payouts from './Images/new_payouts.svg';
import audio_notify from './Images/audio_notify.svg';
import epos_img from './Images/epos_img.svg';
import ledger_img from './Images/ledger_img.svg';
import new_multiplelang from './Images/new_multiplelang.svg';
import reports_img from './Images/reports_img.svg';
import loan_xs from './Images/loan_xs.svg';
import insurance from './Images/insurance.svg';
import wealth from './Images/wealth.svg';
import made_chennai from './Images/made_chennai.svg';
import sectigo_logo from './Images/sectigo_logo.svg';
import pci_icon from './Images/pci_icon.svg';
import fb from './Images/fb.jpg';
import linkedIn from './Images/linkedIn.jpg';
import twitter from './Images/twitter.jpg';
import insta from './Images/insta.jpg';
import mobiless from './Images/mobiless.png';
import clients from './Images/clients.png';
import ImageChangeOnMouse from './imageHover';
import ImageChangeOnMouse1 from './imageHover1';
import styled from 'styled-components';
import { grey } from '@material-ui/core/colors';



const Style1=styled.button`
background-color : white;
color : black;
font-family: Verdana, Geneva, Tahoma, sans-serif;
border-radius: 10px;
outline: 0;
border: 0;
margin: 30px;
padding: 10px;
height: 50px;
width: 130px;
cursor: pointer;
&:hover{
  background-color: rgb(237, 244, 246);
  color:orange;
}
`
const Login=styled.button`
background-color : white;
color : black;
outline: 0;
border: 0;
margin-left:130px;
margin-right: 20px;
padding: 10px;
height: 50px;
width: 50px;
cursor: pointer;
&:hover{
  background-color: rgb(237, 244, 246);
  color:darkblue;
}
`
const SignIn=styled.button`
background-color : darkblue;
color : white;
outline: 0;
border: 0;
margin: 0px;
padding: 10px;
height: 60px;
cursor: pointer;
&:hover{
  background-color: white;
  color:darkblue;
}
`

const Style2=styled.button`
background-color : white;
color : black;
font-family: Verdana, Geneva, Tahoma, sans-serif;
outline: 0;
border: 0;
margin: 30px;
padding: 10px;
height: 195px;
width: 240px;
font-size: 25px;
cursor: pointer;
&:hover{
  background-color: rgb(237, 244, 246);
  color:darkblue;
}
`

const Style3=styled.button`
background-color : white;
color : black;
font-family: Verdana, Geneva, Tahoma, sans-serif;
outline: 0;
border: 0;
height: 150px;
width: 180px;
font-size: 20px;
cursor: pointer;
&:hover{
  background-color: rgb(237, 244, 246);
  color:gray;
}
`
const Style4=styled.button`
background-color : white;
color : black;
font-family: Verdana, Geneva, Tahoma, sans-serif;
outline: 0;
border: 0;
height: 215px;
width: 250px;
font-size: 25px;
cursor: pointer;
font-weight: 30px;
&:hover{
  background-color: lavenderblush;
  color:orangered;
}
`
const Style5=styled.button`
background-color : white;
color : black;
font-family: Verdana, Geneva, Tahoma, sans-serif;
outline: 0;
border: 0;
height: 150px;
width: 180px;
font-size: 20px;
cursor: pointer;
&:hover{
  background-color: lavenderblush;
  color: gray
}
`
const Style6=styled.button`
background-color : white;
font-family: 'Courier New', Courier, monospace;
color : black;
outline: 0;
border: 0;
font-size: 14px;
cursor: pointer;
&:hover{
  background-color: rgb(237, 244, 246);
  color:blue;
}
`




function App() {

  return (
    
    <div className='App'>
      <img src={logo_ippopay} alt="logo_ippopay" />
      <Style1 > Payment Gateway</Style1>
      <Style1 >Payouts</Style1>
      <Style1 >Neo Banking API</Style1>
      <Style1 >Pricing</Style1>
      <Login >Login</Login>
      <SignIn >Sign up</SignIn>

    <div className='column'>
    <img src={image1} alt="image1"  width={500} height={400} className="image1" />
      <div className='right-panel'>
      <br/><br/><br/>
        <div className='a1'>Receive payments the Easy Way</div>
        <br/><br/>
      <div className='a2'>ALL- IN - ONE</div>
      <div className='column'>
        <div className='a2' >Payments App </div> <div className='a3'> Power </div></div>
         <div className='a4'>your Store like never before !</div>
      </div>
      </div>
      <br/>
      <div className='a5'>
        <button ><img src={image2} alt='image2' height={60}></img> </button>
      </div>
      <br/>
      <div className='a5'>
        <text>Accepting Payments From Any UPI App Made Easy!</text></div> 
        <br/>  <br/> <br/> 
      <div >
        <text className='a6'>Collections</text>
      </div>
      <br/> 
      <div >
        <text className='a7'>Collect Payments Instantly</text>
      </div>

      <div className='column'>
      <div className='left-panel'>
         <Style2>
           QR Code <Style3>Share QR and collect payments across any UPI App</Style3></Style2>
           <Style2>
           Payment Link <Style3>Payment Links and collect your Payments</Style3></Style2>
           <Style2>
           Multiple Branch <Style3>Manage and view Payments of all your business Outlets</Style3></Style2>
      </div>

      <div className='middle-panel'>
      <Style2>
      Cash Record<Style3>Record Offline Payments by Cash</Style3></Style2>
           <Style2>
           Tap To Phone<Style3>Accept Contactless Payments from NFC enabled Cards/SmartPhones</Style3></Style2>
      </div>

      <div className='last-panel'>
      <br/>
       {/* <img  src={image4} alt='image4' height={200} ></img>
       <img  src={image3} alt='image3' height={200}></img>
       <img  src={image5} alt='image5' height={200}></img>
       <img  src={image7} alt='image7' height={200}
       onMouseOver={e => (e.currentTarget.src = image6,image5,image4,image3) }
       onMouseOut={e => (e.currentTarget.src = image7)} ></img> */}

       <ImageChangeOnMouse />
      </div>
      </div>

      <text className='a8'>Neo-Banking Solutions</text>
        <br/><br/>
        <text className='a9'>Exclusive Digital Banking Services</text>

      <div className='column'>
      <div className='left-panel1'>
      <ImageChangeOnMouse1/>
      </div>
    

      <div className='middle-panel1'>
       <br/><br/>
      <Style4>Business Account<Style5> Receive Payments of any kind to Merchant Virtual Account</Style5></Style4>
      <Style4>PayOuts <Style5>Clear Bulk/Individual payments from your dashboard</Style5></Style4>
      <Style4>Salary Disbursements<Style5> Plan Payroll and disburse wage payments</Style5></Style4>
      </div>

      <div className='last-panel1'>
        <br/><br/>
      <Style4> Debit Card <Style5>Make Payments at POS terminals or Withdraw Cash from ATM’s</Style5></Style4>
      <Style4> Vendor Payments <Style5>Pay, Track expenses and Manage vendor payments the Easy way.</Style5></Style4>
      </div>
      </div>
      
      <br/><br/><br/><br/>
      <div className='a10'>
      Our Other Payment Solution
      </div>
      <br/><br/>
      
      <div className='column'>
      <div className='left-panel2'>
      <img src={new_payment_gateway} alt="new_payment_gateway" height={400} width={400}
       className="hover-zoom"/>
      <br/>
      <div>
      <text className='a11'>Payment Gateway</text></div><br/>
      <text className='a12'>IppoPay provides e-Commerce solution for </text><br/>
      <text className='a12'>your online store.With just a few easy steps of </text><br/>
      <text className='a12'>integration,get your business onboard at </text><br/>
      <text className='a12'>receiving payments online from a super</text><br/>
      <text className='a12'> customized checkour page.</text>
      </div>

      <div className='middle-panel2'>
      <img src={new_payouts} alt="new_payouts" height={400} width={400} className="hover-zoom" /><br/>
      <div>
        
      <text className='a11'>
        Neo Banking Solution
      </text> 
      </div><br/> 
      <text className='a12'>Unlearn Traditional Banking and Integrate our</text><br/>
      <text className='a12'>tech-API's for a faster and risk-freedigital</text><br/>
      <text className='a12'>banking experience.Ippostacks for all kind of</text><br/>
      <text className='a12'>banking needs of your customer.</text><br/>
      </div>
      </div><br/><br/><br/><br/><br/><br/>
      <div className='a13'>
      Salient Features on Merchant App
      </div>

      <div className='column'>
      <div className='left-panel3'>
      <button className='a14' ><img src={audio_notify} alt='audio_notify' width={280} height={300} ></img>
      <text className='a11'>Audio Notification</text><br/><br/>
        <text className='a15'>An audio notification whenever
        you receive payments in the the 
        language of your choice right on 
        your app.</text><br/><br/><br/><br/> </button></div>

      <div className='middle-panel31'>
        <div>
      <button className='a14' ><img src={ledger_img} alt='ledger_img' width={280} height={300} ></img>
      <br/>
      <text className='a17'>Ledger </text><br/><br/>
        <text className='a15'>The all Powerful Digital Ledger makes note of all the offline
         and online transactions and also provides details of amount paid and outstanding amount
          from a customer.</text><br/><br/><br/><br/> </button>
        <br/>
        </div>
        <div className='middle-panel32'></div>
        <div>
        <button className='a14' ><img src={new_multiplelang} alt='new_multiplelang'width={280} height={300}  ></img>
      <text className='a18'>Multiple Language </text><br/><br/>
        <text className='a15'>Select your language of choice from 11 options of
         major regional languages in India for your App.</text><br/><br/><br/><br/> </button>
         </div>
         </div>


      <div className='last-panel3'>
      <button className='a14' ><img src={epos_img} alt='epos_img' width={280} height={300} ></img>
      <text className='a17'>ePOS</text><br/><br/>
        <text className='a15'>The Electronic Point of Sale in your App, allows you to load products
         and select the products to buy and generate a bill and collect payment against an order.</text><br/><br/><br/><br/> </button>

        <div className='last-panel3'></div>
        <button className='a14' ><img src={reports_img} alt='reports_img' width={280} height={300}  ></img>
      <text className='a19'>Reports </text><br/><br/>
        <text className='a15'>A downloadable report Generation and Summary for a look at 
        detailed inflow and outflow of funds.</text><br/><br/><br/><br/> </button>
      </div>
      </div>

      <br/><br/><br/><br/><br/><br/>
      <div className='a20'>
      Benefits
      </div><br/><br/><br/>

      <div className='column'>
      <div className='left-panel4'>
      
        <text className='a21'>Loan</text><br/><br/>
        <text className='a22'>  * 2X efficient than Conventional Bank Approved Loans.</text><br/>
        <text className='a22'>  * Quick Processing Time.</text><br/>
        <text className='a22'>  * Zero Collaterals and Low Risk.</text><br/><br/><br/><br/>
        <img src={loan_xs} alt="loan_xs" className='a23'></img><br/></div>

      <div className='middle-panel4'>
        <div>
     
        <text className='a21'>Insurance</text><br/><br/>
        <text className='a22'>  * A Data and Tech Driven Digital Insurance Claims at Record Speed.</text><br/>
        <text className='a22'>  * Avail all types Motor and Non-Motor Insurance.</text><br/>
        <text className='a22'>  * Claims at Record Speed.</text><br/><br/>
        <img src={insurance} alt="insurance" className='a23'></img><br/><br/>
        </div>
         </div>

      <div className='last-panel4'>
     
      <text className='a21'>Wealth Management</text><br/><br/>
        <text className='a22'>  * Perfect for Mindful Long Term Returns.</text><br/>
        <text className='a22'>  * Indulge also in Over night/1 day investments.</text><br/>
        <text className='a22'>  * Choose from a Range of Plans.</text><br/><br/>
        <img src={wealth} alt="wealth" className='a23'></img><br/><br/>
      </div>
      </div><br/><br/><br/>
      <img src={mobiless} alt="mobiless" height={500} width={1000}  className='a25'/><br/><br/><br/>
      <div className='a20'>Out Clients</div>
      <img src={clients} alt='clients' className='a25'  height={200} width={1000}/>
      <br/><br/><br/><br/>
      <div className='column1'>
      <div className='first-panel'>
      <img src={logo_ippopay} alt="logo_ippopay" /><br/><br/>
      <text>IppoPay provides Payment Infrastructure to small businesses to collect and distribute
       payments. We help businesses, freelancers, homeprenures, and people who do business in Tier
        2 and 3 cities, and rural areas. IppoPay helps retail stores to accept all QR payment apps
         such as PayTm, PhonePe, Google Pay, BHIM and 150+ other UPI apps.</text><br/><br/>
         <img src={made_chennai} alt="made_chennai"></img><br/><br/>
         <img src={sectigo_logo} alt="sectigo_logo" height={50} width={100}></img>
         <img src={pci_icon} alt="pci_icon" height={50} width={100}></img>
      </div>

      <div className='second-panel'>
        
        <text className='a24'>Collections</text>
        <br/><br/>
        <Style6 >Pricing</Style6>
        <br/><br/>
        <Style6 >Payment Links</Style6>
        <br/><br/>
        <Style6 >Invoice</Style6>
        <br/><br/>
        <Style6 >Payment Pages</Style6>
        <br/><br/><br/>
        <text className='a24'>Support</text>
        <br/><br/>
        <Style6 >Contact Us</Style6>
         </div>

      <div className='third-panel'>
      <text className='a24'>Banking As A Service</text>
        <br/><br/>
        <Style6 >Neo Banking API</Style6>
        <br/><br/><br/>
        <text className='a24'>More</text>
        <br/><br/>
        <Style6 >UPI </Style6>
        <br/><br/>
        <Style6>Collections </Style6>
      
      </div>

      <div className='fourth-panel'>
      <text className='a24'>Make Payouts</text>
        <br/><br/>
        <Style6 >Payouts</Style6>
        <br/><br/><br/>
        <text className='a24'>Company</text>
        <br/><br/>
        <Style6 >About Us </Style6>
        <br/><br/>
        <Style6>Media Room </Style6>
         </div>

         <div className='fifth-panel'>
         <text className='a24'>Developers </text>
        <br/><br/>
        <Style6 >Documentation</Style6>
        <br/><br/><br/>
        <text className='a24'>Resources</text>
        <br/><br/>
        <Style6 >Blog </Style6>
        <br/><br/>
        <Style6>Terms & Condition</Style6>
        <br/><br/>
        <Style6> Privacy Policy </Style6>
         </div>
         </div><br/><br/>
         <hr style={{background:grey}}></hr><br/>
        <div className='column1'> <text className='panel1'>© IppoPay Technologies Pvt Ltd 2023 . All Rights Reserved.</text>
        <div className='column1'><text className='panel2'>Find us online  :  </text>
        <img src={fb} alt="fb" height={50} width={50} className='panel3'></img>
        <img src={linkedIn} alt="linkedIn" height={50} width={50} className='panel4'></img>
        <img src={twitter} alt="twitter" height={50} width={50} className='panel5'></img>
        <img src={insta} alt="insta" height={50} width={50} className='panel6'></img> </div>
        </div>

    </div> 
  );
}

export default App;

// function changeImage(x,image){
//   if(x==1)
// }
