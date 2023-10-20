import "@/styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../components/global/navbar/Navbar.scss";
import { Provider } from "react-redux";
import store from "@/redux/app/store";
export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
