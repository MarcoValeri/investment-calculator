import investmentIcon from '../../assets/investment-calculator-logo.png';

const Header = ({title}: {title: string}) => {
    return (
        <header id="header">
            <img src={investmentIcon} alt="Investment Calculator Icon" />
            <h1>{title}</h1>
        </header>
    )
}

export default Header;