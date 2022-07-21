import LoginForm from "../forms/LoginForm"
import RegisterForm from "../forms/RegisterForm"
import { useState } from "react"
import Header from "../../cointracker/components/Header"
import ParticlesComponent from "../Particles"

const Landing = (props) => {
    const [hasAccount, setHasAccount] = useState(false)
    const { setUser } = props

    return (
        <div>
            <Header />

            {hasAccount === false ? (
                <div>
                    <RegisterForm setUser={setUser} />
                    <p class="alert alert-danger d-flex align-items-center" role="alert">Already have an account?<span onClick={() => setHasAccount(true)} class="link-primary">Login</span> </p>
                </div>
            ) : <LoginForm setUser={setUser} />}
            <ParticlesComponent />

        </div>
    )
}

export default Landing

{/* <div class="alert alert-danger d-flex align-items-center" role="alert">
  <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Danger:"><use xlink:href="#exclamation-triangle-fill"/></svg>
  <div>
    An example danger alert with an icon
  </div> */}