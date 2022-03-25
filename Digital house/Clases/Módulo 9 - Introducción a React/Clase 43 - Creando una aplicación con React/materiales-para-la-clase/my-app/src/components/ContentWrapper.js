import TopBar from './TopBar';
import ContentRowTop from './ContentRowTop';
import Footer from './Footer';

function ContentWrapper () {
    return(
        // <!-- Content Wrapper -->
		<div id="content-wrapper" className="d-flex flex-column">

			{/* <!-- Main Content --> */}
			<div id="content">

            {/* ACA VA EL TOP BAR y ROW*/}
            <TopBar/>
            <ContentRowTop/>

            </div>
			{/* <!-- End of MainContent --> */}

            {/* FOOTER */}
            <Footer/>

        </div>
		// <!-- End of Content Wrapper -->
    )
}

export default ContentWrapper