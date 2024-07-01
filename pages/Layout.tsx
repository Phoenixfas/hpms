import { store, persistor } from '../redux/store'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
// import Footer from "../Footer";
// import NavBar from "../Navbar";

export default function layout({ children }: { children: React.ReactNode }) {
    return (
      <div>
        {/* <NavBar /> */}
        {children}
        {/* <Footer /> */}
      </div>
    );
  }
  