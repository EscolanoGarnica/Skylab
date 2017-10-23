import React,{Component} from 'react'
import HomePage from './HomePage'
import AboutPage from './AboutPage'
import ContactPage from './ContactPage'

class Page extends Component {

    render() {
        switch (this.props.currentPage) {
            case 'home':
                return <HomePage/>
            case 'about':
                return <AboutPage/>
            case 'contact':
                return <ContactPage/>
        }
    }
}

export default Page;