import { Route, Routes } from "react-router-dom";
import AuthenticationContainer from "./pages/Authentication/Authentication.Container";

const App = () => (
    <Routes>
        <Route path="/" element={<AuthenticationContainer />} />
    </Routes>
);

export default App;