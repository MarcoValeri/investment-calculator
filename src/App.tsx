import Header from "./components/header/Header";
import Result from "./components/result/Result";
import UserInput from "./components/userInput/UserInput";

const App = () => {

    return (
        <>
            <Header title="Investment Calculator" />
            <UserInput />
            <Result
                getInitialInvestment={10000}
                getAnnualInvestment={1000}
                getExpectedReturn={34000}
                getDuration={5}
            />
        </>
    )
}

export default App;