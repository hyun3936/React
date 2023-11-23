import LogoImg from "./LogoImg";
import LogoP from "./LogoP";
import LogoA from "./LogoA";

function LogoH() {
    return (
        <header className="App-header">
            <LogoImg />
            <LogoP msg={"부산대학교"}/>
            <LogoP msg={"k=digital 5기"}/>
            <LogoP msg={"윤석현"}/>
            <LogoA />
        </header>
    )
}
export default LogoH;