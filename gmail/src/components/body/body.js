import React from 'react'
import styleBody from './body.module.css'
import Mail from './mail'

var composeStyle = {
    height:40,
    width:150,
    borderRadius:40,
    padding:5,
    margin:10,
}

var roundBtn = {width:20,
                height:20,
                borderRadius:20,
                background:'gray'}

var roundBtn2 = {width:40,
                height:40,
                borderRadius:20,
                background:'lightgray',
                padding:10,
                margin:20}

const Compose = () => {
    return(
        <div className={`shadow ${styleBody.compose}`} style={composeStyle}>
            Compose
        </div>
    )
}

const InboxList = () => {
    var list = ['Inbox','Starred','Snoozed','Important','Sent','Starred','Drafts','Caregories' ]
    return(
        <div className={styleBody.inboxContainer} style={{textAlign:'left'}}>
            {list.map((item,index)=>{
                return(<div className={styleBody.inboxItems} key={index}>{item}</div>)
            })}
        </div>
    )
}

const ChatBox = () => {
    var chatBox = [{name:'Sabio Alexander',
                lastMessg:'Yes that was great'},
                {name:'Mary Phillip',
                lastMessg:'Yes that was great'},
                {name:'Atin Angrish',
                lastMessg:'Yes that was great'},
                {name:'Anoop Babu',
                lastMessg:'Yes that was great'},
                {name:'Paulo Rodrigues',
                lastMessg:'Yes that was great'},
                {name:'Phillip Tom',
                lastMessg:'Yes that was great'},
                {name:'Margaret Benedict',
                lastMessg:'Yes that was great'}]

    return(
    <div>
        <div className="d-flex justify-content-around">
            
            <div className="row" style={{textAlign:'left'}}> 
                <div  style={roundBtn}></div>
                Albert
            </div>
            <div>+</div>
        </div>
        {chatBox.map(item=>{
            return(<div style={{textAlign:'left',paddingLeft:20,height:40}}>{item.name}</div>)
        })}
    </div>
    )
}

export default class Body extends React.Component{
    constructor(props){
        super(props)
        this.state ={

            short:[1,2,3,4,5]
        }
    }
    render(){
        return(
            <div className={`d-flex ${styleBody.container}`}>
                {/* Left Sidebar */}
                <div style={{flex:3}}>
                    <Compose />
                    <InboxList />
                    <ChatBox />
                </div>

                {/* Mail */}
                <div style={{flex:12}}>
                    <Mail/>
                </div>

                {/* Rightside App shortcut */}
                <div style={{flex:1}}>
                    <div className="d-flex flex-column">
                    {this.state.short.map((item,index)=>{
                        return(<div className="m-auto" style={roundBtn2} key={index}>{item}</div>)
                    })}
                    </div>
                </div>
            </div>
        )
    }
}