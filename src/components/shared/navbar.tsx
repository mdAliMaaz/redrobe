import Logo from '../logo'
import Button from './button'
import Container from './container'

const Navbar = () => {
	return (
		<Container size="sm">
			<nav className="w-full flex items-center justify-between">
				<Logo />
				<a href="#join">
					<Button text="Join us" type="button" rounded />
				</a>
			</nav>
		</Container>
	)
}

export default Navbar
