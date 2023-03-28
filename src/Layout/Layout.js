
import Footer from "../Components/Footer";
import Header from "../Components/Header";

function Layout({children}) {
    return ( 
        <div>
            <Header />
           {
           children
           }
           <Footer />
        </div>
     );
}

export default Layout;