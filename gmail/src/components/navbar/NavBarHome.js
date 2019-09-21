import React from 'react'

var sbarStyle = {
    borderRadius:10,
    height:50,
    width:600,
    flex:3,
    marginRight:30,
    marginLeft:30,
    borderWidth:0,
    background:'#EEEEEE',
}

const SearchBar = () => {
    return(
            <div style={sbarStyle}>
                <input style={{...sbarStyle,width:'100%'}} type="text" placeholder="Search..." />
                <a href="#" />
            </div>
    )
}

const Logo = () => {
    return(
        <button className="navbar-toggler" 
                            type="button" 
                            data-toggle="collapse" 
                            data-target="#navbarToggleExternalContent" 
                            aria-controls="navbarToggleExternalContent" 
                            aria-expanded="false" 
                            aria-label="Toggle navigation"
                            style={{width:100,flex:1}}>
                        
            <img src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x.png" width="100px"/>   
        </button>
    )
}

const RightNavBar = () => {
    return (
        <div className="d-flex p-2 justify-content-end" style={{flex:2}}>
            <div className="p-2">Help</div>
            <div className="p-2">Apps</div>
            <div className="p-2">Profile</div>
        </div>
    )
}

export default class NavBar extends React.Component {
    render(){

        return(
            <div style={{padding:10}}>
                <div className="d-flex" >
                    <Logo />
                    <SearchBar />
                    <RightNavBar />
                </div>
            </div>
            
        )
    }
}