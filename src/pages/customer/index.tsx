import DefaultLayout from "../../layout/DefaultLayout"
import rights from './../../images/rights.jpg'
import pdf from './../../files/pdf.pdf'

const CustomerRights = () => {
    return (
        <DefaultLayout>
            <div className="page-header">
                <div className="container">
                    <h1 className="page-title">Cutomer Rights</h1>
                </div>
                <img src={rights} alt="" />
            </div>
            <div className="container">
                <br />
                <br />
                <h2>Consumer Guide</h2>
                <p style={{
                    padding: '32px 0 24px', fontSize: '16px', lineHeight: '32px'
                }}>
                     A Right Owned By The Consumer With Any Person Or Entity, Whether A Private Company Or A Government Institution, To Know His Rights. And Because In Jusoor The Focus Of Our Attention Is The Customer And His Satisfaction Stems From Within All Employees And Those In Charge Of Decision-Making In Jusoor Company, Clarifying All Methods And Transactions To The Customer In The Event Of His Dissatisfaction With The Service Or The Product. All Communication Channels Are Available With The Customer From Us Internally As We Say Jusoor Always Listening So We Are Ready To Contact Us . In The Event That The Client Is Dissatisfied With Any Process Or Procedure, He Has The Right To Contact The Financial Regulatory Authority. 
                     <br />
                     <br />
                     your satisfaction, We Always Work To Improve Our Procedures And process <br />
                     Note: <br />
                     <a href="https://fra.gov.eg" target="_blank"> The Financial Regulatory Authority </a>
                     <br />
                     Created This Guide To Provides Important Information To Insurance Policy Holders. <br />
                     You Can Read It Below Or 
                     <button style={{padding: 10, border: 'none', borderRadius: 10, background: "#31a8df", margin: "16px"}}>Download</button>
                     <br />
                     <embed id="pdf-embed" style={{maxWidth: "100%"}} src={pdf} width="900" height="900" type="application/pdf"></embed>
                </p>
            </div>
        </DefaultLayout>
    )
}

export default CustomerRights